from django.conf import settings
from django.urls import path, include
from django.conf.urls.static import static

urlpatterns = [
    #path('admin/', admin.site.urls),
    path('api/v1/soccer/', include("soccer.urls")),
    path('auth/', include("user_auth.urls")),
    path("auth/registration/", include("dj_rest_auth.registration.urls")),
    path("auth/social/", include("allauth.socialaccount.urls"))
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)