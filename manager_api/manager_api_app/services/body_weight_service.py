"""体重管理のサービス"""
from manager_api_app.models.body_weight import BodyWeight
# from manager_api_app.serializers.body_weight_serializer import BodyWeightResponseSerializer

class BodyWeightService():
    """体重管理のサービス"""
    def get_users(self):
        print("<------------------set_userメソッド(service)の処理開始------------------>")
        users = BodyWeight.objects.filter(delete_flag=0)
        result_list = []
        for user in users:
            result_list.append(
                {
                # "id": user.id,
                # "weight": user.weight,
                "users": user.users
                }
            )
        print(f"result_list:{result_list}")
        
        return result_list