import React from 'react';
import {
  ArrowRight,
  Activity,
  Cpu,
  BellRing,
  ShieldCheck,
  ChevronDown,
} from 'lucide-react';
import { useDisaster } from '../../context/DisasterContext';

export default function HeroSection({ onScrollToSection }) {
  const { setActiveTab } = useDisaster();

  const features = [
    {
      icon: Activity,
      label: 'Real-time Monitoring',
      desc: 'Telemetry from mountain river gauges, high-altitude weather stations, and satellite feeds.',
    },
    {
      icon: Cpu,
      label: 'AI Predictive Analytics',
      desc: 'Multimodal risk modeling across moraine stability, snowpack, and slope vulnerability.',
    },
    {
      icon: BellRing,
      label: 'Early Alerts',
      desc: 'Instant localized advisories to district disaster cells, SDRF, and mountain communities.',
    },
    {
      icon: ShieldCheck,
      label: 'Safer Communities',
      desc: 'Targeted evacuation corridors for downstream basins and high-altitude transport lifelines.',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0a1626] via-[#0b1c33] to-[#0a1626] text-white pt-16 md:pt-24 pb-20 px-4 md:px-12 border-b border-slate-800/80">
      {/* Background Ambient Glows & Tech Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.07] pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-sky-500/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Sub-tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/25 text-sky-300 text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-xs">
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
          Himalayan Multi-Hazard Early Warning Network
        </div>

        {/* Main Headline - Reference: Page 1 */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
          Smarter Insights for <br className="hidden sm:inline" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-sky-200 to-blue-400">
            Safer Tomorrows
          </span>
        </h1>

        {/* Subtitle - Reference: Page 1 */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
          Aapda Drishti is an AI-assisted disaster-risk assessment and monitoring platform dedicated to Himalayan high-altitude and valley hazards — GLOF, floods, landslides, and snow avalanches.
        </p>

        {/* Call to Actions - Reference: Page 1 */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => setActiveTab('dashboard')}
            className="flex items-center gap-2 px-7 py-3.5 text-sm md:text-base font-bold text-white bg-sky-600 hover:bg-sky-500 rounded-xl shadow-xl shadow-sky-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span>Open Dashboard</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => onScrollToSection('about-section')}
            className="flex items-center gap-2 px-7 py-3.5 text-sm md:text-base font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 rounded-xl transition-all cursor-pointer"
          >
            <span>Learn More</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>

        {/* 4 Feature Badges - Reference: Page 1 Bottom of Hero */}
        <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-left">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-slate-800/80 backdrop-blur-sm hover:border-sky-500/40 hover:bg-slate-850 transition-all group"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 mb-3 group-hover:scale-110 group-hover:bg-sky-500/20 transition-all">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-100 group-hover:text-sky-300 transition-colors">
                  {feat.label}
                </h4>
                <p className="mt-1 text-xs text-slate-400 leading-snug line-clamp-2">
                  {feat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
