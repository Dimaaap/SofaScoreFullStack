from rest_framework import generics

from .models import LeaguesModels
from .serializers import LeaguesSerializer


class LeaguesList(generics.ListAPIView):
    queryset = LeaguesModels.objects.all()
    serializer_class = LeaguesSerializer
