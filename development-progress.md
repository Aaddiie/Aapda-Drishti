# 🛡️ AAPDA DRISHTI — Frontend Development Progress Roadmap

> **Reference Document:** AAPDA DRISHTI System & UI Specification (Pages 1–4)  
> **Tech Stack:** React (JavaScript, JSX), Vite, Tailwind CSS v4, Lucide React, Recharts  
> **Architecture Principle:** Modular, component-driven, pixel-accurate to reference screenshots, responsive & highly interactive.

---

## 📊 Overview of Phases & Module Progress

| Phase | Module | Scope & Reference | Status |
|---|---|---|:---:|
| **Phase 1** | **Foundation & Architecture** | Project setup (React JS + Vite + Tailwind v4), Brand Design Tokens, Layout Shell, Global Mock Data | 🟢 **Completed** |
| **Phase 2** | **Public Landing & Disaster Knowledge** | Page 1 Hero, About Summary, Interactive 6-card Disaster Catalog with Safety Tips | 🟢 **Completed** |
| **Phase 3** | **Main Dashboard Overview** | Page 1 Bottom-Right: 4 Stat KPI cards, Embedded India Risk Map, 5-Yr Trend Line Chart, Distribution Donut, Recent Alerts | 🟢 **Completed** |
| **Phase 4** | **Interactive Risk Map Module** | Page 4 Top-Left: Full India Vector Map, State Risk Heatmap, Hotspots, Selected Region Inspector with 4 Risk Factor Bars | 🟢 **Completed** |
| **Phase 5** | **Disaster Analysis & Analytics** | Page 4 Top-Right: Filters, 4 KPI cards, 5-Yr Multi-Series Trend Chart, Donut Distribution, State-wise Horizontal Bar Chart | 🟢 **Completed** |
| **Phase 6** | **Alerts Hub & Modal System** | Pages 2, 3 & Page 4 Bottom-Left: 3-Column Alerts Screen, High Risk Popup, Flash Flood / Landslide / Assam Modals, Toasts | 🟢 **Completed** |
| **Phase 7** | **About Aapda Drishti & Tech Specs** | Page 4 Bottom-Right: Mission/Vision/Values, 4-Step "How It Works", Data Sources Grid, Preparedness Benefits Checklist | 🟢 **Completed** |
| **Phase 8** | **Integration, Polish & Verification** | End-to-end routing/tab switching, responsive tests, sound/visual alert triggers, cross-browser polish | 🟢 **Completed** |

---

## 🔍 Detailed Phase Breakdown

### 🔹 Phase 1: Project Setup, Design System & Core Architecture
- [x] Scaffolding React (JavaScript) with Vite & Tailwind CSS v4.
- [x] Iconography setup via `lucide-react`.
- [x] Charting framework setup via `recharts`.
- [ ] Brand theme definitions:
  - Primary Dark Navy: `#0B192C` / `#1E293B`
  - Accent / Primary Blue: `#0EA5E9` / `#2563EB`
  - High Risk / Danger: `#EF4444` / `#DC2626`
  - Moderate / Warning: `#F59E0B` / `#D97706`
  - Low / Safe: `#10B981` / `#059669`
- [ ] Central mock database (`src/data/disasterData.js`):
  - State risk rankings and geographical coordinates.
  - KPI counters matching PDF (`12` High Risk, `5` Active Alerts, `28` Total Disasters, `1.2M` Affected).
  - Historical 5-year disaster trends (Flood, Cyclone, Earthquake, Landslide).
  - Disaster type shares (Flood 30%, Cyclone 25%, Heatwave 18%, Landslide 15%, Earthquake 7%, Wildfire 5%).
- [ ] Main App Layout Shell (`Sidebar`, `Header`, `AppShell` with dynamic view switching).

---

### 🔹 Phase 2: Public Landing & Disaster Knowledge Module
*(Reference: Page 1 Top & Bottom-Left)*
- **Landing Navigation Bar**:
  - Logo (`AAPDA DRISHTI` + "Predict \| Prepare \| Protect").
  - Nav links: Home, About, Disaster, and "Open Dashboard" CTA button.
- **Hero Section**:
  - Heading: *"Smarter Insights for Safer Tomorrows"*.
  - Subtitle: Disaster prediction, monitoring and mitigation platform description.
  - Action buttons: "Open Dashboard" & "Learn More".
  - 4 Quick-pill badges: *Real-time Monitoring*, *AI Predictive Analytics*, *Early Alerts*, *Safer Communities*.
- **About Showcase Section**:
  - *"Turning data into preparedness, and awareness into action."*
  - 3 Pillar cards: *Our Vision*, *Our Mission*, *Our Values*.
- **Interactive Disaster Knowledge Catalog**:
  - 6 Disaster Cards: **Flood**, **Earthquake**, **Cyclone**, **Landslide**, **Heatwave**, **Wildfire**.
  - Photo illustrations, hazard indicators, key triggers, and modal detail views with actionable preparedness guidelines.

---

### 🔹 Phase 3: Dashboard Overview Module
*(Reference: Page 1 Bottom-Right)*
- **Header Toolbar**:
  - Real-time timestamp: `26 Sep 2026, 11:30 AM`.
  - Global search bar with autocomplete.
  - Notification icon with unread count indicator.
  - User profile badge.
