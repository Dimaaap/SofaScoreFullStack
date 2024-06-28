import requests
from rest_framework.response import Response

from django.contrib.auth import get_user_model
from django.core.exceptions import ObjectDoesNotExist

User = get_user_model()

def handle_good_status_code(response: requests.Request):
    data = response.json()
    email, google_id = data.get("email"), data.get("id")
    try:
        user = get_user_from_db(email)
    except ObjectDoesNotExist:
        user = add_user_to_db(data, email=email, google_id=google_id)
        return Response({'message': 'User Registration', 'user': user.email, "status": "registration"})


def get_user_from_db(email: str):
    user = User.objects.get(email=email)
    return user


def add_user_to_db(data, *, email=None, google_id=None):
    first_name, second_name, picture = (
        data["given_name"], data["family_name"],
        data["picture"]
    )
    user = User.objects.create(email=email, first_name=first_name,
                               second_name=second_name, picture=picture,
                               google_id=google_id)
    user.save()
    return user

