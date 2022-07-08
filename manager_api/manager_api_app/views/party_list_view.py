"""登録パーティーを一覧取得するビュー"""
import json
import logging

from rest_framework.views import APIView
from rest_framework.decorators import api_view

from manager_api_app.common.response_util import create_response
from manager_api_app.models.mst_party import MstParty

class PartyListView(APIView):
    """登録パーティーを一覧取得するビュー"""
    def get(self, request) -> list[str]:
        logger = logging.getLogger(__name__)
        logger.info("manager/party_list/")

        result_data = MstParty.objects.all().values()
                    
        return create_response(
            response_body=result_data,
            result_code="0",
            messages=""
        )
