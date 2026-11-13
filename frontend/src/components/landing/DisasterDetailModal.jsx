import React from 'react';
import {
  X,
  ShieldCheck,
  AlertOctagon,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Waves,
  Mountain,
  MountainSnow,
  CloudRain,
  Layers,
  MapPin,
} from 'lucide-react';
import { useDisaster } from '../../context/DisasterContext';

export default function DisasterDetailModal({ disaster, onClose }) {
  const { setActiveTab, setSelectedHazardId } = useDisaster();

  if (!disaster) return null;

  const iconMap = {
    GLOF: Waves,
    glof: Waves,
    FLOOD: CloudRain,
    flood: CloudRain,
    LANDSLIDE: Mountain,
    landslide: Mountain,
    SNOW_AVALANCHE: MountainSnow,
    snow_avalanche: MountainSnow,
  };

  const Icon = iconMap[disaster.id] || iconMap[disaster.canonicalId] || AlertOctagon;
  const indicators = disaster.keyRiskIndicators || disaster.keyHazards || [];

  const handleInspectOnMap = () => {
    if (setSelectedHazardId) {
      setSelectedHazardId(disaster.canonicalId || disaster.id);
    }
    onClose();
    setActiveTab('riskmap');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col">
        {/* Top Image Banner */}
        <div className="relative h-48 sm:h-56 w-full overflow-hidden flex-shrink-0">
          <img
            src={disaster.image}
            alt={disaster.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white bg-black/40 hover:bg-black/60 rounded-full transition-all"
            title="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Banner Details */}
          <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-full bg-sky-500 text-white uppercase tracking-wider">
                <Icon className="w-3.5 h-3.5" />
                <span>{disaster.badge}</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-2">
                {disaster.title || disaster.name}
              </h2>
            </div>
            <div className="hidden sm:block text-right">
              <span className="text-[11px] font-semibold text-slate-300 block uppercase">
                Hazard Severity
              </span>
              <span className="text-sm font-extrabold text-amber-400">
                {disaster.impactRating || 'High'}
              </span>
            </div>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-800">
          {/* Overview */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
              Hazard Overview
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed font-medium">
              {disaster.description}
            </p>
          </div>

          {/* Key Risk Indicators - Verbatim matching Section 4 */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-sky-600" />
              <span>Key Risk Indicators & Assessment Factors</span>
            </h4>
            <div className="space-y-2">
              {indicators.map((indicator, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5 text-xs font-semibold text-slate-700"
                >
                  <AlertOctagon className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                  <span>{indicator}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Actionable Guidelines */}
          {disaster.guidelines && (
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Preparedness & Protective Action Guidelines</span>
              </h4>
              <div className="space-y-2">
                {disaster.guidelines.map((guide, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-xl bg-sky-50/60 border border-sky-100 text-xs font-medium text-slate-700"
                  >
                    <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                    <span>{guide}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Geographic Applicability in Himalayan Arc */}
          {disaster.geographicApplicability && (
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-sky-600" />
                <span>Himalayan Geographic Focus</span>
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {disaster.geographicApplicability.map((geo, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-100 text-slate-700 border border-slate-200"
                  >
                    {geo}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Seasonal Occurrence Window */}
          <div className="p-3.5 rounded-xl bg-slate-100/80 flex items-center justify-between text-xs font-medium text-slate-600">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-slate-500" />
              <span>Peak Vulnerability Window:</span>
            </div>
            <span className="font-bold text-slate-800">{disaster.season}</span>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 px-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
          >
            Close Guide
          </button>
          <button
            onClick={handleInspectOnMap}
            className="flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-sky-600 hover:bg-sky-700 rounded-xl shadow-md shadow-sky-600/30 transition-all"
          >
            <span>Inspect Hazard on Risk Map</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
