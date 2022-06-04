"""パーティ登録のビュー"""
from rest_framework.views import APIView
from rest_framework.decorators import api_view

from manager_api_app.common.response_util import create_response
from manager_api_app.models.mst_party import MstParty

class PartyRegisterView(APIView):
    pass