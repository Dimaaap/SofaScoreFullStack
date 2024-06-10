import aiohttp
import asyncio
import json
import re
from collections import namedtuple

import requests
from typing import Mapping, Iterable, Union
from bs4 import element, BeautifulSoup

from .exceptions import TextPropertyNotSupportedError
from .data_storage import DataStorage

from django.conf import settings

data_storage = DataStorage()


class SoccerParser:
    __SOCCER_TOURNAMENTS_BASE_URL = "https://api.sofascore.app/api/v1/unique-tournament/"
    __TOURNAMENTS_COUNT = 23_000
    __JSON_FILE_INDENT = 2
    __FILE_NAME = "tournaments.json"

    def __init__(self):
        self.results = []

    async def __fetch(self, session: aiohttp.ClientSession, url: str, results: list):
        async with session.get(url) as response:
            text = await response.text()
            try:
                self.__analyze_json_data(text, results)
            except json.JSONDecodeError:
                pass

    def __analyze_json_data(self, text: str, results: list) -> None:
        json_data = json.loads(text)
        if not self.__check_if_error_in_response(json_data) and self.__check_if_category_is_football(json_data):
            results.append(json_data)

    def __check_if_error_in_response(self, json_data: Mapping[str, str]) -> bool:
        return "error" in json_data

    def format_urls_list(self) -> Iterable[str]:
        urls = [f"{self.__SOCCER_TOURNAMENTS_BASE_URL}{i}" for i in range(1, self.__TOURNAMENTS_COUNT)]
        return urls

    async def send_response_to_urls(self) -> None:
        urls = self.format_urls_list()
        async with aiohttp.ClientSession() as session:
            tasks = self.__create_tasks_pool(session, urls, self.results)
            await asyncio.gather(*tasks)
            self.write_json_into_file(self.results)

    def write_json_into_file(self, data):
        with open(self.__FILE_NAME, "w") as tournaments:
            json.dump(data, tournaments, indent=self.__JSON_FILE_INDENT)

    def __create_tasks_pool(self, session: aiohttp.ClientSession, urls: Iterable[str],
                            results: Iterable[Union[str, None]]) -> list[str]:
        tasks = []
        for url in urls:
            tasks.append(self.__fetch(session, url, results))
        return tasks

    def __check_if_category_is_football(self, json_data: Mapping[str, str]) -> bool:
        return json_data.get("uniqueTournament", {}).get("category", {}).get("sport", {}).get("name") == "Football"


class CountriesParser:
    __COUNTRIES_API_URL = "https://countryapi.io/api/all"
    __API_KEY = settings.GEO_DB_API_KEY
    __HEADERS = {"Authorization": f"Bearer {__API_KEY}"}
    __FILE_NAME = "countries.json"
    __JSON_INDENT = 2

    def __init__(self):
        self.__authenticate_in_api()
        self.result = requests.get(self.__COUNTRIES_API_URL, headers=self.__HEADERS)

    def __authenticate_in_api(self):
        requests.get(f"https://countryapi.io/api/all?apikey={self.__API_KEY}")

    def parse_countries(self):
        json_res = self.result.json()
        ans = []
        for data in json_res:
            country_title = json_res[data].get("name", "")
            country_alpha2_code = json_res[data].get("alpha2Code", "")
            ans.append({"name": country_title, "alpha2": country_alpha2_code})
        self.save_countries_into_json(ans)

    def save_countries_into_json(self, data):
        with open(self.__FILE_NAME, "w") as countries:
            json.dump(data, countries, indent=self.__JSON_INDENT)


class ParseTeams:
    __UEFA_TOP_DIVISION_TEAMS_URL = "https://en.wikipedia.org/wiki/List_of_top-division_football_clubs_in_UEFA_countries"
    FILE_NAME = "teams.json"
    teams_data = []

    def __init__(self):
        self.response = requests.get(self.__UEFA_TOP_DIVISION_TEAMS_URL)

    def parse_response(self):
        response_text = self.response.text
        parse_text = BeautifulSoup(response_text, "lxml")
        all_tables = parse_text.find_all("table", {"class": "wikitable"})
        for table in all_tables:
            all_rows = table.find_all("tr")
            for row in all_rows[1:]:
                team_cell = row.find("th")
                try:
                    team_href = team_cell.find("a").get("href")
                except AttributeError:
                    team_href = ""
                try:
                    self.__add_team_data_to_list(self.teams_data, team_href, team_cell.text)
                except (TextPropertyNotSupportedError, AttributeError):
                    self.teams_data.append({"team_title": ""})
        self.__write_data_into_file()

    def __write_data_into_file(self):
        with open(self.FILE_NAME, "w") as teams:
            json.dump(self.teams_data, teams, indent=2)

    def __add_team_data_to_list(self, team_data_list: list[Mapping[str, str]], team_href: str, team_cell_text: str):
        full_team_href = self.__form_full_url_address_of_team_page(team_href)
        team_cell_text = self.__clean_team_title(team_cell_text.strip()).rstrip()
        team_data_list.append({"team_title": team_cell_text, "team_link": full_team_href})

    def __clean_team_title(self, title: str) -> str:
        forbidden_symbols = ("(O)", "(R)", "(C)", "(U)")
        for symbol in forbidden_symbols:
            if symbol in title:
                title = title.replace(symbol, "")
        return title

    def __form_full_url_address_of_team_page(self, short_url: str) -> str:
        start_part = "https://en.wikipedia.org"
        if short_url:
            return f"{start_part}{short_url}"
        else:
            return ""


