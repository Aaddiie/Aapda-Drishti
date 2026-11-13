// AAPDA DRISHTI - Central Disaster Management Data Store
// Dedicated to Himalayan Multimodal Disaster Risk: GLOF, Flood, Landslide, Snow Avalanche
// Notice: All risk indices and alert bulletins are demonstration/simulated telemetry.

import {
  PRIMARY_HAZARDS,
  PUBLIC_HAZARDS,
  HAZARD_REGISTRY,
  getHazardById,
  getPrimaryHazards,
  getPublicHazards,
  getAllAnalyticalCategories,
} from './hazards';

export const KPIS = {
  highRiskAreas: {
    title: "High Risk Himalayan Zones",
    value: 8,
    change: "+2 monitored basins",
    changeType: "increase",
    risk: "high",
    scope: "Active High-Risk Mountain Basins"
  },
  activeAlerts: {
    title: "Active Demo Advisories",
    value: 5,
    change: "-1 from yesterday",
    changeType: "decrease",
    risk: "warning",
    scope: "Unacknowledged Demonstration Alerts"
  },
  totalDisasters: {
    title: "Recorded Events (This Period)",
    value: 28,
    change: "+15% vs prior season",
    changeType: "increase",
    risk: "info",
    scope: "Simulated Himalayan Incident Registry"
  },
  affectedPopulation: {
    title: "Exposed Valley Population",
    value: "420K",
    change: "+4.2% exposed reach",
    changeType: "increase",
    risk: "purple",
    scope: "Estimated Downstream Mountain Settlements"
  },
  totalDamage: {
    title: "Estimated Asset Exposure (₹ Cr)",
    value: "4,820",
    change: "+8.4%",
    changeType: "increase",
    scope: "Infrastructure & Highway Lifelines"
  },
  statesAffected: {
    title: "Himalayan States Monitored",
    value: 6,
    change: "Core Mountain Arc",
    changeType: "increase",
    scope: "UT & State Himalayan Jurisdictions"
  },
};

// 5-Year Disaster Trend (2021 - 2025) across the Four Primary Hazards
export const DISASTER_TRENDS_5YR = [
  { year: "2021", GLOF: 3, Flood: 8, Landslide: 6, "Snow Avalanche": 3 },
  { year: "2022", GLOF: 4, Flood: 9, Landslide: 7, "Snow Avalanche": 4 },
  { year: "2023", GLOF: 5, Flood: 11, Landslide: 8, "Snow Avalanche": 4 },
  { year: "2024", GLOF: 4, Flood: 10, Landslide: 8, "Snow Avalanche": 3 },
  { year: "2025", GLOF: 4, Flood: 11, Landslide: 9, "Snow Avalanche": 4 },
];

// Disaster Type Distribution (Total: 28 incidents = 100%)
export const DISASTER_DISTRIBUTION = [
  { name: "Flood", value: 39, count: 11, color: "#2563EB", hazardId: "FLOOD" },
  { name: "Landslide", value: 32, count: 9, color: "#D97706", hazardId: "LANDSLIDE" },
  { name: "Snow Avalanche", value: 15, count: 4, color: "#6366F1", hazardId: "SNOW_AVALANCHE" },
  { name: "GLOF", value: 14, count: 4, color: "#0284C7", hazardId: "GLOF" },
];

// State-wise Comparison (Himalayan Focus)
export const STATE_COMPARISON = [
  { state: "Uttarakhand", count: 26, risk: "Very High", damage: "₹1,840 Cr" },
  { state: "Himachal Pradesh", count: 22, risk: "High", damage: "₹1,420 Cr" },
  { state: "Jammu & Kashmir", count: 19, risk: "High", damage: "₹1,180 Cr" },
  { state: "Sikkim", count: 16, risk: "Very High", damage: "₹960 Cr" },
  { state: "Ladakh", count: 12, risk: "High", damage: "₹640 Cr" },
  { state: "Arunachal Pradesh", count: 10, risk: "Moderate", damage: "₹520 Cr" },
  { state: "Assam", count: 15, risk: "Moderate", damage: "₹890 Cr" },
];

