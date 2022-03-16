"""体重管理のシリアライザー"""
from rest_framework import serializers

from manager_api_app.entities.body_weight_entity import BodyWeightResponse

class RecordsListResponseSerializer(serializers.Serializer):
    """records用のシリアライザー"""
    id = serializers.IntegerField(required=True)
    weight = serializers.IntegerField(required=True)
    users = serializers.CharField(required=True)

class BodyWeightResponseSerializer(serializers.ListSerializer):
    """レスポンス用のシリアライザー"""
    child = RecordsListResponseSerializer()
    
    def create(self, validated_data):
        return BodyWeightResponse(**validated_data)
    