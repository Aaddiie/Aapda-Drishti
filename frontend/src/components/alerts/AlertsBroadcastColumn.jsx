import React from 'react';
import {
  Radio,
  Zap,
} from 'lucide-react';
import { useDisaster } from '../../context/DisasterContext';

export default function AlertsBroadcastColumn() {
  const { openAlertModal } = useDisaster();

  const bulletins = [
    {
      id: 'b-01',
      time: '11:25 AM',
      source: 'Sikkim SDMA Control Desk',
      text: 'South Lhonak proglacial lake sensor registers 18% volume surge. Siren early-warning activated downstream in Chungthang.',
      tag: 'GLOF Warning',
      tagColor: 'bg-sky-100 text-sky-800',
    },
    {
      id: 'b-02',
      time: '10:40 AM',
      source: 'Uttarakhand State Emergency Desk',
      text: 'Preventive evacuation advisory issued for riverside settlements along Alaknanda and Mandakini riverbanks.',
      tag: 'Evacuation',
      tagColor: 'bg-rose-100 text-rose-700',
    },
    {
      id: 'b-03',
      time: '09:50 AM',
      source: 'Himachal PWD Disaster Cell',
      text: 'Heavy machinery positioned along NH-3 corridor between Pandoh and Aut to clear active debris fall and rock slips.',
      tag: 'Landslide',
      tagColor: 'bg-amber-100 text-amber-800',
    },
    {
      id: 'b-04',
      time: '08:15 AM',
      source: 'DGRE Snow Telemetry Unit',
      text: 'Stage 4 Avalanche Warning issued for Gulmarg backcountry and Zojila Pass slopes above 3200 meters.',
      tag: 'Snow Avalanche',
      tagColor: 'bg-indigo-100 text-indigo-800',
    },
    {
      id: 'b-05',
      time: '07:30 AM',
      source: 'CWC Mountain Hydrology Cell',
      text: 'Cloudburst precipitation in upper catchment receding; river stages stabilizing across sub-Himalayan torrents.',
      tag: 'Hydrological',
      tagColor: 'bg-blue-100 text-blue-800',
    },
  ];

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xs p-5 flex flex-col justify-between h-full space-y-5">
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-sky-50 text-sky-600 border border-sky-200">
              <Radio className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 leading-tight">
                Live Broadcast Feed
              </h3>
              <p className="text-xs text-slate-500">
                Himalayan Multi-Agency Telemetry Wire (Demo)
              </p>
            </div>
          </div>

          <span className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-bold rounded-full bg-emerald-100 text-emerald-700">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Live Wire
          </span>
        </div>

        {/* Live Bulletin Feed Items */}
        <div className="space-y-3 overflow-y-auto max-h-[380px] pr-1">
          {bulletins.map((b) => (
            <div
              key={b.id}
              className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-100 hover:border-slate-300 transition-all text-xs space-y-1.5"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-800">{b.source}</span>
                <span className="text-[10px] text-slate-400 font-medium">{b.time}</span>
              </div>
              <p className="text-slate-600 leading-snug">
                {b.text}
              </p>
              <div className="pt-1">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${b.tagColor}`}>
                  {b.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive 4-Hazard Modal Suite Simulation Panel */}
      <div className="pt-4 border-t border-slate-100 space-y-3">
        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
          <Zap className="w-4 h-4 text-amber-500" />
          <span>Simulate Himalayan Alert Dialogs</span>
        </div>

        <div className="grid grid-cols-2 gap-2 text-xs">
          <button
            onClick={() => openAlertModal('glof')}
            className="p-2 text-left rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-800 font-bold border border-sky-200 transition-colors cursor-pointer"
          >
            🌊 GLOF Warning
          </button>
          <button
            onClick={() => openAlertModal('flashFlood')}
            className="p-2 text-left rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-800 font-bold border border-blue-200 transition-colors cursor-pointer"
          >
            🌧️ Flash Flood
          </button>
          <button
            onClick={() => openAlertModal('landslide')}
            className="p-2 text-left rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-800 font-bold border border-amber-200 transition-colors cursor-pointer"
          >
            ⛰️ Landslide Alert
          </button>
          <button
            onClick={() => openAlertModal('avalanche')}
            className="p-2 text-left rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-800 font-bold border border-indigo-200 transition-colors cursor-pointer"
          >
            ❄️ Avalanche Alert
          </button>
        </div>

        <button
          onClick={() => openAlertModal('heavyRain')}
          className="w-full py-2.5 px-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-sm transition-all cursor-pointer"
        >
          High-Risk Emergency Action Dialog (Page 2 Reference)
        </button>
      </div>
    </div>
  );
}
