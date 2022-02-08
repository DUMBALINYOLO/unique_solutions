from rest_framework.routers import DefaultRouter
from .apis import (
		QuotationViewSet,
		InvoiceViewSet,
		InvoiceLineViewSet,
		PaymentViewSet,
		# PaymentReport,
		CustomerProductLineViewSet,
		CustomerServiceLineViewSet,

	)


router = DefaultRouter()


router.register('quotations', QuotationViewSet, basename='quotations')
router.register('invoices', InvoiceViewSet, basename='invoices')
router.register('invoice-lines', InvoiceLineViewSet, basename='invoice-lines')
router.register('payments', PaymentViewSet, basename='payments')
# router.register('payment-reports', PaymentReport, basename='payment-reports')
router.register('customer-product-lines', CustomerProductLineViewSet, basename='customer-product-lines')
router.register('customer-service-lines', CustomerServiceLineViewSet, basename='customer-service-lines')


urlpatterns = router.urls