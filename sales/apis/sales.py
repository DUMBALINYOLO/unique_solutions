from rest_framework import viewsets, permissions, status, viewsets, views
from rest_framework.response import Response
from rest_framework.decorators import action
from django.db.models import Q as ComplexQueryFilter
from sales.models import (
							Invoice,
							InvoiceLine,
							Payment,

						)
from sales.serializers import (
						InvoiceCreateUpdateSerializer,
						InvoiceDetailSerializer,
						InvoiceLineCreateSerializer,
						PaymentCreateUpdateSerializer,
						PaymentListDetailSerializer,
						InvoiceLineListSerializer,
					)
from knox.auth import TokenAuthentication
from users.models import AdminUser, Customer
from products.models import Product, ProductImage
from services.models import Service, ServiceImage
from rest_framework.parsers import JSONParser





def get_invoice(invoice_id):
	try:
		invoice = Invoice.objects.get(id=invoice_id)
		return invoice
	except Invoice.DoesNotExist:
		return 'Invoice Does Not Exist'


def get_service(service_id):
	try:
		service = Service.objects.get(id=service_id)
		return service
	except Service.DoesNotExist:
		return 'Service Does Not Exist'



def get_product(product_id):
	try:
		product = Product.objects.get(id=product_id)
		return product
	except Product.DoesNotExist:
		return 'Product Does Not Exist'


def get_bookkeeper(email):
	try:
		bookkeeper = AdminUser.objects.get(email=email)
		return bookkeeper
	except:
		return 'Bursar Does Not Exist'


def get_customer(email):
	try:
		customer = Customer.objects.get(email=email)
		return customer
	except:
		return 'Customer Does Not Exist'


def customer_total_due(transactions):
    return sum([transaction.total_due for transaction in transactions])



class QuotationViewSet(viewsets.ModelViewSet):
	authentication_classes = [TokenAuthentication, ]
	permission_classes = [permissions.IsAuthenticated,]
	lookup_field = 'id'

	def get_serializer_class(self):
		if self.action in ['list', 'retrieve']:
			return  InvoiceDetailSerializer
		return InvoiceCreateUpdateSerializer


	def create(self, request, *args, **kwargs):
		data = request.data.copy()
		print(data)
		user = request.user
		bursar = get_bursar(user.email)
		customer = get_customer(data['customer'])
		data['bookkeeper'] = bursar.pk
		data['validated_by'] = user.pk
		data['customer'] = customer.pk
		data['i_type'] = "QUOTATION"
		serializer = self.get_serializer(data=data)
		serializer.is_valid(raise_exception=True)
		self.perform_create(serializer)
		headers = self.get_success_headers(serializer.data)
		return Response(
			serializer.data,
			headers=headers,
			status=status.HTTP_201_CREATED,
		)



	def get_queryset(self, *args, **kwargs):
		queryset = Invoice.objects.prefetch_related(
											'validated_by',
											'customer',
											'bookkeeper',

										).order_by('-id')

		return queryset



	@action(detail=True, methods=['post', 'list', 'get', 'create'])
	def make_invoice(self, request, *args, **kwargs):
		user = request.user
		data = request.data.copy()
		invoice=get_invoice(data['invoice'])
		invoice.i_type = "INVOICE"
		return Response(
			status=status.HTTP_201_CREATED,
		)






class InvoiceViewSet(viewsets.ModelViewSet):
	authentication_classes = [TokenAuthentication, ]
	permission_classes = [permissions.IsAuthenticated,]
	lookup_field = 'id'

	def get_serializer_class(self):
		if self.action in ['list', 'retrieve']:
			return  InvoiceDetailSerializer
		return InvoiceCreateUpdateSerializer


	def create(self, request, *args, **kwargs):
		data = request.data.copy()
		print(data)
		user = request.user
		bursar = get_bursar(user.email)
		customer = get_customer(data['customer'])
		data['bookkeeper'] = bursar.pk
		data['validated_by'] = user.pk
		data['customer'] = customer.pk
		data['i_type'] = "INVOICE"
		serializer = self.get_serializer(data=data)
		serializer.is_valid(raise_exception=True)
		self.perform_create(serializer)
		headers = self.get_success_headers(serializer.data)
		return Response(
			serializer.data,
			headers=headers,
			status=status.HTTP_201_CREATED,
		)



	def get_queryset(self, *args, **kwargs):
		queryset = Invoice.objects.prefetch_related(
											'validated_by',
											'customer',
											'bookkeeper',

										).order_by('-id')

		return queryset






	@action(detail=True, methods=['post', 'list', 'get', 'create'])
	def pay(self, request, *args, **kwargs):
		user = request.user
		data = request.data.copy()
		print(data)
		bursar = get_bursar(user.email)
		invoice=get_invoice(data['invoice'])
		data['bookkeeper'] = bursar.pk
		data['invoice'] = invoice.pk
		serializer = PaymentCreateUpdateSerializer(data=data)
		serializer.is_valid(raise_exception=True)
		self.perform_create(serializer)
		headers = self.get_success_headers(serializer.data)
		return Response(
			serializer.data,
			headers=headers,
			status=status.HTTP_201_CREATED,
		)



