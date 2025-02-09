from django.db import models
from django.contrib.auth.models import User


class UserAccount(models.Model):
    user = models.OneToOneField(User, related_name='Accounts', on_delete=models.CASCADE)
    note  = models.TextField(max_length=100, blank=True, null=True)
