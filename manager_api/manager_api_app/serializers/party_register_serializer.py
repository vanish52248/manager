"""パーティ登録のシリアライザ"""
from rest_framework import serializers
from manager_api_app.models.mst_party import MstParty

class PartySerializer(serializers.ModelSerializer):
    class Meta:
        model = MstParty
        fields = '__all__'
