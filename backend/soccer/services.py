from .models import LeaguesModels, PlayZones
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
    pass
