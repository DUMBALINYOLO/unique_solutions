
from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings
from django.conf.urls.static import static
from .views import index

urlpatterns = [
    path('admin/', admin.site.urls),
    re_path('api/services/', include('services.urls')),
    re_path('api/products/', include('products.urls')),
    re_path('api/sales/', include('sales.urls')),
    re_path('api/users/', include('users.urls')),
    path('', index),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
