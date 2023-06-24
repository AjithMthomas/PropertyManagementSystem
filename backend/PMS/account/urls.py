from django.urls import path
from .views import UserRegistration
from . import views
from .views import MyTokenObtainPairView

urlpatterns = [
    path('', views.getRoutes),
    path('register/',UserRegistration.as_view()),
    path('activate/<uidb64>/<token> ', views.activate, name='activate'),
    path('login/',MyTokenObtainPairView.as_view(), name='token_obtain_pair'),

]