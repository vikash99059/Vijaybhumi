import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { Layers, Clock, ArrowRight } from 'lucide-react';

interface MiningLimitedPageProps {
  onNavigate: (path: string) => void;
  onOpenEnquiry: () => void;
}

export const MiningLimitedPage: React.FC<MiningLimitedPageProps> = ({ onNavigate, onOpenEnquiry }) => {
  return (
    <div className="pt-24 pb-20 bg-surface-50 text-slate-800 min-h-screen">
      {/* Hero */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-navy-900 text-white shadow-md">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-orange-600/20 text-orange-400 text-[10px] font-mono font-bold uppercase mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>BUSINESS VERTICAL 04</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
            VIJAYBHUMI MINING LIMITED<br />
            <span className="text-orange-400">Dedicated Corporate Mining Business.</span>
          </h1>

          <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-300 max-w-3xl leading-relaxed">
            A dedicated Vijaybhumi mining business vertical established for structured institutional mining operations, joint venture concession management, and scalable mineral initiatives.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenEnquiry}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-orange-600 hover:bg-orange-500 text-white text-xs font-black uppercase tracking-wider shadow-lg shadow-orange-600/20 transition-all"
            >
              <span>SUBMIT CORPORATE ENQUIRY</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('/business/mining')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider border border-white/20 transition-colors"
            >
              <span>View Mining & Allied Ventures</span>
            </button>
          </div>
        </div>
      </section>

      {/* Overview & Architecture (Clean White Cards) */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-200">
        <SectionHeading
          label="VERTICAL ARCHITECTURE"
          title="Overview & Strategic Scope"
          subtitle="Positioned for institutional project execution and multi-state concession partnerships."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-sm font-black text-navy-900 mb-1.5">Dedicated Governance</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Autonomous corporate governance structure focused on large-scale mining concession bids, institutional alliances, and compliance.
            </p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-sm font-black text-navy-900 mb-1.5">Technical Capabilities</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Leverages the Group's unified engineering, drilling, deep-core exploration, and 40-unit Hyva transportation logistics network.
            </p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-sm font-black text-navy-900 mb-1.5">Operations & Infrastructure</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Designed for turnkey MDO, EPC development of mineral processing facilities, and bulk coal/mineral evacuation.
            </p>
          </div>
        </div>

        {/* Corporate Status Note */}
        <div className="bg-white rounded-2xl p-8 text-center border border-slate-200 max-w-2xl mx-auto space-y-3 shadow-sm">
          <div className="w-12 h-12 rounded-full bg-orange-50 text-orange-600 border border-orange-200 flex items-center justify-center mx-auto">
            <Clock className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-black text-navy-900">
            Corporate Information Coming Soon
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
            Detailed corporate filings and dedicated operational concessions for Vijaybhumi Mining Limited will be published in accordance with official documentation and regulatory timelines.
          </p>
        </div>
      </section>
    </div>
  );
};
