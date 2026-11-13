import React, { createContext, useContext, useState } from 'react';
import {
  KPIS,
  DISASTER_TRENDS_5YR,
  DISASTER_DISTRIBUTION,
  STATE_COMPARISON,
  ACTIVE_ALERTS,
  DISASTER_CATALOG,
  INDIA_STATES_RISK,
  SYSTEM_INFO,
} from '../data/disasterData';

const DisasterContext = createContext(null);

export function DisasterProvider({ children }) {
  // Navigation: 'dashboard' | 'riskmap' | 'analysis' | 'alerts' | 'about' | 'landing'
  const [activeTab, setActiveTab] = useState('dashboard');

  // Search
  const [searchQuery, setSearchQuery] = useState('');

  // Selected State/Region for Risk Map & Inspection
  const [selectedStateName, setSelectedStateName] = useState('Uttarakhand');

  // Selected Hazard for Risk Map & Inspection ('GLOF' | 'FLOOD' | 'LANDSLIDE' | 'SNOW_AVALANCHE')
  const [selectedHazardId, setSelectedHazardId] = useState('GLOF');

  // Alerts Management
  const [alerts, setAlerts] = useState(ACTIVE_ALERTS);
  const [selectedAlertId, setSelectedAlertId] = useState('alt-01');

  // Modals & Banners state
  const [activeModal, setActiveModal] = useState(null); // { type: 'heavyRain' | 'flashFlood' | 'weather' | 'assam' | 'landslide', data }
  const [activeToast, setActiveToast] = useState({
    type: 'warning',
    title: 'Disaster Alert',
    message: 'High risk of landslide in Himachal Pradesh. Check the risk map for more details.',
    visible: true,
  });

  // Acknowledged notification toast
  const [acknowledgedToast, setAcknowledgedToast] = useState(null);

  // Filters for Disaster Analysis & Alerts
  const [typeFilter, setTypeFilter] = useState('All');
  const [stateFilter, setStateFilter] = useState('All');
  const [timeFilter, setTimeFilter] = useState('2021-2025');

  // Notification Drawer
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  // Helper actions
  const selectState = (stateName) => {
    if (INDIA_STATES_RISK[stateName]) {
      setSelectedStateName(stateName);
      // Auto-switch to risk map if user clicked to inspect
    }
  };

  const openAlertModal = (modalType, alertData = null) => {
    const data = alertData || alerts[0];
    setActiveModal({ type: modalType, data });
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const acknowledgeAlert = (id) => {
    setAlerts((prev) =>
      prev.map((a) => (a.id === id ? { ...a, acknowledged: true } : a))
    );
    closeModal();
    setAcknowledgedToast({
      title: 'Alert Acknowledged',
      message: 'You will receive further updates on this event.',
    });
    setTimeout(() => {
      setAcknowledgedToast(null);
    }, 4500);
  };

  const dismissToast = () => {
    setActiveToast(null);
  };

  const selectedRegionData = INDIA_STATES_RISK[selectedStateName] || INDIA_STATES_RISK['Uttarakhand'];
  const selectedAlert = alerts.find((a) => a.id === selectedAlertId) || alerts[0];

  const value = {
    // Nav
    activeTab,
    setActiveTab,
    searchQuery,
    setSearchQuery,

    // Map & Region
    selectedStateName,
    setSelectedStateName,
    selectState,
    selectedHazardId,
    setSelectedHazardId,
    selectedRegionData,
    statesRiskMap: INDIA_STATES_RISK,

    // Alerts
    alerts,
    selectedAlertId,
    setSelectedAlertId,
    selectedAlert,
    acknowledgeAlert,

    // Modals & Notifications
    activeModal,
    openAlertModal,
    closeModal,
    activeToast,
    dismissToast,
    acknowledgedToast,
    setAcknowledgedToast,
    isNotificationOpen,
    setIsNotificationOpen,

    // Analytics & Data
    kpis: KPIS,
    trends5Yr: DISASTER_TRENDS_5YR,
    distribution: DISASTER_DISTRIBUTION,
    stateComparison: STATE_COMPARISON,
    disasterCatalog: DISASTER_CATALOG,
    systemInfo: SYSTEM_INFO,

    // Filters
    typeFilter,
    setTypeFilter,
    stateFilter,
    setStateFilter,
    timeFilter,
    setTimeFilter,
  };

  return <DisasterContext.Provider value={value}>{children}</DisasterContext.Provider>;
}

export function useDisaster() {
  const context = useContext(DisasterContext);
  if (!context) {
    throw new Error('useDisaster must be used within a DisasterProvider');
  }
  return context;
}
