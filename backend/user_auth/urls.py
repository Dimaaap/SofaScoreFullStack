from django.urls import path

from .views import *


urlpatterns = [
    path("google/", GoogleLogin.as_view(), name="google_login"),
    path("logout/", LogoutUser.as_view(), name="logout_user"),
    path("api/v1/user/profile/<str:google_id>/", UserProfileView.as_view(), name="user_profile"),
    path("api/v1/user_picture/<str:google_id>", UserViewSet.as_view({"get": "user_picture"}), name="user_picture"),
    path("api/v1/upload-avatar/<str:google_id>", AvatarUploadView.as_view(), name="upload_avatar")
]