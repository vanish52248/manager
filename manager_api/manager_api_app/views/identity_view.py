"""個性のビュー"""
import json
import logging

from rest_framework.views import APIView
from rest_framework.decorators import api_view

from manager_api_app.common.response_util import create_response
from manager_api_app.models.mst_identity import MstIdentity

class IdentityView(APIView):
    """個性のビュー"""
    def get(self, request) -> list[str]:
        logger = logging.getLogger(__name__)
        logger.info("manager/identity/")

        result_data = MstIdentity.objects.all().values()
                    
        return create_response(
            response_body=result_data,
            result_code="0",
            messages=""
        )
