import json
import datetime

from django.core.exceptions import ObjectDoesNotExist

from .models import PlayZones


def parse_leagues_dict():
    with open("tournaments.json", "r") as tournaments:
        leagues = json.load(tournaments)
    return leagues


def try_get_play_zone_id(league: dict):
    try:
        play_zone_id = PlayZones.objects.get(play_zone_title=league.get("category").get("name"))
    except ObjectDoesNotExist:
        play_zone_id = PlayZones.objects.first()
        print(league.get("category").get("name"))
    return play_zone_id.id


def convert_unix_timestamp_to_date_object(unix_time: int) -> datetime.date:
    current_date = datetime.date.fromtimestamp(unix_time)
    return current_date


def get_data_from_leagues_dict():
    leagues = parse_leagues_dict()
    formatted_leagues = []
    for league in leagues:
        league = league.get("uniqueTournament")
        new_league = {
            "league_title": league.get("name", ""),
            "play_zone_id": try_get_play_zone_id(league),
            "slug": league.get("slug", ""),
            "primary_color_hex": league.get("primaryColorHex", ""),
            "secondary_color_hex": league.get("secondaryColorHex", ""),
            "icon": format_league_image_url(league.get("id")),
            "most_titles": league.get("most_titles", 0),
            "tier": league.get("tier", 0),
            "has_standings_groups": league.get("hasStandingsGroups", False),
            "has_rounds": league.get("hasRounds", False),
            "has_groups": league.get("hasGroups", False),
            "has_playoff_series": league.get("hasPlayoffSeries", False),
            "has_disable_home_away_standings": league.get("hasDisableHomeAwayStandings", False),
            "start_date": convert_unix_timestamp_to_date_object(int(league.get("startDateTimestamp", "0"))),
            "end_date": convert_unix_timestamp_to_date_object(int(league.get("endDateTimestamp", "0")))
        }
        formatted_leagues.append(new_league)
    return formatted_leagues


def format_league_image_url(league_id):
    return f"https://api.sofascore.app/api/v1/unique-tournament/{str(league_id)}/image"

