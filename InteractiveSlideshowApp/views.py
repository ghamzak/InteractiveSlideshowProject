from django.shortcuts import render

# Create your views here.

def slideshow_view(request):
    return render(request, 'InteractiveSlideshowApp/slideshow_view.html', {})
