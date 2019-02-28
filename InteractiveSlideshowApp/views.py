from django.shortcuts import render
# from .speechfunction import main
import re, json
# from django.utils import simplejson
# Create your views here.

def home_view(request):
    return render(request, 'InteractiveSlideshowApp/home_view.html', {})

def slideshow_view(request):
    # command = main()
    # if command == 'none':
    #     return render(request, 'InteractiveSlideshowApp/slideshow_view.html', {})
    # elif command.lstrip() in ['right', 'next', 'show next', 'go right']:
    #     action = 'right'
    # elif command.lstrip() in ['left', 'previous', 'show previous', 'go left', 'back', 'go back']:
    #     action = 'left'
    return render(request, 'InteractiveSlideshowApp/slideshow_view.html', {})

# def speech_view(request):
#     command = main()
#
#     if " ".join(command.split()) in ['right', 'next', 'show next', 'go right']:
#         action = 'right'
#     elif " ".join(command.split()) in ['left', 'previous', 'show previous', 'go left', 'back', 'go back']:
#         action = 'left'
#     else:
#         action = 'Unrecognized'
#
#     return render(request, 'InteractiveSlideshowApp/speech.html', {'action': action})
