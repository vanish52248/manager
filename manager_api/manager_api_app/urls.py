from django.urls import path
from .views import party_register_view

urlpatterns = [
    # パーティー登録のルーティング
    path('party_register/', party_register_view.PartyRegisterView, name='party_register'),
]