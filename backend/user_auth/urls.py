from django.urls import path

from .views import *


urlpatterns = [
    path("google", RegisterNewUserGoogle.as_view(), name="google_login"),
]