from django.urls import path
from .api import ProductsApi, BrandsApi



urlpatterns = [
    path("products/", ProductsApi.as_view(), name="products_api"),
    path("brands/", BrandsApi.as_view(), name="brands_api"),

]
