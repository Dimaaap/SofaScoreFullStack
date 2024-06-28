from django.db import models
from django.contrib.auth.models import AbstractBaseUser
from django.utils import timezone

from .managers import CustomUserManager


class CustomUser(AbstractBaseUser):
    email = models.EmailField(verbose_name="email_address", max_length=255, unique=True)
    first_name = models.CharField(max_length=50, default="")
    second_name = models.CharField(max_length=50, default="")
    username = models.CharField(max_length=100, default="")
    picture = models.ImageField(upload_to="profile_pics/", null=True, blank=True)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    google_id = models.CharField(max_length=50, unique=True, default="")
    sign_in_date = models.DateTimeField(auto_now=True)

    objects = CustomUserManager()
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["first_name", "second_name"]

    def save(self, *args, **kwargs):
        self.sign_in_date = timezone.now()
        return super(CustomUser, self).save(*args, **kwargs)

    def __str__(self):
        return f"{self.email} - ({self.first_name} {self.second_name})"

    def has_perm(self, perm, obj=None):
        return True

    def has_module_perms(self, app_label):
        return True

    @property
    def is_staff(self):
        return self.is_admin
