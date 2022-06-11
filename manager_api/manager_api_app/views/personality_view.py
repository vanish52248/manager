"""性格のビュー"""
import json
import logging

from rest_framework.views import APIView
from rest_framework.decorators import api_view

from manager_api_app.common.response_util import create_response
from manager_api_app.models.mst_personality import MstPersonality

class PersonalityView(APIView):
    """性格のビュー"""
    def get(self, request) -> list[str]:
        logger = logging.getLogger(__name__)
        logger.info(f"manager/personality/")

        result_data = MstPersonality.objects.all().values()
                    
        return create_response(
            response_body=result_data,
            result_code="0",
            messages=""
        )
