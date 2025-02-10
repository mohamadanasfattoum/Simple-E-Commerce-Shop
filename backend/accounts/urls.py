from django.urls import path
from .api import UserAccountApi



urlpatterns = [
    path("users/", UserAccountApi.as_view(), name="user_ccount"),

]
