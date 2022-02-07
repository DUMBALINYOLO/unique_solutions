import uuid
from django.db import models
from datetime import date
from django.utils import timezone
from .accounts import User
from django.contrib.auth.models import BaseUserManager


class CustomerManager(BaseUserManager):
    def get_queryset(self, *args, **kwargs):
        return super().get_queryset(*args, **kwargs).filter(type='customer')


    def create_customer(
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
        customer = Customer(
                    username=username,
                    email=self.normalize_email(email),
                    gender =gender,
                    first_name =first_name,
                    middle_name =middle_name,
                    last_name =last_name,
                )
        customer.set_password(password)
        customer.save()
        return customer


class Customer(User):
    base_type = 'customer'
    objects = CustomerManager()


    class Meta:
        proxy  = True
