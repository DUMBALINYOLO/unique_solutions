import datetime
from rest_framework import viewsets, generics, permissions, status
from knox.auth import TokenAuthentication
from django.db.models import Q as ComplexQueryLookUp
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from django.contrib.auth import get_user_model
from products.serializers import (
			ProductCreateUpdateSerializer,
			ProductListDetailSerializer,
			ProductImageCreateSerializer,
			ProductImageListSerializer,
		)
from products.models import Product, ProductImage



def get_product(id):

	product = get_object_or_404(Product, id=id)

	return product





class ProductViewSet(viewsets.ModelViewSet):

	permission_classes = [permissions.AllowAny, ]

	queryset = Product.objects.order_by('-id')




	def get_serializer_class(self):

		if self.action in ['create', 'patch', 'put', 'update']:
			return ProductCreateUpdateSerializer
		return ProductListDetailSerializer




class ProductImageViewSet(viewsets.ModelViewSet):

	permission_classes = [permissions.AllowAny, ]



	def get_serializer_class(self):
		if self.action in ['create', 'put', 'patch']:
			return ProductImageCreateSerializer
		return ProductImageListSerializer


	def create(self, request, *args, **kwargs):
		data = request.data.copy()
		product = get_product(draft_request_data.get('product'))
		draft_request_data["product"] = product.pk
		serializer = self.get_serializer(data=draft_request_data)
		serializer.is_valid(raise_exception=True)
		self.perform_create(serializer)
		headers = self.get_success_headers(serializer.data)
		return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)



	def get_queryset(self, *args, **kwargs):

		queryset = ProductImage.objects.select_related(
										'product'
									).order_by('-id')

		product_id = self.request.query_params.get('id', None)

		product = get_product(product_id)

		if product_id is not None:
			queryset = queryset.filter(
						product=product
				)


		return queryset

















 



