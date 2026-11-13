                 MULTI-MODAL DATA
                       │
       ┌───────────────┼────────────────┐
       │               │                │
 Satellite/Image    Weather         Time Series
       │               │                │
       ▼               ▼                ▼
      CNN          RF / XGBoost       LSTM
       │               │                │
       │               │                │
       └───────────────┼────────────────┘
                       ▼
                FEATURE FUSION
                       │
                       ▼
                MULTIMODAL MODEL
                       │
                       ▼
                 HAZARD SCORE
                       │
                       ▼
                  RISK ENGINE
                       │
            ┌──────────┼──────────┐
            ▼          ▼          ▼
          Low       Moderate     High

    1. CNN

        Used primarily for satellite/image-based analysis.

        Satellite Image
            ↓
        Resize / Normalize
            ↓
        CNN
            ↓
        Spatial Features
            ↓
        Flood/Landslide/GLOF indicators

    2. Random Forest / XGBoost

        Useful for structured features such as:

        Rainfall
        Temperature
        Humidity
        Elevation
        Slope
        Soil
        Historical disaster
        Water level
        
        Output:
        Risk Probability
    3. LSTM

        For temporal patterns:

        Rainfall(t-7)
        Rainfall(t-6)
        Rainfall(t-5)
        ...
        Rainfall(t)
            ↓
            LSTM
            ↓
        Future Risk
    4. Multimodal fusion

        The final model can combine:

        CNN Features
            +
        Weather Features
            +
        Terrain Features
            +
        Historical Features
            ↓
        Feature Fusion
            ↓
        Final Risk Score