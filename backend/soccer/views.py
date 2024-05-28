from rest_framework import generics

from .models import LeaguesModels, Rating, PlayZones
from .serializers import LeaguesSerializer, RatingsSerializer, PlayZonesSerializer


class LeaguesList(generics.ListAPIView):
    queryset = LeaguesModels.objects.all()
    serializer_class = LeaguesSerializer


class RatingsList(generics.ListAPIView):
    queryset = Rating.objects.all()
    serializer_class = RatingsSerializer


class PlayZonesList(generics.ListAPIView):
    queryset = PlayZones.objects.all().order_by("play_zone_title")
    serializer_class = PlayZonesSerializer
