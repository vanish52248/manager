# Generated by Django 4.0.6 on 2022-09-03 18:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('manager_api_app', '0001_initial'),
    ]

    operations = [
        migrations.DeleteModel(
            name='MstIdentity',
        ),
        migrations.DeleteModel(
            name='MstItem',
        ),
        migrations.DeleteModel(
            name='MstPersonality',
        ),
    ]
