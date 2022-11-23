"""パーティー登録機能のUT"""

from django.test import Client, TestCase


class TestPost(TestCase):
    # セットアップクラス
    def setUp(self):
        # リクエストを飛ばすクライアント側の準備
        self.client = Client()

    def test_post_001(self):
        """パーティー6体登録 正常系"""
        # POSTリクエスト時に渡すパラメータ
        data = {
            "partyName": "テスト用サンプルパーティー名",
            "currentSelectPokemon1": "フシギダネ",
            "currentSelectPokemon2": "ヒトカゲ",
            "currentSelectPokemon3": "ゼニガメ",
            "currentSelectPokemon4": "ピカチュウ",
            "currentSelectPokemon5": "オニスズメ",
            "currentSelectPokemon6": "キャタピー",
        }
        
        # dataをパラメータとしてPOSTリクエストを飛ばす
        request = self.client.post(
            '/manager_api_app/v1/party_register/',
            data,
            # HTTP_AUTHORIZATION=f"JWT {トークン}"
        )
        print("==================", request.json())

        self.assertEqual(request.status_code, 200)
