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
        },
        {
            "id": 7,
            "play_zone_title": "Англія",
            "play_zone_area_image": "https://www.sofascore.com/static/images/flags/en.png"
        },
        {
            "id": 8,
            "play_zone_title": "Іспанія",
            "play_zone_area_image": 'https://www.sofascore.com/static/images/flags/es.png'
        },
        {
            "id": 9,
            "play_zone_title": "Німеччина",
            "play_zone_area_image": "https://www.sofascore.com/static/images/flags/de.png"
        },
        {
            "id": 10,
            "play_zone_title": "Італія",
            "play_zone_area_image": "https://www.sofascore.com/static/images/flags/it.png"
        },
        {
            "id": 11,
            "play_zone_title": "Франція",
            "play_zone_area_image": "https://www.sofascore.com/static/images/flags/fr.png"
        },
        {
            "id": 12,
            "play_zone_title": "Нідерланди",
            "play_zone_area_image": "https://www.sofascore.com/static/images/flags/nl.png"
        },
        {
            "id": 13,
            "play_zone_title": "Бразилія",
            "play_zone_area_image": "https://www.sofascore.com/static/images/flags/br.png"
        },
        {
            "id": 14,
            "play_zone_title": "Україна",
            "play_zone_area_image": "https://www.sofascore.com/static/images/flags/ua.png"
        },
        {
            "id": 15,
            "play_zone_title": "Історія чемпіонату світу",
            "play_zone_area_image": "https://www.sofascore.com/static/images/flags/international.png"
        }
    ]

    LEAGUES = [
        {
            "league_title": "UEFA Champions League",
            "icon": "https://api.sofascore.app/api/v1/unique-tournament/7/image",
            "start_date": "2023-06-27",
            "end_date": "2024-06-01",
            "commands_count": 42,
            "play_zone": 1
        },
        {
            "league_title": "UEFA Europa League",
            "icon": "https://api.sofascore.app/api/v1/unique-tournament/679/image",
            "start_date": "2023-08-08",
            "end_date": "2024-05-22",
            "commands_count": 50,
            "play_zone": 1
        },
        {
            "league_title": "Premier League",
            "icon": "https://api.sofascore.app/api/v1/unique-tournament/17/image",
            "start_date": "2023-08-11",
            "end_date": "2024-05-19",
            "commands_count": 20,
            "play_zone": 7
        },
        {
            "league_title": "European Championship",
            "icon": "https://api.sofascore.app/api/v1/unique-tournament/1/image",
            "start_date": "2024-06-14",
            "end_date": "2024-07-14",
            "commands_count": 24,
            "play_zone": 1
        },
        {
            "league_title": "Copa América",
            "icon": "https://api.sofascore.app/api/v1/unique-tournament/133/image",
            "start_date": "2024-06-20",
            "end_date": "2024-07-14",
            "commands_count": 16,
            "play_zone": 4,
        },
        {
            "league_title": "LaLiga",
            "icon": "https://api.sofascore.app/api/v1/unique-tournament/8/image",
            "start_date": "2023-08-11",
            "end_date": "2024-05-26",
            "commands_count": 20,
            "play_zone": 8
        },
        {
            "league_title": "Bundesliga",
            "icon": "https://api.sofascore.app/api/v1/unique-tournament/35/image",
            "start_date": "2023-08-18",
            "end_date": "2024-05-28",
            "commands_count": 18,
            "play_zone": 9
        },
        {
            "league_title": "Serie A",
            "icon": "https://api.sofascore.app/api/v1/unique-tournament/23/image",
            "start_date": "2024-08-19",
            "end_date": "2024-06-02",
            "commands_count": 20,
            "play_zone": 10
        },
        {
            "league_title": "Ligue 1",
            "icon": "https://api.sofascore.app/api/v1/unique-tournament/34/image",
            "start_date": "2023-08-11",
            "end_date": "2024-06-03",
            "commands_count": 20,
            "play_zone": 11
        },
        {
            "league_title": "Eredivisie",
            "icon": "https://api.sofascore.app/api/v1/unique-tournament/37/image",
            "start_date": "2023-08-11",
            "end_date": "2024-06-02",
            "commands_count": 18,
            "play_zone": 12
        },
        {
            "league_title": "Brasileirão Serie A",
            "icon": "https://api.sofascore.app/api/v1/unique-tournament/325/image",
            "start_date": "2024-04-13",
            "end_date": "2024-12-09",
            "commands_count": 20,
            "play_zone": 13
        },
        {
            "league_title": "CONMEBOL Libertadores",
            "icon": "https://api.sofascore.app/api/v1/unique-tournament/384/image",
            "start_date": "2024-02-06",
            "end_date": "2024-12-01",
            "commands_count": 32,
            "play_zone": 4
        },
        {
            "league_title": "CAF Champions League",
            "icon": "https://api.sofascore.app/api/v1/unique-tournament/1054/image",
            "start_date": "2023-08-18",
            "end_date": "2024-05-26",
            "commands_count": 16,
            "play_zone": 3
        },
        {
            "league_title": "Premier League",
            "icon": "https://api.sofascore.app/api/v1/unique-tournament/218/image",
            "start_date": "2023-07-28",
            "end_date": "2024-06-03",
            "commands_count": 16,
            "play_zone": 14
        },
        {
            "league_title": "World Championship",
            "icon": "https://api.sofascore.app/api/v1/unique-tournament/16/image",
            "start_date": "2022-11-20",
            "end_date": "2022-12-18",
            "commands_count": 32,
            "play_zone": 15
        }
    ]

    RATINGS = [
        {
            "rating_logo": "https://www.sofascore.com/static/images/flags/fifa-big.png",
            "rating_title": "FIFA Рейтинг"
        },
        {
            "rating_logo": "https://www.sofascore.com/static/images/flags/uefa-big.png",
            "rating_title": "UEFA Рейтинг"
        }
    ]
