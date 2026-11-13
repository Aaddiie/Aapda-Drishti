import React from 'react';
import StatCards from './StatCards';
import IndiaRiskMapSvg from './IndiaRiskMapSvg';
import DisasterTrendChart from './DisasterTrendChart';
import DisasterDistributionChart from './DisasterDistributionChart';
import RecentAlertsFeed from './RecentAlertsFeed';
export default function DashboardView() {
  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* 1. Top 4 KPI Summary Cards */}
      <StatCards />

      {/* 2. Main Dashboard Grid - Matching Page 1 Bottom-Right Structure */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column (Span 6 or 7): Risk Map + Distribution Donut */}
        <div className="lg:col-span-6 xl:col-span-7 space-y-6">
          {/* Risk Map Widget */}
          <div className="h-[480px]">
            <IndiaRiskMapSvg compact={true} />
          </div>

          {/* Disaster Type Distribution Widget */}
          <DisasterDistributionChart />
        </div>

        {/* Right Column (Span 6 or 5): Disaster Trends 5-Yr Chart + Recent Alerts */}
        <div className="lg:col-span-6 xl:col-span-5 space-y-6">
          {/* 5-Year Disaster Trends Line Chart */}
          <DisasterTrendChart />

          {/* Recent Alerts Feed */}
          <RecentAlertsFeed />
        </div>
      </div>
    </div>
  );
}
