from django.shortcuts import render

# Create your views here.

def home_view(request):
    return render(request, 'InteractiveSlideshowApp/home_view.html', {})

def slideshow_view(request):
    return render(request, 'InteractiveSlideshowApp/slideshow_view.html', {})
