import aiohttp
import asyncio
import json


async def fetch(session, url, results):
    async with (session.get(url) as response):
        text = await response.text()
        try:
            json_data = json.loads(text)
            if ("error" not in json_data and
                    json_data.get("uniqueTournament", {}).get("category", {}).get("sport", {}).get(
                        "name") == "Football"):
                results.append(json_data)
        except json.JSONDecodeError:
            pass


class SoccerParser:
    SOCCER_TOURNAMENTS_BASE_URL = "https://api.sofascore.app/api/v1/unique-tournament/"
    TOURNAMENTS_COUNT = 23_000
    JSON_FILE_INDENT = 2

    def format_urls_list(self):
        urls = [f"{self.SOCCER_TOURNAMENTS_BASE_URL}{i}" for i in range(1, self.TOURNAMENTS_COUNT)]
        return urls

    async def send_response_to_urls(self):
        urls = self.format_urls_list()
        results = []
        async with aiohttp.ClientSession() as session:
            tasks = []
            for url in urls:
                tasks.append(fetch(session, url, results))
            await asyncio.gather(*tasks)
            self.write_json_into_file(results)

    def write_json_into_file(self, data):
        with open("tournaments.json", "w") as tournaments:
            json.dump(data, tournaments, indent=self.JSON_FILE_INDENT)


def main():
    parser = SoccerParser()
    asyncio.run(parser.send_response_to_urls())
