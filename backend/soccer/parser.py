import aiohttp
import asyncio
import json
import requests
from typing import Mapping, Iterable, Union
from bs4 import BeautifulSoup

from .exceptions import TextPropertyNotSupportedError

from django.conf import settings
from django.template.defaultfilters import slugify


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


class ParseEachTeamData:
    FILE_NAME = ParseTeams.FILE_NAME

    def open_file_with_teams(self):
        with open(self.FILE_NAME, "r") as teams:
            teams_content = json.load(teams)
        self.parse_team_additional_data(teams_content)

    def parse_team_additional_data(self, teams_content):
        team_additional_data = []
        for i in teams_content:
            team_data = {}
            if i["team_link"]:
                team_page_link = i["team_link"]
                res = requests.get(team_page_link).text
                html_text = BeautifulSoup(res, "lxml")
                info_table = html_text.find("table", {"class": "vcard"})
                if info_table:
                    team_name = info_table.find("caption").text
                    team_data["name"] = team_name
                    league = self.get_info_about_team_league(info_table)
                    print(league)
                    team_data["slug"] = self.create_slug(team_name)
                    team_data["gender"] = "M"
                    team_data["national"] = False

    def create_image_full_url(self, short_url: str) -> str:
        return f"https:{short_url}"

    def get_info_about_team_league(self, info_table):
        league = info_table.find_all("tr")[10]
        return league

    def create_slug(self, title: str) -> str:
        return slugify(title)


def main():
    a = ParseEachTeamData()
    a.open_file_with_teams()
