import React from 'react';
import { AlertTriangle, CheckCircle2, Info, X } from 'lucide-react';
import Logo from './Logo';
import { useDisaster } from '../../context/DisasterContext';

export default function ToastNotifications() {
  const {
    activeToast,
    dismissToast,
    acknowledgedToast,
    setAcknowledgedToast,
    setActiveTab,
    selectState,
  } = useDisaster();

  return (
    <>
      {/* 1. Top Urgency Banner / Toast - Reference: Page 3 Top-Right */}
      {activeToast && activeToast.visible && (
        <div className="fixed top-20 right-4 md:right-8 z-40 max-w-md w-full animate-in slide-in-from-top-3 duration-300">
          <div className="flex items-start gap-3 p-3.5 bg-[#0a1626] text-white rounded-2xl shadow-2xl border border-rose-500/40 ring-1 ring-rose-500/20 backdrop-blur-md">
            <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-rose-600/20 text-rose-500 flex-shrink-0 mt-0.5">
              <AlertTriangle className="w-5 h-5 text-rose-500" />
            </div>

            <div className="flex-1 min-w-0 pr-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-rose-400 uppercase tracking-wider">
                  Disaster Alert
                </span>
              </div>
              <p className="mt-0.5 text-xs text-slate-200 leading-snug">
                {activeToast.message}
              </p>
              <div className="mt-2 flex items-center gap-3">
                <button
                  onClick={() => {
                    selectState('Himachal Pradesh');
                    setActiveTab('riskmap');
                    dismissToast();
                  }}
                  className="text-[11px] font-bold text-sky-400 hover:text-sky-300 underline underline-offset-2"
                >
                  View on Risk Map →
                </button>
              </div>
            </div>

            <button
              onClick={dismissToast}
              className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              title="Dismiss alert"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* 2. Success Toast (Alert Acknowledged) - Reference: Page 3 Bottom-Left */}
      {acknowledgedToast && (
        <div className="fixed bottom-6 left-6 z-50 max-w-sm animate-in slide-in-from-bottom-3 duration-300">
          <div className="flex items-center gap-3 px-4 py-3 bg-white text-slate-800 rounded-2xl shadow-xl border border-emerald-200">
            <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
            <div className="flex-1 text-xs">
              <p className="font-bold text-slate-900">{acknowledgedToast.title}</p>
              <p className="text-slate-500 text-[11px] mt-0.5">
                {acknowledgedToast.message}
              </p>
            </div>
            <button
              onClick={() => setAcknowledgedToast(null)}
              className="p-1 text-slate-400 hover:text-slate-600"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* 3. Bottom Information Banner - Reference: Page 3 Bottom */}
      <div className="fixed bottom-0 left-0 right-0 z-20 hidden md:flex items-center justify-between px-6 py-2 bg-gradient-to-r from-sky-900/90 via-slate-900/90 to-sky-950/90 text-white backdrop-blur-md border-t border-sky-800/40 text-xs">
        <div className="flex items-center gap-2.5">
          <div className="p-1 rounded-full bg-sky-500/20 text-sky-400">
            <Info className="w-3.5 h-3.5" />
          </div>
          <span className="font-semibold text-slate-200">Stay Safe, Stay Informed:</span>
          <span className="text-slate-300">
            Follow Aapda Drishti for real-time disaster updates across all Indian states.
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Logo size="sm" variant="icon-only" theme="dark" />
          <span className="text-[11px] font-bold text-sky-400 tracking-wide">AAPDA DRISHTI</span>
        </div>
      </div>
    </>
  );
}
