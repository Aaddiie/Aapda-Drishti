import React, { useState, useEffect } from 'react';
import {
  Search,
  Bell,
  Calendar,
  Menu,
  ShieldAlert,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import { useDisaster } from '../../context/DisasterContext';

export default function Header({ setMobileOpen }) {
  const {
    activeTab,
    searchQuery,
    setSearchQuery,
    alerts,
    openAlertModal,
    acknowledgeAlert,
    isNotificationOpen,
    setIsNotificationOpen,
  } = useDisaster();

  // Live formatted timestamp matching PDF "06 october 2026, 11:59 AM"
  const [formattedTime, setFormattedTime] = useState('06 october 2026, 11:59 AM');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Keep year aligned with demo / real time format
      const options = {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      };
      // Format as "06 october 2026, 11:59 AM"
      try {
        const str = now.toLocaleString('en-GB', options).replace(',', '');
        setFormattedTime(str);
      } catch {
        setFormattedTime('06 october 2026, 11:59 AM');
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  const titles = {
    dashboard: 'Dashboard',
    riskmap: 'Risk Map',
    analysis: 'Disaster Analysis',
    alerts: 'Alerts Hub',
    about: 'About Aapda Drishti',
  };

  const unreadAlerts = alerts.filter((a) => !a.acknowledged);

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between h-16 px-4 md:px-8 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      {/* Left: Mobile hamburger & Page Title */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setMobileOpen(true)}
          className="p-2 -ml-2 text-slate-600 rounded-xl hover:bg-slate-100 md:hidden focus:outline-hidden"
          title="Toggle Navigation"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div>
          <h1 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900">
            {titles[activeTab] || 'Dashboard'}
          </h1>
        </div>
      </div>

      {/* Center: Global Search Bar */}
      <div className="hidden sm:flex items-center flex-1 max-w-md mx-6">
        <div className="relative w-full">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search state, disaster type, region..."
            className="w-full pl-10 pr-4 py-2 text-sm bg-slate-100/90 text-slate-800 placeholder-slate-400 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-sky-500/40 focus:bg-white transition-all"
          />
        </div>
      </div>

      {/* Right: Date/Time Badge, Notifications, User */}
      <div className="flex items-center gap-3 md:gap-4">
        {/* Date Time Indicator - Reference from PDF */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 border border-slate-200/80 rounded-xl">
          <Calendar className="w-3.5 h-3.5 text-sky-600" />
          <span>{formattedTime}</span>
        </div>

        {/* Notifications Trigger */}
        <div className="relative">
          <button
            onClick={() => setIsNotificationOpen(!isNotificationOpen)}
            className="relative p-2 text-slate-600 rounded-xl hover:bg-slate-100 focus:outline-hidden transition-colors"
            title="Notifications & Active Alerts"
          >
            <Bell className="w-5 h-5" />
            {unreadAlerts.length > 0 && (
              <span className="absolute top-1.5 right-1.5 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-600"></span>
              </span>
            )}
          </button>

          {/* Notifications Dropdown */}
          {isNotificationOpen && (
            <>
              <div
                className="fixed inset-0 z-30"
                onClick={() => setIsNotificationOpen(false)}
              />
              <div className="absolute right-0 z-40 mt-2 w-80 sm:w-96 bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="flex items-center justify-between px-4 py-3 bg-slate-50 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-rose-500" />
                    <span className="text-sm font-bold text-slate-900">
                      Disaster Alerts Feed
                    </span>
                  </div>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">
                    {unreadAlerts.length} Unresolved
                  </span>
                </div>

                <div className="max-h-80 overflow-y-auto divide-y divide-slate-100">
                  {alerts.map((alert) => (
                    <div
                      key={alert.id}
                      className={`p-3.5 transition-colors hover:bg-slate-50 ${
                        alert.acknowledged ? 'opacity-60 bg-slate-50/50' : 'bg-white'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div
                          className="flex-1 cursor-pointer"
                          onClick={() => {
                            openAlertModal('heavyRain', alert);
                            setIsNotificationOpen(false);
                          }}
                        >
                          <div className="flex items-center gap-2">
                            <span
                              className={`w-2 h-2 rounded-full ${
                                alert.severity === 'High' ? 'bg-rose-500' : 'bg-amber-500'
                              }`}
                            />
                            <h4 className="text-xs font-bold text-slate-900 hover:text-sky-600">
                              {alert.type}
                            </h4>
                          </div>
                          <p className="mt-1 text-[11px] font-medium text-slate-600">
                            {alert.region}
                          </p>
                          <p className="text-[10px] text-slate-400 mt-0.5">
                            {alert.timestamp}
                          </p>
                        </div>

                        {!alert.acknowledged ? (
                          <button
                            onClick={() => acknowledgeAlert(alert.id)}
                            className="px-2 py-1 text-[10px] font-semibold text-sky-700 bg-sky-50 border border-sky-200 rounded-lg hover:bg-sky-100"
                          >
                            Ack
                          </button>
                        ) : (
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-2.5 text-center bg-slate-50 border-t border-slate-200">
                  <button
                    onClick={() => {
                      setIsNotificationOpen(false);
                      openAlertModal('flashFlood', alerts[0]);
                    }}
                    className="text-xs font-semibold text-sky-600 hover:text-sky-700 flex items-center justify-center gap-1 w-full"
                  >
                    <span>Simulate Emergency Flash Broadcast</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-2.5 pl-2 border-l border-slate-200">
          <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-tr from-sky-600 to-indigo-600 text-white font-bold text-xs shadow-xs">
            AD
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full"></span>
          </div>
          <div className="hidden xl:flex flex-col text-left leading-tight">
            <span className="text-xs font-bold text-slate-800">NDRF Officer</span>
            <span className="text-[10px] text-slate-400">Emergency Desk</span>
          </div>
        </div>
      </div>
    </header>
  );
}
