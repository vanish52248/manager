# Generated by Django 3.1.6 on 2022-06-07 14:06

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
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
            name='MstParty',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('party_name', models.CharField(max_length=256, verbose_name='パーティ名')),
                ('poke_name', models.CharField(max_length=256, verbose_name='ポケモン名')),
                ('delete_flag', models.BooleanField(default=False, verbose_name='論理削除フラグ')),
                ('created_at', models.DateTimeField(auto_now_add=True, null=True, verbose_name='登録日時')),
                ('updated_at', models.DateTimeField(auto_now=True, null=True, verbose_name='更新日時')),
            ],
            options={
                'verbose_name': 'パーティの登録',
                'db_table': 'party',
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
    ]