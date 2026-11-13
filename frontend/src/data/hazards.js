// AAPDA DRISHTI - Central Authoritative Hazard Taxonomy & Registry
// Focus: AI-assisted Himalayan Disaster-Risk Assessment, Monitoring & Early-Warning Platform

/**
 * FOUR CANONICAL PRIMARY HAZARDS FOR AAPDA DRISHTI
 * 1. GLOF — Glacial Lake Outburst Flood
 * 2. FLOOD — River Floods and Flash Floods
 * 3. LANDSLIDE — Rainfall-induced and terrain-related landslides
 * 4. SNOW_AVALANCHE — Sudden movement of snow down mountain slopes
 */

export const PRIMARY_HAZARDS = [
  {
    id: "GLOF",
    canonicalId: "GLOF",
    name: "Glacial Lake Outburst Flood (GLOF)",
    shortName: "GLOF",
    title: "Glacial Lake Outburst Flood (GLOF)",
    analyticsCategory: "GLOF",
    iconName: "Waves",
    emoji: "🌊",
    badge: "Cryosphere Hazard",
    description: "Sudden release of water from a glacial lake that can trigger destructive downstream flooding.",
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?auto=format&fit=crop&w=800&q=80",
    color: "#0284C7", // sky-600
    borderColor: "border-sky-300",
    bgColor: "bg-sky-50",
    textColor: "text-sky-700",
    impactRating: "Extreme",
    season: "Summer & Post-Monsoon Melt (July - October)",
    geographicApplicability: [
      "Sikkim (South Lhonak, Shako Cho, Gurudongmar)",
      "Uttarakhand (Chamoli, Rishiganga & Alaknanda Upper Basins)",
      "Himachal Pradesh (Chandra-Bhaga Basin, Spiti, Kinnaur)",
      "Ladakh (Zanskar, Nubra, Shyok Glacial Lakes)",
      "Arunachal Pradesh (Subansiri & Dibang Catchments)"
    ],
    keyRiskIndicators: [
      "Glacial lake extent and changes.",
      "Lake water level, where reliable observations exist.",
      "Dam or moraine instability indicators, where available.",
      "Precipitation, temperature, and melt-related conditions.",
      "Downstream terrain, river channels, and exposed settlements."
    ],
    riskFactorDimensions: [
      { id: "lakeConditions", label: "Glacial Lake Extent & Surface Change", weight: 35 },
      { id: "meltConditions", label: "Precipitation & Temperature Melt Anomaly", weight: 25 },
      { id: "damStability", label: "Dam / Moraine Instability Indicators", weight: 20 },
      { id: "downstreamExposure", label: "Downstream Terrain & Exposed Settlements", weight: 20 }
    ],
    requiredDataInputs: [
      "Sentinel-2 & Landsat optical imagery (Multi-spectral lake area segmentation)",
      "High-resolution DEM (Surface gradient, moraine crest geometry & freeboard)",
      "Automated Weather Station (AWS) ambient temperature & melt rate telemetry",
      "Downstream river channel geometry & settlement vulnerability GIS registers"
    ],
    riskInterpretation: "High moraine water accumulation combined with rapid thermal melt can cause structural moraine dam breach, generating catastrophic debris torrents downstream within minutes.",
    guidelines: [
      "Evacuate low-lying riverbed settlements immediately upon breach early-warning broadcast.",
      "Never remain near narrow mountain river canyons or bridges during sudden water surge events.",
      "Identify high-elevation muster points at least 30-50 meters above historical flood levels.",
      "Follow designated district evacuation paths away from narrow river gorge bottlenecks."
    ],
    alertTypes: ["Glacial Lake Outburst Early Warning", "Moraine Dam Instability Watch", "Rapid Lake Expansion Advisory"]
  },
  {
    id: "FLOOD",
    canonicalId: "FLOOD",
    name: "Floods and Flash Floods",
    shortName: "Flood",
    title: "Floods and Flash Floods",
    analyticsCategory: "Flood",
    iconName: "CloudRain",
    emoji: "🌧️",
    badge: "Hydrological Hazard",
    description: "River overflow and rapid flooding associated with heavy rainfall, snowmelt, and sudden water-level rises.",
    image: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=800&q=80",
    color: "#2563EB", // blue-600
    borderColor: "border-blue-300",
    bgColor: "bg-blue-50",
    textColor: "text-blue-700",
    impactRating: "Very High",
    season: "Monsoon & Pre-Monsoon Cloudbursts (June - September)",
    geographicApplicability: [
      "Uttarakhand (Alaknanda, Bhagirathi, Mandakini, Ganga River Corridors)",
      "Himachal Pradesh (Beas, Satluj, Ravi & Chenab Basins)",
      "Assam (Brahmaputra Basin & Himalayan Foothill Tributaries)",
      "Jammu & Kashmir (Jhelum Basin & Mountain Torrents)",
      "Sikkim (Teesta River Gorge & Tributary Streams)"
    ],
    keyRiskIndicators: [
      "Rainfall intensity and accumulated precipitation.",
      "River discharge or water-level observations.",
      "Catchment characteristics and terrain.",
      "Soil saturation and snowmelt, where data are available.",
      "Historical flood occurrence and downstream exposure."
    ],
    riskFactorDimensions: [
      { id: "rainfallIntensity", label: "Rainfall Intensity & Accumulated Precipitation", weight: 35 },
      { id: "riverDischarge", label: "River Discharge & Water-Level Observations", weight: 25 },
      { id: "catchmentSaturation", label: "Catchment Characteristics & Soil Saturation", weight: 20 },
      { id: "downstreamExposure", label: "Historical Flood Occurrence & Settlement Exposure", weight: 20 }
    ],
    requiredDataInputs: [
      "CWC hydrological stream gauges and telemetry discharge stations",
      "IMD Doppler Weather Radar localized precipitation intensity feeds",
      "Digital Elevation Models (Catchment slope, drainage network, flow accumulation)",
      "Antecedent Soil Moisture indices and historical flood inundation maps"
    ],
    riskInterpretation: "Intense localized cloudbursts or sustained monsoon rainfall rapidly overwhelm mountain stream carrying capacities, triggering destructive flash floods with minimal lead time.",
    guidelines: [
      "Move immediately to higher ground when heavy rain or flash flood advisories trigger.",
      "Never attempt to drive or walk through fast-moving mountain floodwaters or inundated bridges.",
      "Switch off main circuit breakers and gas connections prior to precautionary evacuation.",
      "Keep essential emergency grab-bags (potable water, torch, medications) ready and accessible."
    ],
    alertTypes: ["Flash Flood Warning", "River Level Danger Mark Surge", "Heavy Mountain Precipitation Advisory"]
  },
  {
    id: "LANDSLIDE",
    canonicalId: "LANDSLIDE",
    name: "Landslides",
    shortName: "Landslide",
    title: "Landslides",
    analyticsCategory: "Landslide",
    iconName: "Mountain",
    emoji: "⛰️",
    badge: "Geological Hazard",
    description: "Downslope movement of soil, rock, or debris influenced by rainfall, slope conditions, and terrain instability.",
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80",
    color: "#D97706", // amber-600
    borderColor: "border-amber-300",
    bgColor: "bg-amber-50",
    textColor: "text-amber-700",
    impactRating: "High",
    season: "Monsoon & Post-Rain Thaw (July - October)",
    geographicApplicability: [
      "Uttarakhand (Rudraprayag, Chamoli, Tehri, Pithoragarh, Dehradun Slopes)",
      "Himachal Pradesh (Kullu, Mandi, Shimla, Kinnaur NH-3 / NH-5 Corridors)",
      "Jammu & Kashmir (Jammu-Srinagar NH-44, Ramban, Doda)",
      "Sikkim (Mangan, Gangtok, NH-10 Lifeline Corridor)",
      "Arunachal Pradesh (Kameng, Tawang, Lower Subansiri Slopes)"
    ],
    keyRiskIndicators: [
      "Rainfall intensity and antecedent rainfall.",
      "Slope angle, elevation, and terrain.",
      "Land cover and geological susceptibility, where available.",
      "Soil moisture and drainage conditions, where available.",
      "Historical landslide inventory and exposed infrastructure."
    ],
    riskFactorDimensions: [
      { id: "rainfallTrigger", label: "Rainfall Intensity & Antecedent Rainfall", weight: 35 },
      { id: "slopeSusceptibility", label: "Slope Angle, Elevation & Terrain Susceptibility", weight: 25 },
      { id: "geologicalFactor", label: "Geological Susceptibility & Soil Saturation", weight: 20 },
      { id: "exposedInfrastructure", label: "Historical Landslide Inventory & Highway Exposure", weight: 20 }
    ],
    requiredDataInputs: [
      "Geological Survey of India (GSI) Landslide Susceptibility Atlas",
      "High-resolution DEM slope gradient, aspect, and curvature metrics",
      "Cumulative 3-day and 7-day rainfall gauges and satellite precipitation (GPM)",
      "InSAR ground displacement measurements and road alignment maps"
    ],
    riskInterpretation: "Prolonged rainfall saturates sheared slope matrices, elevating pore-water pressure along slip surfaces and triggering rapid debris flows and rockfalls across mountain corridors.",
    guidelines: [
      "Listen for unusual sounds like cracking trees, rumbling boulders, or sudden muddy water trickling.",
      "Avoid traveling along steep hillside highway corridors during active high-precipitation red alerts.",
      "Relocate immediately if sudden ground fissures, tilting utility poles, or wall cracks appear.",
      "Never establish camps or shelters directly below active talus cones or narrow drainage gullies."
    ],
    alertTypes: ["Slope Instability Red Alert", "Debris Flow Watch", "Highway Lifeline Corridor Blockade Advisory"]
  },
  {
    id: "SNOW_AVALANCHE",
    canonicalId: "SNOW_AVALANCHE",
    name: "Snow Avalanches",
    shortName: "Snow Avalanche",
    title: "Snow Avalanches",
    analyticsCategory: "Snow Avalanche",
    iconName: "MountainSnow",
    emoji: "❄️",
    badge: "Cryosphere Hazard",
    description: "Rapid movement of snow down a mountain slope under potentially unstable snowpack conditions.",
    image: "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?auto=format&fit=crop&w=800&q=80",
    color: "#6366F1", // indigo-500
    borderColor: "border-indigo-300",
    bgColor: "bg-indigo-50",
    textColor: "text-indigo-700",
    impactRating: "High",
    season: "Winter & Early Spring (December - April)",
    geographicApplicability: [
      "Jammu & Kashmir (Gulmarg High Ridges, Pir Panjal, Sonamarg, Kupwara)",
      "Ladakh (Zojila Pass, Dras, Khardung La, Chang La)",
      "Himachal Pradesh (Rohtang, Atal Tunnel approaches, Lahaul-Spiti, Kinnaur)",
      "Uttarakhand (Badrinath & Kedarnath Upper Slopes, Pindari, Nanda Devi Basin)",
      "Sikkim (North Sikkim Alpine Ridges & Gurudongmar Heights)"
    ],
    keyRiskIndicators: [
      "Snow cover and snowpack conditions, where available.",
      "Recent snowfall and accumulated snow.",
      "Temperature fluctuations and wind-driven snow redistribution.",
      "Slope angle, elevation, and aspect.",
      "Historical avalanche occurrence and exposed routes or settlements."
    ],
    riskFactorDimensions: [
      { id: "snowpackInstability", label: "Snow Cover & Snowpack Layer Conditions", weight: 35 },
      { id: "recentSnowfall", label: "Recent Snowfall & Accumulated Snow Depth", weight: 25 },
      { id: "tempWindRedistribution", label: "Temperature Fluctuations & Wind Redistribution", weight: 20 },
      { id: "slopeAspectExposure", label: "Slope Angle (30°-45°), Aspect & Historical Route Exposure", weight: 20 }
    ],
    requiredDataInputs: [
      "DGRE (Defence Geoinformatics Research Establishment) avalanche bulletin telemetry",
      "High-altitude Automated Weather Station (AWS) snow depth, air temperature & wind velocity",
      "MODIS / Sentinel-3 Snow Cover Area (SCA) daily optical and SAR observation layers",
      "Historical avalanche path registers, slope aspect maps, and highway snow-shed locations"
    ],
    riskInterpretation: "Fresh heavy snow loading over weak stratigraphic layers, combined with wind-slab formation or sudden temperature warming, can cause massive snowpack detachment on slopes between 30° and 45°.",
    guidelines: [
      "Strictly adhere to official DGRE avalanche danger warnings (Level 1 Low to Level 5 Extreme).",
      "Avoid traversing leeward slopes between 30° and 45° during or immediately following heavy snowfall.",
      "Equip backcountry teams and convoy travelers with avalanche transceivers, probes, and snow shovels.",
      "Observe highway traffic restrictions at strategic mountain passes (e.g., Zojila, Rohtang) during active alerts."
    ],
    alertTypes: ["High-Altitude Avalanche Warning", "Snowpack Instability Watch", "Mountain Pass Snow Avalanche Advisory"]
  }
];

