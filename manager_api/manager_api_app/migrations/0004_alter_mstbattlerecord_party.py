# Generated by Django 4.0.6 on 2022-10-10 06:22

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('manager_api_app', '0003_mstbattlerecord_party'),
    ]

    operations = [
        migrations.AlterField(
            model_name='mstbattlerecord',
            name='party',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='manager_api_app.mstparty'),
        ),
    ]