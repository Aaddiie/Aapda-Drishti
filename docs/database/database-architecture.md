                         USERS
                           │
                           │
                    ┌──────┴──────┐
                    │             │
                 ALERTS        USER_LOCATIONS
                    │
                    │
                 REGIONS
                    │
          ┌─────────┼──────────┐
          │         │          │
       HAZARDS   PREDICTIONS  RISK_ZONES
          │         │
          │         │
          └────┬────┘
               │
          ML_MODELS
               │
          MODEL_RUNS
               │
          DATA_SOURCES


                    PROPOSED TABLES
                1. users
                    id PK
                    name
                    email
                    password_hash
                    role
                    is_active
                    created_at
                2. regions
                    id PK
                    name
                    state
                    district
                    latitude
                    longitude
                    geometry
                3. hazards
                    id PK
                    hazard_type
                    region_id FK
                    severity
                    description
                    detected_at
                    status
                4. predictions
                    id PK
                    hazard_id FK
                    model_id FK
                    risk_score
                    confidence
                    prediction_time
                    valid_until
                5. alerts
                    id PK
                    hazard_id FK
                    region_id FK
                    alert_level
                    title
                    message
                    issued_at
                    expires_at
                    status
                6. data_sources
                    id PK
                    source_name
                    source_type
                    url
                    last_updated
                    status
                7. ml_models
                    id PK
                    model_name
                    model_type
                    version
                    accuracy
                    created_at
                    status
                8. notifications
                    id PK
                    alert_id FK
                    user_id FK
                    channel
                    sent_at
                    delivery_status