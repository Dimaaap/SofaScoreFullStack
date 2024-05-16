from rest_framework import generics

from .models import LeaguesModels, Rating
from .serializers import LeaguesSerializer, RatingsSerializer


class LeaguesList(generics.ListAPIView):
    queryset = LeaguesModels.objects.all()
    serializer_class = LeaguesSerializer


class RatingsList(generics.ListAPIView):
    queryset = Rating.objects.all()
    serializer_class = RatingsSerializer