import React from 'react';
import { Download, Calendar, MapPin, Layers } from 'lucide-react';
import { useDisaster } from '../../context/DisasterContext';
import { getAllAnalyticalCategories } from '../../data/hazards';

export default function AnalysisFilters() {
  const {
    typeFilter,
    setTypeFilter,
    stateFilter,
    setStateFilter,
    timeFilter,
    setTimeFilter,
    statesRiskMap,
  } = useDisaster();

  const disasterTypes = getAllAnalyticalCategories();
  const stateOptions = ['All', ...Object.keys(statesRiskMap)];
  const timeOptions = ['2021-2025', 'Last 12 Months', 'Last 30 Days'];

  const handleExport = () => {
    // Generate CSV export
    const csvContent =
      'data:text/csv;charset=utf-8,' +
      'Disaster Management Analytic Report - AAPDA DRISHTI\n' +
      `Timeframe: ${timeFilter}, Type: ${typeFilter}, State: ${stateFilter}\n\n` +
      'State,Disaster Incidents,Overall Risk,Damage (₹ Cr)\n' +
      'Uttarakhand,26,Very High,1840\n' +
      'Himachal Pradesh,22,High,1420\n' +
      'Jammu & Kashmir,19,High,1180\n' +
      'Sikkim,16,Very High,960\n' +
      'Ladakh,12,High,640\n' +
      'Arunachal Pradesh,10,Moderate,520\n' +
      'Assam,15,Moderate,890\n';

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `aapda_drishti_analysis_${timeFilter}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="p-4 bg-white rounded-2xl border border-slate-200/90 shadow-xs flex flex-wrap items-center justify-between gap-4">
      {/* Left: Filter Dropdowns - Matching Page 4 Top-Right */}
      <div className="flex flex-wrap items-center gap-3">
        {/* Disaster Type Filter */}
        <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-xs font-semibold">
          <Layers className="w-3.5 h-3.5 text-sky-600" />
          <span className="text-slate-500">Disaster Type:</span>
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="bg-transparent text-slate-800 font-bold focus:outline-hidden cursor-pointer"
          >
            {disasterTypes.map((type) => (
              <option key={type} value={type}>
                {type === 'All' ? 'All Types' : type}
              </option>
            ))}
          </select>
        </div>

        {/* State Filter */}
        <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-xs font-semibold">
          <MapPin className="w-3.5 h-3.5 text-rose-600" />
          <span className="text-slate-500">State:</span>
          <select
            value={stateFilter}
            onChange={(e) => setStateFilter(e.target.value)}
            className="bg-transparent text-slate-800 font-bold focus:outline-hidden cursor-pointer"
          >
            {stateOptions.map((st) => (
              <option key={st} value={st}>
                {st === 'All' ? 'All States' : st}
              </option>
            ))}
          </select>
        </div>

        {/* Time Period Filter */}
        <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-xs font-semibold">
          <Calendar className="w-3.5 h-3.5 text-indigo-600" />
          <span className="text-slate-500">Timeframe:</span>
          <select
            value={timeFilter}
            onChange={(e) => setTimeFilter(e.target.value)}
            className="bg-transparent text-slate-800 font-bold focus:outline-hidden cursor-pointer"
          >
            {timeOptions.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Right: Export Report Button */}
      <button
        onClick={handleExport}
        className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-xl transition-colors shadow-2xs cursor-pointer"
        title="Export Analysis Report to CSV"
      >
        <Download className="w-3.5 h-3.5 text-slate-600" />
        <span>Export Assessment Data</span>
      </button>
    </div>
  );
}
