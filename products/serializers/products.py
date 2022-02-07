from rest_framework import serializers
from products.models import Product, ProductImage
from drf_extra_fields.fields import Base64ImageField



class ProductCreateUpdateSerializer(serializers.ModelSerializer):
	primary_image = Base64ImageField(required=True)


	class Meta:
		model = Product
		fields = "__all__"




class ProductListDetailSerializer(serializers.ModelSerializer):

	class Meta:
		model = Product
		fields = [

			"id",
			'type',
		    'visibility',
		    'return_policy', 
		    'primary_image',
		    'digital',
		    'name',
		    'price',

		]



class ProductImageCreateSerializer(serializers.ModelSerializer):

	image = Base64ImageField(required=True)

	class Meta:
		model = ProductImage
		fields = [

			'product',
			'image'
		]



class ProductImageListSerializer(serializers.ModelSerializer):

	class Meta:
		model = ProductImage
		fields = [

			'id',
			'product',
			'image'
		]







	