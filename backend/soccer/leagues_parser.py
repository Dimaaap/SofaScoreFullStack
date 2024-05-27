import json


def parse_leagues_dict():
    with open("tournaments.json", "r") as tournaments:
        leagues = json.load(tournaments)
    return leagues


def get_data_from_leagues_dict():
    leagues = parse_leagues_dict()
    formatted_leagues = []
    for league in leagues:
        league = league.get("uniqueTournament")
        new_league = {}
        new_league["league_title"] = league.get("name", "")
        new_league["slug"] = league.get("slug")
        new_league["primary_color_hex"] = league.get("primaryColorHex", "")
        new_league["secondary_color_hex"] = league.get("secondaryColorHex", "")
        new_league["most_titles"] = league.get("mostTitles", 0)
        new_league["tier"] = league.get("tier", 0)
        new_league["has_standings_groups"] = league.get("hasStandingsGroups", False)
        new_league["has_rounds"] = league.get("hasRounds")
        new_league["has_groups"] = league.get("hasGroups")
        new_league["has_playoff_series"] = league.get("hasPlayoffSeries")
        new_league["start_date"] = league.get("startDateTimestamp", 0)
        new_league["end_date"] = league.get("endDateTimestamp", 0)
        new_league["has_disable_home_away_standings"] = league.get("hasDisabledHomeAwayStandings", False)