// Alias for backwards compatibility
export const PUBLIC_HAZARDS = PRIMARY_HAZARDS;

// Lookup Registry by canonical ID & aliases
export const HAZARD_REGISTRY = PRIMARY_HAZARDS.reduce((acc, h) => {
  acc[h.id] = h;
  acc[h.canonicalId] = h;
  acc[h.id.toLowerCase()] = h;
  acc[h.shortName.toLowerCase()] = h;
  acc[h.shortName.toLowerCase().replace(/\s+/g, '_')] = h;
  return acc;
}, {});

// Helper Functions
export function getPrimaryHazards() {
  return PRIMARY_HAZARDS;
}

export function getPublicHazards() {
  return PRIMARY_HAZARDS;
}

export function getHazardById(id) {
  if (!id) return null;
  const key = String(id).toUpperCase().trim();
  if (key === 'GLOF') return HAZARD_REGISTRY['GLOF'];
  if (key === 'FLOOD') return HAZARD_REGISTRY['FLOOD'];
  if (key === 'LANDSLIDE') return HAZARD_REGISTRY['LANDSLIDE'];
  if (key === 'SNOW_AVALANCHE' || key === 'SNOW AVALANCHE' || key === 'AVALANCHE') {
    return HAZARD_REGISTRY['SNOW_AVALANCHE'];
  }
  const normalized = String(id).toLowerCase().trim().replace(/\s+/g, '_');
  return HAZARD_REGISTRY[normalized] || HAZARD_REGISTRY[id] || null;
}

export function getAllAnalyticalCategories() {
  return ["All", "GLOF", "Flood", "Landslide", "Snow Avalanche"];
}
