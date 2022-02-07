from django.db import models
import uuid
from decimal import Decimal as D
import random
import datetime
from django.utils import timezone



class Payment(models.Model):
    '''
        Model represents payments made by credit customers only!
        Information stored include data about the invoice, the amount paid
        and other notable comments

        methods
    ---------
    '''

    PAYMENT_METHODS_CHOICES = [
        ("cash", "Cash" ),
        ("transfer", "Transfer"),
        ("debit card", "Debit Card"),
        ("mobile", "Mobile-Transfer")
    ]

    invoice = models.ForeignKey(
                            "sales.Invoice",
                            on_delete=models.SET_NULL,
                            null=True,
                            related_name='invoicepayments'

                        )
    amount = models.DecimalField(
                        max_digits=16,
                        default= 0,
                        decimal_places=2
                    )
    date = models.DateField(auto_now_add=True)
    method = models.CharField(
                        max_length=32,
                        choices=PAYMENT_METHODS_CHOICES,
                        default='transfer'
                        )
    reference_number = models.CharField(max_length=255, null=True, default=None)
    bookkeeper  = models.ForeignKey(
                        "users.AdminUser",
                        on_delete=models.SET_NULL,
                        null=True,
                        related_name = 'incoming_payments',
                    )
    comments = models.TextField(default="Thank you for your business")


    def save(self, *args, **kwargs):
        if not self.reference_number:
            self.reference_number = str(uuid.uuid4()).replace("-", '').upper()[:20]
        super(Payment, self).save(*args, **kwargs)



    def __str__(self):
        return f'PAYMENT: {self.reference_number}'

    @property
    def due(self):
        return self.invoice.total - self.amount
