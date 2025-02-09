from django.urls import path
from .api import UserAccountApi



urlpatterns = [
    path("user/", UserAccountApi.as_view(), name="user_ccount"),

]
