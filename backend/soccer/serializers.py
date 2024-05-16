from rest_framework import serializers
from .models import LeaguesModels, Rating


class LeaguesSerializer(serializers.ModelSerializer):
    class Meta:
        model = LeaguesModels
        fields = "__all__"


class RatingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rating
        fields = "__all__"