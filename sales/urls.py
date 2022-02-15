from rest_framework.routers import DefaultRouter
from django.urls import path
from .apis import (
		QuotationViewSet,
		InvoiceViewSet,
		InvoiceLineViewSet,
		PaymentViewSet,
		# PaymentReport,
		CustomerProductLineViewSet,
		CustomerServiceLineViewSet,
		CustomerInvoiceViewSet,
		CustomerQuotationViewSet,
		CustomerPaymentViewSet,
		CustomerCartAPIView
	)


router = DefaultRouter()


router.register('customer-payments', CustomerPaymentViewSet, basename='customer-payments')
router.register('customer-quotations', CustomerQuotationViewSet, basename='customer-quotations')
router.register('customer-invoices', CustomerInvoiceViewSet, basename='customer-invoices')
router.register('quotations', QuotationViewSet, basename='quotations')
router.register('invoices', InvoiceViewSet, basename='invoices')
router.register('invoice-lines', InvoiceLineViewSet, basename='invoice-lines')
router.register('payments', PaymentViewSet, basename='payments')
# router.register('payment-reports', PaymentReport, basename='payment-reports')
router.register('customer-product-lines', CustomerProductLineViewSet, basename='customer-product-lines')
router.register('customer-service-lines', CustomerServiceLineViewSet, basename='customer-service-lines')


urlpatterns = [
	path('customer-cart/', CustomerCartAPIView.as_view(), name='customer-cart'),
] + router.urls
