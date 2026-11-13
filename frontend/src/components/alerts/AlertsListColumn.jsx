import React from 'react';
import {
  Bell,
  CloudRain,
  Mountain,
  MountainSnow,
  Waves,
  CheckCircle2,
  Clock,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';
import { useDisaster } from '../../context/DisasterContext';

export default function AlertsListColumn({ filteredAlerts }) {
  const { selectedAlertId, setSelectedAlertId } = useDisaster();

  const iconMap = {
    CloudRain: CloudRain,
    Mountain: Mountain,
    MountainSnow: MountainSnow,
    Waves: Waves,
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xs p-5 flex flex-col h-full space-y-4">
      {/* Column Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-rose-50 text-rose-600 border border-rose-200">
            <Bell className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900 leading-tight">
              Active Alerts
            </h3>
            <p className="text-xs text-slate-500">
              Live National Warning Queue
            </p>
          </div>
        </div>

        <span className="px-2.5 py-1 text-xs font-bold rounded-full bg-rose-100 text-rose-700">
          {filteredAlerts.length} Active
        </span>
      </div>

      {/* Alerts Scrollable List */}
      <div className="space-y-3 overflow-y-auto max-h-[600px] pr-1">
        {filteredAlerts.length === 0 ? (
          <div className="p-8 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-200 text-xs text-slate-500 space-y-2">
            <ShieldCheck className="w-8 h-8 text-emerald-500 mx-auto" />
            <p className="font-bold text-slate-700">No Active Advisories</p>
            <p>No alerts currently matching the selected criteria. Routine national surveillance active.</p>
          </div>
        ) : (
          filteredAlerts.map((alert) => {
            const Icon = iconMap[alert.icon] || Bell;
            const isSelected = selectedAlertId === alert.id;
            const isHigh = alert.severity === 'High';

          return (
            <div
              key={alert.id}
              onClick={() => setSelectedAlertId(alert.id)}
              className={`p-4 rounded-2xl border transition-all cursor-pointer group flex flex-col justify-between ${
                isSelected
                  ? 'bg-sky-50/70 border-sky-400 ring-2 ring-sky-400/20 shadow-sm'
                  : 'bg-white border-slate-200/90 hover:border-sky-300 hover:bg-slate-50/60'
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-start gap-3">
                  <div
                    className={`p-2 rounded-xl flex-shrink-0 ${
                      isHigh
                        ? 'bg-rose-50 text-rose-600 border border-rose-200'
                        : 'bg-amber-50 text-amber-600 border border-amber-200'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>

                  <div>
                    <h4
                      className={`text-sm font-bold leading-tight transition-colors ${
                        isSelected
                          ? 'text-sky-900'
                          : 'text-slate-900 group-hover:text-sky-600'
                      }`}
                    >
                      {alert.type}
                    </h4>
                    <p className="text-xs font-medium text-slate-600 mt-0.5">
                      {alert.region}
                    </p>
                  </div>
                </div>

                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0 ${
                    isHigh
                      ? 'bg-rose-100 text-rose-700'
                      : 'bg-amber-100 text-amber-800'
                  }`}
                >
                  {alert.severity}
                </span>
              </div>

              <div className="mt-3 pt-2.5 border-t border-slate-100/80 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-slate-400" />
                  {alert.timestamp}
                </span>

                {alert.acknowledged ? (
                  <span className="flex items-center gap-1 text-emerald-600 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Ack</span>
                  </span>
                ) : (
                  <span className="text-sky-600 font-semibold group-hover:translate-x-0.5 transition-transform flex items-center">
                    <span>Inspect</span>
                    <ChevronRight className="w-3 h-3 ml-0.5" />
                  </span>
                )}
              </div>
            </div>
          );
        })
      )}
    </div>
    </div>
  );
}
