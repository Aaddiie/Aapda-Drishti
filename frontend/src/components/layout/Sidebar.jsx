import React from 'react';
import {
  LayoutDashboard,
  MapPin,
  BarChart3,
  Bell,
  Info,
  ShieldCheck,
  ChevronRight,
  Globe,
} from 'lucide-react';
import Logo from '../common/Logo';
import { useDisaster } from '../../context/DisasterContext';

export default function Sidebar({ mobileOpen, setMobileOpen }) {
  const { activeTab, setActiveTab, alerts } = useDisaster();

  const unreadAlertsCount = alerts.filter((a) => !a.acknowledged).length;

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'riskmap', label: 'Risk Map', icon: MapPin },
    { id: 'analysis', label: 'Analysis', icon: BarChart3 },
    { id: 'alerts', label: 'Alerts', icon: Bell, badge: unreadAlertsCount },
    { id: 'about', label: 'About', icon: Info },
  ];

  const handleNav = (id) => {
    setActiveTab(id);
    if (setMobileOpen) setMobileOpen(false);
  };

  return (
    <>
      {/* Mobile backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-xs md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Main Sidebar */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 flex flex-col w-64 bg-[#0a1626] text-slate-300 border-r border-slate-800/80 transition-transform duration-300 ease-in-out md:translate-x-0 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        {/* Brand Header */}
        <div className="px-5 py-6 border-b border-slate-800/70">
          <button
            onClick={() => handleNav('landing')}
            className="flex items-center text-left transition-opacity hover:opacity-90 group w-full"
            title="Go to Public Landing Page"
          >
            <Logo size="md" variant="full" theme="dark" />
          </button>
        </div>

        {/* Navigation Section */}
        <div className="flex-1 px-3 py-6 space-y-1.5 overflow-y-auto">
          <div className="px-3 mb-2 text-[11px] font-bold tracking-wider text-slate-400/80 uppercase">
            Platform Navigation
          </div>

          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 group relative ${
                  isActive
                    ? 'bg-sky-600 text-white font-semibold shadow-lg shadow-sky-600/25 ring-1 ring-sky-400/40'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon
                    className={`w-4 h-4 transition-transform group-hover:scale-110 ${
                      isActive ? 'text-white' : 'text-slate-400 group-hover:text-sky-300'
                    }`}
                  />
                  <span>{item.label}</span>
                </div>

                {item.badge !== undefined && item.badge > 0 && (
                  <span
                    className={`px-2 py-0.5 text-xs font-bold rounded-full ${
                      isActive
                        ? 'bg-white text-sky-700'
                        : 'bg-rose-500/90 text-white animate-pulse'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}

          <div className="pt-4 mt-4 border-t border-slate-800/50">
            <button
              onClick={() => handleNav('landing')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 group ${
                activeTab === 'landing'
                  ? 'bg-slate-800 text-white border border-slate-700'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
              }`}
            >
              <div className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-sky-400" />
                <span>Public Portal</span>
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Sidebar Footer - Matching Page 1 & 4 Reference */}
        <div className="p-4 mx-3 mb-4 rounded-2xl bg-gradient-to-br from-slate-900/90 to-sky-950/60 border border-slate-800/90 shadow-inner">
          <div className="flex items-center gap-2 mb-1.5 text-sky-400">
            <ShieldCheck className="w-4 h-4 text-sky-400" />
            <span className="text-xs font-bold tracking-wide uppercase">Mission Statement</span>
          </div>
          <p className="text-xs font-semibold text-slate-200 leading-snug">
            Together for a safer tomorrow
          </p>
          <p className="mt-1 text-[11px] text-slate-400 leading-relaxed">
            AI-driven early warnings & continuous community resilience.
          </p>
        </div>
      </aside>
    </>
  );
}
