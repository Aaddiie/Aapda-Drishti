import React, { useState } from 'react';
import {
  AlertTriangle,
  MapPin,
  Clock,
  ShieldCheck,
  CloudRain,
  Mountain,
  MountainSnow,
  Waves,
  Share2,
  CheckCircle2,
  Maximize2,
} from 'lucide-react';
import { useDisaster } from '../../context/DisasterContext';

export default function AlertDetailsColumn({ selectedAlert }) {
  const {
    acknowledgeAlert,
    setActiveTab,
    selectState,
    openAlertModal,
  } = useDisaster();

  const [copied, setCopied] = useState(false);

  if (!selectedAlert) {
    return (
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xs p-6 flex items-center justify-center h-full text-slate-400 text-sm">
        Select an alert from the active queue to inspect full telemetry.
      </div>
    );
  }

  const iconMap = {
    CloudRain: CloudRain,
    Mountain: Mountain,
    MountainSnow: MountainSnow,
    Waves: Waves,
  };

  const Icon = iconMap[selectedAlert.icon] || AlertTriangle;
  const isHigh = selectedAlert.severity === 'High';

  const handleShare = () => {
    navigator.clipboard?.writeText(
      `AAPDA DRISHTI DISASTER ALERT: ${selectedAlert.type} in ${selectedAlert.region}. Risk Level: ${selectedAlert.severity}. ${selectedAlert.description}`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleViewMap = () => {
    selectState(selectedAlert.state);
    setActiveTab('riskmap');
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xs p-5 md:p-6 flex flex-col justify-between h-full space-y-6">
      <div className="space-y-6">
        {/* Header - Matching Page 4 Column 2 */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div>
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
              Inspection Dossier
            </span>
            <h3 className="text-base font-bold text-slate-900 leading-tight mt-0.5">
              Alert Details
            </h3>
          </div>

          <button
            onClick={() => openAlertModal(selectedAlert.hazardId?.toLowerCase() || 'glof', selectedAlert)}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-sky-700 bg-sky-50 border border-sky-200 rounded-xl hover:bg-sky-100 transition-colors"
            title="Open exact dialog modal from Page 2"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Modal Dialog</span>
          </button>
        </div>

        {/* Alert Hero Card */}
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
          <div
            className={`flex items-center justify-center w-12 h-12 rounded-2xl flex-shrink-0 ${
              isHigh
                ? 'bg-rose-500 text-white shadow-md shadow-rose-500/30'
                : 'bg-amber-500 text-white shadow-md shadow-amber-500/30'
            }`}
          >
            <Icon className="w-6 h-6" />
          </div>

          <div className="space-y-1">
            <h4 className="text-lg font-black text-slate-900 leading-tight">
              {selectedAlert.type}
            </h4>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600 font-medium">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                {selectedAlert.region}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                {selectedAlert.timestamp}
              </span>
            </div>
          </div>
        </div>

        {/* Severity Banner */}
        <div
          className={`flex items-center justify-between p-3.5 rounded-2xl border ${
            isHigh
              ? 'bg-rose-50 border-rose-200 text-rose-700'
              : 'bg-amber-50 border-amber-200 text-amber-700'
          }`}
        >
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 flex-shrink-0" />
            <span className="text-xs font-bold">
              Risk Level: {selectedAlert.severity}
            </span>
          </div>
          <span className="text-[11px] font-semibold text-slate-500 bg-white/70 px-2 py-0.5 rounded-md">
            Category: {selectedAlert.category}
          </span>
        </div>

        {/* Advisory Description */}
        <div className="space-y-2">
          <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Meteorological Advisory
          </h5>
          <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
            {selectedAlert.description}
          </p>
        </div>

        {/* Risk Multipliers */}
        {selectedAlert.riskFactors && (
          <div className="space-y-2">
            <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Composite Hazard Indices
            </h5>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-between">
                <span className="font-semibold text-sky-800">Flood Factor</span>
                <span className="font-black text-sky-900">{selectedAlert.riskFactors.flood}%</span>
              </div>
              <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-between">
                <span className="font-semibold text-amber-800">Landslide</span>
                <span className="font-black text-amber-900">{selectedAlert.riskFactors.landslide}%</span>
              </div>
            </div>
          </div>
        )}

        {/* Standard Precautions */}
        <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-100 text-xs text-emerald-900 space-y-1">
          <div className="flex items-center gap-1.5 font-bold text-emerald-800">
            <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>Response Recommendation</span>
          </div>
          <p className="leading-relaxed">
            {selectedAlert.recommendation ||
              'Avoid travel along high-risk riverbanks and mountain roads. Follow SDRF emergency evacuation routes.'}
          </p>
        </div>
      </div>

      {/* Action Buttons - Matching Page 4 Column 2 */}
      <div className="pt-4 border-t border-slate-100 space-y-2.5">
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={handleViewMap}
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-bold text-slate-700 bg-white border border-slate-300 rounded-xl hover:bg-slate-50 shadow-2xs transition-colors"
          >
            <MapPin className="w-3.5 h-3.5 text-sky-600" />
            <span>View on Risk Map</span>
          </button>

          <button
            onClick={handleShare}
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-bold text-slate-700 bg-white border border-slate-300 rounded-xl hover:bg-slate-50 shadow-2xs transition-colors"
          >
            <Share2 className="w-3.5 h-3.5 text-slate-500" />
            <span>{copied ? 'Copied Alert!' : 'Share Alert'}</span>
          </button>
        </div>

        {selectedAlert.acknowledged ? (
          <div className="flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-xl">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Alert Acknowledged by Command Desk</span>
          </div>
        ) : (
          <button
            onClick={() => acknowledgeAlert(selectedAlert.id)}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-white bg-sky-600 hover:bg-sky-700 rounded-xl shadow-md shadow-sky-600/30 transition-all cursor-pointer"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Acknowledge Alert</span>
          </button>
        )}
      </div>
    </div>
  );
}
