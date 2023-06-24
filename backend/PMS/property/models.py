from django.db import models
from account.models  import User

class Property(models.Model):
    owner_name      = models.CharField(max_length=100)
    property_name   = models.CharField(max_length=100)
    price           = models.CharField(max_length=200)
    address         = models.CharField(max_length=250)    
    description     = models.TextField()    
    phone_number    = models.CharField(max_length=12)
    rooms_available = models.IntegerField()    
    room_type       = models.CharField(max_length=100)
    image_first     = models.ImageField(upload_to='property',blank=True, null=True)
    image_second    = models.ImageField(upload_to='property',blank=True, null=True)
    image_third     = models.ImageField(upload_to='property',blank=True, null=True)
    image_fourth    = models.ImageField(upload_to='property',blank=True, null=True)
   

    def __str__(self):
        return self.property_name


class Reservation(models.Model):
    property = models.ForeignKey(Property, on_delete=models.CASCADE)
    booked_user = models.ForeignKey(User,on_delete=models.CASCADE)
    order_amount = models.CharField(max_length=25)
    order_payment_id = models.CharField(max_length=100)
    isPaid = models.BooleanField(default=False)
    order_date = models.DateTimeField(auto_now=True)
    firtname = models.CharField(max_length=500,null=False)
    addrress = models.CharField(max_length=500,null=False)
    email = models.CharField(max_length=500,null=False)
    phone = models.CharField(max_length=500,null=False)

    def __str__(self):
        return self.order_product
    

  
