import json
import requests


def parse_leagues_dict():
    with open("tournaments.json", "r") as tournaments:
        leagues = json.load(tournaments)
    return leagues


def get_data_from_leagues_dict():
    leagues = parse_leagues_dict()
    formatted_leagues = []
    for league in leagues:
        league = league.get("uniqueTournament")
        new_league = {
            "league_title": league.get("name", ""),
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
            "start_date": league.get("startDateTimestamp", 0),
            "end_date": league.get("endDateTimestamp", 0)
        }
        formatted_leagues.append(new_league)
    return formatted_leagues


def format_league_image_url(league_id):
    return f"https://api.sofascore.app/api/v1/unique-tournament/{str(league_id)}/image"

