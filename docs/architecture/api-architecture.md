/api/v1/
│
├── auth/
│   ├── login/
│   ├── register/
│   ├── refresh/
│   └── logout/
│
├── disasters/
│   ├── list/
│   ├── detail/
│   └── statistics/
│
├── risk/
│   ├── map/
│   ├── region/
│   └── factors/
│
├── predictions/
│   ├── latest/
│   ├── history/
│   └── run/
│
├── alerts/
│   ├── active/
│   ├── history/
│   ├── acknowledge/
│   └── details/
│
├── analytics/
│   ├── trends/
│   ├── distribution/
│   └── state-wise/
│
├── satellite/
│   ├── latest/
│   └── imagery/
│
└── weather/
    ├── current/
    └── forecast/



COMMUNICATION

Frontend
   │
   │ HTTPS / REST
   ▼
Django API
   │
   ├── MySQL
   ├── ML Service
   ├── Data Services
   └── Alert Engine

Django
   │
   │ WebSocket
   ▼
Frontend Dashboard