// Active Alerts (Dedicated to the 4 Primary Hazards)
// Notice: Explicitly labelled as demo/simulated alerts
export const ACTIVE_ALERTS = [
  {
    id: "alt-01",
    type: "Glacial Lake Outburst Early Warning",
    category: "GLOF",
    hazardId: "GLOF",
    severity: "High",
    state: "Sikkim",
    region: "North Sikkim (South Lhonak Lake Basin)",
    locationQuery: "Chungthang, Sikkim",
    timestamp: "26 Sep 2026, 11:30 AM",
    description: "Rapid expansion and heightened water stage registered at South Lhonak glacial lake moraine. High probability of moraine breach and downstream flash flood in the Teesta river valley.",
    recommendation: "Immediate evacuation ordered for Chungthang, Dikchu, and downstream riverbank hamlets. Move to designated high-elevation muster shelters above 40 meters from river level.",
    isSimulated: true,
    simulationNotice: "Demonstration Advisory — Simulated Telemetry",
    riskFactors: {
      lakeExpansion: 88,
      moraineInstability: 82,
      thermalMeltRate: 74,
      downstreamExposure: 90,
    },
    riskFactorsNote: "Sentinel-2 multi-spectral lake area tracking indicates 18% lake surface expansion in 72 hours coupled with elevated air temperatures.",
    acknowledged: false,
    icon: "Waves",
    color: "#0284C7",
  },
  {
    id: "alt-02",
    type: "Flash Flood & River Level Surge",
    category: "Flood",
    hazardId: "FLOOD",
    severity: "High",
    state: "Uttarakhand",
    region: "Uttarakhand (Alaknanda & Mandakini Basins)",
    locationQuery: "Rudraprayag, Uttarakhand",
    timestamp: "26 Sep 2026, 10:15 AM",
    description: "Intense localized cloudburst rainfall in upper catchments exceeding 140 mm in 3 hours. Stream gauges along Alaknanda and Mandakini rivers surging past warning marks.",
    recommendation: "Strict ban on movement along low-lying river ghats, temporary bridges, and pilgrimage routes. Relocate riverside dwellings to elevated community centers.",
    isSimulated: true,
    simulationNotice: "Demonstration Advisory — Simulated Telemetry",
    riskFactors: {
      rainfallIntensity: 84,
      riverStageDischarge: 86,
      catchmentSaturation: 78,
      settlementExposure: 82,
    },
    riskFactorsNote: "CWC hydrological gauges indicate stage rising at 0.45 meters/hour with heavy mountain cloudburst echoes on Doppler radar.",
    acknowledged: false,
    icon: "CloudRain",
    color: "#2563EB",
  },
  {
    id: "alt-03",
    type: "Debris Flow & Slope Instability Warning",
    category: "Landslide",
    hazardId: "LANDSLIDE",
    severity: "High",
    state: "Himachal Pradesh",
    region: "Himachal Pradesh (Kullu & Mandi NH-3 Corridor)",
    locationQuery: "Kullu, Himachal Pradesh",
    timestamp: "26 Sep 2026, 09:40 AM",
    description: "Continuous rainfall has saturated sheared rock formations along steep slope cuttings on NH-3 between Pandoh and Aut. Multiple active rockfalls and mudflows reported.",
    recommendation: "Halt all vehicular traffic on NH-3 corridor. Travelers advised to wait at designated transit camps. Village settlements below steep cuts should relocate.",
    isSimulated: true,
    simulationNotice: "Demonstration Advisory — Simulated Telemetry",
    riskFactors: {
      antecedentRainfall: 85,
      slopeGradientSusceptibility: 91,
      geologicalWeakness: 76,
      lifelineRoadExposure: 89,
    },
    riskFactorsNote: "Cumulative 72-hour rainfall has breached the 160 mm slope failure empirical threshold on saturated mountain terrain.",
    acknowledged: false,
    icon: "Mountain",
    color: "#D97706",
  },
  {
    id: "alt-04",
    type: "High-Altitude Snow Avalanche Warning",
    category: "Snow Avalanche",
    hazardId: "SNOW_AVALANCHE",
    severity: "High",
    state: "Jammu & Kashmir",
    region: "Jammu & Kashmir (Gulmarg High Ridges & Sonamarg)",
    locationQuery: "Gulmarg, Jammu & Kashmir",
    timestamp: "26 Sep 2026, 08:20 AM",
    description: "Fresh snowfall accumulation of 65 cm over a loose faceted stratigraphic layer accompanied by 55 km/h leeward winds. Danger Level 4 (High) issued for slopes steeper than 32°.",
    recommendation: "Prohibit all backcountry skiing and high-altitude trekking. Convoy movement on vulnerable mountain passes suspended until snow stability survey completes.",
    isSimulated: true,
    simulationNotice: "Demonstration Advisory — Simulated Telemetry",
    riskFactors: {
      snowpackInstability: 89,
      freshSnowfallLoading: 84,
      windDriftRedistribution: 76,
      passRouteExposure: 92,
    },
    riskFactorsNote: "High-altitude AWS telemetry registers temperature jump from -12°C to -2°C, inducing rapid snowpack slab instability.",
    acknowledged: false,
    icon: "MountainSnow",
    color: "#6366F1",
  },
  {
    id: "alt-05",
    type: "Moraine Dam Instability Watch",
    category: "GLOF",
    hazardId: "GLOF",
    severity: "Moderate",
    state: "Uttarakhand",
    region: "Uttarakhand (Chamoli & Rishiganga Catchment)",
    locationQuery: "Joshimath, Uttarakhand",
    timestamp: "26 Sep 2026, 07:15 AM",
    description: "Proglacial pond expansion and seepage observed along lateral moraine in upper Nanda Devi catchment. Moderate risk of downstream surge into Rishiganga hydel corridor.",
    recommendation: "Hydel power dam floodgates placed on pre-emptive discharge alert. Siren alert systems tested in Joshimath and Tapovan settlements.",
    isSimulated: true,
    simulationNotice: "Demonstration Advisory — Simulated Telemetry",
    riskFactors: {
      lakeExpansion: 68,
      moraineInstability: 72,
      thermalMeltRate: 64,
      downstreamExposure: 78,
    },
    riskFactorsNote: "Satellite SAR interferometry detects subtle 8 mm/month moraine displacement across glaciated headwaters.",
    acknowledged: false,
    icon: "Waves",
    color: "#0284C7",
  },
  {
    id: "alt-06",
    type: "Alpine Avalanche Pass Closure Advisory",
    category: "Snow Avalanche",
    hazardId: "SNOW_AVALANCHE",
    severity: "Moderate",
    state: "Ladakh",
    region: "Ladakh (Zojila Pass & Dras Sector)",
    locationQuery: "Kargil, Ladakh",
    timestamp: "25 Sep 2026, 05:30 PM",
    description: "Wind-drift slab formations along steep highway snow-shed approaches. Heavy accumulation cleared by Border Roads Task Force, controlled convoy release in progress.",
    recommendation: "Vehicles must carry mandatory tire chains and emergency winter rations. Strictly obey military convoy marshalling points.",
    isSimulated: true,
    simulationNotice: "Demonstration Advisory — Simulated Telemetry",
    riskFactors: {
      snowpackInstability: 62,
      freshSnowfallLoading: 58,
      windDriftRedistribution: 74,
      passRouteExposure: 88,
    },
    riskFactorsNote: "Controlled mitigation triggered via artificial artillery detonation; snow accumulation stabilized.",
    acknowledged: true,
    icon: "MountainSnow",
    color: "#6366F1",
  },
  {
    id: "alt-07",
    type: "Monsoon Hill Torrent Overflow Advisory",
    category: "Flood",
    hazardId: "FLOOD",
    severity: "Low",
    state: "Assam",
    region: "Assam (Kamrup & Brahmaputra Foothill Tributaries)",
    locationQuery: "Guwahati, Assam",
    timestamp: "25 Sep 2026, 03:15 PM",
    description: "Sub-Himalayan stream runoff stabilizing following cessation of overnight cloudbursts in Bhutan hills. Routine river stage monitoring active.",
    recommendation: "Farmers may resume agrarian activities on elevated terraces. Maintain vigil along riverbank drainage sluice gates.",
    isSimulated: true,
    simulationNotice: "Demonstration Advisory — Simulated Telemetry",
    riskFactors: {
      rainfallIntensity: 34,
      riverStageDischarge: 48,
      catchmentSaturation: 52,
      settlementExposure: 40,
    },
    riskFactorsNote: "River gauges at Guwahati and Goalpara receded 0.4 meters below danger threshold.",
    acknowledged: true,
    icon: "CloudRain",
    color: "#2563EB",
  },
];

