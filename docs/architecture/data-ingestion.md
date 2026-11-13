 ┌───────────────┐
 │   Sentinel    │
 └───────┬───────┘
         │
 ┌───────▼───────┐
 │    MOSDAC     │
 └───────┬───────┘
         │
 ┌───────▼────────┐
 │ Weather APIs   │
 └───────┬────────┘
         │
 ┌───────▼────────┐
 │ Rainfall Data  │
 └───────┬────────┘
         │
 ┌───────▼────────┐
 │ Terrain / GIS  │
 └───────┬────────┘
         │
         ▼
 ┌──────────────────────┐
 │ Data Ingestion Layer │
 │                      │
 │ API Fetcher          │
 │ Satellite Fetcher    │
 │ Scheduler            │
 │ Data Validator       │
 └──────────┬───────────┘
            ▼
       Preprocessing
            │
            ▼
       Feature Store
            │
            ▼
          ML Model


Ingestion process

Fetch
 ↓
Validate
 ↓
Remove duplicates
 ↓
Normalize
 ↓
Geo-reference
 ↓
Preprocess
 ↓
Store
 ↓
Send to ML pipeline