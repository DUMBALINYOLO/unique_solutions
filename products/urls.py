from rest_framework.routers import DefaultRouter
from .apis import ProductViewSet, ProductImageViewSet


router = DefaultRouter()


router.register('products', ProductViewSet, basename='products')
router.register('product-images', ProductImageViewSet, basename='product-images')



urlpatterns = router.urls