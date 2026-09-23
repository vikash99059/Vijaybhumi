import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { COMPANY_DETAILS } from '../data/company';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (path: string) => void;
  onOpenEnquiry: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenEnquiry }) => {
  return (
    <div className="pt-24 pb-20 bg-surface-50 text-slate-800 min-h-screen">
      {/* Hero Banner (Deep Navy #0B1B3D from reference) */}
      <section className="relative py-14 px-4 sm:px-6 lg:px-8 bg-navy-900 text-white shadow-md">
        <div className="max-w-7xl mx-auto">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-gold-400 block mb-1">
            ABOUT VIJAYBHUMI GROUP
          </span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
            ONE GROUP. MULTIPLE CAPABILITIES.<br />
            <span className="text-gold-400">LONG-TERM VISION.</span>
          </h1>
          <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-300 max-w-3xl leading-relaxed">
            Vijaybhumi is building a diversified corporate business platform across mining, properties, renewable energy and strategic ventures.
          </p>
        </div>
      </section>

      {/* Corporate Overview & Foundation */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-4">
            <SectionHeading
              label="OUR FOUNDATION"
              title="Built on Operational Strength &"
              highlight="Technical Excellence."
            />
            <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <p>
                Headquartered in Ranchi, Jharkhand — the mineral heartland of India — Vijaybhumi Group originated with deep operational capability in open-cast mining, heavy earthmoving, diamond blast-hole drilling, and mineral transportation.
              </p>
              <p>
                Through Vijaybhumi Mining & Allied Ventures Pvt. Ltd., the group established end-to-end capabilities spanning mineral exploration (drilling up to 500–650 metres), mine planning, box-cut excavation, crushing & screening, and comprehensive logistics powered by a dedicated 40-unit Tata Hyva tipper fleet.
              </p>
              <p>
                Today, Vijaybhumi operates as a unified group, leveraging our engineering execution platform to expand into sustainable real estate development, solar renewable energy projects, dedicated corporate mining ventures, and cultural e-marketplaces.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-card-hover space-y-3">
              <h3 className="text-sm font-black text-navy-900 border-b border-slate-100 pb-2.5 uppercase tracking-wider">
                Corporate Facts & Structure
              </h3>
              <div className="space-y-2.5 text-xs text-slate-700">
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Master Brand:</span>
                  <span className="font-bold text-navy-900">{COMPANY_DETAILS.brandName}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Primary Mining Entity:</span>
                  <span className="font-bold text-gold-600 text-right">{COMPANY_DETAILS.primaryMiningEntity}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Registered Office:</span>
                  <span className="font-medium text-right text-slate-800">Ranchi, Jharkhand, India</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Core Verticals:</span>
                  <span className="font-bold text-right text-navy-900">5 Strategic Verticals</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Industry Alliances:</span>
                  <span className="font-bold text-right text-emerald-700">25+ Mining & Allied Co.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section id="vision-mission" className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-200">
        <SectionHeading
          label="PURPOSE & DIRECTION"
          title="Corporate Vision &"
          highlight="Mission Pillars."
        />

        <div className="bg-navy-900 rounded-2xl p-6 lg:p-8 text-white border-l-4 border-gold-500 mb-8 shadow-md">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-gold-400 block mb-1.5">
            OFFICIAL VISION STATEMENT
          </span>
          <blockquote className="text-base sm:text-lg font-bold text-white leading-relaxed">
            “{COMPANY_DETAILS.vision}”
          </blockquote>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {COMPANY_DETAILS.missionPillars.map((p) => (
            <div key={p.number} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
              <span className="text-xl font-mono font-black text-gold-600 mb-2 block">
                {p.number}
              </span>
              <h3 className="text-sm font-black text-navy-900 mb-1.5">{p.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section id="core-values" className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-200">
        <SectionHeading
          label="ETHICAL FOUNDATION"
          title="Our Core Values."
          subtitle="Four fundamental principles embedded across every contract and operational site."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {COMPANY_DETAILS.coreValues.map((v) => (
            <div key={v.number} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
              <span className="text-xl font-mono font-black text-navy-900 mb-1.5 block">{v.number}</span>
              <h3 className="text-sm font-black text-navy-900">{v.title}</h3>
              <p className="text-xs font-bold text-gold-600 mt-0.5 mb-1.5">{v.tagline}</p>
              <p className="text-xs text-slate-600 leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading
          label="OUR ADVANTAGE"
          title="Why Choose Vijaybhumi Group?"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {COMPANY_DETAILS.whyChooseUs.map((w, idx) => (
            <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-full bg-gold-100 text-navy-900 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-4 h-4 text-gold-600" />
              </div>
              <div>
                <h3 className="text-sm font-black text-navy-900 mb-1">{w.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{w.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={onOpenEnquiry}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-navy-900 hover:bg-navy-800 text-gold-400 text-xs font-black uppercase tracking-wider shadow-md transition-all"
          >
            <span>DISCUSS PROJECT REQUIREMENTS</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
