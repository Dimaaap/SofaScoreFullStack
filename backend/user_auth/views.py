from django.contrib.auth import get_user_model, authenticate, login
from django.core.exceptions import ObjectDoesNotExist

from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.views import APIView
import requests

User = get_user_model()


class GoogleLogin(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request):
        access_token = request.data.get("access_token")
        response = requests.get(f"https://www.googleapis.com/oauth2/v1/userinfo?access_token={access_token}")

        if response.status_code == 200:
            data = response.json()
            email = data.get('email')
            google_id = data.get("id")

            try:
                user = User.objects.get(email=email)
            except ObjectDoesNotExist:
                first_name, second_name, picture = (
                    data["given_name"], data["family_name"],
                    data["picture"]
                )
                user = User.objects.create(email=email, first_name=first_name,
                                           second_name=second_name, picture=picture,
                                           google_id=google_id)
                user.save()
                return Response({'message': 'User Registration', 'user': user.email, "status": "registration"})
            finally:
                user_auth = authenticate(request, google_id=google_id)
                if user_auth is not None:
                    login(request, user_auth)
                    return Response({"message": "User authorized", "status": "authorized"}, status=200)
                else:
                    return Response({"message": "Auth error", "status": "unauthorized"}, status=400)
        else:
            return Response({'error': 'Failed user Google auth'}, status=response.status_code)
