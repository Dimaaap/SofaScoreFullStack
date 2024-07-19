from django.contrib.auth import get_user_model, authenticate, login, logout
from django.core.exceptions import ObjectDoesNotExist

from rest_framework import permissions, viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.views import APIView
import requests

from .serializers import UserAvatarSerializer, UploadAvatarSerializer
from .db_operations import *

User = get_user_model()


class UserProfileView(APIView):
    def get(self, request, google_id):
        try:
            user = get_data_from_model(User, "google_id", google_id)
            user_data = {
                "first_name": user.first_name,
                "last_name": user.second_name,
                "email": user.email,
            }
            return Response(user_data)
        except ObjectDoesNotExist:
            return Response({"error": "User not Found"}, status=404)


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
                user = get_data_from_model(User, "email", email)
            except ObjectDoesNotExist:
                first_name, second_name, picture = (
                    data["given_name"], data["family_name"],
                    data["picture"]
                )
                saving_dict = {
                    "email": email, "first_name": first_name,
                    "second_name": second_name, "picture": picture,
                    "google_id": google_id
                }
                user = User.objects.create(**saving_dict)
                user.save()
                return Response({'message': 'User Registration', 'user': user.email, "status": "registration"})
            finally:
                user_auth = authenticate(request, google_id=google_id)
                if user_auth is not None:
                    login(request, user_auth)
                    return Response({"message": "User authorized", "status": "authorized", "google_id": google_id},
                                    status=200)
                else:
                    return Response({"message": "Auth error", "status": "unauthorized"}, status=400)
        else:
            return Response({'error': 'Failed user Google auth'}, status=response.status_code)


class FacebookLogin(APIView):
    permission_classes = (permissions.AllowAny, )

    def post(self, request):
        access_token = request.data.get("access_token")
        print(access_token)
        response = requests.get(f"https://graph.facebook.com/me?fields=id,name,email,first_name,last_name,picture&access_token={access_token}")

        if response.status_code == 200:
            data = response.json()
            email = data.get("email")
            facebook_id = data.get("id")

            try:
                user = get_data_from_model(User, "email", email)
            except ObjectDoesNotExist:
                first_name = data.get("first_name")
                last_name = data.get("last_name")
                picture = data.get("picture", {}).get("data", {}).get("url", {})
                creation_dict = {"email": email, "first_name": first_name, "last_name": last_name,
                                 "picture": picture, "facebook_id": facebook_id}
                user = create_data_in_model_without_saving(User, **creation_dict)
                user.save()
                return Response({"message": "User Registration", "user": user.email, "status": "registration"})
            finally:
                user_auth = authenticate(request, facebook_id=facebook_id,
                                         backend="user_auth.auth_backends.FacebookIDAuthBackend")
                if user_auth is not None:
                    login(request, user_auth)
                    return Response({"message": "User authorized", "status": "authorized"}, status=200)
                else:
                    return Response({"message": "Auth error", "status": "unauthorized"}, status=400)


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserAvatarSerializer

    @action(detail=False, methods=["get"], url_path="user_picture/(?P<google_id>[^/.]+)")
    def user_picture(self, request, google_id=None):
        try:
            #user = User.objects.get(google_id=google_id)
            user = get_data_from_model(User, "google_id", google_id)
            serializer = self.get_serializer(user)
            return Response(serializer.data)
        except ObjectDoesNotExist:
            return Response({"error": "User not found"}, status=404)


class LogoutUser(APIView):
    def post(self, request):
        logout(request)
        return Response({"detail": "Successfully logged out.", "status": 200},
                        status=status.HTTP_200_OK)

    def get(self, request):
        print(request)
        return Response({"error": "Only POST method is allowed."},
                        status=status.HTTP_400_BAD_REQUEST)


class AvatarUploadView(APIView):
    def post(self, request, google_id=None, *args, **kwargs):
        print(request.data)
        try:
            user_profile = get_data_from_model(User, "google_id", google_id)
        except ObjectDoesNotExist:
            return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)
        file = request.data.get("file")
        if isinstance(file, list):
            file = file[0]
        if not file:
            return Response({"error": "No file provided"}, status=status.HTTP_400_BAD_REQUEST)
        file_serializer = UploadAvatarSerializer(user_profile, data=request.data, partial=True)
        print("FILE:", file)
        if file_serializer.is_valid():
            user_profile.picture = file
            try:
                user_profile.save()
            except Exception as e:
                return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        return Response({
            "message": "Avatar uploaded successfull",
            "user_profile": file_serializer.data
        }, status=status.HTTP_200_OK)