from django.shortcuts import render
from rest_framework import generics
from .models import Product, Brand
from .serializers import ProductsSerializer, BrandsSerializer




class ProductsApi(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductsSerializer


class BrandsApi(generics.ListAPIView):
    queryset = Brand.objects.all()
    serializer_class = BrandsSerializer




# zu verbesser, möglich create update und delete als detail