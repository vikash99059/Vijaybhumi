import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { NetworkDiagram } from '../components/NetworkDiagram';
import { VERIFIED_PARTNERS } from '../data/partners';
import { ShieldCheck } from 'lucide-react';

interface PartnersPageProps {
  onNavigate: (path: string) => void;
  onOpenEnquiry: () => void;
}

export const PartnersPage: React.FC<PartnersPageProps> = ({ onNavigate, onOpenEnquiry }) => {
  return (
    <div className="pt-24 pb-20 bg-surface-50 text-slate-800 min-h-screen">
      {/* Hero */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-navy-900 text-white shadow-md">
        <div className="max-w-7xl mx-auto">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-gold-400 block mb-1">
            STRATEGIC ECOSYSTEM
          </span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
            PARTNERS & STRATEGIC ALLIANCES.
          </h1>
          <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-300 max-w-3xl leading-relaxed">
            Collaborating with leading mining engineering consultancies, NABL-accredited analytical laboratories, OEM vendors, and premier civil infrastructure associates.
          </p>
        </div>
      </section>

      {/* Network Stats & Interactive Node Diagram */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-200">
        <NetworkDiagram />
      </section>

      {/* Verified Partner Profiles (Clean White Cards) */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
        <SectionHeading
          label="VERIFIED ASSOCIATES"
          title="Industry Partners & Technical Collaborators"
          subtitle="Key organizations partnering with Vijaybhumi Group across geology, engineering, sample analysis, and earthwork execution."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {VERIFIED_PARTNERS.map((partner) => (
            <div
              key={partner.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-card-subtle flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
                  <span className="px-2 py-0.5 rounded bg-slate-100 text-navy-900 text-[10px] font-mono font-bold uppercase">
                    {partner.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-emerald-700 font-bold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified Partnership
                  </span>
                </div>

                <h3 className="text-base font-black text-navy-900 mb-0.5">
                  {partner.name}
                </h3>
                <p className="text-xs font-bold text-gold-600 mb-2">
                  {partner.role}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {partner.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Location: <strong className="text-slate-800">{partner.location}</strong></span>
                <span className="text-navy-900 font-bold">Collaborative Delivery</span>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Proposal CTA */}
        <div className="bg-navy-900 text-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-card-hover">
          <div>
            <h3 className="text-xl font-black text-white">
              Explore Strategic Alliance or Vendor Onboarding
            </h3>
            <p className="text-xs text-slate-300 mt-1 max-w-xl">
              We welcome partnerships with mining leaseholders, geological consultancies, NABL testing labs, and equipment vendors.
            </p>
          </div>
          <button
            onClick={onOpenEnquiry}
            className="px-6 py-3 rounded-lg bg-gold-500 hover:bg-gold-600 text-navy-950 text-xs font-black uppercase tracking-wider shadow-md shrink-0 transition-all"
          >
            Initiate Partnership Discussion →
          </button>
        </div>
      </section>
    </div>
  );
};
