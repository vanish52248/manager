from django.urls import path
from .views import body_weight_view

urlpatterns = [
    path('history_user/', body_weight_view.BodyWeightView.get_user, name='history_user'),
    path('body_weight/', body_weight_view.BodyWeightView.get_weight, name='body_weight'),
]