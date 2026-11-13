import React from 'react';
import {
  AlertTriangle,
  Bell,
  BarChart3,
  Users,
} from 'lucide-react';
import { useDisaster } from '../../context/DisasterContext';

export default function StatCards() {
  const { kpis, setActiveTab } = useDisaster();

  const cards = [
    {
      id: 'highRisk',
      title: 'High Risk Areas',
      value: kpis.highRiskAreas.value,
      badge: kpis.highRiskAreas.change,
      badgeColor: 'bg-rose-100 text-rose-700',
      icon: AlertTriangle,
      iconBg: 'bg-rose-50 text-rose-600 border border-rose-200',
      actionTab: 'riskmap',
    },
    {
      id: 'activeAlerts',
      title: 'Active Alerts',
      value: kpis.activeAlerts.value,
      badge: kpis.activeAlerts.change,
      badgeColor: 'bg-amber-100 text-amber-800',
      icon: Bell,
      iconBg: 'bg-amber-50 text-amber-600 border border-amber-200',
      actionTab: 'alerts',
    },
    {
      id: 'totalDisasters',
      title: 'Total Disasters (This Year)',
      value: kpis.totalDisasters.value,
      badge: kpis.totalDisasters.change,
      badgeColor: 'bg-sky-100 text-sky-700',
      icon: BarChart3,
      iconBg: 'bg-sky-50 text-sky-600 border border-sky-200',
      actionTab: 'analysis',
    },
    {
      id: 'affectedPopulation',
      title: 'Affected Population',
      value: kpis.affectedPopulation.value,
      badge: kpis.affectedPopulation.change,
      badgeColor: 'bg-purple-100 text-purple-700',
      icon: Users,
      iconBg: 'bg-purple-50 text-purple-600 border border-purple-200',
      actionTab: 'analysis',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
      {cards.map((card) => {
        const Icon = card.icon;
        return (
          <div
            key={card.id}
            onClick={() => setActiveTab(card.actionTab)}
            className="p-5 bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md hover:border-slate-300 transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold text-slate-500">
                  {card.title}
                </p>
                <h3 className="text-3xl font-black text-slate-900 mt-2 tracking-tight group-hover:text-sky-600 transition-colors">
                  {card.value}
                </h3>
              </div>
              <div className={`p-3 rounded-2xl ${card.iconBg} shadow-xs transition-transform group-hover:scale-105`}>
                <Icon className="w-5 h-5" />
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md ${card.badgeColor}`}>
                {card.badge}
              </span>
              <span className="text-[11px] text-slate-400 font-medium group-hover:text-sky-600 transition-colors">
                View details →
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
