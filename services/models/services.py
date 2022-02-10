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


    BOOLEAN_CHOICES = [
        ('YES', 'YES'),
        ('NO', 'NO')
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
    listed = models.CharField(
                            max_length=200,
                            blank=False,
                            null=False,
                            choices=BOOLEAN_CHOICES,
                            default='YES'
                        )
    primary_image = models.ImageField(
                        upload_to='products/%Y/%m/%d/',
                        null=True,
                        blank=True
                    )

    def __str__(self):
        return self.name



class ServiceImage(models.Model):

    service = models.ForeignKey(
                        Service,
                        null=False,
                        blank=False,
                        on_delete=models.CASCADE,
                        related_name='images'
                    )
    image = models.ImageField(
                        upload_to='services/%Y/%m/%d/',
                        null=True,
                        blank=True
                    )


    def __str__(self):
        return f"<Image of {self.service.name} >"
