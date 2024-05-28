from uuid import uuid4

from django.db import models

from .mixins import SubscribersMixin


class PlayZones(models.Model):
    id = models.IntegerField(primary_key=True, editable=False)
    play_zone_title = models.CharField(max_length=50, default="")
    play_zone_area_image = models.URLField(max_length=255, default="")

    def __str__(self):
        return f"{self.play_zone_title}"


class Countries(models.Model):
    id = models.UUIDField(primary_key=True, editable=False, default=uuid4)
    name = models.CharField(max_length=100, default="")
    alpha2 = models.CharField(max_length=3, default="")

    def __str__(self):
        return f"{self.name} {self.alpha2}"


class Teams(models.Model, SubscribersMixin):
    GENDER_CHOICES = [
        ("M", "Male"),
        ("F", "Female")
    ]
    id = models.UUIDField(primary_key=True, editable=False, default=uuid4)
    name = models.CharField(max_length=155, default="")
    slug = models.SlugField(default="")
    short_name = models.CharField(max_length=20, default="")
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES, default="M")
    subscribers_count = models.PositiveIntegerField(default=0)
    name_code = models.CharField(max_length=3, default="")
    disabled = models.BooleanField(default=False)
    national = models.BooleanField(default=False)
    team_color_primary = models.CharField(max_length=7, default="#ffffff")
    team_color_secondary = models.CharField(max_length=7, default="#ffffff")
    text_color = models.CharField(max_length=7, default="#ffffff")
    country = models.ForeignKey(Countries, blank=True, on_delete=models.CASCADE, default="")

    def __str__(self):
        return f"{self.name} {self.short_name}"


class LeaguesModels(models.Model, SubscribersMixin):
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
    subscribers_count = models.PositiveIntegerField(default=0)
    title_holder = models.ForeignKey(Teams, blank=True, on_delete=models.CASCADE,
                                     related_name="title_holder_team", default="", null=True)
    title_holder_titles = models.PositiveIntegerField(default=0)
    most_titles_teams = models.ManyToManyField(Teams, blank=True, symmetrical=False, related_name="most_titles_team")
    upper_divisions = models.ManyToManyField("self", blank=True, symmetrical=False, related_name="upper_leagues")
    lower_divisions = models.ManyToManyField("self", blank=True, symmetrical=False, related_name="lower_leagues")
    similar_divisions = models.ManyToManyField("self", blank=True, symmetrical=False, related_name="similar_league")
    icon = models.URLField(max_length=255, default="")
    start_date = models.DateTimeField(blank=True, null=True)
    end_date = models.DateTimeField(blank=True, null=True)
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
