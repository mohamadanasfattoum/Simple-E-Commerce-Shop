from django.db import models

# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField(max_length=1000)
    quantity = models.IntegerField()
    price = models.FloatField()
    brand = models.ForeignKey('Brand', related_name='products', on_delete=models.SET_NULL, null=True, blank=True)
    image = models.ImageField(upload_to='products',null=True, blank=True)
    vidio_url = models.URLField(null=True, blank=True)

    def __str__(self):
        return self.name
    


class Brand(models.Model):
    name = models.CharField(max_length=50)
    image = models.ImageField(upload_to='brands',null=True, blank=True)
    
    def __str__(self):
        return self.name