class InvoiceLineViewSet(viewsets.ModelViewSet):
	authentication_classes = [TokenAuthentication, ]
	permission_classes = [permissions.IsAuthenticated,]
	lookup_field = 'id'

	def get_serializer_class(self):
		if self.action in ['list', 'retrieve']:
			return  InvoiceLineListSerializer
		return InvoiceLineCreateUpdateSerializer

	def get_queryset(self, *args, **kwargs):
		queryset = InvoiceLine.objects.select_related(
											'invoice'
										)
		invoice_id = self.request.query_params.get('id', None)
		if invoice_id is not None:
			invoice = get_invoice(invoice_id)
			if invoice != 'Invoice Does Not Exist':
				queryset = queryset.filter(
					invoice=invoice
				)
			else:
				queryset = []

		return queryset


class PaymentViewSet(viewsets.ModelViewSet):
	authentication_classes = [TokenAuthentication, ]
	permission_classes = [permissions.IsAuthenticated,]
	lookup_field = 'id'

	def get_serializer_class(self):
		if self.action in ['list', 'retrieve']:
			return  PaymentListDetailSerializer
		return PaymentCreateUpdateSerializer

	def get_queryset(self, *args, **kwargs):
		queryset = Payment.objects.select_related(
											'invoice'
										)
		invoice_id = self.request.query_params.get('id', None)
		if invoice_id is not None:
			invoice = get_invoice(invoice_id)
			if invoice != 'Invoice Does Not Exist':
				queryset = queryset.filter(
					invoice=invoice
				)
			else:
				queryset = []

		return queryset




class PaymentReport(views.APIView):
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = (TokenAuthentication,)

    def get(self, *args, **kwargs):
        customers = []

        for customer in Customer.objects.all():

            customer_report_data = {
                'id': customer.id,
                'name': customer.first_name,
				'surname': customer.last_name,
				'unpaid_invoices': len([invoice for invoice in customer.myinvoices.all() if invoice.status =='unpaid']),
				'partially_paid_invoices': len([invoice for invoice in customer.myinvoices.all() if invoice.status =='partially']),
				'fully_paid_invoices': len([invoice for invoice in customer.myinvoices.all() if invoice.status =='fully']),
				'total_due': customer_total_due(customer.myinvoices.all()),
            }
            customers.append(customer_report_data)

        return Response(customers, status=status.HTTP_200_OK)






class CustomerProductLineViewSet(viewsets.ModelViewSet):

	authentication_classes = (TokenAuthentication,)
	permission_classes = [permissions.IsAuthenticated,]
	parser_classes = [JSONParser,]


	def get_seriealizer(self, *args, **kwargs):
	    if self.action in ['create', 'patch', 'put']:
	        return InvoiceLineCreateSerializer
	    return InvoiceLineListSerializer



	def get_queryset(self, *args, **kwargs):

	    invoice_id = self.request.query_params.get('id', None)

	    queryset = InvoiceLine.objects.select_related(
	                                       'invoice',
	                                        'service',
	                                        'product',
	                                    ).filter(
	                                        ~ComplexQueryFilter(
	                                            type__in =[
	                                                'service',
	                                            ]
	                                        )
	                                    ).order_by('-id')

	    if invoice_id is not None:
	        if invoice_id != 'undefined':
	            queryset = queryset.filter(
	                            invoice = get_invoice(invoice_id)
	                    )
	        else:
	            queryset = []
	    return queryset


	def create(self, request, *args, **kwargs):
		data = request.data.copy()
		print(data)
		user = request.user

		order_qs = Invoice.objects.filter(
			customer=user,
			ordered=False

		)
		if not order_qs.exists():
			order = Invoice.objects.create(
								customer = user,
								i_type = 'INVOICE'
							)
			product = get_product(data['product'])
			order_items = InvoiceLine.objects.filter(
											product=product,
											ordered=False,
											type ="PRODUCTS",
											invoice=order
										)
			if order_items.exists():
				item = order_items[0]
				quantity = data['quantity']
				item.quantity += quantity
				item.save()
			else:
				InvoiceLine.objects.create(
								type = 'PRODUCTS',
								product = get_product(data['product']),
								quantity = data['quantity'],
								invoice = order,
							)

		else:
			order =  order_qs[0]
			product = get_product(data['product'])
			order_items = InvoiceLine.objects.filter(
											product=product,
											ordered=False,
											invoice=order
										)
			if order_items.exists():
				item = order_items[0]
				quantity = data['quantity']
				item.quantity += int(quantity)
				item.save()
			else:
				InvoiceLine.objects.create(
								type = 'PRODUCTS',
								product = get_product(data['product']),
								quantity = data['quantity'],
								invoice = order,
							)
		return Response(status=status.HTTP_201_CREATED)