// Interactive Disaster Catalog (Exactly 4 Primary Hazards)
export const DISASTER_CATALOG = PRIMARY_HAZARDS;

// Comprehensive Multi-Hazard Risk Profiles for Himalayan States & Key Regions
// Notice: Hazard-specific risk factor structures separate susceptibility, conditions, exposure, and explicitly represent unavailable observations.
export const INDIA_STATES_RISK = {
  "Uttarakhand": {
    name: "Uttarakhand",
    capital: "Dehradun",
    region: "Central Himalayas",
    isHimalayan: true,
    overallRisk: "Very High",
    riskColor: "#EF4444",
    primaryThreat: "GLOF, Cloudburst Floods & Landslides",
    activeAlertCount: 2,
    coordinates: { x: 345, y: 220 },
    hazardRisks: {
      GLOF: {
        riskLevel: "High",
        riskScore: 78,
        available: true,
        factors: [
          { name: "Glacial Lake Extent & Dynamics", value: 74, status: "Active Observation" },
          { name: "Thermal Melt & Temperature Anomaly", value: 70, status: "Active Observation" },
          { name: "Moraine Dam Freeboard Stability", value: 72, status: "Active Observation" },
          { name: "Downstream Hydel & Settlement Exposure", value: 84, status: "Active Observation" }
        ],
        note: "Chamoli, Rishiganga, and Upper Alaknanda proglacial lakes monitored via Sentinel-2 optical telemetry."
      },
      FLOOD: {
        riskLevel: "Very High",
        riskScore: 84,
        available: true,
        factors: [
          { name: "Rainfall Intensity & Cloudburst Surge", value: 86, status: "Active Observation" },
          { name: "River Discharge (Alaknanda / Mandakini)", value: 84, status: "Active Observation" },
          { name: "Catchment Soil Saturation", value: 78, status: "Active Observation" },
          { name: "Riverbed Settlement Exposure", value: 88, status: "Active Observation" }
        ],
        note: "High susceptibility to sudden mountain cloudbursts and narrow gorge flood volume amplification."
      },
      LANDSLIDE: {
        riskLevel: "Very High",
        riskScore: 82,
        available: true,
        factors: [
          { name: "Antecedent Rainfall Trigger", value: 82, status: "Active Observation" },
          { name: "Steep Slope Gradient Susceptibility", value: 88, status: "Active Observation" },
          { name: "Geological Shear & Thrust Zones", value: 76, status: "Active Observation" },
          { name: "Chardham Highway Lifeline Exposure", value: 86, status: "Active Observation" }
        ],
        note: "Rudraprayag, Chamoli, and Tehri road cuttings under active debris flow and slope monitoring."
      },
      SNOW_AVALANCHE: {
        riskLevel: "High",
        riskScore: 71,
        available: true,
        factors: [
          { name: "High-Altitude Snowpack Instability", value: 72, status: "Active Observation" },
          { name: "Recent Snowfall Loading (Above 3500m)", value: 68, status: "Active Observation" },
          { name: "Steep Glaciated Headwall Gradients", value: 74, status: "Active Observation" },
          { name: "Upper Pilgrimage Route Exposure", value: 70, status: "Active Observation" }
        ],
        note: "Seasonal avalanche paths active in Badrinath-Kedarnath high ridges and Nanda Devi basin during winter/thaw."
      }
    }
  },

  "Himachal Pradesh": {
    name: "Himachal Pradesh",
    capital: "Shimla",
    region: "Western Himalayas",
    isHimalayan: true,
    overallRisk: "High",
    riskColor: "#F97316",
    primaryThreat: "Landslides, Flash Floods & Avalanches",
    activeAlertCount: 1,
    coordinates: { x: 320, y: 175 },
    hazardRisks: {
      GLOF: {
        riskLevel: "High",
        riskScore: 72,
        available: true,
        factors: [
          { name: "Glacial Lake Extent (Chandra/Bhaga)", value: 70, status: "Active Observation" },
          { name: "Spiti & Kinnaur Melt Rates", value: 66, status: "Active Observation" },
          { name: "Moraine Dam Integrity", value: 72, status: "Active Observation" },
          { name: "Downstream Valley Exposure", value: 78, status: "Active Observation" }
        ],
        note: "Over 80 supra-glacial and moraine-dammed lakes cataloged in Chenab and Satluj river catchments."
      },
      FLOOD: {
        riskLevel: "High",
        riskScore: 79,
        available: true,
        factors: [
          { name: "Heavy Monsoon Cloudburst Rainfall", value: 81, status: "Active Observation" },
          { name: "Beas & Satluj River Water Stages", value: 78, status: "Active Observation" },
          { name: "Catchment Soil Saturated Storage", value: 74, status: "Active Observation" },
          { name: "Valley Habitation & Bridge Exposure", value: 82, status: "Active Observation" }
        ],
        note: "Steep mountain tributaries of the Beas and Ravi rivers prone to rapid bank erosion and flash surges."
      },
      LANDSLIDE: {
        riskLevel: "Very High",
        riskScore: 89,
        available: true,
        factors: [
          { name: "Antecedent 72h Rainfall Moisture", value: 92, status: "Active Observation" },
          { name: "Slope Angle Susceptibility (Kullu/Mandi)", value: 90, status: "Active Observation" },
          { name: "Fractured Gneiss & Mica Schist Geology", value: 84, status: "Active Observation" },
          { name: "NH-3 & NH-5 Strategic Corridors", value: 91, status: "Active Observation" }
        ],
        note: "Extremely high slope failure susceptibility along Kullu-Mandi NH-3 corridor and Kinnaur rockfall zones."
      },
      SNOW_AVALANCHE: {
        riskLevel: "High",
        riskScore: 76,
        available: true,
        factors: [
          { name: "Snowpack Layer Stratigraphic Weakness", value: 78, status: "Active Observation" },
          { name: "Fresh Snow Accumulation at Rohtang", value: 74, status: "Active Observation" },
          { name: "Leeward Wind-Slab Formations", value: 76, status: "Active Observation" },
          { name: "Lahaul-Spiti Highway Pass Exposure", value: 82, status: "Active Observation" }
        ],
        note: "DGRE avalanche warning stations active across Atal Tunnel approaches, Rohtang, and Lahaul corridors."
      }
    }
  },

  "Jammu & Kashmir": {
    name: "Jammu & Kashmir",
    capital: "Srinagar",
    region: "Northwestern Himalayas",
    isHimalayan: true,
    overallRisk: "High",
    riskColor: "#F97316",
    primaryThreat: "Snow Avalanches & Highway Landslides",
    activeAlertCount: 1,
    coordinates: { x: 275, y: 110 },
    hazardRisks: {
      GLOF: {
        riskLevel: "Moderate",
        riskScore: 54,
        available: true,
        factors: [
          { name: "Glacial Lake Extent & Inventory", value: 52, status: "Active Observation" },
          { name: "Alpine Melt & Permafrost Dynamics", value: 50, status: "Active Observation" },
          { name: "Moraine Dam Instability Indicators", value: 56, status: "Active Observation" },
          { name: "Downstream Exposure", value: 58, status: "Active Observation" }
        ],
        note: "Glacial lake exposure localized to high Pir Panjal and Greater Himalayan headwaters."
      },
      FLOOD: {
        riskLevel: "High",
        riskScore: 72,
        available: true,
        factors: [
          { name: "Rainfall Intensity & Snowmelt Blend", value: 70, status: "Active Observation" },
          { name: "Jhelum River Gauge Discharge Levels", value: 74, status: "Active Observation" },
          { name: "Kashmir Valley Basin Saturation", value: 68, status: "Active Observation" },
          { name: "Low-Lying Urban & Agrarian Exposure", value: 76, status: "Active Observation" }
        ],
        note: "Jhelum river basin vulnerable during combined spring snowmelt and continuous western disturbance rains."
      },
      LANDSLIDE: {
        riskLevel: "High",
        riskScore: 81,
        available: true,
        factors: [
          { name: "Rainfall & Thaw Seepage Triggers", value: 79, status: "Active Observation" },
          { name: "Ramban-Banihal Slope Susceptibility", value: 86, status: "Active Observation" },
          { name: "Unstable Clayey Silt & Shale Strata", value: 80, status: "Active Observation" },
          { name: "Jammu-Srinagar NH-44 Lifeline Risk", value: 88, status: "Active Observation" }
        ],
        note: "Ramban and Banihal stretches on NH-44 suffer frequent mudslides and shooting-stone rockfalls."
      },
      SNOW_AVALANCHE: {
        riskLevel: "Very High",
        riskScore: 88,
        available: true,
        factors: [
          { name: "Snowpack Stratigraphic Weak Layer", value: 90, status: "Active Observation" },
          { name: "Recent High-Altitude Snow Loading", value: 86, status: "Active Observation" },
          { name: "Slope Gradient (32°-45°) Exposure", value: 88, status: "Active Observation" },
          { name: "Gulmarg, Sonamarg & Kupwara Exposure", value: 92, status: "Active Observation" }
        ],
        note: "Critical avalanche zone with DGRE Stage 4 warning active on exposed Pir Panjal backcountry ridges."
      }
    }
  },

  "Ladakh": {
    name: "Ladakh",
    capital: "Leh",
    region: "Trans-Himalayas",
    isHimalayan: true,
    overallRisk: "High",
    riskColor: "#F97316",
    primaryThreat: "Snow Avalanches & Glacial Lake Outbursts",
    activeAlertCount: 1,
    coordinates: { x: 310, y: 75 },
    hazardRisks: {
      GLOF: {
        riskLevel: "High",
        riskScore: 76,
        available: true,
        factors: [
          { name: "Trans-Himalayan Glacial Lake Growth", value: 78, status: "Active Observation" },
          { name: "Permafrost Degradation & Solar Melt", value: 74, status: "Active Observation" },
          { name: "Moraine Dam Instability Indicators", value: 72, status: "Active Observation" },
          { name: "Zanskar / Nubra Valley Settlement Exposure", value: 80, status: "Active Observation" }
        ],
        note: "High-altitude glacial lakes in Zanskar and Shyok catchments require continuous satellite monitoring."
      },
      FLOOD: {
        riskLevel: "Moderate",
        riskScore: 56,
        available: true,
        factors: [
          { name: "Cloudburst Rainfall Accumulation", value: 58, status: "Active Observation" },
          { name: "Indus & Zanskar River Stream Volumes", value: 54, status: "Active Observation" },
          { name: "Desert Catchment Runoff Speed", value: 62, status: "Active Observation" },
          { name: "Arid Oasis Settlement Vulnerability", value: 60, status: "Active Observation" }
        ],
        note: "Arid soils have near-zero absorption, turning sudden cloudbursts into devastating flash debris torrents."
      },
      LANDSLIDE: {
        riskLevel: "Moderate",
        riskScore: 52,
        available: true,
        factors: [
          { name: "Thaw-Induced Soil Slip Triggers", value: 50, status: "Active Observation" },
          { name: "Barren Scree Slope Angle Susceptibility", value: 58, status: "Active Observation" },
          { name: "Weathered Granite Lithology", value: 52, status: "Active Observation" },
          { name: "Strategic Border Road Exposure", value: 64, status: "Active Observation" }
        ],
        note: "Scree slips and dry rockfalls along Manali-Leh and Srinagar-Leh highway approaches."
      },
      SNOW_AVALANCHE: {
        riskLevel: "Very High",
        riskScore: 86,
        available: true,
        factors: [
          { name: "Wind-Packed Hard Slab Over Depth Hoar", value: 88, status: "Active Observation" },
          { name: "Sub-Zero Temperature Anomaly & High Winds", value: 84, status: "Active Observation" },
          { name: "Zojila & Khardung La Pass Slopes", value: 90, status: "Active Observation" },
          { name: "Military & Border Convoy Exposure", value: 94, status: "Active Observation" }
        ],
        note: "Zojila, Dras, Chang La, and Khardung La passes endure extreme winter avalanche activity."
      }
    }
  },

  "Sikkim": {
    name: "Sikkim",
    capital: "Gangtok",
    region: "Eastern Himalayas",
    isHimalayan: true,
    overallRisk: "Very High",
    riskColor: "#EF4444",
    primaryThreat: "GLOF (South Lhonak) & Teesta Landslides",
    activeAlertCount: 1,
    coordinates: { x: 620, y: 255 },
    hazardRisks: {
      GLOF: {
        riskLevel: "Very High",
        riskScore: 92,
        available: true,
        factors: [
          { name: "Glacial Lake Extent (South Lhonak Lake)", value: 94, status: "Critical Observation" },
          { name: "High-Elevation Temperature Melt Surge", value: 88, status: "Active Observation" },
          { name: "Moraine Dam Piping & Structural Breach Risk", value: 91, status: "Critical Observation" },
          { name: "Teesta Basin Hydel & Town Exposure", value: 95, status: "Critical Observation" }
        ],
        note: "Highest national GLOF vulnerability. South Lhonak and Shako Cho glacial lakes under real-time satellite radar watch."
      },
      FLOOD: {
        riskLevel: "High",
        riskScore: 80,
        available: true,
        factors: [
          { name: "Teesta River Monsoon Discharge", value: 82, status: "Active Observation" },
          { name: "High Orographic Rainfall Volume", value: 80, status: "Active Observation" },
          { name: "Steep Valley Catchment Runoff", value: 78, status: "Active Observation" },
          { name: "Chungthang & Singtam Habitation Exposure", value: 86, status: "Active Observation" }
        ],
        note: "Teesta river gorge amplifies flood crest velocities through narrow downstream bedrock constrictions."
      },
      LANDSLIDE: {
        riskLevel: "Very High",
        riskScore: 88,
        available: true,
        factors: [
          { name: "Intense Monsoon Antecedent Moisture", value: 89, status: "Active Observation" },
          { name: "Steep Canyon Slope Susceptibility", value: 90, status: "Active Observation" },
          { name: "Foliated Phyllite & Schist Geology", value: 85, status: "Active Observation" },
          { name: "NH-10 Lifeline Highway Vulnerability", value: 94, status: "Active Observation" }
        ],
        note: "NH-10 connecting Sikkim to Siliguri experiences chronic slope blockades during monsoon precipitation."
      },
      SNOW_AVALANCHE: {
        riskLevel: "Moderate",
        riskScore: 60,
        available: true,
        factors: [
          { name: "North Sikkim Alpine Snowpack Instability", value: 62, status: "Active Observation" },
          { name: "Gurudongmar / Cho Lhamo Snow Loading", value: 58, status: "Active Observation" },
          { name: "High-Altitude Slope Gradient", value: 64, status: "Active Observation" },
          { name: "High Border Post Exposure", value: 66, status: "Active Observation" }
        ],
        note: "Avalanche risk confined to high-altitude mountain passes in North Sikkim above 4500 meters."
      }
    }
  },

  "Arunachal Pradesh": {
    name: "Arunachal Pradesh",
    capital: "Itanagar",
    region: "Eastern Himalayas",
    isHimalayan: true,
    overallRisk: "Moderate",
    riskColor: "#F59E0B",
    primaryThreat: "Rainfall Landslides & Flash Floods",
    activeAlertCount: 0,
    coordinates: { x: 740, y: 225 },
    hazardRisks: {
      GLOF: {
        riskLevel: "Moderate",
        riskScore: 58,
        available: true,
        factors: [
          { name: "Subansiri Headwater Glacial Lakes", value: 60, status: "Active Observation" },
          { name: "Eastern Himalayan Melt Anomaly", value: 56, status: "Active Observation" },
          { name: "Moraine Dam Instability Indicator", value: 54, status: "Active Observation" },
          { name: "Downstream Gorge Exposure", value: 62, status: "Active Observation" }
        ],
        note: "Remote glacial lakes along the McMahon line monitored for transboundary outburst surges."
      },
      FLOOD: {
        riskLevel: "High",
        riskScore: 75,
        available: true,
        factors: [
          { name: "Extreme Orographic Rainfall", value: 80, status: "Active Observation" },
          { name: "Siang & Lohit River Stage Discharge", value: 76, status: "Active Observation" },
          { name: "Dense Rainforest Catchment Saturation", value: 72, status: "Active Observation" },
          { name: "Valley Settlement Exposure", value: 74, status: "Active Observation" }
        ],
        note: "Heavy precipitation in Siang and Dibang river valleys creates sudden swelling of foothill rivers."
      },
      LANDSLIDE: {
        riskLevel: "High",
        riskScore: 78,
        available: true,
        factors: [
          { name: "Intense Tropical/Subtropical Downpours", value: 82, status: "Active Observation" },
          { name: "Tawang & Kameng Steep Slope Gradient", value: 78, status: "Active Observation" },
          { name: "Weathered Metamorphic Slopes", value: 74, status: "Active Observation" },
          { name: "Trans-Arunachal Highway Exposure", value: 80, status: "Active Observation" }
        ],
        note: "Widespread road slips and mud flows along Tawang and Kameng district corridors."
      },
      SNOW_AVALANCHE: {
        riskLevel: "Low",
        riskScore: 32,
        available: true,
        factors: [
          { name: "Sela Pass High-Altitude Snowpack", value: 38, status: "Active Observation" },
          { name: "Recent Snow Loading", value: 30, status: "Active Observation" },
          { name: "Slope Gradient", value: 34, status: "Active Observation" },
          { name: "High Pass Route Exposure", value: 40, status: "Active Observation" }
        ],
        note: "Isolated avalanche hazard at high passes (e.g. Sela Pass 4170m) during mid-winter snowfall."
      }
    }
  },

  "Assam": {
    name: "Assam",
    capital: "Dispur",
    region: "Sub-Himalayan River Basin",
    isHimalayan: false,
    overallRisk: "High",
    riskColor: "#F97316",
    primaryThreat: "Brahmaputra Basin River Flooding",
    activeAlertCount: 1,
    coordinates: { x: 730, y: 295 },
    hazardRisks: {
      GLOF: {
        riskLevel: "Low",
        riskScore: 28,
        available: true,
        factors: [
          { name: "No Direct Glacial Lakes in State", value: 10, status: "Non-Glaciated (Direct)" },
          { name: "Upstream Himalayan Outburst Inflow", value: 45, status: "Upstream Inflow Risk" },
          { name: "Valley Channel Attenuation", value: 25, status: "Attenuated Inflow" },
          { name: "Downstream Basin Vulnerability", value: 42, status: "Active Observation" }
        ],
        note: "Assam has no internal glacial lakes; vulnerability arises purely as downstream recipient of Himalayan surges."
      },
      FLOOD: {
        riskLevel: "Very High",
        riskScore: 88,
        available: true,
        factors: [
          { name: "Brahmaputra & Tributary Discharge", value: 92, status: "Active Observation" },
          { name: "Sub-Himalayan Inflow & Heavy Rainfall", value: 88, status: "Active Observation" },
          { name: "Wetland & Floodplain Saturation", value: 85, status: "Active Observation" },
          { name: "Agrarian Embankment & Village Exposure", value: 90, status: "Active Observation" }
        ],
        note: "Severe annual inundation across 20+ districts fed by upstream Himalayan river runoff."
      },
      LANDSLIDE: {
        riskLevel: "Low",
        riskScore: 24,
        available: true,
        factors: [
          { name: "Rainfall Trigger", value: 30, status: "Active Observation" },
          { name: "Slope Gradient (Confined to Dima Hasao)", value: 28, status: "Localized (Hills)" },
          { name: "Soil Stability", value: 20, status: "Low Relief Basin" },
          { name: "General Infrastructure Exposure", value: 25, status: "Localized" }
        ],
        note: "Landslides localized strictly to southern hill tracts (Dima Hasao & Karbi Anglong)."
      },
      SNOW_AVALANCHE: {
        riskLevel: "Non-Applicable",
        riskScore: null,
        available: false,
        availabilityNote: "Non-Alpine Plain Terrain — Zero Snowpack Exposure",
        factors: [
          { name: "Snowpack Structure & Layer Instability", value: null, status: "No Snowpack (N/A)" },
          { name: "Recent Snowfall Accumulation", value: null, status: "No Snowfall (N/A)" },
          { name: "Slope Gradient (30°-45°)", value: null, status: "Low Relief (N/A)" },
          { name: "Strategic Mountain Route Exposure", value: null, status: "No High Passes (N/A)" }
        ],
        note: "Snow avalanche is not physically applicable in the tropical alluvial floodplains of Assam."
      }
    }
  },

  "Rajasthan": {
    name: "Rajasthan",
    capital: "Jaipur",
    region: "Western Arid Belt",
    isHimalayan: false,
    overallRisk: "Low",
    riskColor: "#10B981",
    primaryThreat: "Non-Himalayan Baseline (Demonstration Control)",
    activeAlertCount: 0,
    coordinates: { x: 235, y: 310 },
    hazardRisks: {
      GLOF: {
        riskLevel: "Non-Applicable",
        riskScore: null,
        available: false,
        availabilityNote: "Arid Desert Zone — No Glacial Features Detected",
        factors: [
          { name: "Glacial Lake Extent & Dynamics", value: null, status: "No Glacial Lakes (N/A)" },
          { name: "Precipitation & Temperature Melt", value: null, status: "Non-Glacial (N/A)" },
          { name: "Moraine Dam Instability Indicators", value: null, status: "No Moraines (N/A)" },
          { name: "Downstream Mountain Terrain Exposure", value: null, status: "Non-Alpine (N/A)" }
        ],
        note: "GLOF is physically non-applicable to desert geography."
      },
      FLOOD: {
        riskLevel: "Low",
        riskScore: 18,
        available: true,
        factors: [
          { name: "Flash Monsoon Precipitation", value: 22, status: "Active Observation" },
          { name: "Ephemeral Wadis / Stream Flow", value: 16, status: "Active Observation" },
          { name: "Soil Infiltration Rate", value: 14, status: "Active Observation" },
          { name: "Settlement Inundation Exposure", value: 18, status: "Active Observation" }
        ],
        note: "Localized flash flooding possible in dry river channels during rare monsoon cloudbursts."
      },
      LANDSLIDE: {
        riskLevel: "Non-Applicable",
        riskScore: null,
        available: false,
        availabilityNote: "Arid Plain / Low Relic Ridge Terrain — Negligible Susceptibility",
        factors: [
          { name: "Antecedent Moisture Trigger", value: null, status: "Arid (N/A)" },
          { name: "Steep Mountain Slope Gradient", value: null, status: "Low Relief (N/A)" },
          { name: "Geological Shear Slip Susceptibility", value: null, status: "Stable Shield (N/A)" },
          { name: "Lifeline Mountain Highway Exposure", value: null, status: "No Mountain Slopes (N/A)" }
        ],
        note: "No significant landslide terrain present outside localized quarry cuts."
      },
      SNOW_AVALANCHE: {
        riskLevel: "Non-Applicable",
        riskScore: null,
        available: false,
        availabilityNote: "Sub-Tropical Arid Climate — Zero Snowpack Potential",
        factors: [
          { name: "Snowpack Structure & Layer Instability", value: null, status: "No Snowpack (N/A)" },
          { name: "Recent Snowfall Accumulation", value: null, status: "No Snowfall (N/A)" },
          { name: "Slope Gradient (30°-45°)", value: null, status: "Non-Alpine (N/A)" },
          { name: "Strategic Mountain Route Exposure", value: null, status: "No Alpine Passes (N/A)" }
        ],
        note: "Snow avalanche is not applicable in arid plains."
      }
    }
  }
};