- **Top 4 KPI Metric Cards**:
  1. *High Risk Areas*: **12** (+2 from yesterday)
  2. *Active Alerts*: **5** (-1 from yesterday)
  3. *Total Disasters (This Year)*: **28** (+15%)
  4. *Affected Population*: **1.2M** (+8%)
- **Embedded Risk Map Widget**:
  - Quick view of India Risk Heatmap with severity pins and quick region hover.
- **Disaster Analysis Widgets**:
  - Multi-line chart: *Disaster Trend (Last 5 Years)*.
  - Donut chart: *Disaster Type Distribution* with centered count **28**.
- **Recent Alerts Feed**:
  - Live alerts ticker (Heavy Rainfall Alert - Uttarakhand, Cyclone Warning - Odisha, Heatwave - Rajasthan).

---

### 🔹 Phase 4: Full Interactive Risk Map Module
*(Reference: Page 4 Top-Left)*
- **Vector India Risk Map**:
  - Interactive SVG map rendered with state-level risk classification:
    - 🔴 Very High
    - 🟠 High
    - 🟡 Medium
    - 🟢 Low
  - Interactive clickable states & pulsing disaster hotspots.
  - Map controls: Zoom In (`+`), Zoom Out (`-`), and Reset View.
  - Search location input (`Dehradun, Uttarakhand`) with auto-focus.
- **Selected Region Inspector Panel**:
  - Selected state/district header with risk badge: `Risk Level: High`.
  - **Disaster Risk Factors Breakdown** with animated progress meters:
    - Flood Risk: **72%**
    - Landslide Risk: **58%**
    - Earthquake Risk: **42%**
    - Wildfire Risk: **18%**
  - Contextual Advisory box: *"Higher risk due to heavy rainfall in the region. Flash floods and high landslide susceptibility."*
  - Action trigger: "View Detailed Risk Report" & "Simulate Alert".

---

### 🔹 Phase 5: Disaster Analysis & Analytics Module
*(Reference: Page 4 Top-Right)*
- **Filter Controls**:
  - Disaster Type dropdown (All Types, Flood, Cyclone, Earthquake, Landslide, Heatwave, Wildfire).
  - State filter dropdown (All States, Uttarakhand, Assam, Odisha, Himachal Pradesh, etc.).
  - Timeframe selector (2021-2025, Last 12 Months, Last 30 Days).
- **Summary Metric Counters**:
  - Total Disasters: `28`
  - People Affected: `1.2M`
  - Total Damage: `₹8,432 Cr`
  - States Affected: `15`
- **Analytical Chart Suite**:
  - 5-Year Disaster Trend Multi-Line Chart with interactive series toggles.
  - Disaster Type Distribution Donut Chart with percentage breakdown.
  - State-wise Comparison Horizontal Bar Chart (Uttarakhand, Assam, Odisha, Himachal Pradesh, Maharashtra).

---

### 🔹 Phase 6: Multi-Tier Alert & Modal System
*(Reference: Pages 2, 3 & Page 4 Bottom-Left)*
- **Dedicated Alerts Management Page**:
  - 3-Column Layout:
    1. Active Alerts List with status indicators (High, Moderate, Low).
    2. Selected Alert Inspector with complete meteorological bulletin and district tags.
    3. Live Broadcast Updates Feed.
- **Interactive Modals Suite (Page 2 & Page 3)**:
  - **High Risk Disaster Alert Modal** (Uttarakhand Heavy Rainfall) with "View on Risk Map" and "Acknowledge" buttons.
  - **Flash Flood Warning Modal** with red "Take Action" emergency button.
  - **Weather Alert Modal** (Moderate Risk) with "View Details" & "OK".
  - **Major Alert Dark Modal** (Assam Brahmaputra river flood).
  - **Illustrated Landslide Alert Modal** (Himachal Pradesh Kullu/Mandi).
- **Toasts & Banners**:
  - Top urgent warning banner: *"Disaster Alert: High risk of landslide in Himachal Pradesh."*
  - Success toast: *"Alert Acknowledged: You will receive further updates on this event."*
  - Bottom persistent advisory banner: *"Stay Safe, Stay Informed."*

---

### 🔹 Phase 7: Full "About Aapda Drishti" & Technology Module
*(Reference: Page 4 Bottom-Right)*
- Hero vision statement and disaster management team banner.
- Core Pillars: Our Vision, Our Mission, Our Values cards.
- **How It Works 4-Step Pipeline**:
  1. Data Ingestion & Monitoring (Satellite, radar, river gauges).
  2. AI Predictive Analytics (Risk scoring, anomaly detection).
  3. Early Warning Dissemination (Instant multi-channel alerts).
  4. Action & Safety Coordination (NDRF, SDMA, community readiness).
- **Technology & Data Sources Grid**:
  - Meteorological APIs, Satellite Imagery, IoT Sensors, Government Feeds.
- **Disaster Preparedness Benefits Checklist**:
  - 24/7 Continuous Monitoring, Real-time Alerts, AI Risk Scoring, Multi-channel Accessibility.

---

### 🔹 Phase 8: End-to-End Integration, Responsiveness & Verification
- Seamless navigation between Public Landing Page and App Dashboard screens.
- Global modal controller allowing modals to be triggered from notifications, map markers, or alert feeds.
- Full mobile, tablet, and widescreen desktop responsive optimization.
- Visual inspection against PDF screenshots to ensure identical typography, color schemes, and layouts.
