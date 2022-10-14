from django.urls import path, include
from django.conf import settings
import debug_toolbar
from manager_api_app.views import (
    party_register_view, pokemon_register_view, pokemon_list_view,
    party_list_view, party_grid_pokemon_view, party_name_pokemon_view,
    battle_record_register_view, battle_result_count_view, account_register_view,
    pokemon_selection_rate_view,
)

urlpatterns = [
    # アカウント登録のルーティング
    path('account_register/', account_register_view.AccountRegisterView.as_view(), name='account_register'),
    # ポケモン登録のルーティング
    path('pokemon_register/', pokemon_register_view.PokemonRegisterView.as_view(), name='pokemon_register'),
    # ポケモン一覧取得のルーティング
    path('pokemon_list/', pokemon_list_view.PokemonListView.as_view(), name='pokemon_list'),
    # パーティー一覧取得のルーティング
    path('party_list/', party_list_view.PartyListView.as_view(), name='party_list'),    
    # パーティー登録のルーティング
    path('party_register/', party_register_view.PartyRegisterView.as_view(), name='party_register'),
    # パーティー登録画面でのグリッド毎のポケモン情報取得のルーティング
    path('party_grid/', party_grid_pokemon_view.PartyGridView.as_view(), name='party_grid'),
    # 登録パーティー名でポケモン6匹を取得するルーティング
    path('party_name_pokemon/', party_name_pokemon_view.PartyNamePokemonView.as_view(), name='party_name_pokemon'),
    # バトル戦績登録のルーティング
    path('battle_record_register/', battle_record_register_view.BattleRecordRegisterView.as_view(), name='battle_record_register'),
    # バトル対戦結果取得のルーティング
    path('battle_result_count/', battle_result_count_view.BattleResultCountView.as_view(), name='battle_result_count'),
    # 自分と相手の選出したポケモン取得のルーティング
    path('select_pokemon_list/', pokemon_selection_rate_view.PokemonSelectionRateView.as_view(), name='pokemon_selection_rate_view'),
]

# django-debug-toolbar用ルーティング
# '__debug__/'は他のURLに影響を及ぼさないならなんでも良い
# http://127.0.0.1:8000/manager_api_app/ にアクセスで確認できる(UIもAPIもDjangoで実装してるならこっち)
# if settings.DEBUG:
#     urlpatterns += [path('__debug__/', include(debug_toolbar.urls))]

# django-silk用ルーティング
# http://127.0.0.1:8000/manager_api_app/silk/ にアクセス後に
# 別タブでAPI取得するとSQLなどわかる(APIのみDjangoで実装してるならこっち)
urlpatterns += [path('silk/', include('silk.urls', namespace='silk'))]

