import React from 'react';
import {
  Bell,
  AlertTriangle,
  ArrowRight,
  CloudRain,
  Mountain,
  MountainSnow,
  Waves,
  CheckCircle2,
  Clock,
  MapPin,
} from 'lucide-react';
import { useDisaster } from '../../context/DisasterContext';

export default function RecentAlertsFeed() {
  const { alerts, openAlertModal, setActiveTab, acknowledgeAlert } = useDisaster();

  const iconMap = {
    CloudRain: CloudRain,
    Mountain: Mountain,
    MountainSnow: MountainSnow,
    Waves: Waves,
  };

  const getModalType = (category, hazardId) => {
    const key = (hazardId || category || '').toLowerCase();
    if (key.includes('glof')) return 'glof';
    if (key.includes('avalanche')) return 'avalanche';
    if (key.includes('landslide')) return 'landslide';
    return 'flashFlood';
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xs p-5 flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-rose-50 text-rose-600 border border-rose-200">
            <Bell className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900 leading-tight">
              Alerts
            </h3>
            <p className="text-xs text-slate-500">
              Active Regional Disaster Advisories
            </p>
          </div>
        </div>

        <button
          onClick={() => setActiveTab('alerts')}
          className="text-xs font-bold text-sky-600 hover:text-sky-700 flex items-center gap-1"
        >
          <span>View All ({alerts.length})</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Alerts List */}
      <div className="space-y-3">
        {alerts.slice(0, 4).map((alert) => {
          const Icon = iconMap[alert.icon] || AlertTriangle;
          const isHigh = alert.severity === 'High';

          return (
            <div
              key={alert.id}
              onClick={() => openAlertModal(getModalType(alert.category, alert.hazardId), alert)}
              className="p-3.5 rounded-2xl border border-slate-100 hover:border-sky-300 hover:bg-slate-50/70 transition-all cursor-pointer group flex items-start justify-between gap-3"
            >
              <div className="flex items-start gap-3">
                <div
                  className={`p-2.5 rounded-xl flex-shrink-0 ${
                    isHigh
                      ? 'bg-rose-50 text-rose-600 border border-rose-200'
                      : 'bg-amber-50 text-amber-600 border border-amber-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                      {alert.type} — {alert.state}
                    </h4>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        isHigh
                          ? 'bg-rose-100 text-rose-700'
                          : 'bg-amber-100 text-amber-800'
                      }`}
                    >
                      {alert.severity}
                    </span>
                  </div>

                  <p className="mt-1 text-xs text-slate-500 line-clamp-1">
                    {alert.description}
                  </p>

                  <div className="flex items-center gap-3 mt-1.5 text-[11px] text-slate-400 font-medium">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      {alert.region}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {alert.timestamp}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action trigger */}
              <div className="flex-shrink-0 self-center">
                {alert.acknowledged ? (
                  <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Ack</span>
                  </span>
                ) : (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      acknowledgeAlert(alert.id);
                    }}
                    className="text-[11px] font-bold text-sky-700 hover:text-sky-800 bg-sky-50 hover:bg-sky-100 px-2.5 py-1 rounded-lg border border-sky-200 transition-colors"
                  >
                    Acknowledge
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
        <span>Emergency Broadcast Frequency: Active</span>
        <button
          onClick={() => openAlertModal('flashFlood')}
          className="text-xs font-bold text-rose-600 hover:text-rose-700"
        >
          Test Flash Flood Alert →
        </button>
      </div>
    </div>
  );
}
