 ┌─────────────────────────────────────────────────────────────┐
 │                    EXTERNAL DATA SOURCES                    │
 │ Sentinel │ MOSDAC │ Weather APIs │ Rainfall │ GIS/Terrain │
 └──────────────────────────┬──────────────────────────────────┘
                            │
                            ▼
 ┌─────────────────────────────────────────────────────────────┐
 │                    DATA INGESTION LAYER                     │
 │ API Fetchers │ Satellite Downloader │ Validators │ Scheduler│
 └──────────────────────────┬──────────────────────────────────┘
                            │
                            ▼
 ┌─────────────────────────────────────────────────────────────┐
 │                  DATA PREPROCESSING LAYER                   │
 │ Cleaning │ Normalization │ Geo-processing │ Feature Extract│
 └──────────────────────────┬──────────────────────────────────┘
                            │
                            ▼
 ┌─────────────────────────────────────────────────────────────┐
 │                       ML ENGINE                             │
 │                                                             │
 │ CNN → Satellite/Image Analysis                              │
 │ RF/XGBoost → Risk Classification                            │
 │ LSTM → Temporal Weather/Time-Series Prediction             │
 │ Multimodal Fusion → Combined Risk Assessment               │
 └──────────────────────────┬──────────────────────────────────┘
                            │
                            ▼
 ┌─────────────────────────────────────────────────────────────┐
 │                       RISK ENGINE                            │
 │ Hazard Score │ Severity │ Probability │ Geo-risk Zones      │
 └───────────────┬─────────────────────┬───────────────────────┘
                 │                     │
                 ▼                     ▼
       ┌──────────────────┐   ┌──────────────────────┐
       │   MySQL Database │   │    Alert Engine      │
       │ Users            │   │ Geo-fencing          │
       │ Hazards          │   │ Alert generation     │
       │ Predictions      │   │ Priority             │
       │ Alerts           │   │ Notification routing │
       │ Locations        │   └──────────┬───────────┘
       └──────────────────┘              │
                                         ▼
                              ┌──────────────────────┐
                              │ Real-time WebSocket  │
                              │ Push/SMS/Email/etc.  │
                              └──────────┬───────────┘
                                         │
                                         ▼
 ┌─────────────────────────────────────────────────────────────┐
 │                       FRONTEND                              │
 │ Dashboard │ Risk Map │ Analytics │ Alerts │ About          │
 └─────────────────────────────────────────────────────────────┘