                    DEVELOPMENT
                         │
                 ┌───────┴───────┐
                 │               │
              Frontend         Backend
                 │               │
              React           Django
                 │               │
                 └───────┬───────┘
                         │
                       Git
                         │
                         ▼
                    CI/CD Pipeline
                         │
                         ▼
                    PRODUCTION
                         │
                  ┌──────┴──────┐
                  │ Load Balancer│
                  └──────┬──────┘
                         │
             ┌───────────┼───────────┐
             ▼           ▼           ▼
          Backend-1   Backend-2   Backend-N
             │           │           │
             └───────────┼───────────┘
                         │
                  ┌──────┴──────┐
                  │    MySQL    │
                  └─────────────┘
                         │
                  ML Model Server

Production components

Nginx
   ↓
Django / Gunicorn
   ↓
Django Channels
   ↓
Redis
   ↓
MySQL
   ↓
ML Services

----------------------------------------------------------------------------------------

Development

Localhost
├── React
├── Django
├── MySQL
└── ML

Production

Cloud Server
├── Nginx
├── Frontend
├── Django
├── Redis
├── MySQL
└── ML Service