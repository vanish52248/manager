from django.urls import path
from manager_api_app.views import (
    party_register_view, personality_view, identity_view, item_view,
    pokemon_register_view, pokemon_list_view, party_grid_pokemon_view
)

urlpatterns = [
    # ポケモン登録のルーティング
    path('pokemon_register/', pokemon_register_view.PokemonRegisterView.as_view(), name='pokemon_register'),
    # ポケモン一覧取得のルーティング
    path('pokemon_list/', pokemon_list_view.PokemonListView.as_view(), name='pokemon_list'),
    # パーティー登録のルーティング
    path('party_register/', party_register_view.PartyRegisterView.as_view(), name='party_register'),
    # パーティー登録画面でのグリッド毎のポケモン情報取得のルーティング
    path('party_grid/', party_grid_pokemon_view.PartyGridView.as_view(), name='party_grid'),
    # 性格取得のルーティング
    path('personality/', personality_view.PersonalityView.as_view(), name='personality'),
    # 個性取得のルーティング
    path('identity/', identity_view.IdentityView.as_view(), name='identity'),
    # 持ち物取得のルーティング
    path('item/', item_view.ItemView.as_view(), name='item'),
]
