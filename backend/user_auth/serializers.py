from rest_framework import serializers
from .models import CustomUser


class UserAvatarSerializer(serializers.ModelSerializer):

    picture = serializers.SerializerMethodField()

    class Meta:
        model = CustomUser
        fields = ("google_id", "picture")

    def get_picture(self, obj):
        if obj.picture and obj.picture.url.startswith('/media/'):
            return obj.picture.url.replace('/media/', '').replace("https%3A", "https://")
        return obj.picture.url if obj.picture else None