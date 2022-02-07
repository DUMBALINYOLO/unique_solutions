import uuid
from django.db import models
from datetime import date
from django.utils import timezone
from .accounts import User
from django.contrib.auth.models import BaseUserManager


class AdminManager(BaseUserManager):
    def get_queryset(self, *args, **kwargs):
        return super().get_queryset(*args, **kwargs).filter(type='admin')


    def create_admin(
                    self,
                    email,
                    username,
                    gender,
                    first_name,
                    middle_name,
                    last_name,
                    password=None
                ):
        if email is None:
            raise TypeError('Users must have an email address.')
        admin = AdminUser(
                    username=username,
                    email=self.normalize_email(email),
                    gender =gender,
                    first_name =first_name,
                    middle_name =middle_name,
                    last_name =last_name,
                )
        admin.set_password(password)
        admin.save()
        return admin


class AdminUser(User):
    base_type = 'admin'
    objects = AdminManager()


    class Meta:
        proxy  = True
