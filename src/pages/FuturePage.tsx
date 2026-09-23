import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { FUTURE_STRATEGIC_AREAS, MINING_EASY_PLATFORM } from '../data/futureVision';
import { Hammer, Building2, Sun, TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react';

interface FuturePageProps {
  onNavigate: (path: string) => void;
  onOpenEnquiry: () => void;
}

export const FuturePage: React.FC<FuturePageProps> = ({ onNavigate, onOpenEnquiry }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Hammer': return <Hammer className="w-5 h-5 text-navy-900" />;
      case 'Building2': return <Building2 className="w-5 h-5 text-emerald-700" />;
      case 'Sun': return <Sun className="w-5 h-5 text-amber-600" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-gold-600" />;
      default: return null;
    }
  };

  return (
    <div className="pt-24 pb-20 bg-surface-50 text-slate-800 min-h-screen">
      {/* Hero */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-navy-900 text-white shadow-md">
        <div className="max-w-7xl mx-auto">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-gold-400 block mb-1">
            STRATEGIC ROADMAP
          </span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
            BUILDING THE FUTURE.
          </h1>
          <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-300 max-w-3xl leading-relaxed">
            Creating resilient, long-term corporate value across integrated mining, clean renewable solar power, strategic land infrastructure, and digital platforms.
          </p>
        </div>
      </section>

      {/* 4 Strategic Growth Areas (Clean White Cards) */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-200">
        <SectionHeading
          label="CORE HORIZONS"
          title="Four Strategic Pillars of Group Expansion"
          subtitle="A balanced approach combining heavy industrial capability with sustainable future-focused investments."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FUTURE_STRATEGIC_AREAS.map((area) => (
            <div
              key={area.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-card-subtle flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
                  <span className="text-[10px] font-mono font-bold text-gold-600 uppercase">
                    {area.vertical}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                    {getIcon(area.icon)}
                  </div>
                </div>

                <h3 className="text-lg font-black text-navy-900 mb-0.5">
                  {area.title}
                </h3>
                <p className="text-xs font-bold text-gold-600 mb-3">
                  {area.tagline}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {area.desc}
                </p>

                <div className="space-y-1.5 mb-4">
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-wider">
                    Strategic Action Items
                  </h4>
                  {area.bullets.map((b, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-400">Strategic Horizon</span>
                <button
                  onClick={onOpenEnquiry}
                  className="text-xs font-bold text-navy-900 hover:text-gold-600"
                >
                  Explore Joint Opportunities →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Concept Blueprint: VIJAYBHUMI MINING EASY PLATFORM */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-navy-900 text-white rounded-3xl p-8 lg:p-10 shadow-xl space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 border-b border-navy-800">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gold-500/20 text-gold-400 text-[10px] font-mono font-bold uppercase mb-1.5">
                <Sparkles className="w-3 h-3" />
                <span>DIGITAL INNOVATION INITIATIVE</span>
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white">
                {MINING_EASY_PLATFORM.name}
              </h2>
              <p className="text-xs sm:text-sm font-bold text-gold-400 mt-0.5">
                {MINING_EASY_PLATFORM.tagline}
              </p>
            </div>
            <span className="px-3 py-1 rounded-lg bg-navy-950 text-xs font-mono text-slate-300 border border-navy-800 shrink-0">
              {MINING_EASY_PLATFORM.status}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
            {MINING_EASY_PLATFORM.summary}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {MINING_EASY_PLATFORM.keyPillars.map((p, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-navy-950 border border-navy-800 space-y-1.5">
                <span className="text-[10px] font-mono font-bold text-gold-400">
                  PILLAR 0{idx + 1}
                </span>
                <h4 className="text-xs font-black text-white">
                  {p.title}
                </h4>
                <p className="text-[11px] text-slate-400 leading-snug">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300 italic">
            <strong>Important Blueprint Notice:</strong> {MINING_EASY_PLATFORM.note}
          </div>
        </div>
      </section>
    </div>
  );
};
