from rest_framework import serializers
from .models import Product, Brand


class ProductsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('__all__')




class BrandsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brand
        fields = ('__all__')