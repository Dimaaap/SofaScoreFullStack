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
        },
        {
            "id": 16,
            "play_zone_title": "Австралія",
            "play_zone_area_image": "https://www.sofascore.com/static/images/flags/au.png"
        },
    ]

    ALL_LEAGUES = [
        {
            "league_title": "A-League Men",
            "slug": "a-league-men",
            "primary_color_hex": "#fe5001",
            "secondary_color_hex": "#8e0a06",
            "icon": "https://api.sofascore.app/api/v1/unique-tournament/136/image",
            "most_titles": 5,
            "tier": 1,
            "has_standings_groups": False,
            "has_rounds": True,
            "has_groups": False,
            "has_playoff_series": False,
            "start_date": "2023-10-26",
            "end_date": "2024-05-31",
            "play_zone": 16
        },
        {
            "league_title": "A-League Women",
            "slug": "a-league-women",
            "primary_color_hex": "#a21c13",
            "secondary_color_hex": "#e44134",
            "icon": "https://api.sofascore.app/api/v1/unique-tournament/136/image",
            "most_titles": 4,
            "tier": 1,
            "has_standings_groups": False,
            "has_rounds": True,
            "has_groups": False,
            "has_playoff_series": False,
            "start_date": "2023-10-13",
            "end_date": "2024-05-04",
            "play_zone": 16
        },
        {
            "league_title": "Australia Cup",
            "slug": "australia-cup",
            "primary_color_hex": "#16263c",
            "secondary_color_hex": "#6895cf",
            "icon": "https://api.sofascore.app/api/v1/unique-tournament/1786/image",
            "most_titles": 3,
            "tier": 1,
            "has_standings_groups": False,
            "has_rounds": True,
            "has_groups": False,
            "has_playoff_series": False,
            "start_date": "2023-07-17",
            "end_date": "2023-10-09",
            "play_zone": 16
        },
        {
            "league_title": "National Premier League Finals",
            "slug": "national-premier-league-finals",
            "primary_color_hex": "#0c2340",
            "secondary_color_hex": "#0086e1",
            "icon": "https://api.sofascore.app/api/v1/unique-tournament/1510/image",
            "most_titles": 0,
            "tier": 1,
            "has_standings_groups": False,
            "has_rounds": True,
            "has_groups": False,
            "has_playoff_series": False,
            "start_date": "2023-09-21",
            "end_date": "2023-10-07",
            "play_zone": 16
        },
        {
            "league_title": "NPL, Capital Football",
            "slug": "npm-capital-football",
            "primary_color_hex": "#1483be",
            "secondary_color_hex": "#189ce6",
            "icon": "https://api.sofascore.app/api/v1/unique-tournament/1260/image",
            "most_titles": 0,
            "tier": 2,
            "has_standings_groups": False,
            "has_rounds": True,
            "has_groups": True,
            "has_playoff_series": False,
            "start_date": "2024-04-05",
            "end_date": "2024-09-30",
            "play_zone": 16
        },
        {
            "league_title": "NPL, New South Wales",
            "slug": "npm-new-south-wales",
            "primary_color_hex": "#5ab6e6",
            "secondary_color_hex": "#1b4880",
            "icon": "https://api.sofascore.app/api/v1/unique-tournament/1274/image",
            "most_titles": 0,
            "tier": 2,
            "has_standings_groups": False,
            "has_rounds": True,
            "has_groups": False,
            "has_playoff_series": False,
            "start_date": "2024-02-16",
            "end_date": "2024-09-08",
            "play_zone": 16
        },
        {
            "league_title": "NPL, Northern New South Wales",
            "icon": "https://api.sofascore.app/api/v1/unique-tournament/1638/image",
        }
    ]

    LEAGUES = [
        {
            "league_title": "UEFA Champions League",
            "slug": "uefa-champions-league",
            "icon": "https://api.sofascore.app/api/v1/unique-tournament/7/image",
            "primary_color_hex": "#062b5c",
            "secondary_color_hex": "#086aab",
            "most_titles": 14,
            "tier": 1,
            "has_standings_groups": True,
            "has_rounds": True,
            "has_groups": True,
            "has_playoff_series": False,
            "start_date": "2023-06-27",
            "end_date": "2024-06-01",
            "play_zone": 1
        },
        {
            "league_title": "UEFA Europa League",
            "slug": "uefa-europa-league",
            "icon": "https://api.sofascore.app/api/v1/unique-tournament/679/image",
            "primary_color_hex": "",
            "secondary_color_hex": "#f37d25",
            "most_titles": 7,
            "tier": 1,
            "has_standings_groups": True,
            "has_rounds": True,
            "has_groups": True,
            "has_playoff_series": False,
            "start_date": "2023-08-08",
            "end_date": "2024-05-22",
            "play_zone": 1
        },
        {
            "league_title": "Premier League",
            "slug": "premier-league",
            "icon": "https://api.sofascore.app/api/v1/unique-tournament/17/image",
            "primary_color_hex": "#3c1c5a",
            "secondary_color_hex": "#f80158",
            "most_titles": 20,
            "has_standings_groups": False,
            "has_rounds": False,
            "has_groups": True,
            "has_playoff_series": False,
            "tier": 1,
            "start_date": "2023-08-11",
            "end_date": "2024-05-19",
            "play_zone": 7
        },
        {
            "league_title": "European Championship",
            "slug": "european-championship",
            "icon": "https://api.sofascore.app/api/v1/unique-tournament/1/image",
            "primary_color_hex": "#293cdb",
            "secondary_color_hex": "#00ba5d",
            "most_titles": 3,
            "tier": 1,
            "has_standings_groups": True,
            "has_rounds": True,
            "has_groups": True,
            "has_playoff_series": False,
            "start_date": "2024-06-14",
            "end_date": "2024-07-14",
            "play_zone": 1
        },
        {
            "league_title": "Copa América",
            "slug": "copa-america",
            "icon": "https://api.sofascore.app/api/v1/unique-tournament/133/image",
            "primary_color_hex": "#0A2357",
            "secondary_color_hex": "#F70F17",
            "most_titles": 15,
            "tier": 1,
            "has_standings_groups": True,
            "has_rounds": True,
            "has_groups": True,
            "has_playoff_series": False,
            "has_disable_home_away_standings": True,
            "start_date": "2024-06-20",
            "end_date": "2024-07-14",
            "play_zone": 4,
        },
        {
            "league_title": "LaLiga",
            "slug": "laliga",
            "icon": "https://api.sofascore.app/api/v1/unique-tournament/8/image",
            "primary_color_hex": "#2f4a89",
            "secondary_color_hex": "#f4a32e",
            "most_titles": 35,
            "tier": 1,
            "has_standings_groups": False,
            "has_rounds": True,
            "has_groups": False,
            "has_playoff_series": False,
            "start_date": "2023-08-11",
            "end_date": "2024-05-26",
            "play_zone": 8
        },
        {
            "league_title": "Bundesliga",
            "slug": "bundesliga",
            "primary_color_hex": "#e2080e",
            "secondary_color_hex": "#8e090",
            "icon": "https://api.sofascore.app/api/v1/unique-tournament/35/image",
            "most_titles": 32,
            "tier": 1,
            "has_standings_groups": False,
            "has_rounds": True,
            "has_groups": False,
            "has_playoff_series": False,
            "start_date": "2023-08-18",
            "end_date": "2024-05-28",
            "play_zone": 9
        },
        {
            "league_title": "Serie A",
            "slug": "seria-a",
            "primary_color_hex": "#09519e",
            "secondary_color_hex": "#008fd7",
            "icon": "https://api.sofascore.app/api/v1/unique-tournament/23/image",
            "most_titles": 36,
            "tier": 1,
            "has_standings_groups": False,
            "has_rounds": True,
            "has_groups": False,
            "has_playoff_series": False,
            "start_date": "2024-08-19",
            "end_date": "2024-06-02",
            "play_zone": 10
        },
        {
            "league_title": "Ligue 1",
            "slug": "ligue-1",
            "primary_color_hex": "#091c3e",
            "secondary_color_hex": "#a9c011",
            "icon": "https://api.sofascore.app/api/v1/unique-tournament/34/image",
            "most_titles": 11,
            "tier": 1,
            "has_standings_groups": False,
            "has_rounds": True,
            "has_groups": False,
            "has_playoff_series": False,
            "start_date": "2023-08-11",
            "end_date": "2024-06-03",
            "play_zone": 11
        },
        {
            "league_title": "Eredivisie",
            "slug": "eredivisie",
            "primary_color_hex": "#292766",
            "secondary_color_hex": "#7c79c3",
            "icon": "https://api.sofascore.app/api/v1/unique-tournament/37/image",
            "most_titles": 36,
            "tier": 1,
            "has_standings_groups": False,
            "has_rounds": True,
            "has_groups": False,
            "has_playoff_series": False,
            "start_date": "2023-08-11",
            "end_date": "2024-06-02",
            "play_zone": 12
        },
        {
            "league_title": "Brasileirão Serie A",
            "slug": "brasileirao-serie-a",
            "primary_color_hex": "#C7FF00",
            "secondary_color_hex": "#969696",
            "icon": "https://api.sofascore.app/api/v1/unique-tournament/325/image",
            "most_titles": 12,
            "tier": 1,
            "has_standings_groups": False,
            "has_rounds": True,
            "has_groups": False,
            "has_playoff_series": False,
            "start_date": "2024-04-13",
            "end_date": "2024-12-09",
            "play_zone": 13
        },
        {
            "league_title": "CONMEBOL Libertadores",
            "slug": "conmebol-libertadores",
            "primary_color_hex": "#57321",
            "secondary_color_hex": "#dfaf49",
            "icon": "https://api.sofascore.app/api/v1/unique-tournament/384/image",
            "most_titles": 7,
            "tier": 1,
            "has_standings_groups": False,
            "has_rounds": True,
            "has_groups": True,
            "has_playoff_series": False,
            "start_date": "2024-02-06",
            "end_date": "2024-12-01",
            "play_zone": 4
        },
        {
            "league_title": "CAF Champions League",
            "slug": "caf-champions_league",
            "primary_color_hex": "#ebbf03",
            "secondary_color_hex": "#3a292a",
            "icon": "https://api.sofascore.app/api/v1/unique-tournament/1054/image",
            "most_titles": 11,
            "tier": 1,
            "has_standings_groups": False,
            "has_rounds": True,
            "has_groups": True,
            "has_playoff_series": False,
            "start_date": "2023-08-18",
            "end_date": "2024-05-26",
            "play_zone": 3
        },
        {
            "league_title": "Premier League",
            "slug": "premier-league",
            "primary_color_hex": "#15047",
            "secondary_color_hex": "#da1a32",
            "icon": "https://api.sofascore.app/api/v1/unique-tournament/218/image",
            "most_titles": 16,
            "tier": 1,
            "has_standings_groups": False,
            "has_rounds": True,
            "has_groups": False,
            "has_playoff_series": False,
            "start_date": "2023-07-28",
            "end_date": "2024-06-03",
            "play_zone": 14
        },
        {
            "league_title": "World Championship",
            "slug": "world-championship",
            "primary_color_hex": "#d20a11",
            "secondary_color_hex": "#e8bb57",
            "icon": "https://api.sofascore.app/api/v1/unique-tournament/16/image",
            "most_titles": 5,
            "tier": 1,
            "has_standings_groups": True,
            "has_rounds": True,
            "has_groups": True,
            "has_playoff_series": False,
            "has_disable_home_away_standings": True,
            "start_date": "2022-11-20",
            "end_date": "2022-12-18",
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

