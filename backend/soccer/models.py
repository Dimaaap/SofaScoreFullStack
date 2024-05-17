from uuid import uuid4

from django.db import models


class PlayZones(models.Model):
    id = models.IntegerField(primary_key=True, editable=False)
    play_zone_title = models.CharField(max_length=50, default="")
    play_zone_area_image = models.URLField(max_length=255, default="")

    def __str__(self):
        return {self.play_zone_title}


class LeaguesModels(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    league_title = models.CharField(max_length=200, default="")
    slug = models.SlugField(default="")
    primary_color_hex = models.CharField(max_length=7, default="#fa5001")
    secondary_color_hex = models.CharField(max_length=7, default="#8e0a06")
    tier = models.IntegerField(default=1)
    most_titles = models.IntegerField(default=1)
    has_standings_groups = models.BooleanField(default=False)
    has_rounds = models.BooleanField(default=False)
    has_groups = models.BooleanField(default=False)
    has_playoff_series = models.BooleanField(default=False)
    has_disable_home_away_standings = models.BooleanField(default=False)
    icon = models.URLField(max_length=255, default="")
    start_date = models.DateField(blank=True, null=True)
    end_date = models.DateField(blank=True, null=True)
    play_zone = models.ForeignKey(PlayZones, on_delete=models.CASCADE, default="")

    def __str__(self):
        return f"{self.league_title} {self.play_zone}"


class Rating(models.Model):
    rating_id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    rating_logo = models.URLField(max_length=255, default="")
    rating_title = models.CharField(max_length=100, default="")
    modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.rating_title