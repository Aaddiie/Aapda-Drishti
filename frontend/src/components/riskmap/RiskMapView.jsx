import React, { useState } from 'react';
import IndiaRiskMapSvg from '../dashboard/IndiaRiskMapSvg';
import RegionInspectorPanel from './RegionInspectorPanel';
import { Search, MapPin, Waves, CloudRain, Mountain, MountainSnow, ShieldAlert } from 'lucide-react';
import { useDisaster } from '../../context/DisasterContext';
import { PRIMARY_HAZARDS } from '../../data/hazards';

export default function RiskMapView() {
  const {
    selectedStateName,
    selectState,
    statesRiskMap,
    selectedHazardId,
    setSelectedHazardId,
  } = useDisaster();

  const [locationInput, setLocationInput] = useState('Dehradun, Uttarakhand');
  const [showDropdown, setShowDropdown] = useState(false);

  const availableStates = Object.keys(statesRiskMap);

  const filteredStates = availableStates.filter((st) =>
    st.toLowerCase().includes(locationInput.toLowerCase())
  );

  const handleSelectState = (st) => {
    selectState(st);
    setLocationInput(st === 'Uttarakhand' ? 'Dehradun, Uttarakhand' : st);
    setShowDropdown(false);
  };

  const hazardIcons = {
    GLOF: Waves,
    FLOOD: CloudRain,
    LANDSLIDE: Mountain,
    SNOW_AVALANCHE: MountainSnow,
  };

  const himalayanQuickStates = [
    'Uttarakhand',
    'Himachal Pradesh',
    'Jammu & Kashmir',
    'Ladakh',
    'Sikkim',
    'Arunachal Pradesh',
    'Assam',
  ];

  return (
    <div className="space-y-5 animate-in fade-in duration-300">
      {/* Top Controls: Hazard Switcher & Location Search */}
      <div className="p-4 bg-white rounded-2xl border border-slate-200/90 shadow-xs space-y-3.5">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          {/* Primary Hazard Selector Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl overflow-x-auto">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2 hidden sm:inline">
              Hazard:
            </span>
            {PRIMARY_HAZARDS.map((hazard) => {
              const Icon = hazardIcons[hazard.canonicalId] || Waves;
              const isSelected = (selectedHazardId || 'GLOF') === hazard.canonicalId;
              return (
                <button
                  key={hazard.canonicalId}
                  onClick={() => setSelectedHazardId(hazard.canonicalId)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                    isSelected
                      ? 'bg-white text-slate-900 shadow-xs border border-slate-200/80'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                  }`}
                >
                  <Icon
                    className="w-3.5 h-3.5"
                    style={{ color: isSelected ? hazard.color : 'inherit' }}
                  />
                  <span>{hazard.shortName}</span>
                </button>
              );
            })}
          </div>

          {/* Search location input */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={locationInput}
              onChange={(e) => {
                setLocationInput(e.target.value);
                setShowDropdown(true);
              }}
              onFocus={() => setShowDropdown(true)}
              placeholder="Search Himalayan state or district..."
              className="w-full pl-10 pr-4 py-2 text-sm bg-slate-50 text-slate-900 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-sky-500/40 focus:bg-white transition-all font-medium"
            />

            {/* Autocomplete dropdown */}
            {showDropdown && (
              <>
                <div
                  className="fixed inset-0 z-20"
                  onClick={() => setShowDropdown(false)}
                />
                <div className="absolute left-0 right-0 top-full mt-1 z-30 bg-white border border-slate-200 rounded-xl shadow-xl max-h-60 overflow-y-auto divide-y divide-slate-100">
                  {filteredStates.map((st) => {
                    const stateData = statesRiskMap[st];
                    return (
                      <button
                        key={st}
                        onClick={() => handleSelectState(st)}
                        className="w-full flex items-center justify-between p-3 text-left hover:bg-slate-50 transition-colors text-xs cursor-pointer"
                      >
                        <div className="flex items-center gap-2">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          <span className="font-bold text-slate-800">{st}</span>
                          <span className="text-slate-400">({stateData.region})</span>
                        </div>
                        <span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ backgroundColor: stateData.riskColor }}
                        />
                      </button>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Himalayan State Quick Chips & Demo Notice */}
        <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            <span className="text-slate-400 font-semibold text-[11px] mr-1 hidden sm:inline">
              Himalayan Arc:
            </span>
            {himalayanQuickStates.map((st) => {
              const isSelected = selectedStateName === st;
              return (
                <button
                  key={st}
                  onClick={() => handleSelectState(st)}
                  className={`px-2.5 py-1 rounded-lg font-bold whitespace-nowrap transition-all border cursor-pointer ${
                    isSelected
                      ? 'bg-sky-600 text-white border-sky-600 shadow-2xs'
                      : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {st}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
            <ShieldAlert className="w-3.5 h-3.5 text-sky-600" />
            <span>Illustrative Multi-Hazard Telemetry • Demo Mode</span>
          </div>
        </div>
      </div>

      {/* Main Two-Column View: Map on Left, Inspector on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Column: Interactive Vector India Map */}
        <div className="lg:col-span-7 xl:col-span-8 min-h-[580px] h-[600px] lg:h-[650px]">
          <IndiaRiskMapSvg compact={false} />
        </div>

        {/* Right Column: Selected Region Inspection Panel */}
        <div className="lg:col-span-5 xl:col-span-4 min-h-[580px]">
          <RegionInspectorPanel />
        </div>
      </div>
    </div>
  );
}
