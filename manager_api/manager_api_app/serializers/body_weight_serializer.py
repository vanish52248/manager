"""体重管理のシリアライザー"""
from rest_framework import serializers

from manager_api_app.entities.body_weight_entity import BodyWeightResponse

class RecordsListResponseSerializer(serializers.ListSerializer):
    """records用のシリアライザー"""
    print("<-----------------recordsSerializerの処理開始------------------>")
    id = serializers.IntegerField(required=True)
    weight = serializers.IntegerField(required=True)
    users = serializers.CharField(required=True)

class BodyWeightResponseSerializer(serializers.Serializer):
    """レスポンス用のシリアライザー"""
    print("<-----------------responseSerializerの処理開始------------------>")
    child = RecordsListResponseSerializer()
    
    def create(self, validated_data):
        return BodyWeightResponse(**validated_data)
    