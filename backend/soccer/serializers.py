from rest_framework import serializers
from .models import LeaguesModels


class LeaguesSerializer(serializers.ModelSerializer):
    class Meta:
        model = LeaguesModels
        fields = "__all__"
