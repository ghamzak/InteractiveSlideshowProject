from django.urls import path
from . import views

urlpatterns = [
    path('', views.slideshow_view, name='slideshow_view'),
]
