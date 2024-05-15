from dataclasses import dataclass
import datetime


@dataclass
class DataStorage:
    PLAY_ZONES = [
        {
            "id": 1,
            "play_zone_title": "Європа",
            "play_zone_area_image": "https://www.sofascore.com/static/images/flags/europe.png"
        },
        {
            "id": 2,
            "play_zone_title": "Азія",
            "play_zone_area_image": "https://www.sofascore.com/static/images/flags/asia.png"
        },
        {
            "id": 3,
            "play_zone_title": "Африка",
            "play_zone_area_image": "https://www.sofascore.com/static/images/flags/africa.png"
        },
        {
            "id": 4,
            "play_zone_title": "Південна Америка",
            "play_zone_area_image": "https://www.sofascore.com/static/images/flags/south-america.png",
        },
        {
            "id": 5,
            "play_zone_title": "Північна & Центральна Америка",
            "play_zone_area_image": "https://www.sofascore.com/static/images/flags/north-and-central-america.png"
        },
        {
            "id": 6,
            "play_zone_title": "Океанія",
            "play_zone_area_image": "https://www.sofascore.com/static/images/flags/oceania.png"
        }
    ]

    LEAGUES = [
        {"league_title": "UEFA Champions League",
         "icon": "https://api.sofascore.app/api/v1/unique-tournament/7/image",
         "start_date": "27.06.2023",
         "end_date": "01.06.2024",
         "commands_count": 42,

         }
    ]
