from django.urls import path

from .views import *

urlpatterns = [
    path("leagues", LeaguesList.as_view(), name="league-list"),
    path("ratings", RatingsList.as_view(), name="ratings-list")
]