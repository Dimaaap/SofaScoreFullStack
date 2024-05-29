import aiohttp
import asyncio
import json
import requests
from typing import Mapping, Iterable, Union

from django.conf import settings


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
    __TEAMS_LIST_URL = "http://api.football-data.org/v4/teams"
    __FOOTBALL_DATA_API_KEY = settings.FOOTBALL_DATA_API_KEY

    def __init__(self):
        headers = {
            "X-Auth-Token": self.__FOOTBALL_DATA_API_KEY
        }
        params = {
            "page": 1,
            "page_size": 5000
        }
        self.response = requests.get(self.__TEAMS_LIST_URL, headers=headers, params=params)
        print(self.response.status_code)
        self.parse_html_response()

    def parse_html_response(self):
        response_text = self.response.text
        print(response_text)


def main():
    a = ParseTeams()
