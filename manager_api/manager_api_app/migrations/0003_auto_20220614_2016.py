# Generated by Django 3.1.6 on 2022-06-14 11:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('manager_api_app', '0002_auto_20220614_0010'),
    ]

    operations = [
        migrations.AlterField(
            model_name='mstpokemon',
            name='poke_name',
            field=models.CharField(max_length=256, unique=True, verbose_name='ポケモン名'),
        ),
    ]
