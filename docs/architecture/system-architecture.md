                    AAPDA DRISHTI
                          │
        ┌─────────────────┴─────────────────┐
        │                                   │
   FRONTEND                              BACKEND
 React / Web UI                         Django
        │                                   │
        │                         ┌─────────┴─────────┐
        │                         │                   │
        │                    REST APIs           WebSocket
        │                         │                   │
        │                         ▼                   ▼
        │                    Services            Alert Service
        │                         │
        │              ┌──────────┴──────────┐
        │              │                     │
        │          ML Service            Risk Engine
        │              │                     │
        │              └──────────┬──────────┘
        │                         │
        │                       MySQL
        │
        └────────────── Dashboard / Maps / Alerts

                            Main components

                    Layer	            Responsibility

                    Frontend	        Dashboard, maps, analytics, alerts
                    Django Backend	    APIs, authentication, business logic
                    ML Engine	        Prediction/classification
                    Risk Engine	        Converts ML output into risk level
                    MySQL	            Users, alerts, predictions, regions
                    Data Ingestion	    Satellite/weather/GIS data
                    Alert Engine	    Geo-targeted disaster alerts
                    WebSocket	        Real-time dashboard updates

