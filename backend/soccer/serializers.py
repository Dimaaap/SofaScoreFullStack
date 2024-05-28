from rest_framework import serializers
from .models import LeaguesModels, Rating, PlayZones


class LeaguesSerializer(serializers.ModelSerializer):
    class Meta:
        model = LeaguesModels
        fields = "__all__"


class RatingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rating
        fields = "__all__"


class PlayZonesSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlayZones
        fields = "__all__"
