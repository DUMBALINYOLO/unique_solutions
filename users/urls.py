from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .apis import (

            LoginView,
            CreateUserAPI,
            ActivationAPI,
            ForgotPassAPI,
            ResetAPI,
            UserViewSet,
        )



router = DefaultRouter()

router.register(r'users', UserViewSet, basename='users')



urlpatterns = [
    path('register-user/', CreateUserAPI.as_view()),
    path('activate-user/', ActivationAPI.as_view()),
    path('reset-password/', ResetAPI.as_view()),
    path('forgot-password/',ForgotPassAPI.as_view()),
	path('login/', LoginView.as_view()),
] + router.urls