class CustomerServiceLineViewSet(viewsets.ModelViewSet):

	authentication_classes = (TokenAuthentication,)
	permission_classes = [permissions.IsAuthenticated,]
	parser_classes = [JSONParser,]


	def get_seriealizer(self, *args, **kwargs):
	    if self.action in ['create', 'patch', 'put']:
	        return InvoiceLineCreateSerializer
	    return InvoiceLineListSerializer



	def get_queryset(self, *args, **kwargs):

	    invoice_id = self.request.query_params.get('id', None)

	    queryset = InvoiceLine.objects.select_related(
	                                       'invoice',
	                                        'service',
	                                        'product',
	                                    ).filter(
	                                        ~ComplexQueryFilter(
	                                            type__in =[
	                                                'product',
	                                            ]
	                                        )
	                                    ).order_by('-id')

	    if invoice_id is not None:
	        if invoice_id != 'undefined':
	            queryset = queryset.filter(
	                            invoice = get_invoice(invoice_id)
	                    )
	        else:
	            queryset = []
	    return queryset



	def create(self, request, *args, **kwargs):
		data = request.data.copy()
		print(data)
		user = request.user

		order_qs = Invoice.objects.filter(
			customer=user,
			ordered=False

		)
		if not order_qs.exists():
			order = Invoice.objects.create(
								customer = user,
								i_type = 'INVOICE'
							)
			service = get_service(data['service'])
			order_items = InvoiceLine.objects.filter(
											service=service,
											ordered=False,
											invoice=order
										)
			if order_items.exists():
				item = order_items[0]
				quantity = data['quantity']
				item.quantity += quantity
				item.save()
			else:
				InvoiceLine.objects.create(
								type = 'SERVICES',
								service = get_service(data['service']),
								quantity = data['quantity'],
								invoice = order,
							)

		else:
			order =  order_qs[0]
			service = get_service(data['service'])
			order_items = InvoiceLine.objects.filter(
											service=service,
											ordered=False,
											invoice=order
										)
			if order_items.exists():
				item = order_items[0]
				quantity = data['quantity']
				item.quantity += int(quantity)
				item.save()
			else:
				InvoiceLine.objects.create(
								type = 'SERVICES',
								service = get_service(data['service']),
								quantity = data['quantity'],
								invoice = order,
							)
		return Response(status=status.HTTP_201_CREATED)




# class CustomerCartAPIView(views.APIView):
# 	permission_classes = [permissions.IsAuthenticated,]
# 	authentication_classes = (TokenAuthentication,)
# 	parser_classes = [JSONParser,]

# 	def get(self, *args, **kwargs):
# 		customer_email = self.request.query_params.get('email', None)
# 		if customer_email is not None:
# 			customer = get_customer(customer_email)
# 			orders = Invoice.objects.filter(
# 								ComplexQueryFilter(ordered=True) &
# 								ComplexQueryFilter(customer=customer)&
# 								~ComplexQueryFilter(status='unverified')
# 							).prefetch_related(
# 									'validated_by',
# 									'entry',
# 									'customer',
# 								).order_by('-id')
# 			print(orders)

# 			unpaid_orders = []
# 			for order in orders:
# 				if order.payment_status in ['paid-partially', 'unpaid']:
# 					unpaid_orders.append(order)
# 			print(unpaid_orders)

# 			lines = []
# 			for invoice in unpaid_orders:
# 				for line in invoice.lines.all():
# 					cart = {
# 					'id': line.id,
# 					'type': line.type,
# 					'product': line.product.title,
# 					'unit_price': line.price,
# 					'quantity': line.quantity,
# 					'subtotal': line.subtotal,
# 					'tax': line.tax_,
# 					'discount': line.discount_total,
# 					'total': line.total,
# 					}
# 					lines.append(cart)
# 			data = {
# 				'total_paid': get_total_paid(unpaid_orders),
# 				'total_owed': get_total_owed(unpaid_orders),
# 				'total':  get_total(unpaid_orders),
# 				'subtotal': get_subtotal(unpaid_orders),
# 				'tax': get_tax(unpaid_orders),
# 				'lines': lines

# 			}

# 			print(data)

# 			return Response(data, status=status.HTTP_200_OK)
# 		else:
# 			return Response({'msg': 'cart not found'}, status=status.HTTP_400_BAD_REQUEST)
