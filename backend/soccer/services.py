from .models import LeaguesModels, PlayZones, Rating
from .data_storage import DataStorage

data_storage = DataStorage()


def insert_play_zones_in_db():
    try:
        for zone in data_storage.PLAY_ZONES:
            new_zone = PlayZones(**zone)
            new_zone.save()
    except Exception as e:
        print(e)


def insert_leagues_in_db():
    for league in data_storage.LEAGUES:
        play_zone = PlayZones.objects.get(id=league["play_zone"])
        new_league = LeaguesModels(league_title=league["league_title"],
                                   icon=league["icon"],
                                   start_date=league["start_date"],
                                   end_date=league["end_date"],
                                   command_count=league["commands_count"],
                                   play_zone=play_zone)
        new_league.save()


def insert_ratings_in_db():
    for rating in data_storage.RATINGS:
        new_rating = Rating(**rating)
        new_rating.save()
