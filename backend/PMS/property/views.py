from rest_framework import generics
from .models import Property
from .serializers import PropertySerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import json
import environ
import razorpay
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import render
from django.views import View
from django.http import JsonResponse

from .models import Property
from .models import Reservation
from .serializers import ReservationSerializer


class PropertyListView(generics.ListAPIView):
    queryset = Property.objects.all()
    serializer_class = PropertySerializer


class PropertyDetailView(APIView):
    def get(self, request, id):
        try:
            property = Property.objects.get(id=id)
            serializer = PropertySerializer(property)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Property.DoesNotExist:
            return Response(
                {"detail": "Property not found."},
                status=status.HTTP_404_NOT_FOUND
            )




class CreatePropertyAPIView(APIView):
    def post(self, request):
        serializer = PropertySerializer(data=request.data)
        print(serializer.is_valid())
        print(serializer.errors)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Property created successfully'}, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        

PUBLIC_KEY = 'rzp_test_8emA6zzli6nGP1'

SECRET_KEY =  'O4RlOXRxnLAX8IaXM3ifqFZZ'

@api_view(['POST'])
def start_payment(request):
   
    amount = request.data['amount']
    name = request.data['name']
    print(amount,name)

   
    client = razorpay.Client(auth=(PUBLIC_KEY,SECRET_KEY))

    payment = client.order.create({"amount": int(amount) * 100, 
                                   "currency": "INR", 
                                   "payment_capture": "1"})

    order = Reservation.objects.create(order_product=name, 
                                 order_amount=amount, 
                                 order_payment_id=payment['id'])

    serializer = ReservationSerializer(order)

    data = {
        "payment": payment,
        "order": serializer.data
    }
    return Response(data)


@api_view(['POST'])
def handle_payment_success(request):
    
    res = json.loads(request.data["response"])

    ord_id = ""
    raz_pay_id = ""
    raz_signature = ""

  
    for key in res.keys():
        if key == 'razorpay_order_id':
            ord_id = res[key]
        elif key == 'razorpay_payment_id':
            raz_pay_id = res[key]
        elif key == 'razorpay_signature':
            raz_signature = res[key]

    
    order = Reservation.objects.get(order_payment_id=ord_id)

    
    data = {
        'razorpay_order_id': ord_id,
        'razorpay_payment_id': raz_pay_id,
        'razorpay_signature': raz_signature
    }

    client = razorpay.Client(auth=(PUBLIC_KEY,SECRET_KEY))

    
    check = client.utility.verify_payment_signature(data)

    if check is not None:
        print("Redirect to error url or error page")
        return Response({'error': 'Something went wrong'})

    
    order.isPaid = True
    order.save()

    res_data = {
        'message': 'payment successfully received!'
    }

    return Response(res_data)
