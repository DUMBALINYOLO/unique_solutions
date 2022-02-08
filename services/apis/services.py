import datetime
from rest_framework import viewsets, generics, permissions, status
from knox.auth import TokenAuthentication
from django.db.models import Q as ComplexQueryLookUp
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from django.contrib.auth import get_user_model
from services.serializers import (
			ServiceCreateUpdateSerializer,
			ServiceListDetailSerializer,
			ServiceImageCreateSerializer,
			ServiceImageListSerializer,
		)
from services.models import Service, ServiceImage



def get_service(id):

	service = get_object_or_404(Service, id=id)

	return service





class ServiceViewSet(viewsets.ModelViewSet):

	permission_classes = [permissions.AllowAny, ]

	queryset = Service.objects.order_by('-id')




	def get_serializer_class(self):

		if self.action in ['create', 'patch', 'put', 'update']:
			return ServiceCreateUpdateSerializer
		return ServiceListDetailSerializer




class ServiceImageViewSet(viewsets.ModelViewSet):

	permission_classes = [permissions.AllowAny, ]



	def get_serializer_class(self):
		if self.action in ['create', 'put', 'patch']:
			return ServiceImageCreateSerializer
		return ServiceImageListSerializer


	def create(self, request, *args, **kwargs):
		data = request.data.copy()
		service = get_service(draft_request_data.get('service'))
		draft_request_data["service"] = service.pk
		serializer = self.get_serializer(data=draft_request_data)
		serializer.is_valid(raise_exception=True)
		self.perform_create(serializer)
		headers = self.get_success_headers(serializer.data)
		return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)



	def get_queryset(self, *args, **kwargs):

		queryset = ServiceImage.objects.select_related(
										'service'
									).order_by('-id')

		service_id = self.request.query_params.get('id', None)

		service = get_service(service_id)

		if service_id is not None:
			queryset = queryset.filter(
						service=service
				)


		return queryset
