import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { PieChart as PieIcon } from 'lucide-react';
import { useDisaster } from '../../context/DisasterContext';

export default function DisasterDistributionChart() {
  const { distribution, kpis } = useDisaster();

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xs p-5 flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center gap-2.5 mb-2">
        <div className="p-2 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-200">
          <PieIcon className="w-4 h-4" />
        </div>
        <div>
          <h3 className="text-base font-bold text-slate-900 leading-tight">
            Disaster Type Distribution
          </h3>
          <p className="text-xs text-slate-500">
            Himalayan 4-Hazard Relative Breakdown (Simulated)
          </p>
        </div>
      </div>

      {/* Chart Canvas with Centered Count "28" */}
      <div className="relative flex flex-col sm:flex-row items-center justify-between gap-4 py-2">
        <div className="relative w-48 h-48 flex-shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Tooltip
                formatter={(value, name) => [`${value}%`, name]}
                contentStyle={{
                  backgroundColor: '#0f172a',
                  borderRadius: '12px',
                  border: 'none',
                  color: '#fff',
                  fontSize: '12px',
                }}
              />
              <Pie
                data={distribution}
                cx="50%"
                cy="50%"
                innerRadius={52}
                outerRadius={74}
                paddingAngle={3}
                dataKey="value"
              >
                {distribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          {/* Centered Total KPI "28" - Matching Page 1 & 4 Reference */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-2xl font-black text-slate-900 leading-none">
              {kpis.totalDisasters.value}
            </span>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">
              Disasters
            </span>
          </div>
        </div>

        {/* Legend List */}
        <div className="flex-1 grid grid-cols-2 gap-x-4 gap-y-2 text-xs w-full">
          {distribution.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between p-1.5 rounded-lg hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center gap-2 truncate">
                <span
                  className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: item.color }}
                />
                <span className="font-semibold text-slate-700 truncate">
                  {item.name}
                </span>
              </div>
              <span className="font-bold text-slate-900 ml-1">
                {item.value}%
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
        <span>Total Incidents: {kpis.totalDisasters.value} Events (Simulated Baseline)</span>
        <span className="font-semibold text-sky-600">Updated 10m ago</span>
      </div>
    </div>
  );
}
