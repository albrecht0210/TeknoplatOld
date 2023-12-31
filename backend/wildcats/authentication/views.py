from django.conf import settings
from rest_framework import views
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializer import WildcatTokenObtainPairSerializer

PUBLIC_KEY = open(settings.JWT_PUBLIC_KEY_PATH).read()

# Create your views here.
class PublicKeyAPIView(views.APIView):
    def get(self, request):
        return Response({'public_key': PUBLIC_KEY})
    
class WildcatTokenObtainPairView(TokenObtainPairView):
    serializer_class = WildcatTokenObtainPairSerializer