import React from 'react';
import Logo from '../common/Logo';
import { useDisaster } from '../../context/DisasterContext';
import { LayoutDashboard } from 'lucide-react';

export default function LandingNavbar({ onScrollToSection }) {
  const { setActiveTab } = useDisaster();

  return (
    <nav className="sticky top-0 z-40 bg-[#0a1626]/90 backdrop-blur-md border-b border-slate-800/80 px-4 md:px-12 py-3.5 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <div className="cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <Logo size="md" variant="full" theme="dark" />
        </div>

        {/* Center Nav Links - Matching Page 1 Header */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="hover:text-white transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => onScrollToSection('about-section')}
            className="hover:text-white transition-colors"
          >
            About
          </button>
          <button
            onClick={() => onScrollToSection('disaster-section')}
            className="hover:text-white transition-colors"
          >
            Disaster
          </button>
        </div>

        {/* Right CTA Button: "Open Dashboard" */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setActiveTab('dashboard')}
            className="flex items-center gap-2 px-4 md:px-5 py-2.5 text-xs md:text-sm font-bold text-white bg-sky-600 hover:bg-sky-500 rounded-xl shadow-lg shadow-sky-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <LayoutDashboard className="w-4 h-4" />
            <span>Open Dashboard</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
