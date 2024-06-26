import requests

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from google.oauth2 import id_token
from django.conf import settings
from django.contrib.auth.models import User
from django.core.exceptions import ObjectDoesNotExist
from rest_framework_simplejwt.tokens import RefreshToken

from google.auth.transport import requests


class RegisterNewUserGoogle(APIView):

    def post(self, request):
        token = request.data.get("access_token")
        if not token:
            return Response({"error": "Missing access token"}, status=status.HTTP_400_BAD_REQUEST)
        try:
            id_info = id_token.verify_oauth2_token(token, requests.Request(), settings.SOCIAL_AUTH_GOOGLE_OAUTH2_KEY)

            if id_info["iss"] not in ['accounts.google.com', 'https://accounts.google.com']:
                raise ValueError("Wrong issuer.")

            try:
                user = User.objects.get(email=id_info["email"])
            except ObjectDoesNotExist:
                user = User.objects.create(
                    username=id_info["email"],
                    email=id_info["email"],
                    first_name=id_info.get("given_name", ""),
                    last_name=id_info.get("family_name", "")
                )
                user.save()
            refresh = RefreshToken.for_user(user)
            return Response({
                "refresh": str(refresh),
                "access": str(refresh.access_token)
            })
        except ValueError:
            return Response({"error": "Invalid token"}, status=status.HTTP_400_BAD_REQUEST)