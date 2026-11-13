import React from 'react';
import { Layers, AlertTriangle, Calendar } from 'lucide-react';
import { useDisaster } from '../../context/DisasterContext';
import { getAllAnalyticalCategories } from '../../data/hazards';

export default function AlertsFilterBar({
  severityFilter,
  setSeverityFilter,
  timeframeFilter,
  setTimeframeFilter,
  categoryFilter,
  setCategoryFilter,
}) {
  const { alerts } = useDisaster();

  const categories = getAllAnalyticalCategories();
  const severities = ['All', 'High', 'Moderate', 'Low'];
  const timeframes = ['Last 7 Days', 'Last 24 Hours', 'All Time'];

  const unreadCount = alerts.filter((a) => !a.acknowledged).length;

  return (
    <div className="p-4 bg-white rounded-2xl border border-slate-200/90 shadow-xs flex flex-wrap items-center justify-between gap-4">
      {/* Left: Filter Dropdowns - Matching Page 4 Bottom-Left */}
      <div className="flex flex-wrap items-center gap-3">
        {/* Disaster Category Filter */}
        <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-xs font-semibold">
          <Layers className="w-3.5 h-3.5 text-sky-600" />
          <span className="text-slate-500">Disaster Type:</span>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="bg-transparent text-slate-800 font-bold focus:outline-hidden cursor-pointer"
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c === 'All' ? 'All Types' : c}
              </option>
            ))}
          </select>
        </div>

        {/* Severity Filter */}
        <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-xs font-semibold">
          <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
          <span className="text-slate-500">Severity Level:</span>
          <select
            value={severityFilter}
            onChange={(e) => setSeverityFilter(e.target.value)}
            className="bg-transparent text-slate-800 font-bold focus:outline-hidden cursor-pointer"
          >
            {severities.map((s) => (
              <option key={s} value={s}>
                {s === 'All' ? 'All Severities' : `${s} Risk`}
              </option>
            ))}
          </select>
        </div>

        {/* Timeframe Filter */}
        <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-xs font-semibold">
          <Calendar className="w-3.5 h-3.5 text-indigo-600" />
          <span className="text-slate-500">Time:</span>
          <select
            value={timeframeFilter}
            onChange={(e) => setTimeframeFilter(e.target.value)}
            className="bg-transparent text-slate-800 font-bold focus:outline-hidden cursor-pointer"
          >
            {timeframes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Right: Active Unacknowledged Status */}
      <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
        <span className="flex h-2.5 w-2.5 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-600"></span>
        </span>
        <span>
          <strong className="text-slate-900">{unreadCount}</strong> Unresolved Priority Advisories
        </span>
      </div>
    </div>
  );
}
