import React from 'react';
import { DisasterProvider, useDisaster } from './context/DisasterContext';
import AppShell from './components/layout/AppShell';
import LandingPage from './components/landing/LandingPage';
import DashboardView from './components/dashboard/DashboardView';
import RiskMapView from './components/riskmap/RiskMapView';
import AnalysisView from './components/analysis/AnalysisView';
import AlertsView from './components/alerts/AlertsView';
import AboutView from './components/about/AboutView';
function ModuleDispatcher() {
  const { activeTab, setActiveTab } = useDisaster();

  if (activeTab === 'landing') {
    return <LandingPage />;
  }

  if (activeTab === 'dashboard') {
    return <DashboardView />;
  }

  if (activeTab === 'riskmap') {
    return <RiskMapView />;
  }

  if (activeTab === 'analysis') {
    return <AnalysisView />;
  }

  if (activeTab === 'alerts') {
    return <AlertsView />;
  }

  if (activeTab === 'about') {
    return <AboutView />;
  }

  // Placeholder for upcoming phases (Risk Map, Analysis, Alerts, About)
  return (
    <div className="space-y-6">
      <div className="p-6 md:p-8 bg-white rounded-3xl border border-slate-200/90 shadow-xs">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
          Module Preview
        </div>
        <h2 className="text-2xl font-black text-slate-900 capitalize">
          {activeTab} Module
        </h2>
        <p className="mt-2 text-sm text-slate-600 max-w-xl">
          This dedicated view will be constructed in its corresponding roadmap phase. You can currently explore the fully operational <strong>Public Landing Portal</strong> and <strong>Main Dashboard Overview</strong>.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            onClick={() => setActiveTab('dashboard')}
            className="px-5 py-2.5 text-xs font-bold text-white bg-sky-600 hover:bg-sky-700 rounded-xl shadow-md shadow-sky-600/30"
          >
            ← Return to Dashboard
          </button>
          <button
            onClick={() => setActiveTab('landing')}
            className="px-5 py-2.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl"
          >
            Go to Landing Page
          </button>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <DisasterProvider>
      <AppShell>
        <ModuleDispatcher />
      </AppShell>
    </DisasterProvider>
  );
}
