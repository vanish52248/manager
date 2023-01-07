"""
本番環境で使用する設定モジュール(runserver引数有で起動した際の設定)
ex) pipenv run start --setting manager_api.settings.production
"""

import os
from .base import *

DEBUG = False

ALLOWED_HOSTS = [os.environ.get('ALLOWED_HOSTS')]

INSTALLED_APPS += [
    # デバッグ用は下記の内どちらか(両立不可)
    # 'debug_toolbar',
    'silk',
]

MIDDLEWARE += [
    # デバッグ用は下記の内どちらか(両立不可)
    # 'debug_toolbar.middleware.DebugToolbarMiddleware',
    'silk.middleware.SilkyMiddleware',
]

DATABASES = {
    'default': {
        'ENGINE': os.environ.get('DB_ENGINE'),
        'NAME': os.environ.get('DB_NAME'),
        'USER': os.environ.get('DB_USER'),
        'PASSWORD': os.environ.get('DB_PASSWORD'),
        'PORT': os.environ.get('DB_PORT')
    }
}

STATIC_ROOT = '/usr/share/nginx/html/static'
MEDIA_ROOT = '/usr/share/nginx/html/media'
