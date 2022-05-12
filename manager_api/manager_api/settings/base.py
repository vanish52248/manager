"""全体設定の共通モジュール"""

from pathlib import Path
import os

# ディレクトリを分けたのでparent階層を一つ深くする(2個から3個)
BASE_DIR = Path(__file__).resolve().parent.parent.parent

SECRET_KEY = '8)xkcq)y4q=f2rg2%2!%8in7=ed*g6(p-5tc@jmv=p_ll!(@kb'

DEBUG = True

ALLOWED_HOSTS = []

# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'manager_api_app.apps.ManagerApiAppConfig',
    # ------------------------------------------------------------------------
    # サードパーティ アプリケーション
    # ------------------------------------------------------------------------
    'rest_framework',
    'corsheaders',
]

# ------------------------------------------------------------------------
# reactからDRFのアクセス許可する為に追加
# ------------------------------------------------------------------------
CORS_ORIGIN_ALLOW_ALL = True
CORS_ALLOW_CREDENTIALS = True
CSRF_COOKIE_SECURE = True

CORS_ORIGIN_WHITELIST = [
    'http://localhost:3000',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    # ------------------------------------------------------------------------
    # reactとDRF繋げるために下記追加
    # ------------------------------------------------------------------------
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
]

REST_FRAMEWORK = {
   'DEFAULT_AUTHENTICATION_CLASSES': (
      'rest_framework.authentication.TokenAuthentication',
   )
}

ROOT_URLCONF = 'manager_api.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'manager_api.wsgi.application'

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
        # 3305ならMariaDB, 3306ならMySQL
        'PORT': '3305',
        'OPTIONS': {
            'init_command': "SET sql_mode='STRICT_TRANS_TABLES'",
        }
    }
}

LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    # ログ出力フォーマットの設定
    'formatters': {
        'production': {
            'format': '%(asctime)s [%(levelname)s] %(process)d %(thread)d '
                      '%(pathname)s:%(lineno)d %(message)s'
        },
    },
    # ハンドラの設定（ログをどこに出すかの設定）
    'handlers': {
        # ファイルへの出力
        'file': {
            'level': 'INFO',
            'class': 'logging.FileHandler',
            # デフォルトだと C://から探してしまうからプロジェクト直下のlogs/から探すように変更
            "filename": os.path.join(BASE_DIR, "logs/manager.log"),
            'formatter': 'production',
        },
        # ターミナルへの出力
        'console': {
            'level': 'INFO',
            # こちらは標準出力に出してくれるクラスを指定
            'class': 'logging.StreamHandler', 
            'formatter': 'production'
        },
    },
    # ロガーの設定
    'loggers': {
        # 自分で追加したアプリケーション全般のログを拾うロガー
        '': {
            # 先述のhandlersのログ出力先をfileとconsole共に出力する設定
            'handlers': ['file', 'console'],
            'level': 'INFO',
            'propagate': False,
        },
        # Django自身が出力するログ全般を拾うロガー
        'django': {
            # 先述のhandlersのログ出力先をfileとconsole共に出力する設定
            'handlers': ['file', 'console'],
            'level': 'INFO',
            'propagate': False,
        },
    },
}

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

LANGUAGE_CODE = 'ja'

TIME_ZONE = 'Asia/Tokyo'

USE_I18N = True

USE_L10N = True

USE_TZ = True

STATIC_URL = '/static/'
