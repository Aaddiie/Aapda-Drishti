import React from 'react';
import {
  Eye,
  Target,
  HeartHandshake,
  Database,
  Cpu,
  BellRing,
  ShieldCheck,
  Radar,
  Satellite,
  Waves,
  Activity,
  CheckCircle2,
  ArrowRight,
  Shield,
  MountainSnow,
  Mountain,
} from 'lucide-react';
import { useDisaster } from '../../context/DisasterContext';

export default function AboutView() {
  const { systemInfo, setActiveTab } = useDisaster();

  const stepIcons = {
    Database: Database,
    Cpu: Cpu,
    BellRing: BellRing,
    ShieldCheck: ShieldCheck,
  };

  const sourceIcons = {
    Radar: Radar,
    Satellite: Satellite,
    Waves: Waves,
    Activity: Activity,
    MountainSnow: MountainSnow,
    Mountain: Mountain,
  };

  const pillars = [
    {
      icon: Eye,
      title: 'Our Vision',
      desc: systemInfo.vision,
      color: 'text-sky-600 bg-sky-50 border-sky-200',
    },
    {
      icon: Target,
      title: 'Our Mission',
      desc: systemInfo.mission,
      color: 'text-indigo-600 bg-indigo-50 border-indigo-200',
    },
    {
      icon: HeartHandshake,
      title: 'Our Values',
      desc: systemInfo.values,
      color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* 1. Hero Section & Institutional Overview - Matching Page 4 Bottom-Right */}
      <div className="p-6 md:p-8 bg-white rounded-3xl border border-slate-200/90 shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider">
              <Shield className="w-3.5 h-3.5 text-sky-600" />
              Himalayan Disaster-Risk Intelligence Platform
            </div>

            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              About Aapda Drishti
            </h2>

            <p className="text-base md:text-lg font-bold text-sky-700 leading-snug">
              {systemInfo.subheading}
            </p>

            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              {systemInfo.overview}
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={() => setActiveTab('riskmap')}
                className="flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-sky-600 hover:bg-sky-700 rounded-xl shadow-md shadow-sky-600/30 transition-all"
              >
                <span>Explore India Risk Map</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setActiveTab('dashboard')}
                className="px-5 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
              >
                View Command Dashboard
              </button>
            </div>
          </div>

          {/* Right Image Display - Matching Page 4 Photo */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 group h-64 sm:h-72">
              <img
                src="https://images.unsplash.com/photo-1547683905-f686c993aae5?auto=format&fit=crop&w=1000&q=80"
                alt="Community Preparedness & Relief"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-5">
                <div className="text-white">
                  <span className="px-2.5 py-0.5 text-[10px] font-bold rounded-full bg-sky-500 text-white uppercase tracking-wider">
                    Civil Defense
                  </span>
                  <h4 className="mt-1.5 text-sm font-bold">
                    Resilient Communities & Zero-Casualty Goal
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Three Pillars: Vision, Mission, Values - Matching Page 4 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pillars.map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-all space-y-3"
            >
              <div className={`flex items-center justify-center w-12 h-12 rounded-2xl border ${pillar.color}`}>
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* 3. Section: "How It Works" - 4-Step Pipeline Matching Page 4 */}
      <div className="p-6 md:p-8 bg-white rounded-3xl border border-slate-200/90 shadow-xs space-y-6">
        <div>
          <span className="text-[11px] font-bold text-sky-600 uppercase tracking-wider block">
            End-to-End Pipeline
          </span>
          <h3 className="text-2xl font-black text-slate-900 mt-1">
            How It Works
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            From sensor telemetry and satellite observation to early warnings and localized citizen safety.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {systemInfo.howItWorks.map((step) => {
            const Icon = stepIcons[step.icon] || ShieldCheck;
            return (
              <div
                key={step.step}
                className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:border-sky-300 hover:bg-slate-50 transition-all flex flex-col justify-between space-y-4 relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-sky-600 text-white shadow-sm shadow-sky-600/30">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-2xl font-black text-slate-300 group-hover:text-sky-600 transition-colors">
                      0{step.step}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                    {step.title}
                  </h4>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-2 text-[11px] font-bold text-sky-600 flex items-center gap-1">
                  <span>Phase 0{step.step} Operational</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. Section: Technology & Data Sources + Disaster Preparedness Benefits */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left (Span 7): Technology & Data Sources */}
        <div className="lg:col-span-7 p-6 md:p-8 bg-white rounded-3xl border border-slate-200/90 shadow-xs space-y-5 flex flex-col justify-between">
          <div>
            <span className="text-[11px] font-bold text-sky-600 uppercase tracking-wider block">
              Multi-Agency Feeds
            </span>
            <h3 className="text-xl md:text-2xl font-black text-slate-900 mt-1">
              Technology & Data Sources
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Aapda Drishti unifies critical real-time cryospheric, hydrological, meteorological, and slope telemetry across Himalayan mountain basins.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {systemInfo.dataSources.map((ds, idx) => {
              const Icon = sourceIcons[ds.icon] || Database;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-sky-300 transition-all flex items-start gap-3"
                >
                  <div className="p-2.5 rounded-xl bg-sky-50 text-sky-600 border border-sky-200 flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-900">
                      {ds.name}
                    </h5>
                    <p className="text-[11px] text-slate-500 mt-0.5 font-medium">
                      {ds.provider}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-3.5 rounded-xl bg-slate-100/70 border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
            <span>Data Refresh Interval: Continuous sub-minute sync</span>
            <span className="font-bold text-sky-700">99.98% Uptime</span>
          </div>
        </div>

        {/* Right (Span 5): Disaster Preparedness Benefits */}
        <div className="lg:col-span-5 p-6 md:p-8 bg-gradient-to-br from-[#0a1626] to-[#0f243d] text-white rounded-3xl border border-slate-800 shadow-xl space-y-5 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-bold uppercase tracking-wider mb-2 border border-sky-400/30">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
              Strategic Value
            </div>
            <h3 className="text-xl md:text-2xl font-black text-white mt-1">
              Disaster Preparedness Benefits
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Transforming raw telemetry into proactive life-saving action.
            </p>
          </div>

          <div className="space-y-3">
            {systemInfo.benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3 rounded-2xl bg-slate-800/60 border border-slate-700/60 text-xs leading-relaxed text-slate-200"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <button
              onClick={() => setActiveTab('dashboard')}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-white bg-sky-600 hover:bg-sky-500 rounded-xl shadow-lg shadow-sky-600/30 transition-all"
            >
              <span>Return to Live Dashboard</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
