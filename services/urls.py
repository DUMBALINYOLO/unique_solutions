from rest_framework.routers import DefaultRouter
from .apis import ServiceViewSet, ServiceImageViewSet



router = DefaultRouter()


router.register(r'services', ServiceViewSet, basename='services')
router.register(r'service-images', ServiceImageViewSet, basename='service-images')


urlpatterns = router.urls