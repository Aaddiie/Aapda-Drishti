"""
Automated tests for AAPDA DRISHTI backend configuration, health check & CORS.
Uses SimpleTestCase so tests can run in any environment (including CI or when MySQL service is offline).
"""

from unittest.mock import patch, MagicMock
from django.db import OperationalError
from django.test import SimpleTestCase
from rest_framework.test import APIClient
from rest_framework import status


class HealthCheckTests(SimpleTestCase):
    """Tests for GET /api/health/ endpoint under connected and disconnected conditions."""

    def setUp(self):
        self.client = APIClient()

    def test_health_check_when_database_is_connected(self):
        """When the database is reachable, /api/health/ returns HTTP 200 and 'connected' state."""
        mock_cursor = MagicMock()
        mock_cursor.__enter__.return_value = mock_cursor
        mock_cursor.execute.return_value = None
        mock_cursor.fetchone.return_value = (1,)

        with patch('django.db.connection.cursor', return_value=mock_cursor):
            response = self.client.get('/api/health/')

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data.get('status'), 'healthy')
        self.assertEqual(response.data.get('database'), 'connected')
        self.assertIn('timestamp', response.data)
        self.assertEqual(response.data.get('service'), 'AAPDA DRISHTI API')

    def test_health_check_when_database_fails(self):
        """When the database fails to respond, /api/health/ returns HTTP 503 without leaking secrets."""
        with patch('django.db.connection.cursor', side_effect=OperationalError("Can't connect to MySQL server on '127.0.0.1'")):
            response = self.client.get('/api/health/')

        self.assertEqual(response.status_code, status.HTTP_503_SERVICE_UNAVAILABLE)
        self.assertEqual(response.data.get('status'), 'unhealthy')
        self.assertEqual(response.data.get('database'), 'unavailable')
        self.assertEqual(
            response.data.get('message'),
            'Database service is currently unreachable.'
        )
        self.assertIn('timestamp', response.data)

        # Security check: Ensure no internal connection details, passwords, or stack traces leak to client
        raw_response = str(response.data)
        self.assertNotIn('Can\'t connect to MySQL server', raw_response)
        self.assertNotIn('password', raw_response.lower())
        self.assertNotIn('Traceback', raw_response)

    def test_cors_headers_for_approved_frontend_origin(self):
        """CORS headers must be granted for the configured React frontend origin."""
        mock_cursor = MagicMock()
        mock_cursor.__enter__.return_value = mock_cursor
        mock_cursor.execute.return_value = None

        with patch('django.db.connection.cursor', return_value=mock_cursor):
            response = self.client.get(
                '/api/health/',
                HTTP_ORIGIN='http://localhost:5173'
            )

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.headers.get('Access-Control-Allow-Origin'), 'http://localhost:5173')

    def test_cors_disallows_unapproved_origins(self):
        """CORS must not reflect arbitrary unauthorized origins."""
        mock_cursor = MagicMock()
        mock_cursor.__enter__.return_value = mock_cursor
        mock_cursor.execute.return_value = None

        with patch('django.db.connection.cursor', return_value=mock_cursor):
            response = self.client.get(
                '/api/health/',
                HTTP_ORIGIN='http://unauthorized-domain.com'
            )

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIsNone(response.headers.get('Access-Control-Allow-Origin'))
