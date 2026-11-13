import React, { useState } from 'react';
import {
  ZoomIn,
  ZoomOut,
  RotateCcw,
  MapPin,
  Maximize2,
  Waves,
  CloudRain,
  Mountain,
  MountainSnow,
} from 'lucide-react';
import { useDisaster } from '../../context/DisasterContext';

export default function IndiaRiskMapSvg({ compact = false }) {
  const {
    statesRiskMap,
    selectedStateName,
    selectState,
    selectedHazardId = 'GLOF',
    openAlertModal,
    setActiveTab,
  } = useDisaster();

  const [zoomLevel, setZoomLevel] = useState(1);
  const [hoveredState, setHoveredState] = useState(null);

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.25, 2.2));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.25, 0.8));
  const handleResetZoom = () => setZoomLevel(1);

  // Hazard-specific Hotspots for the Himalayan Region (800x850 viewBox)
  const hazardHotspots = {
    GLOF: [
      {
        id: 'hs-glof-sikkim',
        state: 'Sikkim',
        name: 'South Lhonak Glacial Lake',
        threat: 'GLOF Early Warning',
        level: 'Very High',
        color: '#0284C7',
        icon: Waves,
        x: 625,
        y: 255,
        modalType: 'glof',
      },
      {
        id: 'hs-glof-chamoli',
        state: 'Uttarakhand',
        name: 'Chamoli Upper Catchment',
        threat: 'Moraine Breach Watch',
        level: 'High',
        color: '#0284C7',
        icon: Waves,
        x: 355,
        y: 225,
        modalType: 'glof',
      },
      {
        id: 'hs-glof-hp',
        state: 'Himachal Pradesh',
        name: 'Chandra-Bhaga Basin',
        threat: 'Glacial Lake Surge',
        level: 'High',
        color: '#0284C7',
        icon: Waves,
        x: 330,
        y: 175,
        modalType: 'glof',
      },
      {
        id: 'hs-glof-ladakh',
        state: 'Ladakh',
        name: 'Zanskar Glacial Basin',
        threat: 'Proglacial Expansion',
        level: 'Moderate',
        color: '#0284C7',
        icon: Waves,
        x: 310,
        y: 85,
        modalType: 'glof',
      },
    ],
    FLOOD: [
      {
        id: 'hs-flood-uk',
        state: 'Uttarakhand',
        name: 'Alaknanda River Corridor',
        threat: 'Flash Flood Warning',
        level: 'Very High',
        color: '#2563EB',
        icon: CloudRain,
        x: 350,
        y: 235,
        modalType: 'flashFlood',
      },
      {
        id: 'hs-flood-hp',
        state: 'Himachal Pradesh',
        name: 'Beas River Valley',
        threat: 'River Overflow Advisory',
        level: 'High',
        color: '#2563EB',
        icon: CloudRain,
        x: 330,
        y: 185,
        modalType: 'heavyRain',
      },
      {
        id: 'hs-flood-assam',
        state: 'Assam',
        name: 'Brahmaputra Basin',
        threat: 'River Surge Warning',
        level: 'High',
        color: '#2563EB',
        icon: CloudRain,
        x: 685,
        y: 285,
        modalType: 'assam',
      },
      {
        id: 'hs-flood-jk',
        state: 'Jammu & Kashmir',
        name: 'Jhelum River Valley',
        threat: 'High River Stage Advisory',
        level: 'High',
        color: '#2563EB',
        icon: CloudRain,
        x: 275,
        y: 110,
        modalType: 'heavyRain',
      },
    ],
    LANDSLIDE: [
      {
        id: 'hs-ls-hp',
        state: 'Himachal Pradesh',
        name: 'Kullu & Mandi NH-3',
        threat: 'Debris Flow & Slope Instability',
        level: 'Very High',
        color: '#D97706',
        icon: Mountain,
        x: 330,
        y: 185,
        modalType: 'landslide',
      },
      {
        id: 'hs-ls-uk',
        state: 'Uttarakhand',
        name: 'Rudraprayag NH-58',
        threat: 'Slope Failure Red Alert',
        level: 'Very High',
        color: '#D97706',
        icon: Mountain,
        x: 350,
        y: 235,
        modalType: 'landslide',
      },
      {
        id: 'hs-ls-sikkim',
        state: 'Sikkim',
        name: 'Mangan & Teesta NH-10',
        threat: 'NH-10 Rockfall Warning',
        level: 'High',
        color: '#D97706',
        icon: Mountain,
        x: 625,
        y: 255,
        modalType: 'landslide',
      },
      {
        id: 'hs-ls-jk',
        state: 'Jammu & Kashmir',
        name: 'Ramban NH-44',
        threat: 'Shooting Stone & Mudflow Alert',
        level: 'High',
        color: '#D97706',
        icon: Mountain,
        x: 275,
        y: 110,
        modalType: 'landslide',
      },
    ],
    SNOW_AVALANCHE: [
      {
        id: 'hs-av-jk',
        state: 'Jammu & Kashmir',
        name: 'Gulmarg High Ridges',
        threat: 'Snow Avalanche Warning (Level 4)',
        level: 'Very High',
        color: '#6366F1',
        icon: MountainSnow,
        x: 265,
        y: 100,
        modalType: 'avalanche',
      },
      {
        id: 'hs-av-ladakh',
        state: 'Ladakh',
        name: 'Zojila Pass & Dras',
        threat: 'High-Altitude Avalanche Warning',
        level: 'Very High',
        color: '#6366F1',
        icon: MountainSnow,
        x: 310,
        y: 85,
        modalType: 'avalanche',
      },
      {
        id: 'hs-av-hp',
        state: 'Himachal Pradesh',
        name: 'Rohtang & Atal Pass',
        threat: 'Pass Avalanche Hazard',
        level: 'High',
        color: '#6366F1',
        icon: MountainSnow,
        x: 335,
        y: 165,
        modalType: 'avalanche',
      },
      {
        id: 'hs-av-uk',
        state: 'Uttarakhand',
        name: 'Badrinath Alpine Slopes',
        threat: 'Alpine Snowpack Advisory',
        level: 'High',
        color: '#6366F1',
        icon: MountainSnow,
        x: 360,
        y: 215,
        modalType: 'avalanche',
      },
    ],
  };

  const activeHotspots =
    hazardHotspots[selectedHazardId] || [
      hazardHotspots.GLOF[0],
      hazardHotspots.FLOOD[0],
      hazardHotspots.LANDSLIDE[0],
      hazardHotspots.SNOW_AVALANCHE[0],
    ];

  // Vector boundaries for Indian states in 800x850 viewport
  const stateRegions = [
    {
      id: 'Jammu & Kashmir',
      name: 'Jammu & Kashmir',
      risk: 'High',
      fill: '#F97316',
      d: 'M 250,70 L 310,65 L 350,110 L 320,150 L 270,140 L 230,120 Z',
    },
    {
      id: 'Himachal Pradesh',
      name: 'Himachal Pradesh',
      risk: 'High',
      fill: '#F97316',
      d: 'M 320,150 L 360,140 L 375,185 L 335,200 L 305,175 Z',
    },
    {
      id: 'Uttarakhand',
      name: 'Uttarakhand',
      risk: 'Very High',
      fill: '#EF4444',
      d: 'M 345,195 L 390,195 L 405,245 L 365,260 L 335,215 Z',
    },
    {
      id: 'Punjab & Haryana',
      name: 'Punjab & Haryana',
      risk: 'Medium',
      fill: '#CBD5E1',
      d: 'M 280,165 L 320,165 L 330,225 L 290,230 Z',
    },
    {
      id: 'Rajasthan',
      name: 'Rajasthan',
      risk: 'Low',
      fill: '#CBD5E1',
      d: 'M 175,230 L 285,230 L 310,310 L 260,370 L 170,330 Z',
    },
    {
      id: 'Uttar Pradesh',
      name: 'Uttar Pradesh',
      risk: 'Medium',
      fill: '#CBD5E1',
      d: 'M 345,255 L 435,245 L 505,300 L 440,360 L 350,330 Z',
    },
    {
      id: 'Bihar',
      name: 'Bihar',
      risk: 'Medium',
      fill: '#CBD5E1',
      d: 'M 490,295 L 560,290 L 575,345 L 500,350 Z',
    },
    {
      id: 'Sikkim',
      name: 'Sikkim',
      risk: 'Very High',
      fill: '#EF4444',
      d: 'M 615,240 L 635,240 L 640,265 L 618,268 Z',
    },
    {
      id: 'Assam',
      name: 'Assam',
      risk: 'High',
      fill: '#F97316',
      d: 'M 640,265 L 720,250 L 740,310 L 655,315 Z',
    },
    {
      id: 'Northeast States',
      name: 'Arunachal Pradesh',
      risk: 'Moderate',
      fill: '#F59E0B',
      d: 'M 685,210 L 755,225 L 750,290 L 700,270 Z',
    },
    {
      id: 'West Bengal',
      name: 'West Bengal',
      risk: 'Low',
      fill: '#CBD5E1',
      d: 'M 565,335 L 610,335 L 600,430 L 565,405 Z',
    },
    {
      id: 'Odisha',
      name: 'Odisha',
      risk: 'Low',
      fill: '#CBD5E1',
      d: 'M 480,395 L 565,395 L 545,490 L 470,470 Z',
    },
    {
      id: 'Madhya Pradesh',
      name: 'Madhya Pradesh',
      risk: 'Low',
      fill: '#CBD5E1',
      d: 'M 285,340 L 450,340 L 460,425 L 340,435 L 280,390 Z',
    },
    {
      id: 'Gujarat',
      name: 'Gujarat',
      risk: 'Low',
      fill: '#CBD5E1',
      d: 'M 130,345 L 235,345 L 240,440 L 160,445 Z',
    },
    {
      id: 'Maharashtra',
      name: 'Maharashtra',
      risk: 'Low',
      fill: '#CBD5E1',
      d: 'M 245,430 L 390,430 L 420,530 L 260,535 Z',
    },
    {
      id: 'Telangana & Andhra Pradesh',
      name: 'Andhra Pradesh & Telangana',
      risk: 'Low',
      fill: '#CBD5E1',
      d: 'M 370,510 L 490,480 L 470,620 L 380,590 Z',
    },
    {
      id: 'Karnataka',
      name: 'Karnataka',
      risk: 'Low',
      fill: '#CBD5E1',
      d: 'M 270,535 L 360,535 L 365,650 L 295,640 Z',
    },
    {
      id: 'Kerala',
      name: 'Kerala',
      risk: 'Low',
      fill: '#CBD5E1',
      d: 'M 290,645 L 330,645 L 330,750 L 300,740 Z',
    },
    {
      id: 'Tamil Nadu',
      name: 'Tamil Nadu',
      risk: 'Low',
      fill: '#CBD5E1',
      d: 'M 335,630 L 405,620 L 380,750 L 325,750 Z',
    },
  ];

  // Dynamic state fill calculation based on selectedHazardId
  const getRegionFill = (region) => {
    const stateData = statesRiskMap[region.name] || statesRiskMap[region.id];
    if (!stateData) return region.fill;
    if (!selectedHazardId) return stateData.riskColor || region.fill;

    const hazardRisk = stateData.hazardRisks?.[selectedHazardId];
    if (!hazardRisk || !hazardRisk.available || hazardRisk.riskLevel === 'Non-Applicable') {
      return '#CBD5E1'; // Neutral gray for non-applicable / non-susceptible geography
    }

    switch (hazardRisk.riskLevel) {
      case 'Very High':
        return '#EF4444';
      case 'High':
        return '#F97316';
      case 'Moderate':
      case 'Medium':
        return '#F59E0B';
      case 'Low':
        return '#10B981';
      default:
        return region.fill;
    }
  };

  return (
    <div className="relative bg-white rounded-3xl border border-slate-200/90 shadow-xs overflow-hidden flex flex-col h-full min-h-[460px]">
      {/* Map Header */}
      <div className="flex items-center justify-between p-4 md:p-5 border-b border-slate-100 bg-slate-50/60">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-sky-50 text-sky-600 border border-sky-200">
            <MapPin className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900 leading-tight">
              Himalayan Risk Radar
            </h3>
            <p className="text-xs text-slate-500">
              Active Focus: <span className="font-bold text-sky-700">{selectedHazardId}</span> Vulnerability Layer
            </p>
          </div>
        </div>

        {/* Map Header Controls */}
        <div className="flex items-center gap-2">
          {compact && (
            <button
              onClick={() => setActiveTab('riskmap')}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-sky-700 bg-sky-50 border border-sky-200 rounded-xl hover:bg-sky-100 transition-colors cursor-pointer"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Full Screen</span>
            </button>
          )}

          {/* Zoom Buttons */}
          <div className="flex items-center bg-white border border-slate-200 rounded-xl p-1 shadow-xs">
            <button
              onClick={handleZoomIn}
              className="p-1.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              title="Zoom In"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={handleZoomOut}
              className="p-1.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              title="Zoom Out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <button
              onClick={handleResetZoom}
              className="p-1.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              title="Reset View"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* SVG Map Canvas */}
      <div className="relative flex-1 bg-gradient-to-b from-sky-50/30 via-slate-50 to-blue-50/40 overflow-hidden flex items-center justify-center p-2">
        {/* Subtle Map Coordinate Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

        <div
          className="w-full h-full max-w-[650px] max-h-[580px] transition-transform duration-300 ease-out flex items-center justify-center"
          style={{ transform: `scale(${zoomLevel})` }}
        >
          <svg
            viewBox="100 40 700 750"
            className="w-full h-full drop-shadow-md select-none"
          >
            {/* State Polygons with Dynamic Hazard Fill */}
            <g id="state-polygons">
              {stateRegions.map((region) => {
                const isSelected = selectedStateName === region.name;
                const isHovered = hoveredState === region.name;
                const dynamicFill = getRegionFill(region);

                return (
                  <path
                    key={region.id}
                    d={region.d}
                    fill={dynamicFill}
                    fillOpacity={isSelected ? 0.95 : isHovered ? 0.85 : 0.72}
                    stroke={isSelected ? '#0284C7' : '#FFFFFF'}
                    strokeWidth={isSelected ? 3.5 : 1.8}
                    strokeLinejoin="round"
                    className="transition-all duration-200 cursor-pointer hover:filter hover:brightness-110"
                    onMouseEnter={() => setHoveredState(region.name)}
                    onMouseLeave={() => setHoveredState(null)}
                    onClick={() => selectState(region.name)}
                  />
                );
              })}
            </g>

            {/* Maritime Border Accent */}
            <path
              d="M 120,440 Q 230,550 300,750 Q 380,750 470,620 Q 550,470 600,430"
              fill="none"
              stroke="#38BDF8"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              opacity="0.4"
            />

            {/* Island Groups */}
            <circle cx="210" cy="690" r="4" fill="#CBD5E1" opacity="0.8" />
            <circle cx="205" cy="710" r="3.5" fill="#CBD5E1" opacity="0.8" />
            <circle cx="680" cy="660" r="4" fill="#CBD5E1" opacity="0.8" />
            <circle cx="685" cy="690" r="3.5" fill="#CBD5E1" opacity="0.8" />

            {/* Pulsing Hotspot Pins */}
            {activeHotspots.map((hs) => (
              <g
                key={hs.id}
                className="cursor-pointer group"
                onClick={() => {
                  selectState(hs.state);
                  openAlertModal(hs.modalType);
                }}
              >
                {/* Outer pulsating radar ring */}
                <circle
                  cx={hs.x}
                  cy={hs.y}
                  r="18"
                  fill={hs.color}
                  opacity="0.25"
                  className="animate-ping origin-center"
                />
                {/* Outer solid halo */}
                <circle
                  cx={hs.x}
                  cy={hs.y}
                  r="12"
                  fill={hs.color}
                  opacity="0.35"
                />
                {/* Core Pin */}
                <circle
                  cx={hs.x}
                  cy={hs.y}
                  r="7.5"
                  fill={hs.color}
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  className="shadow-md"
                />

                {/* Hotspot label badge on map */}
                <rect
                  x={hs.x + 10}
                  y={hs.y - 14}
                  width={hs.name.length * 6.5 + 16}
                  height="20"
                  rx="10"
                  fill="#0F172A"
                  fillOpacity="0.85"
                />
                <text
                  x={hs.x + 18}
                  y={hs.y}
                  fill="#FFFFFF"
                  fontSize="9.5"
                  fontWeight="700"
                  alignmentBaseline="middle"
                >
                  {hs.name}
                </text>
              </g>
            ))}
          </svg>
        </div>

        {/* Hover / Selection State Tooltip Badge */}
        {(hoveredState || selectedStateName) && (
          <div className="absolute top-4 left-4 z-20 bg-slate-900/90 text-white backdrop-blur-md px-3.5 py-2 rounded-xl border border-slate-700/80 shadow-lg text-xs pointer-events-none">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse"></span>
              <span className="font-bold">{hoveredState || selectedStateName}</span>
            </div>
            <p className="text-[11px] text-slate-300 mt-0.5">
              {statesRiskMap[hoveredState || selectedStateName]?.hazardRisks?.[selectedHazardId]?.note ||
                statesRiskMap[hoveredState || selectedStateName]?.primaryThreat ||
                'Himalayan Risk Surveillance'}
            </p>
          </div>
        )}

        {/* Bottom Legend */}
        <div className="absolute bottom-3 left-4 z-20 flex flex-col gap-1.5 p-3 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-sm text-xs">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">
            {selectedHazardId} Vulnerability
          </span>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
            <span className="text-slate-700 font-semibold text-[11px]">Very High</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span>
            <span className="text-slate-700 font-semibold text-[11px]">High</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
            <span className="text-slate-700 font-semibold text-[11px]">Moderate</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <span className="text-slate-700 font-semibold text-[11px]">Low</span>
          </div>
          <div className="flex items-center gap-2 pt-0.5 border-t border-slate-100">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
            <span className="text-slate-500 font-medium text-[10px]">Non-Applicable</span>
          </div>
        </div>
      </div>
    </div>
  );
}
