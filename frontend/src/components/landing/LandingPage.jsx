import React from 'react';
import LandingNavbar from './LandingNavbar';
import HeroSection from './HeroSection';
import AboutSummarySection from './AboutSummarySection';
import DisasterCatalogSection from './DisasterCatalogSection';
import Logo from '../common/Logo';
import { useDisaster } from '../../context/DisasterContext';
import { PhoneCall } from 'lucide-react';

export default function LandingPage() {
  const { setActiveTab } = useDisaster();

  const handleScrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      {/* 1. Header / Navbar */}
      <LandingNavbar onScrollToSection={handleScrollToSection} />

      {/* 2. Hero Section */}
      <HeroSection onScrollToSection={handleScrollToSection} />

      {/* 3. About Aapda Drishti Section */}
      <AboutSummarySection />

      {/* 4. Disaster Knowledge Catalog (6 Cards) */}
      <DisasterCatalogSection />

      {/* 5. Emergency Helplines Callout Banner */}
      <section className="bg-slate-900 text-white py-12 px-4 md:px-12 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-rose-500/20 text-rose-400 border border-rose-500/30 flex-shrink-0">
              <PhoneCall className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">
                National Disaster Emergency Hotlines
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Immediate toll-free government response desks operating 24 hours a day.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="px-4 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs font-semibold">
              <span className="text-slate-400 mr-2">National Emergency:</span>
              <span className="text-amber-400 font-bold text-sm">112</span>
            </div>
            <div className="px-4 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs font-semibold">
              <span className="text-slate-400 mr-2">NDMA Helpline:</span>
              <span className="text-amber-400 font-bold text-sm">1078</span>
            </div>
            <div className="px-4 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs font-semibold">
              <span className="text-slate-400 mr-2">SDRF Control Room:</span>
              <span className="text-amber-400 font-bold text-sm">1070</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Footer */}
      <footer className="bg-[#07111e] text-slate-400 py-12 px-4 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-slate-800/80">
          <div>
            <Logo size="md" variant="full" theme="dark" />
            <p className="mt-3 text-xs text-slate-400 max-w-sm leading-relaxed">
              National Disaster Management & Predictive Warning Platform. Leveraging geospatial technology, IoT telemetry, and AI modeling to safeguard communities across India.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-slate-300">
            <button
              onClick={() => handleScrollToSection('about-section')}
              className="hover:text-white transition-colors"
            >
              Mission & Vision
            </button>
            <button
              onClick={() => handleScrollToSection('disaster-section')}
              className="hover:text-white transition-colors"
            >
              Disaster Types
            </button>
            <button
              onClick={() => setActiveTab('riskmap')}
              className="hover:text-white transition-colors"
            >
              India Risk Map
            </button>
            <button
              onClick={() => setActiveTab('analysis')}
              className="hover:text-white transition-colors"
            >
              Disaster Analytics
            </button>
            <button
              onClick={() => setActiveTab('dashboard')}
              className="px-4 py-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-bold transition-all shadow-md"
            >
              Launch Dashboard
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 AAPDA DRISHTI. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Predict • Prepare • Protect
          </p>
        </div>
      </footer>
    </div>
  );
}
