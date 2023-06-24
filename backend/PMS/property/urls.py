from django.urls import path
from . import views
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('properties/',views.PropertyListView.as_view(), name='property_list'),
    path('single_property/<int:id>/',views.PropertyDetailView.as_view(), name='property_detail'),
    path('properties/create/',views.CreatePropertyAPIView.as_view(), name='create_property'),
    path('Edit_property/<int:id>',views.Edit_property, name='Edit-property'),
    path('search/',views.search_properties, name='search_properties'),
    path('pay/',views.start_payment, name="payment"),
    path('payment/success/',views.handle_payment_success, name="payment_success")

]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
