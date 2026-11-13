import React from 'react';
import AnalysisFilters from './AnalysisFilters';
import AnalysisMetricCards from './AnalysisMetricCards';
import DisasterTrendChart from '../dashboard/DisasterTrendChart';
import DisasterDistributionChart from '../dashboard/DisasterDistributionChart';
import StateComparisonChart from './StateComparisonChart';

export default function AnalysisView() {
  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* 1. Filter Toolbar */}
      <AnalysisFilters />

      {/* 2. 4 Analytic Summary KPI Cards */}
      <AnalysisMetricCards />

      {/* 3. Top Full-Width 5-Year Disaster Trends Line Chart */}
      <DisasterTrendChart />

      {/* 4. Bottom Row: Donut Distribution & State-wise Horizontal Bar Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        <div className="lg:col-span-5">
          <DisasterDistributionChart />
        </div>
        <div className="lg:col-span-7">
          <StateComparisonChart />
        </div>
      </div>
    </div>
  );
}
