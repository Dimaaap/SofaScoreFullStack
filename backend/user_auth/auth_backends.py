from django.contrib.auth.backends import BaseBackend
from django.contrib.auth import get_user_model
from django.core.exceptions import ObjectDoesNotExist

from .db_operations import get_data_from_model


class BaseAuthBackend(BaseBackend):
    user_model = get_user_model()

    def get_user(self, user_id):
        try:
            return get_data_from_model(self.user_model, "pk", user_id)
        except ObjectDoesNotExist:
            return None


class GoogleIDAuthBackend(BaseAuthBackend):

    def authenticate(self, request, google_id=None, **kwargs):
        try:
            user = get_data_from_model(self.user_model, "google_id", google_id)
            return user
        except ObjectDoesNotExist:
            return None


class FacebookIDAuthBackend(BaseAuthBackend):
    user_model = get_user_model()

    def authenticate(self, request, facebook_id=None, **kwargs):
        try:
            user = get_data_from_model(self.user_model, "facebook_id", facebook_id)
            return user
        except ObjectDoesNotExist:
            return None
