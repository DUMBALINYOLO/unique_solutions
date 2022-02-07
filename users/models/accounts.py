from django.db import models
import uuid
from django.db import models
from datetime import date
from django.utils import timezone
from django.core.validators import RegexValidator
from django.contrib.auth.models import (
        BaseUserManager,
        AbstractBaseUser,
        AbstractUser,
        PermissionsMixin
    )



class UserManager(BaseUserManager):


    def create_user(
                self,
                email,
                is_superuser=False,
                password=None,
                is_active=True,
                is_staff=False,
                is_admin=False,
                **extra_fields
                ):
        if not email:
            raise ValueError("Enter Valid Email")
        user_obj = self.model(
                email=self.normalize_email(email)
        )
        user_obj.set_password(password)
        user_obj.staff = is_staff
        user_obj.admin = is_admin
        user_obj.active = is_active
        user_obj.save(using=self._db)
        return user_obj


    def create_superuser(self, email, password=None, **extra_fields):
        user=self.create_user(
            email,
            password = password,
            is_staff = True,
            is_admin =True,
            is_superuser=True,
            **extra_fields
        )
        return user





class User(AbstractBaseUser, PermissionsMixin):
    USER_TITLE_CHOICES = [
		('sir', 'SIR'),
		('miss', 'MISS'),
		('mr', 'MR'),
		('mrs', 'MRS'),
		('doc', 'Doctor'),
		('prof', 'Proffesor')
	]



    GENDER_CHOICES = [
            ('male', 'MALE'),
            ('female', 'FEMALE')

    ]

    USER_STATUS_CHOICES = [
            ('pending', 'Pending Activation'),
            ('active', 'Activated'),
            ('de-activated', 'de-activated')
    ]

    USER_TYPE_CHOICES = [
			('admin', 'ADMIN'),
			('bursar', 'BURSAR'),
            ('student', 'STUDENT'),

		]

    base_type = 0

    id = models.AutoField(primary_key=True)
    email = models.EmailField(
                        unique=True,
                        blank=True,
                        null=True,
                        max_length=355
                    )
    active = models.BooleanField(default=True)
    staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    admin = models.BooleanField(default=False)
    type = models.CharField(choices = USER_TYPE_CHOICES, max_length=341, default=base_type)
    username = models.CharField(max_length=341, blank=True, unique=True, null=True)
    title = models.CharField(max_length=200, blank=True, null=True, choices=USER_TITLE_CHOICES)
    gender = models.CharField(
                    max_length=500,
                    choices=GENDER_CHOICES,
                    blank=True,
                    null=True
                )
    id_number = models.CharField(max_length=64, blank=True, null=True)
    first_name = models.CharField(max_length =32, blank=True, null=True)
    middle_name = models.CharField(max_length =32, blank=True, null=True)
    last_name = models.CharField(max_length =32, blank=True, null=True,)
    phone_number = models.CharField(max_length =32, blank=True, null=True,)
    whatsapp_number = models.CharField(max_length =32, blank=True, null=True,)
    start_date = models.DateTimeField(auto_now_add=True, blank=True, null=True)


    def save(self, *args, **kwargs):
        if not self.pk:
            self.type = self.base_type
        super(User, self).save(*args, **kwargs)






    def __str__(self):
        if self.username is not None:
            return self.username
        return self.email




    objects = UserManager()


    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'type', 'first_name', 'last_name']

    @property
    def token(self):
        dt = datetime.now() + timedelta(days=days)
        token = jwt.encode({
            'id': user_id,
            'exp': int(time.mktime(dt.timetuple()))
        }, settings.SECRET_KEY, algorithm='HS256')
        return token.decode('utf-8')


    def get_full_name(self):
        return self.email

    def get_short_name(self):
        return self.email

    def has_perm(self, perm, obj=None):
        return True

    def has_module_perms(self, app_label):
        return True

    @property
    def is_staff(self):
        return self.staff


    @property
    def is_admin(self):
        return self.admin


    @property
    def is_active(self):
        return self.active


    @property
    def is_anonymous(self):
        """
        Always return False. This is a way of comparing User objects to
        anonymous users.
        """
        return False

    @property
    def is_authenticated(self):
        """
        Always return True. This is a way to tell if the user has been
        authenticated in templates.
        """
        return True


    @classmethod
    def is_email_taken(cls, email):
        try:
            cls.objects.get(email=email)
            return True
        except User.DoesNotExist:
            return False



class UserPasswordResetCode(models.Model):
    user = models.ForeignKey(
                        'User',
                        on_delete = models.CASCADE,
                        related_name='resetters',
                        blank=False,
                        null=False
                    )
    reset_code = models.CharField(
                            max_length=351,
                            unique=True,
                        )
    expired = models.BooleanField(default=False)
    uses = models.IntegerField(default=0)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.reset_code
