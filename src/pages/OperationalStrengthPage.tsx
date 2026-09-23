import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { FleetCard } from '../components/FleetCard';
import { EQUIPMENT_DATA, TOTAL_FLEET_METRICS } from '../data/equipment';
import { CheckCircle2 } from 'lucide-react';

interface OperationalStrengthPageProps {
  onNavigate: (path: string) => void;
  onOpenEnquiry: () => void;
}

export const OperationalStrengthPage: React.FC<OperationalStrengthPageProps> = ({ onNavigate, onOpenEnquiry }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Equipment & Fleet' },
    { id: 'excavation-drilling', label: 'Excavation & Drilling' },
    { id: 'exploration-testing', label: 'Exploration & Testing' },
    { id: 'hauling-site-development', label: 'Hauling & Site Dev (40 Hyvas)' },
    { id: 'technical-laboratory', label: 'Technical & NABL Labs' }
  ];

  const filteredCategories = selectedCategory === 'all'
    ? EQUIPMENT_DATA
    : EQUIPMENT_DATA.filter(c => c.id === selectedCategory);

  return (
    <div className="pt-24 pb-20 bg-surface-50 text-slate-800 min-h-screen">
      {/* Hero Banner */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-navy-900 text-white shadow-md">
        <div className="max-w-7xl mx-auto">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-gold-400 block mb-1">
            FLEET & TECHNICAL CAPABILITY
          </span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
            BUILT FOR EXECUTION.
          </h1>
          <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-300 max-w-3xl leading-relaxed">
            Equipment, technical capability and industry partnerships supporting reliable, high-volume project delivery.
          </p>

          {/* Key Metric Strip (Clean White Cards) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 pt-6 border-t border-navy-800">
            <div className="p-3.5 rounded-xl bg-white text-navy-900 shadow-sm border border-slate-200">
              <span className="text-xl sm:text-2xl font-black text-gold-600 font-mono">
                {TOTAL_FLEET_METRICS.totalHyvas} Nos.
              </span>
              <div className="text-[11px] text-slate-600 font-bold mt-0.5">Tata Hyva Heavy Tippers</div>
            </div>
            <div className="p-3.5 rounded-xl bg-white text-navy-900 shadow-sm border border-slate-200">
              <span className="text-xl sm:text-2xl font-black text-navy-900 font-mono">
                {TOTAL_FLEET_METRICS.totalExcavators} Units
              </span>
              <div className="text-[11px] text-slate-600 font-bold mt-0.5">Hydraulic Excavators</div>
            </div>
            <div className="p-3.5 rounded-xl bg-white text-navy-900 shadow-sm border border-slate-200">
              <span className="text-xl sm:text-2xl font-black text-emerald-700 font-mono">
                {TOTAL_FLEET_METRICS.drillingDepthMax}
              </span>
              <div className="text-[11px] text-slate-600 font-bold mt-0.5">Core Exploration Depth</div>
            </div>
            <div className="p-3.5 rounded-xl bg-white text-navy-900 shadow-sm border border-slate-200">
              <span className="text-xl sm:text-2xl font-black text-navy-900 font-mono">
                {TOTAL_FLEET_METRICS.blastHoleDia}
              </span>
              <div className="text-[11px] text-slate-600 font-bold mt-0.5">DTH Diamond Blast Hole</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-200">
        <div className="flex flex-wrap items-center gap-2">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold tracking-wider transition-all ${
                selectedCategory === cat.id
                  ? 'bg-navy-900 text-gold-400 shadow-sm'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Equipment Categories Display */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        {filteredCategories.map(cat => (
          <div key={cat.id} className="space-y-4">
            <div className="border-b border-slate-200 pb-3">
              <span className="text-[10px] font-mono font-bold text-gold-600 uppercase">
                DIVISION ASSETS
              </span>
              <h2 className="text-xl font-black text-navy-900 mt-0.5">
                {cat.categoryTitle}
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                {cat.categorySubtitle} — {cat.description}
              </p>
            </div>

            {/* Equipment Items Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {cat.items.map(item => (
                <FleetCard key={item.id} item={item} categoryTitle={cat.categoryTitle} />
              ))}
            </div>

            {/* Division Capabilities list */}
            <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
              <h4 className="text-[10px] font-black text-navy-900 uppercase tracking-wider mb-2">
                Operational Capabilities in this Division:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                {cat.capabilities.map((c, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0 mt-0.5" />
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Mobilization CTA */}
        <div className="bg-navy-900 text-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-card-hover mt-8">
          <div>
            <h3 className="text-xl font-black text-white">
              Need Dedicated Equipment Mobilization?
            </h3>
            <p className="text-xs text-slate-300 mt-1 max-w-xl">
              Inquire about contract mining mobilization, tipper fleet deployment, or deep-core exploration drilling rigs for your mining block.
            </p>
          </div>
          <button
            onClick={onOpenEnquiry}
            className="px-6 py-3 rounded-lg bg-gold-500 hover:bg-gold-600 text-navy-950 text-xs font-black uppercase tracking-wider shadow-md shrink-0 transition-all"
          >
            Request Fleet Deployment →
          </button>
        </div>
      </section>
    </div>
  );
};
