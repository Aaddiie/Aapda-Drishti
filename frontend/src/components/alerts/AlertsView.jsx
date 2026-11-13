import React, { useState } from 'react';
import AlertsFilterBar from './AlertsFilterBar';
import AlertsListColumn from './AlertsListColumn';
import AlertDetailsColumn from './AlertDetailsColumn';
import AlertsBroadcastColumn from './AlertsBroadcastColumn';
import { useDisaster } from '../../context/DisasterContext';

export default function AlertsView() {
  const { alerts, selectedAlert } = useDisaster();

  const [categoryFilter, setCategoryFilter] = useState('All');
  const [severityFilter, setSeverityFilter] = useState('All');
  const [timeframeFilter, setTimeframeFilter] = useState('Last 7 Days');

  // Filter alerts based on active controls
  const filteredAlerts = alerts.filter((alert) => {
    const matchesCategory =
      categoryFilter === 'All' || alert.category === categoryFilter;
    const matchesSeverity =
      severityFilter === 'All' || alert.severity === severityFilter;
    return matchesCategory && matchesSeverity;
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* 1. Filter Controls Toolbar */}
      <AlertsFilterBar
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        severityFilter={severityFilter}
        setSeverityFilter={setSeverityFilter}
        timeframeFilter={timeframeFilter}
        setTimeframeFilter={setTimeframeFilter}
      />

      {/* 2. 3-Column Command Room Layout - Matching Page 4 Bottom-Left */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        {/* Column 1 (Span 4): Active Alerts List */}
        <div className="md:col-span-4 min-h-[550px]">
          <AlertsListColumn filteredAlerts={filteredAlerts} />
        </div>

        {/* Column 2 (Span 4 or 5): Selected Alert Details Inspector */}
        <div className="md:col-span-5 min-h-[550px]">
          <AlertDetailsColumn selectedAlert={selectedAlert} />
        </div>

        {/* Column 3 (Span 3): Live Broadcast Bulletin & Simulation Suite */}
        <div className="md:col-span-3 min-h-[550px]">
          <AlertsBroadcastColumn />
        </div>
      </div>
    </div>
  );
}
