"""
Views for AAPDA DRISHTI Core Configuration.
Provides system health and status endpoints.
"""

from datetime import datetime, timezone
import logging
from django.db import connection
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

logger = logging.getLogger(__name__)


class HealthCheckView(APIView):
    """
    API and database health check endpoint.
    Verifies that the API service is running and the database connection is functional.

    Responses:
        200 OK: API is active and database responds to queries.
        503 Service Unavailable: Database is unreachable or down.
                                 No credentials, connection strings, or stack traces are leaked.
    """
    authentication_classes = []
    permission_classes = []

    def get(self, request, *args, **kwargs):
        now_iso = datetime.now(timezone.utc).isoformat()

        try:
            with connection.cursor() as cursor:
                cursor.execute("SELECT 1")
                cursor.fetchone()

            return Response(
                {
                    "status": "healthy",
                    "database": "connected",
                    "timestamp": now_iso,
                    "service": "AAPDA DRISHTI API",
                },
                status=status.HTTP_200_OK,
            )
        except Exception as exc:
            # Secure server-side log, without exposing internal exception trace or secrets to the user
            logger.error("Health check failed to connect to database: %s", exc)
            return Response(
                {
                    "status": "unhealthy",
                    "database": "unavailable",
                    "message": "Database service is currently unreachable.",
                    "timestamp": now_iso,
                    "service": "AAPDA DRISHTI API",
                },
                status=status.HTTP_503_SERVICE_UNAVAILABLE,
            )
