from django.db import models
from django.db.models import Q
import services




class Service(models.Model):

    '''


    '''

    SERVICE_CATEGORY_CHOICES = [
        ('REPAIR', 'REPAIR'),
        ('PRINTING', 'PRINTING'),
        ('PHOTOCOPYING', 'PHOTOCOPYING'),
        ('LAMINATING', 'LAMINATING'),

    ]

    name = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    fee = models.DecimalField(max_digits=16, decimal_places=2)
    category = models.CharField(
                            max_length=200,
                            blank=False,
                            null=False,
                            choices=SERVICE_CATEGORY_CHOICES
                        )
    is_listed = models.BooleanField(default=False, blank=True)

    def __str__(self):
        return self.name
