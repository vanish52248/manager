"""パーティ登録のシリアライザ"""
from rest_framework import serializers
from manager_api_app.models.mst_party import MstParty

class PartySerializer(serializers.ModelSerializer):
    """パーティ登録のシリアライザ"""
    class Meta:
        model = MstParty
        fields = ["party_name"]
        extra_kwargs = {'party_name': {'required': True}}

        # エラーメッセージ
        message = ""
        
    def validate_party_name(self, data):
        """パーティーの名前を必須パラメータにする"""
        if data == None:
            # UIでスナックバーに表示するメッセージ
            message = "パーティーの名前を入力しないと登録できません。"
            raise serializers.ValidationError({"error_message": message})
        
    def validate_party_pokemon_blank(self, data):
        """ポケモン6匹を必須パラメータにする"""
        if data == None:
            # UIでスナックバーに表示するメッセージ
            message = "ポケモンが1匹でも未選択の場合登録できません。"
            raise serializers.ValidationError({"error_message": message})
