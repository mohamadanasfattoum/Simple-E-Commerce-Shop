from django.shortcuts import render
from rest_framework import generics
from .models import Product, Brand
from .serializers import ProductsSerializer, BrandsSerializer




class ProductsApi(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductsSerializer


class BrandstApi(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = BrandsSerializer