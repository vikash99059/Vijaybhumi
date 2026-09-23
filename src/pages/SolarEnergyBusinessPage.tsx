import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { Sun, Zap, TrendingUp, CheckCircle2, ArrowRight, Clock, BatteryCharging } from 'lucide-react';

interface SolarEnergyBusinessPageProps {
  onNavigate: (path: string) => void;
  onOpenEnquiry: () => void;
}

export const SolarEnergyBusinessPage: React.FC<SolarEnergyBusinessPageProps> = ({ onNavigate, onOpenEnquiry }) => {
  return (
    <div className="pt-24 pb-20 bg-surface-50 text-slate-800 min-h-screen">
      {/* Hero Banner */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-navy-900 text-white shadow-md">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-amber-500/20 text-amber-400 text-[10px] font-mono font-bold uppercase mb-3">
            <Sun className="w-3.5 h-3.5" />
            <span>BUSINESS VERTICAL 03</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
            VIJAYBHUMI SOLAR ENERGY<br />
            <span className="text-amber-400">Building a Sustainable Future Through Solar Energy.</span>
          </h1>

          <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-300 max-w-3xl leading-relaxed">
            Building a sustainable future through solar energy, renewable power projects, clean industrial infrastructure, and strategic clean-tech investments.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenEnquiry}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gold-500 hover:bg-gold-600 text-navy-950 text-xs font-black uppercase tracking-wider shadow-lg shadow-gold-500/20 transition-all"
            >
              <span>SUBMIT ENERGY ENQUIRY</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('/contact')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider border border-white/20 transition-colors"
            >
              <span>Connect with Energy Desk</span>
            </button>
          </div>
        </div>
      </section>

      {/* 4 Core Focus Areas (Clean White Cards) */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-200">
        <SectionHeading
          label="CLEAN POWER FOCUS"
          title="RENEWABLE ENERGY & SUSTAINABLE INFRASTRUCTURE"
          subtitle="Aligning industrial execution capabilities with clean energy transition frameworks across India."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Section: Solar Energy */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-card-subtle">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center">
                <Sun className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-black text-navy-900">SOLAR ENERGY</h3>
                <span className="text-xs text-amber-600 font-bold">Utility-Scale & Ground Mounted</span>
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Structuring ground-mounted solar energy projects on suitable terrain with high solar insolation and grid evacuation feasibility.
            </p>
            <div className="space-y-1.5 text-xs text-slate-700">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                <span>Solar radiation assessment and site irradiation studies</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                <span>Topographical land grading using our mechanized earth fleet</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                <span>Substation and grid evacuation feasibility diligence</span>
              </div>
            </div>
          </div>

          {/* Section: Renewable Projects */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-card-subtle">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-black text-navy-900">RENEWABLE PROJECTS</h3>
                <span className="text-xs text-amber-600 font-bold">Captive Industrial Solar Power</span>
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Designing captive solar solutions for heavy industrial consumers, mining processing plants, and commercial complexes to offset fossil fuels.
            </p>
            <div className="space-y-1.5 text-xs text-slate-700">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                <span>Captive power modeling for mining and processing hubs</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                <span>Carbon footprint reduction and green energy certificates</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                <span>Peak load shaving and long-term energy cost optimization</span>
              </div>
            </div>
          </div>

          {/* Section: Sustainable Infrastructure */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-card-subtle">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center">
                <BatteryCharging className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-black text-navy-900">SUSTAINABLE INFRASTRUCTURE</h3>
                <span className="text-xs text-amber-600 font-bold">Green Mining & Clean Power Integration</span>
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Integrating clean energy into group industrial hubs, workshops, and transit infrastructure to drive progressive decarbonization.
            </p>
            <div className="space-y-1.5 text-xs text-slate-700">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                <span>Solar-powered site lighting and auxiliary systems</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                <span>Hybrid energy storage planning for remote operations</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                <span>Zero-emission auxiliary infrastructure support</span>
              </div>
            </div>
          </div>

          {/* Section: Strategic Energy Investments */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-card-subtle">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-black text-navy-900">STRATEGIC ENERGY INVESTMENTS</h3>
                <span className="text-xs text-amber-600 font-bold">Long-Term Clean Tech Alliances</span>
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Deploying corporate resources and joint venture equity with institutional renewable developers to scale clean energy capacity.
            </p>
            <div className="space-y-1.5 text-xs text-slate-700">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                <span>Joint venture partnerships with certified EPC developers</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                <span>Land lease aggregation for solar park developers</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                <span>Long-term Power Purchase Agreement (PPA) evaluation</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Future Projects (Clean Empty State) */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-200">
        <SectionHeading
          label="PIPELINE STATUS"
          title="FUTURE PROJECTS"
        />

        <div className="bg-white rounded-2xl p-8 text-center border border-slate-200 max-w-2xl mx-auto space-y-3 shadow-sm">
          <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-600 border border-amber-200 flex items-center justify-center mx-auto">
            <Clock className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-black text-navy-900">
            Information Coming Soon
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
            Detailed solar project portfolio and MW generation statistics will be officially published as project installations reach statutory grid interconnection milestones.
          </p>
        </div>
      </section>

      {/* Energy Enquiry Banner */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-navy-900 text-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-card-hover">
          <div>
            <span className="text-[10px] font-mono font-bold text-gold-400 uppercase tracking-widest block mb-1">
              CONNECT WITH RENEWABLES DESK
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Explore Solar Power & Clean Energy Partnerships
            </h3>
            <p className="text-xs text-slate-300 mt-1 max-w-lg">
              Connect with the Vijaybhumi Solar Energy team for industrial rooftop installations, solar land leasing, or green energy joint ventures.
            </p>
          </div>
          <button
            onClick={onOpenEnquiry}
            className="px-6 py-3 rounded-lg bg-gold-500 hover:bg-gold-600 text-navy-950 text-xs font-black uppercase tracking-wider shrink-0 shadow-md"
          >
            Initiate Energy Enquiry →
          </button>
        </div>
      </section>
    </div>
  );
};
