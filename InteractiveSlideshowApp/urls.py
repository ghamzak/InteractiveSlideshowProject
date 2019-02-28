from django.urls import path
from . import views

urlpatterns = [
    path('', views.home_view, name='home_view'),
    path('slideshow', views.slideshow_view, name='slideshow_view'),
    # path('speech', views.speech_view, name='speech_view'),
]
