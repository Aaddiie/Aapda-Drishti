import React from 'react';
import { Eye, Target, HeartHandshake, Shield, CheckCircle2 } from 'lucide-react';

export default function AboutSummarySection() {
  const pillars = [
    {
      icon: Eye,
      title: 'Our Vision',
      desc: 'A safer and more resilient future where no life is lost to predictable natural disasters.',
      color: 'text-sky-400 bg-sky-500/10 border-sky-500/20',
    },
    {
      icon: Target,
      title: 'Our Mission',
      desc: 'Leverage cutting-edge AI and geospatial analytics to provide early warnings and actionable safety insights.',
      color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
    },
    {
      icon: HeartHandshake,
      title: 'Our Values',
      desc: 'Community first, radical transparency, empathy and science-backed precision in emergency response.',
      color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    },
  ];

  return (
    <section id="about-section" className="py-20 md:py-28 px-4 md:px-12 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        {/* Top Header & Two-Column Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider">
              <Shield className="w-3.5 h-3.5 text-sky-600" />
              Organizational Blueprint
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              About Aapda Drishti
            </h2>

            <p className="text-lg md:text-xl font-medium text-sky-700 leading-snug">
              Turning multimodal high-altitude telemetry into preparedness, and early warnings into action.
            </p>

            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              Aapda Drishti is an AI-assisted disaster-risk assessment platform dedicated to the Indian Himalayan arc (Uttarakhand, Himachal Pradesh, Sikkim, Arunachal Pradesh, Jammu & Kashmir, Ladakh, and downstream river valleys). It continuously monitors Glacial Lake Outburst Floods (GLOF), river and flash floods, rain-induced landslides, and snow avalanches to safeguard mountain communities, hydel assets, and lifeline highway corridors.
            </p>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm font-semibold text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Himalayan Cryosphere & Glacial Lake Monitoring</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Integrated SDRF, NDRF & DGRE Protocols</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Basin-Level Multi-Hazard Risk Scoring</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Downstream & High-Pass Advisory Broadcasts</span>
              </div>
            </div>
          </div>

          {/* Right Image Display - Matching Page 1 Photo */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
              <img
                src="https://images.unsplash.com/photo-1547683905-f686c993aae5?auto=format&fit=crop&w=1000&q=80"
                alt="Disaster Response and Relief"
                className="w-full h-80 sm:h-96 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex items-end p-6">
                <div className="text-white">
                  <span className="px-2.5 py-1 text-[11px] font-bold rounded-full bg-sky-600 text-white uppercase tracking-wider">
                    Ground Operations
                  </span>
                  <h4 className="mt-2 text-base font-bold">
                    Rapid Community Response & Mitigation
                  </h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Coordinating first responders with geospatial maps in real time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillars Section - Reference: Page 1 */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-sky-300 hover:shadow-lg transition-all"
              >
                <div className={`flex items-center justify-center w-12 h-12 rounded-2xl border mb-4 ${pillar.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
