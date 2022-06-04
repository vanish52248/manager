from django.db import models

class MstParty(models.Model):
    """
    パーティのモデル
    """
    # id = models.IntegerField(primary_key=True)
    # users = models.CharField(max_length=20)
    # created_at = models.DateTimeField(auto_now_add=True)
    # updated_at = models.DateTimeField(auto_now=True)
    # delete_flag = models.BooleanField(default=0, blank=False)

    # 下記必ずクラス内に配置するメタクラス
    class Meta:
        """テーブル定義のメタクラス"""
        db_table = 'party'
