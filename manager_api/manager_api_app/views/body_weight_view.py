"""体重管理のビュー"""
import json
import logging

from rest_framework.views import APIView
from rest_framework.decorators import api_view

from manager_api_app.common.response_util import create_response
from manager_api_app.services.body_weight_service import BodyWeightService
from manager_api_app.models.body_weight import BodyWeight

class BodyWeightView(APIView):
    """体重管理のビュー"""
    
    @api_view(('GET',))
    def get_user(self) -> list[str]:
        print("<------------------set_userメソッド(view)の処理開始------------------>")
        result_data = BodyWeightService().get_users()
        
        logger = logging.getLogger(__name__)
        logger.info(result_data)
        logger.error("log error test!")
        
        return create_response(
            response_body=result_data,
            result_code="0",
            messages=""
        )

    @api_view(('POST',))
    def get_weight(request) -> int:
        print("<------------------get_weightメソッドの処理開始------------------>")
        # TODO: requestが受け取れたらserviceへ切り分けする
        weight_list = BodyWeight.objects.get(users=request.user_name, delete_flag=0)
        
        logger = logging.getLogger(__name__)
        logger.info(weight_list)
        logger.error("log error test!")
        
        return create_response(
            response_body=weight_list,
            result_code="0",
            messages=""
        )
