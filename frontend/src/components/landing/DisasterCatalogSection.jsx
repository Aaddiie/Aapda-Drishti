import React, { useState } from 'react';
import { ArrowRight, AlertTriangle } from 'lucide-react';
import { useDisaster } from '../../context/DisasterContext';
import DisasterDetailModal from './DisasterDetailModal';

export default function DisasterCatalogSection() {
  const { disasterCatalog } = useDisaster();
  const [selectedDisaster, setSelectedDisaster] = useState(null);

  return (
    <section id="disaster-section" className="py-20 md:py-28 px-4 md:px-12 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        {/* Section Header - Reference: Page 1 Bottom-Left */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider">
            <AlertTriangle className="w-3.5 h-3.5 text-sky-600" />
            Knowledge Base & Response
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Disaster
          </h2>
          <p className="mt-2 text-lg sm:text-xl font-bold text-sky-700">
            Know the risks. Be prepared.
          </p>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Explore different types of natural disasters, understand their impact and learn how to stay safe.
          </p>
        </div>

        {/* Exactly 4 Primary Himalayan Hazard Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {disasterCatalog.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedDisaster(item)}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-sky-300 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Image Preview */}
                <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 text-[11px] font-bold rounded-full bg-slate-900/80 backdrop-blur-md text-white border border-white/20">
                      {item.badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 pb-3">
                  <h3 className="text-xl font-black text-slate-900 group-hover:text-sky-600 transition-colors">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Bottom Action Row with Circular Arrow Button - Reference: Page 1 */}
              <div className="px-5 py-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400 group-hover:text-sky-600 transition-colors">
                  View safety guidelines
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedDisaster(item);
                  }}
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-sky-50 text-sky-600 border border-sky-200 group-hover:bg-sky-600 group-hover:text-white transition-all transform group-hover:scale-110"
                  title={`View guidelines for ${item.name}`}
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Detail Modal */}
      {selectedDisaster && (
        <DisasterDetailModal
          disaster={selectedDisaster}
          onClose={() => setSelectedDisaster(null)}
        />
      )}
    </section>
  );
}
