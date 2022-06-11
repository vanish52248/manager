"""パーティ登録のビュー"""
import logging
from rest_framework.views import APIView
from rest_framework.decorators import api_view

from manager_api_app.common.response_util import create_response
from manager_api_app.models.mst_party import MstParty
from manager_api_app.serializers.party_register_serializer import PartySerializer

class PartyRegisterView(APIView):
    logger = logging.getLogger(__name__)
    logger.info(f"manager/party_register/")
    serializer_class = PartySerializer
    pass

