from rest_framework import serializers
from django.contrib.auth import authenticate, get_user_model
from django.contrib.auth import password_validation
from rest_framework.exceptions import ValidationError
from users.models import (
            AdminUser,
            Customer,

        )




User = get_user_model()



# Rest Password Serializer
class ResetSerializer(serializers.Serializer):

    password = serializers.CharField(required=True)
    password2 = serializers.CharField(required=True)
    email = serializers.CharField(required=True)

    class Meta:
        model = User
        fields = [
            'id',
            'password',
            'password2',
            'email',
        ]


# Change Password Serializer
class ChangePassSerializer(serializers.Serializer):

    model = User
    password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True)



# Change Password Serializer
class ForgotPassSerialiazer(serializers.Serializer):

    model = User
    password = serializers.CharField(required=True)



class LoginSerializer(serializers.Serializer):
    email = serializers.CharField()
    password = serializers.CharField()



    def validate(self, data):
        print(data)
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect Credentials")



class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'email', 'type', 'username', 'first_name', 'last_name')


class UserCreateSerializer(serializers.ModelSerializer):

    class Meta:
    	model = User
    	fields = [
            'id',
            'email',
            'type',
            'username',
            'password',
            'first_name',
            'gender',
            'last_name',
            'middle_name',
        ]

    	extra_kwargs = {'password':{"write_only": True}}


    def create(self, validated_data):
        type = validated_data['type']
        print(validated_data)
        if type =='admin':
            admin = AdminUser.objects.create_admin(
                				email = validated_data['email'],
                                username =  validated_data['username'],
                                gender = validated_data['gender'],
                				first_name = validated_data['first_name'],
                                middle_name = validated_data['middle_name'],
                                last_name = validated_data['last_name'],
                                password = validated_data['password'],
                			)
            return admin
        elif type == 'customer':
            customer = Customer.objects.create_customer(
                				email = validated_data['email'],
                                username =  validated_data['username'],
                				first_name = validated_data['first_name'],
                                gender = validated_data['gender'],
                                middle_name = validated_data['middle_name'],
                                last_name = validated_data['last_name'],
                                password = validated_data['password'],
                			)
            return customer
        else:
            print('No user type exists')




class UserListDetailSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = "__all__"
