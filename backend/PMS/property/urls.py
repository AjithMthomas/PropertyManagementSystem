from django.urls import path
from . import views
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('properties/',views.PropertyListView.as_view(), name='property-list'),
    path('single_property/<int:id>/',views.PropertyDetailView.as_view(), name='property-detail'),
    path('properties/create/',views.CreatePropertyAPIView.as_view(), name='create_property_api'),
    path('pay/',views.start_payment, name="payment"),
    path('payment/success/',views.handle_payment_success, name="payment_success")

]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
