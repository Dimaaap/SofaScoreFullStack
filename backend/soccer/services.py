import json

from django.core.exceptions import ObjectDoesNotExist

from .models import LeaguesModels, PlayZones, Rating, Countries, Cities
from .data_storage import DataStorage
from .parser import main

data_storage = DataStorage()


class InserterInDb:

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
        for league in data_storage.LEAGUES:
            play_zone = PlayZones.objects.get(id=league["play_zone"])
            new_league = LeaguesModels(league_title=league["league_title"],
                                       icon=league["icon"],
                                       slug=league["slug"],
                                       primary_color_hex=league["primary_color_hex"],
                                       secondary_color_hex=league["secondary_color_hex"],
                                       most_titles=league["most_titles"],
                                       tier=league["tier"],
                                       has_standings_groups=league["has_standings_groups"],
                                       has_rounds=league["has_rounds"],
                                       has_groups=league["has_groups"],
                                       has_playoff_series=league["has_playoff_series"],
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
