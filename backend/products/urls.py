from django.urls import path
from .api import ProductsApi, BrandsApi, ProductDetailApi, BrandDetailApi



urlpatterns = [
    path("products/", ProductsApi.as_view(), name="products_api"),
    path("products/<int:pk>", ProductDetailApi().as_view(), name="product_detail_api"),

    path("brands/", BrandsApi.as_view(), name="brands_api"),
    path("brands/<int:pk>", BrandDetailApi.as_view(), name="brand_detail_api"),


]
