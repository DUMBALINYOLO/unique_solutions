from django.contrib.auth.password_validation import validate_password
from knox.auth import TokenAuthentication
from rest_framework import generics, permissions
from rest_framework.exceptions import NotFound
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from django.contrib.auth import get_user_model
from users.models import (
                    User,
                    AdminUser,
                    Customer,



                )
from rest_framework import viewsets, views
from rest_framework import status
from django.core.mail import BadHeaderError, send_mail
from django.conf import settings

from knox.models import AuthToken
from rest_framework import viewsets, generics, permissions, status
from knox.auth import TokenAuthentication
from rest_framework.decorators import action
from django.shortcuts import get_object_or_404
from django.contrib.auth import get_user_model
from django.db.models import Q as ComplexQueryLookUp
from users.models import (
                    User
                )

from rest_framework.response import Response
from users.serializers import (
                        UserListDetailSerializer

                    )


from users.serializers import (
	ResetSerializer,
	ChangePassSerializer,
	ForgotPassSerialiazer,
	LoginSerializer,
	UserSerializer,
    UserCreateSerializer

)
from users.models import User, UserPasswordResetCode
from rest_framework.parsers import JSONParser
import random
from string import digits, ascii_uppercase
from django.core.exceptions import ObjectDoesNotExist
from django.core.mail import BadHeaderError, send_mail




legals = digits + ascii_uppercase

def rand_string(length=350, char_set=legals):
    output = ''
    for _ in range(length):
        output += random.choice(char_set)
    return output


def get_user_with_mail(email):
    try:
        user = User.objects.get(email=email)
        return user
    except User.DoesNotExist:
        return 'An account with this email address does not Exist'


def generate_reset_token(email):
    user = get_user_with_mail(email)
    if user == 'An account with this email address does not Exist.':
        print(user)
    else:

        UserPasswordResetCode.objects.create(
            user = user,
            reset_code = rand_string(350)
        )


def get_user(token):
    try:
        reset_token = UserPasswordResetCode.objects.get(reset_code=token)
        user = reset_token.user
        return user
    except UserPasswordResetCode.DoesNotExist:
        return 'This token does not Exist'


def get_token(token):
    try:
        reset_token = UserPasswordResetCode.objects.get(reset_code=token)
        return reset_token
    except UserPasswordResetCode.DoesNotExist:
        return 'This token does not Exist'



class UserViewSet(viewsets.ModelViewSet):
    authentication_classes = (TokenAuthentication,)
    permission_classes = [permissions.IsAuthenticated,]
    serializer_class = UserListDetailSerializer
    queryset = User.objects.all()



class ForgotPassAPI(views.APIView):

    permission_classes = [
        permissions.AllowAny,
    ]

    serializer_class = ForgotPassSerialiazer

    def post(self, request, *args, **kwargs):
        data = request.data.copy()
        print(data)

        email = data['email']

        user = get_user_with_mail(email)
        if user == 'An account with this email address does not Exist':
            return Response({
                    "error": user
                }, status=status.HTTP_400_BAD_REQUEST)
        else:
            code = UserPasswordResetCode.objects.create(
                        user = user,
                        reset_code = rand_string(350)
                    )
            try:

                pass
                return Response({
                            "msg": 'Your request has been approved. Open your email and follow the instructions to set new password'
                        }, status=status.HTTP_200_OK)

            except BadHeaderError:
                print('Invalid header found.')



class ResetAPI(views.APIView):

    serializer_class = ResetSerializer

    def post(self, request, *args, **kwargs):

        data = request.data.copy()
        token = data['token']
        user = get_user(token)
        if user == 'This token does not Exist':
            return Response({
                    "error": user
                }, status=status.HTTP_400_BAD_REQUEST)
        else:
            token = get_token(token)
            if token.expired == True or token.uses >= 1:
                return Response({
                    "error": 'This token has been used and has expired'
                }, status=status.HTTP_400_BAD_REQUEST)
            else:
                token.expired = True
                token.uses += 1
                token.save()
                user.set_password(request.data.get("password"))
                user.save()
                return Response({
                            "msg": 'Your Password has been reset successfully. Proceed to login'
                        }, status=status.HTTP_200_OK)






class UserAPI(generics.RetrieveAPIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = [permissions.AllowAny,]
    serializer_class = UserSerializer

    def get_object(self):
        """
        get user object
        """
        email = self.request.query_params.get('email', None)
        if email is not None:
            user = get_user(email=email)
            return user
        return None




# Reset API
class ActivationAPI(generics.GenericAPIView):
    serializer_class = ResetSerializer
    permission_classes = [permissions.AllowAny,]

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        checked = User.objects.filter(email=request.data['email'])
        if checked.exists():
            user = checked.first()
            print(user)
            user.active = True
            user.set_password(request.data.get("password"))
            user.save()
        else:
            raise NotFound('user not found')
        return Response({"detail": f"a recovery email has been sent to the account "})



class LoginView(generics.GenericAPIView):
    permission_classes = [permissions.AllowAny]
    parser_classes = [JSONParser,]




    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
    	serializer = self.get_serializer(data=request.data)
    	serializer.is_valid(raise_exception=True)
    	user = serializer.validated_data
    	_, token = AuthToken.objects.create(user)
    	return Response({
    			"user": UserSerializer(user, context=self.get_serializer_context()).data,
    			"token": token
    		})



class CreateUserAPI(generics.GenericAPIView):
    permission_classes = [permissions.AllowAny,]
    serializer_class = UserCreateSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        try:
            pass
        except BadHeaderError:
            print('Invalid header found.')
        return Response({
        		"user": UserCreateSerializer(user, context=self.get_serializer_context()).data
        	})
