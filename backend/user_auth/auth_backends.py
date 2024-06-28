from django.contrib.auth.backends import BaseBackend
from django.contrib.auth import get_user_model
from django.core.exceptions import ObjectDoesNotExist


class GoogleIDAuthBackend(BaseBackend):
    user_model = get_user_model()

    def authenticate(self, request, google_id=None, **kwargs):
        try:
            user = self.user_model.objects.get(google_id=google_id)
            return user
        except ObjectDoesNotExist:
            return None

    def get_user(self, user_id):
        try:
            return self.user_model.objects.get(pk=user_id)
        except ObjectDoesNotExist:
            return None