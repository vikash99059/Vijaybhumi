import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { Building2, Compass, Layers, CheckCircle2, ArrowRight, ShieldCheck, Clock } from 'lucide-react';

interface PropertiesBusinessPageProps {
  onNavigate: (path: string) => void;
  onOpenEnquiry: () => void;
}

export const PropertiesBusinessPage: React.FC<PropertiesBusinessPageProps> = ({ onNavigate, onOpenEnquiry }) => {
  return (
    <div className="pt-24 pb-20 bg-surface-50 text-slate-800 min-h-screen">
      {/* Hero Banner */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-navy-900 text-white shadow-md">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold uppercase mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>BUSINESS VERTICAL 02</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
            VIJAYBHUMI PROPERTIES<br />
            <span className="text-emerald-400">Developing Opportunities for the Future.</span>
          </h1>

          <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-300 max-w-3xl leading-relaxed">
            Real estate development, land acquisition, and strategic property-focused business initiatives across emerging growth corridors.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenEnquiry}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-black uppercase tracking-wider shadow-lg shadow-emerald-600/20 transition-all"
            >
              <span>SUBMIT PROPERTY ENQUIRY</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('/contact')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider border border-white/20 transition-colors"
            >
              <span>Connect with Land Desk</span>
            </button>
          </div>
        </div>
      </section>

      {/* 4 Core Focus Areas (Clean White Cards) */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-200">
        <SectionHeading
          label="STRATEGIC FOCUS"
          title="PROPERTY DEVELOPMENT & LAND INITIATIVES"
          subtitle="Structuring long-term asset value through disciplined land acquisition and sustainable infrastructure development."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Section: Property Development */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-card-subtle">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-black text-navy-900">PROPERTY DEVELOPMENT</h3>
                <span className="text-xs text-emerald-700 font-bold">Strategic Commercial & Mixed Use</span>
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Conceptualizing future-ready commercial and mixed-use spaces aligned with urban expansion trends and infrastructure growth nodes.
            </p>
            <div className="space-y-1.5 text-xs text-slate-700">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Commercial & administrative infrastructure planning</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Modern design and structural durability standards</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Sustainable building and utility integration</span>
              </div>
            </div>
          </div>

          {/* Section: Land Development */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-card-subtle">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-black text-navy-900">LAND DEVELOPMENT</h3>
                <span className="text-xs text-emerald-700 font-bold">Site Preparation & Earth Engineering</span>
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Leveraging Vijaybhumi’s core earthmoving equipment (graders, excavators, soil compactors) to convert raw acreage into leveled, engineered land parcels.
            </p>
            <div className="space-y-1.5 text-xs text-slate-700">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Topographical surveying and ground stabilization</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Internal access road construction and drainage channels</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Perimeter grading and secure boundary infrastructure</span>
              </div>
            </div>
          </div>

          {/* Section: Real Estate Opportunities */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-card-subtle">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-black text-navy-900">REAL ESTATE OPPORTUNITIES</h3>
                <span className="text-xs text-emerald-700 font-bold">Emerging Industrial & Logistics Nodes</span>
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Identifying high-growth regional hubs along highway corridors, freight corridors, and industrial belts for long-term property creation.
            </p>
            <div className="space-y-1.5 text-xs text-slate-700">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Logistics and warehousing hub development</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Industrial park and manufacturing cluster corridors</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Long-term capital appreciation and lease structuring</span>
              </div>
            </div>
          </div>

          {/* Section: Strategic Property Initiatives */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-card-subtle">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-black text-navy-900">STRATEGIC PROPERTY INITIATIVES</h3>
                <span className="text-xs text-emerald-700 font-bold">Land Title Diligence & Governance</span>
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Ensuring 100% statutory diligence, clear land title aggregation, and regulatory compliance under RERA and state land development authorities.
            </p>
            <div className="space-y-1.5 text-xs text-slate-700">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Rigorous revenue land title searches and clearance audits</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Environmental impact mitigation and green belt compliance</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Transparent partnership models with landholders</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Upcoming Developments (Clean Empty State) */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-200">
        <SectionHeading
          label="PORTFOLIO DISCLOSURE"
          title="UPCOMING DEVELOPMENTS"
        />

        <div className="bg-white rounded-2xl p-8 text-center border border-slate-200 max-w-2xl mx-auto space-y-3 shadow-sm">
          <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto">
            <Clock className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-black text-navy-900">
            Information Coming Soon
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
            Detailed property portfolio coming soon. All upcoming commercial and industrial land initiatives will be showcased here upon receiving statutory clearances.
          </p>
        </div>
      </section>

      {/* Property Enquiry Banner */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-navy-900 text-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-card-hover">
          <div>
            <span className="text-[10px] font-mono font-bold text-gold-400 uppercase tracking-widest block mb-1">
              CONNECT WITH REAL ESTATE DESK
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Have a Land Parcel or Development Opportunity?
            </h3>
            <p className="text-xs text-slate-300 mt-1 max-w-lg">
              Connect with the Vijaybhumi Properties corporate team for strategic land partnerships, joint development, or commercial infrastructure proposals.
            </p>
          </div>
          <button
            onClick={onOpenEnquiry}
            className="px-6 py-3 rounded-lg bg-gold-500 hover:bg-gold-600 text-navy-950 text-xs font-black uppercase tracking-wider shrink-0 shadow-md"
          >
            Initiate Property Enquiry →
          </button>
        </div>
      </section>
    </div>
  );
};
