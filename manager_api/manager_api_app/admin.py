from django.contrib import admin

from .models.mst_party import MstParty

# 管理サイト情報
admin.site.register(MstParty)
