          SATELLITE / WEATHER DATA
                    │
                    ▼
                 ML MODEL
                    │
                    ▼
               RISK ENGINE
                    │
              Risk > Threshold?
                    │
                   YES
                    │
                    ▼
              ALERT ENGINE
                    │
              Geo-fencing
                    │
        ┌───────────┼────────────┐
        ▼           ▼            ▼
    Dashboard   WebSocket     Notification
        │           │            │
        ▼           ▼            ▼
      Alert       Real-time    Push/SMS/etc.
       UI          Update


    Example
        Heavy rainfall detected
                ↓
        LSTM predicts increased flood risk
                ↓
        Risk Engine = HIGH
                ↓
        Affected polygon identified
                ↓
        Geo-fence created
                ↓
        Users inside polygon identified
                ↓
        Alert generated
                ↓
        WebSocket → Dashboard
        Push/SMS/etc. → Users