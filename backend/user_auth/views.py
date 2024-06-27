from django.conf import settings
from django.contrib.auth import get_user_model
from django.core.exceptions import ObjectDoesNotExist

from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.views import APIView
import requests


User = get_user_model()


class GoogleLogin(APIView):
    permission_classes = (permissions.AllowAny, )

    def post(self, request):
        access_token = request.data.get("access_token")
        response = requests.get(f"https://www.googleapis.com/oauth2/v1/userinfo?access_token={access_token}")

        if response.status_code == 200:
            data = response.json()
            print(data)
            email = data.get('email')
            google_id = data.get("id")

            try:
                user = User.objects.get(email=email)
            except ObjectDoesNotExist:
                user = User.objects.create_user(email=email, username=email)

            user.google_id = google_id
            user.save()
            return Response({'message': 'Success user Google auth', 'user': user.username})
        else:
            return Response({'error': 'Failed user Google auth'}, status=response.status_code)