class ParseCities:
    BASE_URL = "https://en.wikipedia.org/wiki/List_of_towns_and_cities_with_100,000_or_more_inhabitants/country:_"
    ALPHABET_CHOICE = ["A-B", "C-D-E-F", "G-H-I-J-K", "L-M-N-O", "P-Q-R-S", "T-U-V-W-Y-Z"]
    country_cities_dict = {}

    def __init__(self):
        for alphabet in self.ALPHABET_CHOICE:
            url = self.form_full_url(alphabet)
            req = requests.get(url)
            self.res = req.text

    def parse_page(self, res_text: str):
        soup = BeautifulSoup(res_text, "lxml")
        cities = list(soup.find_all("span", {"class": "mw-headline"}))[:-2]
        tables = list(soup.find_all("table", {"class": "sortable"}))
        for index, city in enumerate(cities):
            city_text = city.text
            city_table = tables[index]
            cities_list = self.get_city_title_from_table(city_table)
            self.country_cities_dict[city_text] = cities_list
        return self.country_cities_dict

    def get_city_title_from_table(self, table) -> list[str]:
        cities = []
        table_body = table.find("tbody")
        table_rows = table_body.find_all("tr")
        for row in table_rows:
            city_cell = row.find("td")
            if city_cell:
                city_title = city_cell.find("a").text
                cities.append(city_title)
        return cities

    def form_full_url(self, alphabet: str):
        return f"{self.BASE_URL}{alphabet}"


class ParseStadiums:
    BASE_URL = "https://en.wikipedia.org/wiki/List_of_association_football_stadiums_by_country"
    all_stadiums_data = []
    Stadium = namedtuple("Stadium", ["location", "capacity"])

    def __init__(self):
        self.req = requests.get(self.BASE_URL).text
        self.parse_stadiums_data(self.req)

    def parse_each_table(self, all_tables: element.ResultSet):
        for table in all_tables:
            table_body = table.find("tbody")
            table_rows = table_body.find_all("tr")
            for row in table_rows:
                if not row.find("td"):
                    continue
                else:
                    all_row_cells = row.find_all("td")
                    stadium_data = self.__division_capacity_and_location(all_row_cells)
                    self.all_stadiums_data.append(stadium_data)
        return self.all_stadiums_data

    def __division_capacity_and_location(self, row_cells: element.ResultSet):
        if row_cells[0].text.isdigit():
            stadium_title_pos = 1
        else:
            stadium_title_pos = 0
        stadium_title = row_cells[stadium_title_pos].text
        try:
            stadium_capacity = self.__try_convert_stadium_capacity_to_int(row_cells[stadium_title_pos + 1].text)
        except ValueError:
            try:
                stadium_capacity = self.__try_get_list_element(row_cells, stadium_title_pos + 2)
            except IndexError:
                stadium_capacity = None
            stadium_location = row_cells[stadium_title_pos + 1].text
        else:
            try:
                stadium_location = self.__try_get_list_element(row_cells, stadium_title_pos + 2)
            except IndexError:
                stadium_location = None

        if not self.filter_number(str(stadium_capacity)) and self.filter_number(str(stadium_location)):
            stadium_location, stadium_capacity = stadium_capacity, stadium_location

        new_stadium = self.Stadium(self.clear_text(self.remove_hyperlinks(str(stadium_location))),
                                   self.clear_text(self.remove_hyperlinks(str(stadium_capacity))))
        stadium_data = {
            self.clear_text(self.remove_hyperlinks(stadium_title)):
                new_stadium
        }
        return stadium_data

    def filter_number(self, text: str) -> bool:
        try:
            return re.search(r"^\d{1,3}(?:,\d{3})*$", text) is not None
        except TypeError:
            return True

    def __try_convert_stadium_capacity_to_int(self, capacity_field: str) -> str:
        stadium_capacity = int(capacity_field)
        return stadium_capacity

    def __try_get_list_element(self, row_cells, stadium_title_position: int) -> str:
        stadium_capacity = str(row_cells[stadium_title_position].text)
        return stadium_capacity

    def parse_stadiums_data(self, request_text: str):
        soup = BeautifulSoup(request_text, "lxml")
        all_tables = soup.find_all("table", {"class": "sortable"})
        self.parse_each_table(all_tables)

    def clear_text(self, text: str):
        return text.strip()

    def remove_hyperlinks(self, text: str):
        return re.sub(r"\[.*?\]", '', text)


def main():
    a = ParseStadiums()
    print(a.all_stadiums_data)

