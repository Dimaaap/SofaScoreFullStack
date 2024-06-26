from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/soccer/', include("soccer.urls")),
    path('auth/', include("user_auth.urls"))
]
