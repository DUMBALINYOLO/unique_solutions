from django.db import models
from django.db.models import Q




class Product(models.Model):

    VISIBILITY_STATUS = [
        ('visible', 'VISIBLE'),
        ('invisible', 'INVISIBLE'),
        ('deleted', 'DELETED')
    ]

    RETURN_POLICY_CHOICES  = [
        ('returnable', 'This Item is returnable'),
        ('unreturnable', 'This item is not returnable'),
    ]

    BOOLEAN_CHOICES = [
        ('yes', 'YES'),
        ('no', 'NO')
    ]

    PRICING_CHOICES = [
        ('Manual', 'Manual'),
        ('Margin', 'Margin'),
        ('Markup', 'Markup')
    ]

    PRODUCT_TYPE_CHOICES = [
        ('art', 'art'),
        ('automative', 'automative'),
        ('computer', 'computer'),
        ('electronic', 'electronic'),
        ('fashion', 'fashion'),
        ('industrial_and_scientific', 'industrial_and_scientific'),
        ('video_game', 'video_game'),

    ]

    type = models.CharField(
                    choices=PRODUCT_TYPE_CHOICES,
                    max_length=200,
                    blank=True,
                    null=True
                )

    visibility = models.CharField(
                    max_length=200,
                    choices=VISIBILITY_STATUS
                )

    return_policy = models.CharField(
                            max_length=200,
                            choices = RETURN_POLICY_CHOICES
                        )
    created_on = models.DateTimeField(
                        auto_now_add=True,
                        editable=False,
                        db_index=True,

                    )

    primary_image = models.ImageField(
                        upload_to='products/%Y/%m/%d/',
                        null=True,
                        blank=True
                    )
    digital = models.BooleanField(default=False)

    name = models.CharField(
                    max_length=256,
                    db_index=True,
                )
    price = models.DecimalField(max_digits=16, decimal_places=2)



    def __str__(self):
        return self.name




class ProductImage(models.Model):

    product = models.ForeignKey(
                        Product,
                        null=False,
                        blank=False,
                        on_delete=models.CASCADE,
                        related_name='images'
                    )
    image = models.ImageField(
                        upload_to='products/%Y/%m/%d/',
                        null=True,
                        blank=True
                    )


    def __str__(self):
        return f"<Image of {self.product.name} >"
