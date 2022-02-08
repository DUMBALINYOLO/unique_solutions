
from django.contrib import admin
from django.urls import path, include, re_path

urlpatterns = [
    path('admin/', admin.site.urls),
    re_path('api/services', include('services.urls')),
    re_path('api/products', include('products.urls')),
    re_path('api/sales', include('sales.urls')),
    re_path('api/users', include('users.urls')),
]
