"""
URL configuration for AAPDA DRISHTI backend project.
"""

from django.contrib import admin
from django.urls import path
from config.views import HealthCheckView

urlpatterns = [
    path('admin/', admin.site.urls),
    # System & Database health check
    path('api/health/', HealthCheckView.as_view(), name='api-health'),
]
