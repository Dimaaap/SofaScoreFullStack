from uuid import uuid4

from django.db import models


class PlayZones(models.Model):
    id = models.IntegerField(primary_key=True, editable=False)
    play_zone_title = models.CharField(max_length=50, default="")
    play_zone_area_image = models.URLField(max_length=255)

    def __str__(self):
        return {self.play_zone_title}


class LeaguesModels(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    league_title = models.CharField(max_length=200, default="")
    icon = models.URLField(max_length=255)
    start_date = models.DateField(default="")
    end_date = models.DateField(default="")
    league_description = models.TextField(default="")
    league_format = models.TextField(default="")
    commands_stadiums = models.TextField(default="")
    tv_partners = models.TextField(default="")
    best_scorers = models.TextField(default="")
    most_titles = models.TextField(default="")
    current_winner = models.TextField(default="")
    league_rang = models.TextField(default="")
    average_goals = models.DecimalField(decimal_places=2, max_digits=4, blank=True, null=True)
    lower_league_id = models.CharField(default="")
    similar_league_id = models.CharField(default="")
    command_count = models.IntegerField()
    play_zone = models.ForeignKey(PlayZones, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.league_title} {self.play_zone}"


class Rating(models.Model):
    rating_id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    rating_logo = models.URLField(max_length=255, default="")
    rating_title = models.CharField(max_length=100, default="")
    modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.rating_title