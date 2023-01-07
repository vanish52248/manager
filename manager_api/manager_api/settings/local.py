"""
ローカル開発環境で使用する設定モジュール(デフォルトでrunserver起動した際の設定)
ex) pipenv run start
"""

from .base import *

DEBUG = True

ALLOWED_HOSTS = ['*']

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
        # sqlite → MariaDBへ変更
        'ENGINE': 'django.db.backends.mysql',
        # 作成したMariaDBのDB名
        'NAME': 'manager',
        # MariaDBのDBにアクセスするユーザー名とパスワード
        'USER': 'root',
        'PASSWORD': 'hosiimiki2',
        # default設定のまま設定
        'HOST': 'localhost',
        # MariaDBの使用するポートはMySQLと同じ3306になる
        'PORT': '3306',
        'OPTIONS': {
            'init_command': "SET sql_mode='STRICT_TRANS_TABLES'",
        }
    }
}

CORS_ORIGIN_WHITELIST = [
    'http://localhost:3000',
]

INTERNAL_IPS = ['127.0.0.1']
