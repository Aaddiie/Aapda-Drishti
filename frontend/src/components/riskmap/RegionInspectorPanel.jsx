import React from 'react';
import {
  MapPin,
  Info,
  Waves,
  Mountain,
  MountainSnow,
  CloudRain,
  BellRing,
  ShieldCheck,
  Ban,
} from 'lucide-react';
import { useDisaster } from '../../context/DisasterContext';
import { PRIMARY_HAZARDS, getHazardById } from '../../data/hazards';

export default function RegionInspectorPanel() {
  const {
    selectedStateName,
    selectedRegionData,
    selectedHazardId = 'GLOF',
    setSelectedHazardId,
    openAlertModal,
    alerts,
  } = useDisaster();

  const currentHazardDef = getHazardById(selectedHazardId) || PRIMARY_HAZARDS[0];
  const hazardKey = currentHazardDef.canonicalId || 'GLOF';

  // Get hazard-specific risk assessment for this state
  const hazardProfile = selectedRegionData?.hazardRisks?.[hazardKey] || null;
  const isAvailable = hazardProfile && hazardProfile.available !== false;

  // Find if there is an active alert matching this state & hazard
  const matchingAlert = alerts.find(
    (a) =>
      a.state.toLowerCase() === selectedStateName.toLowerCase() &&
      (a.hazardId === hazardKey || a.category.toLowerCase().includes(currentHazardDef.shortName.toLowerCase()))
  ) || alerts.find((a) => a.state.toLowerCase() === selectedStateName.toLowerCase()) || alerts[0];

  const hazardIcons = {
    GLOF: Waves,
    FLOOD: CloudRain,
    LANDSLIDE: Mountain,
    SNOW_AVALANCHE: MountainSnow,
  };

  const ActiveIcon = hazardIcons[hazardKey] || Waves;

  const getRiskBadgeStyles = (level) => {
    switch (level) {
      case 'Very High':
        return 'bg-rose-50 border-rose-200 text-rose-700';
      case 'High':
        return 'bg-orange-50 border-orange-200 text-orange-700';
      case 'Moderate':
      case 'Medium':
        return 'bg-amber-50 border-amber-200 text-amber-700';
      case 'Low':
        return 'bg-emerald-50 border-emerald-200 text-emerald-700';
      default:
        return 'bg-slate-100 border-slate-200 text-slate-600';
    }
  };

  const getProgressColor = (val) => {
    if (val >= 80) return 'bg-rose-500';
    if (val >= 65) return 'bg-orange-500';
    if (val >= 45) return 'bg-amber-500';
    return 'bg-emerald-500';
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xs p-5 md:p-6 flex flex-col justify-between h-full space-y-6">
      <div className="space-y-5">
        {/* Selected Region & Hazard Indicator */}
        <div>
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
              Selected Himalayan Region
            </span>
            <span className="px-2 py-0.5 text-[10px] font-bold rounded-md bg-sky-50 text-sky-700 border border-sky-200">
              {selectedRegionData.isHimalayan ? 'Core Himalayan Zone' : 'Downstream / Transition Zone'}
            </span>
          </div>

          <div className="flex items-center gap-2 mt-1">
            <MapPin className="w-5 h-5 text-sky-600 flex-shrink-0" />
            <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-tight">
              {selectedRegionData.name}
            </h2>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Region: {selectedRegionData.region} • Capital: {selectedRegionData.capital}
          </p>
        </div>

        {/* Hazard Selector Switcher Bar Inside Inspector */}
        <div className="p-2 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
          <div className="flex items-center justify-between text-[11px] font-bold text-slate-500 px-1">
            <span>Inspected Hazard:</span>
            <span className="text-sky-700 font-extrabold">{currentHazardDef.name}</span>
          </div>
          <div className="grid grid-cols-4 gap-1">
            {PRIMARY_HAZARDS.map((h) => {
              const HIcon = hazardIcons[h.canonicalId] || Waves;
              const isSelected = hazardKey === h.canonicalId;
              return (
                <button
                  key={h.canonicalId}
                  onClick={() => setSelectedHazardId(h.canonicalId)}
                  className={`flex flex-col items-center py-2 px-1 rounded-xl text-[10px] font-bold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-white text-sky-700 shadow-xs border border-sky-300 ring-2 ring-sky-400/20'
                      : 'text-slate-600 hover:bg-slate-200/60'
                  }`}
                  title={h.name}
                >
                  <HIcon className="w-4 h-4 mb-0.5" />
                  <span className="truncate max-w-[55px]">{h.shortName}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Hazard-Specific Risk Classification Banner */}
        <div
          className={`flex items-center justify-between p-3.5 rounded-2xl border ${getRiskBadgeStyles(
            hazardProfile?.riskLevel
          )}`}
        >
          <div className="flex items-center gap-2.5">
            <ActiveIcon className="w-5 h-5 flex-shrink-0" />
            <div>
              <span className="text-xs font-semibold block leading-none">
                {currentHazardDef.shortName} Risk Level
              </span>
              <span className="text-sm font-black leading-tight mt-0.5 block">
                {hazardProfile?.riskLevel || 'Non-Applicable'}
              </span>
            </div>
          </div>

          <div className="text-right">
            {isAvailable && hazardProfile.riskScore !== null ? (
              <span className="text-base font-black px-2.5 py-1 rounded-lg bg-white/80 shadow-2xs">
                {hazardProfile.riskScore}%
              </span>
            ) : (
              <span className="text-[10px] font-bold px-2 py-1 rounded-lg bg-slate-200 text-slate-600 flex items-center gap-1">
                <Ban className="w-3 h-3" />
                <span>N/A</span>
              </span>
            )}
          </div>
        </div>

        {/* Hazard-Specific Risk Factors Section */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-bold text-slate-900">
              {currentHazardDef.shortName} Risk Indicators
            </h3>
            <span className="text-[11px] text-slate-400 font-medium">
              Simulated Telemetry (Demo)
            </span>
          </div>

          {isAvailable ? (
            <div className="space-y-3.5">
              {hazardProfile.factors.map((factor) => (
                <div key={factor.name} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-700 truncate max-w-[210px]" title={factor.name}>
                      {factor.name}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] px-1.5 py-0.2 rounded-md bg-slate-100 text-slate-500 font-medium">
                        {factor.status}
                      </span>
                      <span className="font-black text-slate-900">
                        {factor.value}%
                      </span>
                    </div>
                  </div>

                  {/* Meter Bar */}
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200/50">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ease-out ${getProgressColor(
                        factor.value
                      )}`}
                      style={{ width: `${factor.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-4 rounded-2xl bg-slate-50 border border-dashed border-slate-200 text-xs text-slate-600 space-y-2">
              <div className="flex items-center gap-2 text-slate-700 font-bold">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Observation Unavailable / Non-Applicable</span>
              </div>
              <p className="text-[11px] leading-relaxed text-slate-500">
                {hazardProfile?.availabilityNote ||
                  'No high-altitude snowpack or glacial lake formations exist in this geographic zone. Zero susceptibility baseline.'}
              </p>
            </div>
          )}
        </div>

        {/* Contextual Advisory Box */}
        <div className="p-3.5 rounded-2xl bg-sky-50/70 border border-sky-100 text-xs text-slate-700 space-y-1 leading-relaxed">
          <div className="flex items-center gap-1.5 font-bold text-sky-800">
            <Info className="w-4 h-4 text-sky-600 flex-shrink-0" />
            <span>Hazard-Specific Geographic Advisory</span>
          </div>
          <p className="text-[11px]">
            {hazardProfile?.note ||
              selectedRegionData.note ||
              'Multi-hazard monitoring active in this sector.'}
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-4 border-t border-slate-100 space-y-2">
        <button
          onClick={() => openAlertModal(hazardKey.toLowerCase(), matchingAlert)}
          className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-white bg-rose-600 hover:bg-rose-700 rounded-xl shadow-md shadow-rose-600/25 transition-all cursor-pointer"
        >
          <BellRing className="w-4 h-4" />
          <span>Simulate {currentHazardDef.shortName} Advisory Alert</span>
        </button>

        <div className="p-2 text-center text-[10px] text-slate-400">
          Demonstration model based on simulated telemetry indices.
        </div>
      </div>
    </div>
  );
}
