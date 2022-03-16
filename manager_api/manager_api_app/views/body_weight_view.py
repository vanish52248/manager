"""体重管理のビュー"""
import json

from rest_framework.views import APIView
from rest_framework.decorators import api_view, renderer_classes
from rest_framework.renderers import JSONRenderer, TemplateHTMLRenderer
from django.views.decorators.csrf import csrf_exempt

from manager_api_app.common.response_util import create_response
from manager_api_app.services.body_weight_service import BodyWeightService

class BodyWeightView(APIView):
    """体重管理のビュー"""
    @api_view(('GET',))
    @renderer_classes((TemplateHTMLRenderer, JSONRenderer))
    def get_user(self) -> list[str]:
        print("<------------------set_userメソッド(view)の処理開始------------------>")
        
        result_data = BodyWeightService().get_users()
        
        return create_response(
            response_body=result_data,
            result_code="0",
            messages=""
        )

    @csrf_exempt
    def get_weight(self, request) -> int:
        print("<------------------get_weightメソッドの処理開始------------------>")
        weight_list = BodyWeight.objects.get(users=request.user_name, delete_flag=0)
        print(f"weight_list---------------->{weight_list}")

        return create_response(
            response_body=weight_list,
            result_code="0",
            messages=""
        )

        

