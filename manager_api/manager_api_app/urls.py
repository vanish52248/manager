from django.urls import path
from manager_api_app.views import party_register_view
from manager_api_app.views import personality_view

urlpatterns = [
    # パーティー登録のルーティング
    path('party_register/', party_register_view.PartyRegisterView.as_view(), name='party_register'),
    # 性格取得のルーティング
    path('personality/', personality_view.PersonalityView.as_view(), name='personality'),
    # 個性取得のルーティング
]