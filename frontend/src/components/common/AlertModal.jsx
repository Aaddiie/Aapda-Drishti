import React from 'react';
import {
  AlertTriangle,
  CloudRain,
  Waves,
  Mountain,
  MountainSnow,
  X,
  MapPin,
  Clock,
  ShieldAlert,
} from 'lucide-react';
import Logo from './Logo';
import { useDisaster } from '../../context/DisasterContext';

export default function AlertModal() {
  const {
    activeModal,
    closeModal,
    acknowledgeAlert,
    setActiveTab,
    selectState,
    setSelectedHazardId,
  } = useDisaster();

  if (!activeModal) return null;

  const { type, data } = activeModal;

  const handleViewOnMap = (stateName, hazardId = null) => {
    selectState(stateName || data?.state || 'Uttarakhand');
    if (hazardId && setSelectedHazardId) {
      setSelectedHazardId(hazardId);
    }
    setActiveTab('riskmap');
    closeModal();
  };

  const handleAcknowledge = () => {
    if (data?.id) {
      acknowledgeAlert(data.id);
    } else {
      closeModal();
    }
  };

  const modalIconMap = {
    CloudRain: CloudRain,
    Mountain: Mountain,
    MountainSnow: MountainSnow,
    Waves: Waves,
  };

  const MainIcon = (data?.icon && modalIconMap[data.icon]) || CloudRain;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      {/* Click outside backdrop */}
      <div className="absolute inset-0" onClick={closeModal} />

      {/* 1. Modal Variant: High Risk Disaster Alert (Page 2 Reference) */}
      {(type === 'heavyRain' || type === 'highRisk') && (
        <div className="relative z-10 w-full max-w-lg overflow-hidden bg-white rounded-3xl shadow-2xl border border-rose-100 animate-in zoom-in-95 duration-200">
          {/* Modal Header */}
          <div className="flex items-center justify-between px-6 pt-6 pb-2">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-rose-50 text-rose-600 ring-4 ring-rose-50/50">
                <AlertTriangle className="w-6 h-6 text-rose-600 fill-rose-600/20" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-rose-600 tracking-tight">
                  Disaster Alert
                </h3>
                <p className="text-xs font-semibold text-slate-500">
                  High Risk Himalayan Zone Detected
                </p>
              </div>
            </div>
            <button
              onClick={closeModal}
              className="p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="px-6 py-4">
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50/80 border border-slate-100">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-rose-500 text-white shadow-md shadow-rose-500/30 flex-shrink-0">
                <MainIcon className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="text-lg font-bold text-slate-900 leading-tight">
                  {data?.type || 'Heavy Mountain Precipitation Alert'}
                </h4>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600 font-medium">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {data?.region || 'Uttarakhand (Dehradun Region)'}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    {data?.timestamp || '26 Sep 2026, 11:30 AM'}
                  </span>
                </div>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              {data?.description ||
                'Intense rainfall is expected in the next 24 hours in the Dehradun region. There is a high risk of flash floods, landslides and waterlogging in low-lying areas.'}
            </p>

            {/* Severity Pill - Page 2 Reference */}
            <div className="flex items-center justify-between px-3.5 py-2.5 mt-4 rounded-xl bg-rose-50 border border-rose-200/80 text-rose-700">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-rose-600 flex-shrink-0" />
                <span className="text-xs font-bold">
                  Risk Level: {data?.severity || 'High'}
                </span>
              </div>
              <span className="text-[11px] font-semibold text-rose-600">
                Demo Advisory
              </span>
            </div>
          </div>

          {/* Modal Footer Buttons */}
          <div className="flex items-center justify-end gap-3 px-6 py-4 bg-slate-50/70 border-t border-slate-100">
            <button
              onClick={() => handleViewOnMap(data?.state || 'Uttarakhand', data?.hazardId || 'FLOOD')}
              className="px-5 py-2.5 text-sm font-bold text-slate-700 bg-white border border-slate-300 rounded-xl hover:bg-slate-50 hover:border-slate-400 transition-colors shadow-xs"
            >
              View on Risk Map
            </button>
            <button
              onClick={handleAcknowledge}
              className="px-6 py-2.5 text-sm font-bold text-white bg-sky-600 rounded-xl hover:bg-sky-700 transition-colors shadow-md shadow-sky-600/30"
            >
              Acknowledge
            </button>
          </div>
        </div>
      )}

      {/* 2. Modal Variant: Flash Flood Warning (Page 3 Top-Left) */}
      {(type === 'flashFlood' || type === 'flood') && (
        <div className="relative z-10 w-full max-w-lg overflow-hidden bg-white rounded-3xl shadow-2xl border border-rose-200 animate-in zoom-in-95 duration-200">
          <div className="flex items-center justify-between px-6 pt-5 pb-2">
            <Logo size="sm" variant="compact" theme="light" />
            <button onClick={closeModal} className="p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="px-6 py-2">
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="w-6 h-6 text-rose-600" />
              <div>
                <h3 className="text-lg font-extrabold text-rose-600 leading-tight">
                  Disaster Alert
                </h3>
                <p className="text-xs font-semibold text-slate-500">
                  {data?.type || 'Flash Flood Warning'}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-rose-50/60 border border-rose-100">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-rose-600 text-white shadow-md shadow-rose-600/30 flex-shrink-0">
                <CloudRain className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-slate-900">
                  {data?.type || 'Flash Flood Risk'}
                </h4>
                <div className="flex flex-col text-xs text-slate-600 gap-0.5">
                  <span className="flex items-center gap-1.5 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {data?.region || 'Dehradun, Uttarakhand'}
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-500">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    {data?.timestamp || '26 Sep 2026, 11:30 AM'}
                  </span>
                </div>
              </div>
            </div>

            <p className="mt-4 text-xs leading-relaxed text-slate-600">
              {data?.description ||
                'Heavy rainfall over the past few hours has increased the risk of flash floods in low-lying areas. Avoid travel near mountain rivers, streams and flood-prone zones.'}
            </p>

            <div className="flex items-center justify-between px-3 py-2 mt-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-rose-600 flex-shrink-0" />
                <span className="text-xs font-bold">Risk Level: {data?.severity || 'High'}</span>
              </div>
              <span className="text-[10px] text-rose-600 font-semibold">Simulated Telemetry</span>
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 px-6 py-4 mt-2 bg-slate-50 border-t border-slate-100">
            <button
              onClick={() => handleViewOnMap(data?.state || 'Uttarakhand', 'FLOOD')}
              className="px-4 py-2.5 text-xs font-bold text-sky-700 bg-sky-50 border border-sky-200 rounded-xl hover:bg-sky-100"
            >
              View on Risk Map
            </button>
            <button
              onClick={handleAcknowledge}
              className="px-5 py-2.5 text-xs font-bold text-white bg-rose-600 rounded-xl hover:bg-rose-700 shadow-md shadow-rose-600/30"
            >
              Take Action
            </button>
          </div>
        </div>
      )}

      {/* 3. Modal Variant: GLOF Early Warning (Cryosphere Specific) */}
      {type === 'glof' && (
        <div className="relative z-10 w-full max-w-lg overflow-hidden bg-white rounded-3xl shadow-2xl border border-sky-300 animate-in zoom-in-95 duration-200">
          <div className="flex items-center justify-between px-6 pt-5 pb-2">
            <Logo size="sm" variant="compact" theme="light" />
            <button onClick={closeModal} className="p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="px-6 py-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-sky-100 text-sky-700">
                <Waves className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-sky-900 leading-tight">
                  GLOF Early Warning
                </h3>
                <p className="text-xs font-semibold text-sky-600">
                  Glacial Lake Moraine Instability Alert
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-sky-50/70 border border-sky-200">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-sky-600 text-white shadow-md shadow-sky-600/30 flex-shrink-0">
                <Waves className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-slate-900">
                  {data?.type || 'Glacial Lake Outburst Early Warning'}
                </h4>
                <div className="flex flex-col text-xs text-slate-600 gap-0.5">
                  <span className="flex items-center gap-1.5 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {data?.region || 'North Sikkim (South Lhonak Basin)'}
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-500">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    {data?.timestamp || '26 Sep 2026, 11:30 AM'}
                  </span>
                </div>
              </div>
            </div>

            <p className="mt-4 text-xs leading-relaxed text-slate-600">
              {data?.description ||
                'Rapid expansion and heightened water stage registered at proglacial lake moraine. High probability of moraine breach and downstream flash flood in mountain river valley.'}
            </p>

            <div className="p-3 mt-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
              <span className="font-bold text-slate-800">Protective Action Directive:</span>
              <p className="text-[11px] leading-relaxed">
                {data?.recommendation ||
                  'Immediate evacuation ordered for downstream riverbank hamlets. Move to designated muster points above 40 meters from river level.'}
              </p>
            </div>

            <div className="flex items-center justify-between px-3 py-2 mt-3 rounded-xl bg-sky-50 border border-sky-200 text-sky-800">
              <div className="flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-sky-600 flex-shrink-0" />
                <span className="text-xs font-bold">Severity: {data?.severity || 'High'}</span>
              </div>
              <span className="text-[10px] text-sky-600 font-semibold">Simulated GLOF Telemetry</span>
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 px-6 py-4 mt-2 bg-slate-50 border-t border-slate-100">
            <button
              onClick={() => handleViewOnMap(data?.state || 'Sikkim', 'GLOF')}
              className="px-4 py-2.5 text-xs font-bold text-sky-700 bg-sky-50 border border-sky-200 rounded-xl hover:bg-sky-100"
            >
              View on Risk Map
            </button>
            <button
              onClick={handleAcknowledge}
              className="px-5 py-2.5 text-xs font-bold text-white bg-sky-600 rounded-xl hover:bg-sky-700 shadow-md shadow-sky-600/30"
            >
              Acknowledge & Evacuate
            </button>
          </div>
        </div>
      )}

      {/* 4. Modal Variant: Snow Avalanche Warning */}
      {(type === 'avalanche' || type === 'snow_avalanche') && (
        <div className="relative z-10 w-full max-w-lg overflow-hidden bg-white rounded-3xl shadow-2xl border border-indigo-200 animate-in zoom-in-95 duration-200">
          <div className="flex items-center justify-between px-6 pt-5 pb-2">
            <Logo size="sm" variant="compact" theme="light" />
            <button onClick={closeModal} className="p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="px-6 py-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-indigo-100 text-indigo-700">
                <MountainSnow className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-indigo-900 leading-tight">
                  Snow Avalanche Warning
                </h3>
                <p className="text-xs font-semibold text-indigo-600">
                  DGRE Stage 4 Avalanche Threat
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-indigo-50/60 border border-indigo-200">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-600 text-white shadow-md shadow-indigo-600/30 flex-shrink-0">
                <MountainSnow className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-slate-900">
                  {data?.type || 'High-Altitude Snow Avalanche Warning'}
                </h4>
                <div className="flex flex-col text-xs text-slate-600 gap-0.5">
                  <span className="flex items-center gap-1.5 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {data?.region || 'Jammu & Kashmir (Gulmarg High Ridges)'}
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-500">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    {data?.timestamp || '26 Sep 2026, 08:20 AM'}
                  </span>
                </div>
              </div>
            </div>

            <p className="mt-4 text-xs leading-relaxed text-slate-600">
              {data?.description ||
                'Fresh snowfall accumulation over loose faceted stratigraphic snow layers with high wind drift. High danger issued for slopes steeper than 32°.'}
            </p>

            <div className="p-3 mt-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
              <span className="font-bold text-slate-800">Protective Action Directive:</span>
              <p className="text-[11px] leading-relaxed">
                {data?.recommendation ||
                  'Prohibit all backcountry activity and high-altitude trekking. Convoy movement on vulnerable mountain passes suspended.'}
              </p>
            </div>

            <div className="flex items-center justify-between px-3 py-2 mt-3 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-800">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                <span className="text-xs font-bold">Risk Level: {data?.severity || 'High'}</span>
              </div>
              <span className="text-[10px] text-indigo-600 font-semibold">Simulated Snowpack Telemetry</span>
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 px-6 py-4 mt-2 bg-slate-50 border-t border-slate-100">
            <button
              onClick={() => handleViewOnMap(data?.state || 'Jammu & Kashmir', 'SNOW_AVALANCHE')}
              className="px-4 py-2.5 text-xs font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 rounded-xl hover:bg-indigo-100"
            >
              View on Risk Map
            </button>
            <button
              onClick={handleAcknowledge}
              className="px-5 py-2.5 text-xs font-bold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 shadow-md shadow-indigo-600/30"
            >
              Acknowledge Directive
            </button>
          </div>
        </div>
      )}

      {/* 5. Modal Variant: Himachal Pradesh Landslide Alert (Page 3 Right) */}
      {type === 'landslide' && (
        <div className="relative z-10 w-full max-w-md overflow-hidden bg-white rounded-3xl shadow-2xl border border-rose-200 animate-in zoom-in-95 duration-200">
          <div className="flex items-center justify-between px-5 pt-5 pb-2">
            <Logo size="sm" variant="compact" theme="light" />
            <button onClick={closeModal} className="p-1.5 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100">
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="px-5 py-3 text-center">
            {/* Graphic Illustration icon */}
            <div className="relative inline-flex items-center justify-center w-20 h-20 mb-3 rounded-full bg-rose-50 text-rose-600">
              <div className="absolute inset-0 rounded-full bg-rose-100 animate-ping opacity-25"></div>
              <Mountain className="w-10 h-10 text-rose-600" />
            </div>

            <h3 className="text-xl font-black text-slate-900">
              Landslide Alert
            </h3>

            <div className="flex items-center justify-center gap-3 mt-1 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                {data?.region || 'Himachal Pradesh'}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                {data?.timestamp || '26 Sep 2026, 02:20 PM'}
              </span>
            </div>

            <p className="mt-3 text-xs leading-relaxed text-slate-600 text-left bg-slate-50 p-3 rounded-xl border border-slate-100">
              {data?.description ||
                'Moderate to high risk of landslides in the Kullu and Mandi districts due to continuous rainfall. Avoid non-essential travel in hilly areas.'}
            </p>

            <div className="flex items-center justify-center gap-2 px-3 py-1.5 mt-3 rounded-lg bg-rose-50 text-rose-700 text-xs font-bold">
              <AlertTriangle className="w-4 h-4 text-rose-600" />
              Risk Level: {data?.severity || 'High'}
            </div>
          </div>

          <div className="p-4 bg-slate-50 border-t border-slate-100">
            <button
              onClick={() => handleViewOnMap(data?.state || 'Himachal Pradesh', 'LANDSLIDE')}
              className="w-full py-2.5 text-xs font-bold text-white bg-sky-600 rounded-xl hover:bg-sky-700 shadow-md shadow-sky-600/30"
            >
              View on Risk Map
            </button>
          </div>
        </div>
      )}

      {/* 6. Modal Variant: Assam Flood Major Alert Dark Modal (Page 3 Center) */}
      {type === 'assam' && (
        <div className="relative z-10 w-full max-w-lg overflow-hidden bg-slate-900 text-white rounded-3xl shadow-2xl border border-slate-800 animate-in zoom-in-95 duration-200">
          <div className="flex items-center justify-between px-6 pt-5 pb-2">
            <Logo size="sm" variant="compact" theme="dark" />
            <button onClick={closeModal} className="p-2 text-slate-400 hover:text-slate-200 rounded-full hover:bg-slate-800">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="px-6 py-3">
            <div className="flex items-center gap-2.5 mb-3 text-rose-500">
              <AlertTriangle className="w-6 h-6 fill-rose-500/20" />
              <div>
                <h3 className="text-lg font-bold text-white">Major Alert</h3>
                <p className="text-xs text-rose-400 font-semibold">Flood Risk Detected</p>
              </div>
            </div>

            <div className="space-y-1 text-xs text-slate-300 mb-3">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                <span className="font-semibold text-slate-100">{data?.region || 'Assam (Brahmaputra Valley)'}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Clock className="w-3.5 h-3.5" />
                <span>{data?.timestamp || '26 Sep 2026, 09:45 AM'}</span>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700 text-xs text-slate-300 leading-relaxed">
              {data?.description ||
                'Rising water levels in the Brahmaputra river have increased the flood risk in multiple districts of Assam. Immediate monitoring and preparedness are advised.'}
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 px-6 py-4 bg-slate-950/70 border-t border-slate-800">
            <button
              onClick={() => handleViewOnMap('Assam', 'FLOOD')}
              className="px-4 py-2 text-xs font-bold text-white bg-rose-600 rounded-xl hover:bg-rose-700 shadow-md shadow-rose-600/30"
            >
              View Risk Map
            </button>
            <button
              onClick={closeModal}
              className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-slate-200 border border-slate-700 rounded-xl hover:bg-slate-800"
            >
              Dismiss
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
