                    Django Backend
                         │
                ┌────────┴────────┐
                │                 │
             API Layer        WebSocket Layer
                │                 │
          Django REST API       Channels
                │
                ▼
          Service Layer
                │
     ┌──────────┼──────────┐
     │          │          │
 Prediction   Alert      User
 Service      Service    Service
     │          │          │
     └──────────┼──────────┘
                ▼
         Repository Layer
                │
                ▼
             MySQL


Django apps:
    apps/
    ├── accounts/
    ├── disasters/
    ├── predictions/
    ├── risk/
    ├── alerts/
    ├── weather/
    ├── satellite/
    ├── analytics/
    ├── maps/
    └── notifications/

Layer responsibilities:

    1. API Layer

        Receives requests:

        GET /api/risk-map/
        GET /api/alerts/
        GET /api/disasters/
        POST /api/predictions/

    2. Service Layer

        Contains actual business logic.

        Example:

        PredictionService
                ↓
        ML Model
                ↓
        RiskService
                ↓
        AlertService

    3. Repository Layer

        Handles database access.

        AlertRepository
        PredictionRepository
        UserRepository
        DisasterRepository