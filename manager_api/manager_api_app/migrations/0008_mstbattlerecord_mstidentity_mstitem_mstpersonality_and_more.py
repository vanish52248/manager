# Generated by Django 4.0.6 on 2022-08-18 16:18

from django.db import migrations, models
import django.db.models.deletion
import django_mysql.models


class Migration(migrations.Migration):

    dependencies = [
        ('manager_api_app', '0007_auto_20220625_1510'),
    ]

    operations = [
        migrations.CreateModel(
            name='MstBattleRecord',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('rank', models.CharField(blank=True, max_length=16, null=True, verbose_name='ランク')),
                ('my_pokemon', django_mysql.models.ListCharField(models.CharField(max_length=10), blank=True, max_length=48, null=True, size=3, verbose_name='対戦時の自分ポケモン')),
                ('enemy_pokemon', django_mysql.models.ListCharField(models.CharField(max_length=10), blank=True, max_length=48, null=True, size=3, verbose_name='対戦時の相手ポケモン')),
                ('result', models.CharField(blank=True, max_length=16, null=True, verbose_name='対戦結果')),
                ('delete_flag', models.BooleanField(default=False, verbose_name='論理削除フラグ')),
                ('created_at', models.DateTimeField(auto_now_add=True, null=True, verbose_name='登録日時')),
                ('updated_at', models.DateTimeField(auto_now=True, null=True, verbose_name='更新日時')),
            ],
            options={
                'verbose_name': 'バトル戦績の登録',
                'db_table': 'battle_record',
            },
        ),
        migrations.CreateModel(
            name='MstIdentity',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('category', models.CharField(max_length=20, verbose_name='個性の名前')),
                ('delete_flag', models.BooleanField(default=False, verbose_name='論理削除フラグ')),
                ('created_at', models.DateTimeField(auto_now_add=True, null=True, verbose_name='登録日時')),
                ('updated_at', models.DateTimeField(auto_now=True, null=True, verbose_name='更新日時')),
            ],
            options={
                'verbose_name': '個性の登録',
                'db_table': 'identity',
            },
        ),
        migrations.CreateModel(
            name='MstItem',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('category', models.CharField(max_length=30, verbose_name='持ち物の名前')),
                ('description', models.CharField(max_length=255, verbose_name='持ち物の説明')),
                ('delete_flag', models.BooleanField(default=False, verbose_name='論理削除フラグ')),
                ('created_at', models.DateTimeField(auto_now_add=True, null=True, verbose_name='登録日時')),
                ('updated_at', models.DateTimeField(auto_now=True, null=True, verbose_name='更新日時')),
            ],
            options={
                'verbose_name': '持ち物の登録',
                'db_table': 'item',
            },
        ),
        migrations.CreateModel(
            name='MstPersonality',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('category', models.CharField(max_length=20, verbose_name='性格の名前')),
                ('delete_flag', models.BooleanField(default=False, verbose_name='論理削除フラグ')),
                ('created_at', models.DateTimeField(auto_now_add=True, null=True, verbose_name='登録日時')),
                ('updated_at', models.DateTimeField(auto_now=True, null=True, verbose_name='更新日時')),
            ],
            options={
                'verbose_name': '性格の登録',
                'db_table': 'personality',
            },
        ),
        migrations.AlterField(
            model_name='mstparty',
            name='poke_name',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='manager_api_app.mstpokemon', to_field='poke_name', verbose_name='ポケモン名'),
        ),
    ]
