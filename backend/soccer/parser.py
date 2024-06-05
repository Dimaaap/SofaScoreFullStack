import aiohttp
import asyncio
import json


import requests
from typing import Mapping, Iterable, Union
from bs4 import BeautifulSoup

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
    BASE_URL = "https://en.wikipedia.org/wiki/Lists_of_cities_by_country"
    cities = []

    def __init__(self):
        self.res = requests.get(self.BASE_URL)
        self.parse_cities_data(self.res.text)

    def parse_cities_data(self, response: requests.Response):
        parse_text = BeautifulSoup(response, "lxml")
        self.get_list_all_countries(parse_text)

    def get_list_all_countries(self, parse_text):
        ul = parse_text.find_all("ul")
        self.get_link_on_country(ul)

    def get_link_on_country(self, countries_list):
        countries_page_href = {}
        for country in countries_list:
            list_li = country.find_all("li")
            for li in list_li:
                b_tag = li.find("b")
                if b_tag:
                    cities_list_link = b_tag.find("a")
                    full_link = self.__form_full_page_link(cities_list_link["href"])
                    title = cities_list_link["title"]
                    country_title = self.get_country_title_from_full_link_name(title)
                    countries_page_href[country_title] = full_link
        self.get_all_countries_cities_list(countries_page_href)

    def get_all_countries_cities_list(self, countries_href_dict: Mapping[str, str]):
        country_cities_dict = {}
        for country, href in countries_href_dict.items():
            res = requests.get(href).text
            soup = BeautifulSoup(res, "lxml")
            cities_list = self.__parse_cities_table(soup)
            country_cities_dict[country] = cities_list
        print(country_cities_dict)

    def __parse_cities_table(self, soup: BeautifulSoup):
        cities_list = []
        city_table = soup.find("table", {"class": "sortable"})
        try:
            table_body = city_table.find("tbody")
            city_rows = table_body.find_all("tr")
        except AttributeError:
            return []
        for city in city_rows:
            try:
                city_cell = city.find("td").text
            except AttributeError:
                city_cell = ""
            print(city_cell)
        return cities_list




    def get_country_title_from_full_link_name(self, link_name: str):
        banned_country = ("Somaliland", "South Sudan", "Svalbard", "Transnistria", "Vatican City", "Western Sahara",
                          "South Ossetia", "Pitcairn Islands")
        link_name_list = link_name.split()
        for i in link_name_list:
            if i == "in":
                link_name_list = link_name_list[link_name_list.index(i) + 1:]
        result_string = " ".join(link_name_list)
        if "India" in result_string:
            result_string = "".join(result_string.split()[0])
        if result_string in banned_country:
            result_string = ""
        return self.__additional_cities_list_clean(result_string)

    def __additional_cities_list_clean(self, city_string):
        city_list = city_string.split()
        need_clean_strings = {
            "Australia": "Australia", "Bolivian": "Bolivia",
            "Cameroon": "Cameroon", "Denmark": "Denmark", "France": "France",
            "Georgia": "Georgia", "Kuwait": "Kuwait", "Liechtenstein": "Liechtenstein",
            "Micronesia": "Micronesia", "Puerto": "Puerto Rico", "Marino": "San Marino", "Spain": "Spain",
            "Nicaragua": "Nicaragua", "Guadeloupe": "Guadeloupe"
        }
        for i in need_clean_strings.keys():
            if i in city_list:
                city_list = need_clean_strings[i]
                return str(city_list)
        if city_string == "Portal:Cities":
            return ""
        return ' '.join(city_list)

    def __form_full_page_link(self, short_link: str):
        return f"https://en.m.wikipedia.org{short_link}"


def main():
    a = ParseCities()
