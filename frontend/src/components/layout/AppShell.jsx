import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import AlertModal from '../common/AlertModal';
import ToastNotifications from '../common/ToastNotifications';
import { useDisaster } from '../../context/DisasterContext';

export default function AppShell({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { activeTab } = useDisaster();

  // If in public landing page mode, sidebar is hidden
  const isLanding = activeTab === 'landing';

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans antialiased">
      {/* Modals & Toasts always available */}
      <AlertModal />
      <ToastNotifications />
      {!isLanding ? (
        <div className="flex flex-1 min-h-screen">
          {/* Sidebar */}
          <Sidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col min-w-0 md:pl-64 transition-all duration-300">
            <Header setMobileOpen={setMobileOpen} />
            <main className="flex-1 p-4 md:p-8 pb-16 md:pb-16 max-w-7xl w-full mx-auto">
              {children}
            </main>
          </div>
        </div>
      ) : (
        <div className="flex-1 flex flex-col min-h-screen">
          {children}
        </div>
      )}
    </div>
  );
}
