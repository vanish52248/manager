"""ポケモン登録のシリアライザ"""
from rest_framework import serializers
from manager_api_app.models.mst_pokemon import MstPokemon


class PokemonSerializer(serializers.ModelSerializer):
    """ポケモン登録のシリアライザ"""
    class Meta:
        model = MstPokemon
        fields = ["poke_name"]
        extra_kwargs = {'poke_name': {'required': True}}
    
        # エラーメッセージ
        message = ""
        
    def validate_pokename(self, data):
        """ポケモンの名前を必須パラメータにする"""
        if data == None:
            # UIでスナックバーに表示するメッセージ
            message = "ポケモンの名前を入力しないと登録できません。"
            # TODO 全てのパラメータが一致するポケモンは登録できないようにシリアライズ
            raise serializers.ValidationError({"error_message": message})
