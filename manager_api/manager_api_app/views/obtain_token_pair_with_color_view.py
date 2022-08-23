"""JWT認証のビュー"""
from manager_api_app.serializers.obtain_token_pair_with_color_serializer import MyTokenObtainPairSerializer

class ObtainTokenPairWithColorView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
