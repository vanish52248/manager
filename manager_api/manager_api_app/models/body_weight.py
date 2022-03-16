from django.db import models

class BodyWeight(models.Model):
    """
    体重管理モデル
    """
    id = models.IntegerField(primary_key=True)
    weight = models.IntegerField()
    users = models.CharField(max_length=20)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    delete_flag = models.BooleanField(default=0, blank=False)

    # 下記必ずクラス内に配置するメタクラス
    class Meta:
        """テーブル定義のメタクラス"""
        db_table = 'body_weight'
