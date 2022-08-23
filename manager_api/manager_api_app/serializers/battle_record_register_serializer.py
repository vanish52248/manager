"""バトル戦績登録のシリアライザ"""
from rest_framework import serializers
from manager_api_app.models.mst_battle_record import MstBattleRecord


class BattleRecordSerializer(serializers.ModelSerializer):
    """バトル戦績登録のシリアライザ"""
    class Meta:
        model = MstBattleRecord()
        fields = ["my_pokemon", "enemy_pokemon"]
        extra_kwargs = {
                        'my_pokemon': {'required': True},
                        'enemy_pokemon': {'required': True},
                    }

        # エラーメッセージ
        message = ""
        
    def validate_choice_my_pokemon_blank(self, data):
        """自分の選択ポケモンを必須パラメータにする"""
        if len(data) == 0:
            # UIでスナックバーに表示するメッセージ
            message = "対戦に参加した自分のポケモンを最低1匹は登録して下さい。"
            raise serializers.ValidationError({"error_message": message})

    def validate_choice_enemy_pokemon_blank(self, data):
        """相手の選択ポケモンを必須パラメータにする"""
        if (data[0] is None) and (data[1] is None) and (data[2] is None):
            # UIでスナックバーに表示するメッセージ
            message = "対戦に参加した相手のポケモンを最低1匹は登録して下さい。"
            raise serializers.ValidationError({"error_message": message})
        
    def validate_choice_three_lte_my_pokemon(self, data):
        """選択ポケモンを3匹以下にする"""
        if len(data) > 3:
            # UIでスナックバーに表示するメッセージ
            message = "対戦に参加した自分のポケモンは3匹以下です。"
            raise serializers.ValidationError({"error_message": message})
