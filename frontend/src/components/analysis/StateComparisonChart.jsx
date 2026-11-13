import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import { BarChart3 } from 'lucide-react';
import { useDisaster } from '../../context/DisasterContext';

export default function StateComparisonChart() {
  const { stateComparison, selectState, setActiveTab } = useDisaster();

  // Color mapping based on risk rating
  const getBarColor = (risk) => {
    switch (risk) {
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
        return '#3B82F6';
    }
  };

  const handleBarClick = (entry) => {
    if (entry && entry.state) {
      selectState(entry.state);
      setActiveTab('riskmap');
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xs p-5 flex flex-col justify-between h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-sky-50 text-sky-600 border border-sky-200">
            <BarChart3 className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900 leading-tight">
              State-wise Comparison
            </h3>
            <p className="text-xs text-slate-500">
              Total Incidents & Hazard Density by Jurisdiction
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-500">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-rose-500"></span>
            High
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
            Moderate
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            Low
          </span>
        </div>
      </div>

      {/* Horizontal Bar Chart Canvas */}
      <div className="w-full h-72 sm:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            layout="vertical"
            data={stateComparison}
            margin={{ top: 5, right: 30, left: 35, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
            <XAxis
              type="number"
              stroke="#94a3b8"
              fontSize={11}
              tickLine={false}
              axisLine={{ stroke: '#e2e8f0' }}
            />
            <YAxis
              type="category"
              dataKey="state"
              stroke="#64748b"
              fontSize={11}
              fontWeight={600}
              tickLine={false}
              axisLine={false}
              width={100}
            />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload;
                  return (
                    <div className="p-3 bg-slate-900 text-white rounded-xl shadow-xl text-xs space-y-1">
                      <p className="font-bold text-sky-400">{data.state}</p>
                      <p className="text-slate-200">
                        Total Incidents: <span className="font-bold text-white">{data.count}</span>
                      </p>
                      <p className="text-slate-300">
                        Vulnerability: <span className="font-semibold text-amber-400">{data.risk}</span>
                      </p>
                      <p className="text-slate-400">
                        Economic Loss: <span className="font-semibold text-emerald-400">{data.damage}</span>
                      </p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Bar
              dataKey="count"
              radius={[0, 8, 8, 0]}
              cursor="pointer"
              onClick={handleBarClick}
            >
              {stateComparison.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={getBarColor(entry.risk)}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
        <span>Click any state bar to inspect on India Risk Map</span>
        <span className="font-semibold text-sky-600">8 States Monitored</span>
      </div>
    </div>
  );
}
