Satellite Data
     │
     ├──────── Sentinel
     ├──────── MOSDAC
     └──────── Other imagery
                 │
                 ▼
Weather Data ──► DATA INGESTION
Rainfall Data ──►      │
Terrain/GIS ────►      ▼
                 PREPROCESSING
                       │
              ┌────────┼────────┐
              │        │        │
           Image    Weather   Geo Data
          Processing Processing Processing
              │        │        │
              └────────┼────────┘
                       ▼
                  FEATURE ENGINE
                       │
                       ▼
                 ML PREDICTION
                       │
       ┌───────────────┼────────────────┐
       ▼               ▼                ▼
     Flood          Landslide          GLOF
       │               │                │
       └───────────────┼────────────────┘
                       ▼
                   RISK ENGINE
                       │
              ┌────────┴────────┐
              ▼                 ▼
          Risk Map          Alert Engine
                                │
                         Geo-fencing
                                │
                         Notifications
                                │
                                ▼
                         USER DASHBOARD