import json

from django.core.exceptions import ObjectDoesNotExist

from .models import LeaguesModels, PlayZones, Rating, Countries, Cities, Stadiums
from .data_storage import DataStorage
from .leagues_parser import get_data_from_leagues_dict
from .parser import main, ParseStadiums

data_storage = DataStorage()


class InserterInDb:

    @staticmethod
    def insert_stadiums_in_db():
        stadiums = ParseStadiums()
        for stadium in stadiums.all_stadiums_data:
            list_stadium = list(*stadium.items())
            stadium_title, stadium_info = list_stadium
            int_stadium_capacity = convert_float_string_into_int(stadium_info.capacity)
            new_stadium = Stadiums.objects.create(name=stadium_title,
                                                  capacity=int_stadium_capacity, city=stadium_info.location)
            new_stadium.save()

    @staticmethod
    def insert_leagues_in_db_from_json():
        all_leagues = get_data_from_leagues_dict()
        for league in all_leagues:
            new_league = LeaguesModels(**league)
            new_league.save()

    @staticmethod
    def insert_countries_in_db():
        with open("countries.json", "r") as countries:
            data = json.load(countries)
            print(data)
        try:
            for country in data:
                print(country)
                new_country = Countries(**country)
                new_country.save()
                pass
        except Exception as e:
            print(e)

    @staticmethod
    def insert_cities_in_db():
        country_cities_dict = main()
        for country, cities in country_cities_dict.items():
            try:
                country_db = Countries.objects.get(name=country)
            except ObjectDoesNotExist:
                continue
            except Exception as e:
                print(e)
            else:
                for city in cities:
                    new_city = Cities(name=city, country=country_db)
                    new_city.save()

    @staticmethod
    def insert_play_zones_in_db():
        try:
            for zone in data_storage.PLAY_ZONES:
                new_zone = PlayZones(**zone)
                new_zone.save()
        except Exception as e:
            print(e)

    @staticmethod
    def insert_some_play_zones_in_db():
        try:
            for zone in data_storage.PLAY_ZONES:
                if zone["id"] >= 47:
                    new_zone = PlayZones(**zone)
                    new_zone.save()
        except Exception as e:
            print(e)

    @staticmethod
    def insert_leagues_in_db():
        for league in data_storage.ALL_LEAGUES:
            play_zone = PlayZones.objects.get(id=league["play_zone"])
            new_league = LeaguesModels(league_title=league.get("league_title", ""),
                                       icon=league.get("icon", ""),
                                       slug=league.get("slug", ""),
                                       primary_color_hex=league.get("primary_color_hex", ""),
                                       secondary_color_hex=league.get("secondary_color_hex", ""),
                                       most_titles=league.get("most_titles", 0),
                                       tier=league.get("tier", 1),
                                       has_standings_groups=league.get("has_standings_groups", False),
                                       has_rounds=league.get("has_rounds", False),
                                       has_groups=league.get("has_groups", False),
                                       has_playoff_series=league.get("has_playoff_series", False),
                                       has_disable_home_away_standings=league.get("has_disable_home_away_standings",
                                                                                  False),
                                       start_date=league["start_date"],
                                       end_date=league["end_date"],
                                       play_zone=play_zone)
            new_league.save()

    @staticmethod
    def insert_ratings_in_db():
        for rating in data_storage.RATINGS:
            new_rating = Rating(**rating)
            new_rating.save()


def convert_float_string_into_int(convert_string: str) -> int:
    number_string_clean = convert_string.replace(",", "")
    try:
        number_int = int(number_string_clean)
    except ValueError:
        number_int = 0
    return number_int
