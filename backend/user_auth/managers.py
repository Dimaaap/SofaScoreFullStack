from django.contrib.auth.base_user import BaseUserManager


class CustomUserManager(BaseUserManager):
    def create_user(self, email, first_name, second_name, picture=None, password=None):
        if not email:
            raise ValueError("The Email must be set")
        email = self.normalize_email(email)
        user = self.model(email=email, first_name=first_name, second_name=second_name, picture=picture)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, first_name, second_name, picture=None, password=None):
        user = self.create_user(email, first_name, second_name, picture, password)
        user.is_admin = True
        user.save(using=self._db)
        return user