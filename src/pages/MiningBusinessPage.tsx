import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { MiningLifecycle } from '../components/MiningLifecycle';
import { FleetCard } from '../components/FleetCard';
import { MINING_SERVICES, BUSINESS_MODELS } from '../data/services';
import { CheckCircle2, ArrowRight, ArrowUpRight } from 'lucide-react';

interface MiningBusinessPageProps {
  onNavigate: (path: string) => void;
  onOpenEnquiry: () => void;
}

export const MiningBusinessPage: React.FC<MiningBusinessPageProps> = ({ onNavigate, onOpenEnquiry }) => {
  const [activeModelId, setActiveModelId] = useState<string>('contract-mining');
  const activeModel = BUSINESS_MODELS.find(m => m.id === activeModelId) || BUSINESS_MODELS[0];

  return (
    <div className="pt-24 pb-20 bg-surface-50 text-slate-800 min-h-screen">
      {/* Mining Vertical Hero (Deep Navy #0B1B3D) */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-navy-900 text-white shadow-md">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-gold-500/20 text-gold-400 text-[10px] font-mono font-bold uppercase mb-3">
            <span>BUSINESS VERTICAL 01 • CORE MINING OPERATIONS</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
            FROM DEPTH TO DESTINATION.<br />
            <span className="text-gold-400">WE DELIVER.</span>
          </h1>

          <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-300 max-w-3xl leading-relaxed">
            End-to-end mining solutions across exploration, mine development, production, processing, transportation and allied technical services.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenEnquiry}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gold-500 hover:bg-gold-600 text-navy-950 text-xs font-black uppercase tracking-wider shadow-lg shadow-gold-500/20 transition-all"
            >
              <span>REQUEST MINING PROPOSAL</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('/operational-strength')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider border border-white/20 transition-colors"
            >
              <span>Inspect Mining Fleet (40 Hyvas)</span>
            </button>
          </div>

          <div className="mt-8 pt-5 border-t border-navy-800 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-slate-300">
            <div>
              <span className="text-slate-400 block text-[9px] uppercase">Core Entity</span>
              <strong className="text-white font-bold">Vijaybhumi Mining & Allied Ventures</strong>
            </div>
            <div>
              <span className="text-slate-400 block text-[9px] uppercase">Hauling Fleet</span>
              <strong className="text-gold-400 font-bold">40 Dedicated Tata Hyvas</strong>
            </div>
            <div>
              <span className="text-slate-400 block text-[9px] uppercase">Exploration Depth</span>
              <strong className="text-gold-400 font-bold">500–650 Metres Core Drill</strong>
            </div>
            <div>
              <span className="text-slate-400 block text-[9px] uppercase">Blast Hole Dia</span>
              <strong className="text-emerald-400 font-bold">150mm DTH Diamond Drills</strong>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Primary Mining Service Groups (Clean White Cards) */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-200">
        <SectionHeading
          label="COMPREHENSIVE SERVICES"
          title="OUR MINING SERVICES"
          subtitle="Four core service divisions covering the complete extraction and mineral handling lifecycle."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {MINING_SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-gold-400 hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between shadow-card-subtle"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
                  <span className="text-xs font-mono font-bold text-navy-900 uppercase">
                    SERVICE {service.number}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-gold-700">
                    Turnkey Scope
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-black text-navy-900 mb-1">
                  {service.title}
                </h3>
                <p className="text-xs font-bold text-gold-600 mb-3">
                  {service.subtitle}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {service.fullDesc}
                </p>

                {/* Offerings List */}
                <div className="mb-4">
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-2">
                    Scope of Activities
                  </h4>
                  <div className="space-y-1.5 text-xs text-slate-700">
                    {service.offerings.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Equipment Involved */}
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 mb-3">
                  <div className="text-[10px] font-bold text-navy-900 uppercase tracking-wider mb-1">
                    Fleet & Technical Assets Deployed
                  </div>
                  <ul className="text-xs text-slate-600 space-y-0.5">
                    {service.equipmentInvolved.map((eq, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="text-gold-600 font-bold">•</span>
                        <span>{eq}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onNavigate(service.slug)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-navy-900 hover:text-gold-600 transition-colors"
                >
                  <span>Detailed Technical Breakdown →</span>
                </button>
                <button
                  onClick={onOpenEnquiry}
                  className="text-xs font-semibold text-slate-500 hover:text-navy-900 transition-colors"
                >
                  Request Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Mining Lifecycle */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-200">
        <MiningLifecycle onNavigateService={(slug) => onNavigate(slug)} />
      </section>

      {/* Mining Business Models (HOW WE WORK) */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-200">
        <SectionHeading
          label="BUSINESS ENGAGEMENT"
          title="HOW WE WORK"
          subtitle="Contract Mining, MDO, EPC, and Turnkey commercial frameworks designed for transparency and operational excellence."
        />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6">
          {BUSINESS_MODELS.map((model) => {
            const isSelected = model.id === activeModelId;
            return (
              <button
                key={model.id}
                onClick={() => setActiveModelId(model.id)}
                className={`p-3.5 rounded-xl border text-left transition-all ${
                  isSelected
                    ? 'bg-navy-900 text-gold-400 border-navy-900 shadow-md font-bold'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-gold-400'
                }`}
              >
                <div className="text-[9px] font-mono uppercase tracking-wider mb-0.5 opacity-80">
                  MODEL
                </div>
                <div className="text-xs font-bold">
                  {model.name}
                </div>
              </button>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl p-6 lg:p-7 border border-slate-200 shadow-card-hover">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100 mb-3">
            <div>
              <h3 className="text-lg sm:text-xl font-black text-navy-900">{activeModel.title}</h3>
              <p className="text-xs font-bold text-gold-600 mt-0.5">{activeModel.tagline}</p>
            </div>
            <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-xs font-mono font-bold text-navy-900 border border-slate-200">
              Verified Model
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
            {activeModel.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 border-t border-slate-100">
            <div>
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-2">Scope of Activities</h4>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {activeModel.scope.map((s, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0 mt-0.5" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-2">Client Advantages</h4>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {activeModel.keyHighlights.map((k, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                    <span>{k}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mining Fleet Highlights */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <SectionHeading
              label="MINING ASSETS"
              title="Verified Mining Fleet."
              subtitle="Specialized earthmoving machinery and hauling tippers owned and deployed by Vijaybhumi."
            />
          </div>
          <button
            onClick={() => onNavigate('/operational-strength')}
            className="text-xs font-bold text-navy-900 hover:text-gold-600 uppercase tracking-wider"
          >
            View Full Equipment Directory →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <FleetCard
            item={{
              id: 'tata-hyva-40',
              name: 'Tata Hyva Heavy Tippers',
              quantity: '40 Nos.',
              units: 40,
              specs: 'High-payload tippers for continuous mineral dispatch',
              application: 'Pit-to-siding mineral hauling & site mobilization',
              badge: 'Dedicated Fleet'
            }}
            categoryTitle="Hauling & Logistics"
          />
          <FleetCard
            item={{
              id: 'sany-215',
              name: 'SANY 215 Excavators',
              quantity: '4 Nos.',
              units: 4,
              specs: '21.5 Ton class high-performance excavators',
              application: 'Face loading and overburden removal',
              badge: 'Extraction'
            }}
            categoryTitle="Earthmoving & Excavation"
          />
          <FleetCard
            item={{
              id: 'dth-drill',
              name: 'DTH Diamond Drill Machines',
              quantity: '3 Units',
              units: 3,
              specs: '150 mm Diameter blast hole drilling',
              application: 'Production blast hole drilling in hard strata',
              badge: '150mm Blast Hole'
            }}
            categoryTitle="Drilling & Blasting"
          />
          <FleetCard
            item={{
              id: 'adv-drill-rig',
              name: 'Advanced Exploration Drill',
              quantity: 'Active Unit',
              units: 1,
              specs: 'Wireline core drilling up to 500–650m depth',
              application: 'Deep stratigraphy and mineral strike logging',
              badge: '500–650m Depth'
            }}
            categoryTitle="Exploration"
          />
        </div>
      </section>

    </div>
  );
};
