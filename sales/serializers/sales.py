from rest_framework import serializers
from sales.models import (
						Invoice,
						InvoiceLine,
						Payment,

					)
from drf_writable_nested.serializers import WritableNestedModelSerializer

class StringSerializer(serializers.StringRelatedField):

    def to_internal_value(self, value):
        return value



class InvoiceLineCreateSerializer(serializers.ModelSerializer):

	class Meta:
		model = InvoiceLine
		fields = [
			'type',
		    'service',
		    'product',
		    'quantity',
		]



class InvoiceLineListSerializer(serializers.ModelSerializer):
	service = StringSerializer()
	product = StringSerializer()


	class Meta:
		model = InvoiceLine
		fields = [
			'id',
			'type',
		    'service',
			'reference_number',
		    'product',
		    'quantity',
			'price'
		]




class InvoiceCreateUpdateSerializer(WritableNestedModelSerializer):
	lines = InvoiceLineCreateSerializer(many=True)

	class Meta:
		model = Invoice
		fields = [
			'id',
			'customer',
			'due',
			'lines',
		]




class InvoiceDetailSerializer(serializers.ModelSerializer):
	bookkeeper = StringSerializer()
	customer = StringSerializer()


	class Meta:
		model = Invoice
		fields = [
			'id',
			'tracking_number',
			'customer',
			'company_status',
			'bookkeeper',
			'due',
			'date',
			'terms',
			'comments',
			'total',
			'overdue_days',
			'total_paid',
			'total_due',
			'status',
		]



class PaymentCreateUpdateSerializer(serializers.ModelSerializer):


	class Meta:

		model = Payment
		fields = [
			'id',
			'amount',
			'invoice',
			'method',
			'bookkeeper',
			'comments',
		]





class PaymentListDetailSerializer(serializers.ModelSerializer):
	invoice = StringSerializer()
	bookkeeper = StringSerializer()

	class Meta:

		model = Payment
		fields = [
			'id',
			'amount',
			'date',
			'invoice',
			'method',
			'bookkeeper',
			'comments',
			'due',
			'reference_number',

		]
