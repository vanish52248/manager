"""HTTPレスポンスに関するユーティリティ"""

from rest_framework import status
from rest_framework.response import Response

def create_response(response_body=None,
                    result_code=None,
                    messages=None,
                    http_status=status.HTTP_200_OK) -> Response:
    """API返却用のレスポンスを生成する
    Args:
        response_body(dict | Model | dataclass): レスポンスで返却する本体
        messages(list<str> | str): レスポンスに付与するメッセージ
        http_status(status): レスポンスに設定するHTTPステータス
        code: APIの結果コード(アプリケーション判断の値)
    Returns:
        Response: API返却用レスポンス
    """
    response_data = {}
    
    response_data["result_messages"] = messages
    response_data["records"] = response_body
    response_data["result_code"] = result_code
    
    print(f"★ create_responseからフロントへ返す値:{response_data}")
    # DRFから提供されているビューは全てResponse というクラスで返却する
    # 通常の Django は HttpResponse というクラスで返す。
    return Response(response_data, http_status)