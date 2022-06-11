from django.db import models

class MstPersonality(models.Model):
    """
    性格のモデル
    """
    id = models.AutoField(primary_key=True)
    category = models.CharField(
        max_length=20,
        verbose_name="性格の名前"
    )
    delete_flag = models.BooleanField(
        default=False,
        verbose_name="論理削除フラグ",
    )
    created_at = models.DateTimeField(
        auto_now_add=True,
        verbose_name="登録日時",
        null=True,
        blank=True,
    )
    updated_at = models.DateTimeField(
        auto_now=True,
        verbose_name="更新日時",
        null=True,
        blank=True,
    )

    # 下記必ずクラス内に配置するメタクラス
    class Meta:
        """テーブル定義のメタクラス"""
        verbose_name = ("性格の登録")
        # テーブル名を下記にリネーム
        db_table = 'personality'
