from rest_framework import serializers
from services.models import Service, ServiceImage
from drf_extra_fields.fields import Base64ImageField



class ServiceCreateUpdateSerializer(serializers.ModelSerializer):
	primary_image = Base64ImageField(required=True)


	class Meta:
		model = Service
		fields = "__all__"




class ServiceListDetailSerializer(serializers.ModelSerializer):

	class Meta:
		model = Service
		fields = [
			'id',
			'name',
		    'description',
		    'fee',
		    'category',
		    'listed',

		]


	



class ServiceImageCreateSerializer(serializers.ModelSerializer):

	image = Base64ImageField(required=True)

	class Meta:
		model = ServiceImage
		fields = [

			'service',
			'image'
		]



class ServiceImageListSerializer(serializers.ModelSerializer):

	class Meta:
		model = ServiceImage
		fields = [

			'id',
			'service',
			'image'
		]







	