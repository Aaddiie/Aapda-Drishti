import React from 'react';
import { BarChart3, Users, IndianRupee, MapPin } from 'lucide-react';
import { useDisaster } from '../../context/DisasterContext';

export default function AnalysisMetricCards() {
  const { kpis } = useDisaster();

  const cards = [
    {
      title: 'Total Disasters',
      value: kpis.totalDisasters.value,
      sublabel: 'Recorded in period',
      icon: BarChart3,
      color: 'text-sky-600',
      bgColor: 'bg-sky-50 border-sky-200',
      change: '+15%',
      isPositive: false,
    },
    {
      title: 'People Affected',
      value: kpis.affectedPopulation.value,
      sublabel: 'Citizens impacted',
      icon: Users,
      color: 'text-rose-600',
      bgColor: 'bg-rose-50 border-rose-200',
      change: '+8%',
      isPositive: false,
    },
    {
      title: 'Total Damage (₹ Crores)',
      value: kpis.totalDamage.value,
      sublabel: 'Infrastructure & crop loss',
      icon: IndianRupee,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50 border-emerald-200',
      change: '+12.4%',
      isPositive: false,
    },
    {
      title: 'States Affected',
      value: kpis.statesAffected.value,
      sublabel: 'Vulnerable jurisdictions',
      icon: MapPin,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 border-purple-200',
      change: '+3 states',
      isPositive: false,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
      {cards.map((card, idx) => {
        const Icon = card.icon;
        return (
          <div
            key={idx}
            className="p-5 bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold text-slate-500">
                  {card.title}
                </p>
                <h3 className="text-3xl font-black text-slate-900 mt-2 tracking-tight">
                  {card.value}
                </h3>
              </div>
              <div className={`p-3 rounded-2xl border ${card.bgColor} ${card.color} shadow-xs`}>
                <Icon className="w-5 h-5" />
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
              <span className="text-slate-400 font-medium">{card.sublabel}</span>
              <span className="px-2 py-0.5 rounded-md font-bold bg-slate-100 text-slate-700">
                {card.change}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