export {
  PRIMARY_HAZARDS,
  PUBLIC_HAZARDS,
  HAZARD_REGISTRY,
  getHazardById,
  getPrimaryHazards,
  getPublicHazards,
  getAllAnalyticalCategories,
};

// System Architecture Information for About Page
export const SYSTEM_INFO = {
  version: "v2.6.4-Himalayan-Risk",
  platform: "AAPDA DRISHTI Multi-Hazard Risk Platform",
  subheading: "Advanced Himalayan Cryospheric, Hydrological & Slope Risk Intelligence",
  overview: "Aapda Drishti provides specialized multi-hazard intelligence across the Indian Himalayan arc—focusing specifically on Glacial Lake Outburst Floods (GLOF), river and flash floods, rainfall-triggered landslides, and snow avalanches. By harmonizing satellite multispectral imagery, DGRE high-altitude weather telemetry, CWC mountain river streamflow gauges, and Geological Survey slope data, the platform empowers district disaster management cells with proactive early warnings.",
  vision: "A resilient Himalayan region where vulnerable mountain settlements, vital river basins, and critical infrastructure lifelines are protected from high-altitude and slope disasters through science-backed early warnings.",
  mission: "Safeguard Himalayan communities, hydel infrastructure, and strategic transportation corridors through multimodal disaster risk assessment and real-time early alerts.",
  values: "Scientific rigor, community-first protection, transparency regarding sensor uncertainty, and seamless coordination across state disaster response forces.",
  howItWorks: [
    {
      step: 1,
      title: "Multimodal Telemetry",
      desc: "Ingests Sentinel-2 multispectral lake boundaries, DGRE snowpack telemetry, CWC mountain river streamflows, and IMD rainfall observations.",
      icon: "Database",
    },
    {
      step: 2,
      title: "Hazard Analytics Engine",
      desc: "Processes moraine stability indicators, antecedent soil moisture, slope gradient physics, and avalanche danger matrices.",
      icon: "Cpu",
    },
    {
      step: 3,
      title: "Threshold & Risk Scoring",
      desc: "Evaluates multi-basin trigger thresholds to generate granular hazard indices and severity classifications (Low to Very High).",
      icon: "BellRing",
    },
    {
      step: 4,
      title: "Actionable Advisories",
      desc: "Delivers localized alerts, SOP checklists, and downstream evacuation guidance directly to district emergency centers and responder teams.",
      icon: "ShieldCheck",
    },
  ],
  dataSources: [
    {
      name: "Glacial Lake & Cryosphere Telemetry",
      provider: "Sentinel-2 Multi-spectral & MOSDAC Altimetry",
      status: "Operational (Simulated Demo Feeds)",
      icon: "Satellite",
    },
    {
      name: "Mountain River Discharge Telemetry",
      provider: "CWC Hydrological Stations & Radar Stream Gauges",
      status: "Operational (Simulated Demo Feeds)",
      icon: "Waves",
    },
    {
      name: "Snowpack Stratigraphy & Avalanche Data",
      provider: "DGRE High-Altitude AWS & Telemetry Stations",
      status: "Operational (Simulated Demo Feeds)",
      icon: "MountainSnow",
    },
    {
      name: "Geological Slope Susceptibility",
      provider: "GSI Landslide Atlas & IMD Doppler Radar",
      status: "Operational (Simulated Demo Feeds)",
      icon: "Mountain",
    },
  ],
  benefits: [
    "Dedicated coverage of high-risk Himalayan hazards: GLOF, Floods, Landslides & Snow Avalanches.",
    "Glacial lake moraine expansion monitoring with satellite multi-spectral segmentation pipelines.",
    "Integrated DGRE snowpack danger level thresholds for strategic mountain passes and pilgrim routes.",
    "Localized cloudburst and antecedent rainfall indices calibrated for steep Himalayan slope failure.",
    "Instant coordination channel for SDRF, NDRF, and district emergency management cells."
  ],
};
