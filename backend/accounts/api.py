from django.shortcuts import render
from rest_framework import generics, permissions
from .models import UserAccount
from .serializer import UserAccountSerializer

# Create your views here.


class UserAccountApi(generics.ListAPIView):
    queryset= UserAccount.objects.all()
    serializer_class = UserAccountSerializer
    pagination_class = [permissions.IsAuthenticated]