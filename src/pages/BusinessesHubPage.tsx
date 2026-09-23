import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { BUSINESS_VERTICALS } from '../data/businesses';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface BusinessesHubPageProps {
  onNavigate: (path: string) => void;
  onOpenEnquiry: () => void;
}

export const BusinessesHubPage: React.FC<BusinessesHubPageProps> = ({ onNavigate, onOpenEnquiry }) => {
  return (
    <div className="pt-24 pb-20 bg-surface-50 text-slate-800 min-h-screen">
      {/* Banner */}
      <section className="relative py-14 px-4 sm:px-6 lg:px-8 bg-navy-900 text-white shadow-md">
        <div className="max-w-7xl mx-auto">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-gold-400 block mb-1">
            CORPORATE ARCHITECTURE
          </span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
            OUR BUSINESSES &<br />
            <span className="text-gold-400">STRATEGIC VERTICALS.</span>
          </h1>
          <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-300 max-w-3xl leading-relaxed">
            Building capabilities across industries. Creating long-term value. Every vertical functions under the unified corporate governance and execution standards of Vijaybhumi Group.
          </p>
        </div>
      </section>

      {/* Verticals List */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
        {BUSINESS_VERTICALS.map((vertical) => (
          <div
            key={vertical.id}
            className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-gold-400 hover:shadow-card-hover transition-all duration-300 shadow-card-subtle"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Image side */}
              <div className="lg:col-span-5 relative min-h-[240px]">
                <img
                  src={vertical.heroImage}
                  alt={vertical.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-0.5 rounded bg-navy-900 text-xs font-mono font-bold text-gold-400">
                    VERTICAL {vertical.number}
                  </span>
                </div>
              </div>

              {/* Content side */}
              <div className="lg:col-span-7 p-6 lg:p-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider bg-navy-900 text-gold-400">
                      {vertical.category}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      Status: <strong className="text-navy-900">{vertical.status}</strong>
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-black text-navy-900">
                    {vertical.name}
                  </h2>
                  <p className="text-xs font-bold text-gold-600 mt-0.5 mb-3">
                    “{vertical.tagline}”
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {vertical.fullDescription}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-2">
                      Key Capabilities & Focus
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                      {vertical.capabilities.map((c, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0 mt-0.5" />
                          <span>{c}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {vertical.legalNote && (
                    <div className="p-2.5 rounded bg-amber-50 text-[11px] text-amber-800 font-medium border-l-2 border-amber-500 mb-4">
                      {vertical.legalNote}
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                  <button
                    onClick={() => onNavigate(vertical.slug)}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-navy-900 hover:bg-navy-800 text-gold-400 text-xs font-black uppercase tracking-wider shadow-sm transition-all"
                  >
                    <span>{vertical.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={onOpenEnquiry}
                    className="text-xs font-bold text-navy-900 hover:text-gold-600 transition-colors"
                  >
                    Submit Business Enquiry →
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
