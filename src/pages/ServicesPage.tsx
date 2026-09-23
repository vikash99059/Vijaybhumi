import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { MINING_SERVICES } from '../data/services';
import { CheckCircle2, ArrowRight, ArrowUpRight, Compass, Drill, Truck, ShieldCheck } from 'lucide-react';

interface ServicesPageProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenEnquiry: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ currentPath, onNavigate, onOpenEnquiry }) => {
  const activeService = MINING_SERVICES.find(s => s.slug === currentPath);

  const getIcon = (id: string) => {
    switch (id) {
      case 'mining-exploration': return <Compass className="w-5 h-5 text-navy-900" />;
      case 'drilling-mineral-processing': return <Drill className="w-5 h-5 text-navy-900" />;
      case 'logistics-mdo': return <Truck className="w-5 h-5 text-navy-900" />;
      case 'allied-technical': return <ShieldCheck className="w-5 h-5 text-navy-900" />;
      default: return null;
    }
  };

  return (
    <div className="pt-24 pb-20 bg-surface-50 text-slate-800 min-h-screen">
      {/* Banner */}
      <section className="relative py-14 px-4 sm:px-6 lg:px-8 bg-navy-900 text-white shadow-md">
        <div className="max-w-7xl mx-auto">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-gold-400 block mb-1">
            TECHNICAL CAPABILITIES
          </span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
            {activeService ? activeService.title : 'OUR MINING SERVICES'}
          </h1>
          <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-300 max-w-3xl leading-relaxed">
            {activeService
              ? activeService.subtitle
              : 'End-to-end solutions across exploration drilling, geological modeling, blast-hole drilling, heavy excavation, mineral processing, and dispatch logistics.'}
          </p>
        </div>
      </section>

      {/* If specific service view */}
      {activeService ? (
        <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
          {/* Service Detail Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-gold-100 text-navy-900 text-[10px] font-mono font-bold">
                DIVISION {activeService.number} OF 04
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-navy-900">
                {activeService.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {activeService.fullDesc}
              </p>

              <div className="pt-3">
                <button
                  onClick={onOpenEnquiry}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gold-500 hover:bg-gold-600 text-navy-950 text-xs font-black uppercase tracking-wider shadow-md transition-all"
                >
                  <span>REQUEST QUOTE FOR THIS SERVICE</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-slate-200 shadow-md">
                <img
                  src={activeService.image}
                  alt={activeService.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Scope & Benefits Breakdown (Clean White Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-slate-200">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-card-subtle">
              <h3 className="text-base font-black text-navy-900 mb-3">
                Comprehensive Scope of Activities
              </h3>
              <div className="space-y-2 text-xs text-slate-700">
                {activeService.offerings.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-card-subtle">
              <h3 className="text-base font-black text-navy-900 mb-3">
                Operational Advantages & Equipment
              </h3>
              <div className="space-y-3">
                <div>
                  <h4 className="text-[10px] font-black text-slate-400 uppercase mb-1.5">Key Operational Benefits</h4>
                  <ul className="space-y-1 text-xs text-slate-700">
                    {activeService.operationalBenefits.map((b, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="text-emerald-700 font-bold">✓</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-2 border-t border-slate-100">
                  <h4 className="text-[10px] font-black text-slate-400 uppercase mb-1.5">Fleet & Instruments Deployed</h4>
                  <ul className="space-y-0.5 text-xs text-slate-700">
                    {activeService.equipmentInvolved.map((eq, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="text-gold-600 font-bold">•</span>
                        <span>{eq}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Other Services Navigation */}
          <div className="pt-6 border-t border-slate-200">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider mb-3">
              Explore Other Mining Divisions
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {MINING_SERVICES.filter(s => s.id !== activeService.id).map(other => (
                <button
                  key={other.id}
                  onClick={() => onNavigate(other.slug)}
                  className="p-3.5 rounded-xl bg-white border border-slate-200 text-left hover:border-gold-400 shadow-sm transition-colors"
                >
                  <span className="text-[10px] font-mono text-gold-600 font-bold">SERVICE {other.number}</span>
                  <div className="text-xs font-black text-navy-900 mt-0.5">{other.title}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">{other.subtitle}</div>
                </button>
              ))}
            </div>
          </div>
        </section>
      ) : (
        /* All Services Overview Grid */
        <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
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
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                      {getIcon(service.id)}
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-navy-900 mb-0.5">
                    {service.title}
                  </h3>
                  <p className="text-[11px] font-bold text-gold-600 mb-2">
                    {service.subtitle}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    {service.shortDesc}
                  </p>

                  <div className="space-y-1.5 mb-4">
                    {service.offerings.slice(0, 4).map((off, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0 mt-0.5" />
                        <span>{off}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => onNavigate(service.slug)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-navy-900 hover:text-gold-600 transition-colors"
                  >
                    <span>View Technical Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
      )}
    </div>
  );
};
