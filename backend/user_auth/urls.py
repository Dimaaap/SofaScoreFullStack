from django.urls import path

from .views import *


urlpatterns = [
    path("google/", GoogleLogin.as_view(), name="google_login"),
    path("api/v1/user_picture/<str:google_id>", UserViewSet.as_view({"get": "user_picture"}), name="user_picture")
]