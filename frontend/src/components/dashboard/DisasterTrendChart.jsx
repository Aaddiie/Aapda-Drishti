import React, { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { TrendingUp } from 'lucide-react';
import { useDisaster } from '../../context/DisasterContext';

export default function DisasterTrendChart() {
  const { trends5Yr, setActiveTab } = useDisaster();

  // Active series filter toggles for the 4 primary Himalayan hazards
  const [activeSeries, setActiveSeries] = useState({
    GLOF: true,
    Flood: true,
    Landslide: true,
    'Snow Avalanche': true,
  });

  const toggleSeries = (key) => {
    setActiveSeries((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const seriesColors = {
    GLOF: '#0284C7',
    Flood: '#2563EB',
    Landslide: '#D97706',
    'Snow Avalanche': '#6366F1',
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xs p-5 flex flex-col justify-between">
      {/* Chart Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-sky-50 text-sky-600 border border-sky-200">
            <TrendingUp className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900 leading-tight">
              Himalayan Incident Trends
            </h3>
            <p className="text-xs text-slate-500">
              5-Year Incident Comparison (2021 – 2025 • Simulated Baseline)
            </p>
          </div>
        </div>

        {/* Legend / Series Toggle pills */}
        <div className="flex flex-wrap items-center gap-2">
          {Object.keys(seriesColors).map((name) => {
            const isActive = activeSeries[name];
            const color = seriesColors[name];

            return (
              <button
                key={name}
                onClick={() => toggleSeries(name)}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all border cursor-pointer ${
                  isActive
                    ? 'bg-slate-50 border-slate-300 text-slate-800 shadow-xs'
                    : 'bg-slate-100/60 border-transparent text-slate-400 opacity-60'
                }`}
              >
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <span>{name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Recharts Canvas */}
      <div className="w-full h-64 sm:h-72 mt-2">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={trends5Yr}
            margin={{ top: 10, right: 15, left: -20, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
            <XAxis
              dataKey="year"
              stroke="#94a3b8"
              fontSize={11}
              tickLine={false}
              axisLine={{ stroke: '#e2e8f0' }}
            />
            <YAxis
              stroke="#94a3b8"
              fontSize={11}
              tickLine={false}
              axisLine={false}
              tickCount={5}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#0f172a',
                borderRadius: '12px',
                border: 'none',
                color: '#fff',
                fontSize: '12px',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3)',
              }}
              itemStyle={{ padding: '2px 0' }}
            />

            {activeSeries.GLOF && (
              <Line
                type="monotone"
                dataKey="GLOF"
                stroke={seriesColors.GLOF}
                strokeWidth={3}
                dot={{ r: 4, fill: seriesColors.GLOF, strokeWidth: 2, stroke: '#fff' }}
                activeDot={{ r: 6 }}
              />
            )}
            {activeSeries.Flood && (
              <Line
                type="monotone"
                dataKey="Flood"
                stroke={seriesColors.Flood}
                strokeWidth={3}
                dot={{ r: 4, fill: seriesColors.Flood, strokeWidth: 2, stroke: '#fff' }}
                activeDot={{ r: 6 }}
              />
            )}
            {activeSeries.Landslide && (
              <Line
                type="monotone"
                dataKey="Landslide"
                stroke={seriesColors.Landslide}
                strokeWidth={3}
                dot={{ r: 4, fill: seriesColors.Landslide, strokeWidth: 2, stroke: '#fff' }}
                activeDot={{ r: 6 }}
              />
            )}
            {activeSeries['Snow Avalanche'] && (
              <Line
                type="monotone"
                dataKey="Snow Avalanche"
                stroke={seriesColors['Snow Avalanche']}
                strokeWidth={3}
                dot={{ r: 4, fill: seriesColors['Snow Avalanche'], strokeWidth: 2, stroke: '#fff' }}
                activeDot={{ r: 6 }}
              />
            )}
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
        <span>Simulated Multi-Hazard Incident Records (Himalayan Arc)</span>
        <button
          onClick={() => setActiveTab('analysis')}
          className="font-bold text-sky-600 hover:text-sky-700 cursor-pointer"
        >
          Detailed Analysis & Forecasts →
        </button>
      </div>
    </div>
  );
}
