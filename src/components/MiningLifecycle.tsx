import React, { useState } from 'react';
import { Compass, Hammer, Drill, Factory, Truck, CheckCircle, ArrowRight } from 'lucide-react';

interface MiningLifecycleProps {
  onNavigateService?: (slug: string) => void;
}

export const MiningLifecycle: React.FC<MiningLifecycleProps> = ({ onNavigateService }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      id: 'exploration',
      stepNum: '01',
      title: 'Exploration & Geological Assessment',
      icon: <Compass className="w-5 h-5" />,
      tagline: 'Deep wireline core drilling up to 500–650m & geological modeling',
      desc: 'Scientific exploration to map stratigraphic boundaries, estimate mineral reserves, and calculate stripping ratios with verified NABL laboratory sample assays.',
      deliverables: [
        'Exploration drilling up to 500–650 metres',
        'Geological core logging & RQD evaluation',
        'DGPS & Total Station topographical surveying',
        'Bankable feasibility reports & 3D pit design'
      ],
      slug: '/services/mining-exploration'
    },
    {
      id: 'development',
      stepNum: '02',
      title: 'Mine Development & Infrastructure',
      icon: <Hammer className="w-5 h-5" />,
      tagline: 'Box-cut excavation, haul road engineering & civil site preparation',
      desc: 'Initial site preparation, statutory boundary fencing, drainage channel construction, and box-cut excavation to expose the target mineral body.',
      deliverables: [
        'Site preparation, clearing & grubbing',
        'Engineered all-weather heavy-haul road networks',
        'Box-cut excavation with hydraulic excavators',
        'Sediment ponds and environmental barriers'
      ],
      slug: '/services/mining-exploration'
    },
    {
      id: 'production',
      stepNum: '03',
      title: 'Production, Drilling & Excavation',
      icon: <Drill className="w-5 h-5" />,
      tagline: '150mm DTH blast hole drilling, overburden stripping & extraction',
      desc: 'High-productivity open-cast extraction combining precision 150mm DTH diamond drilling, controlled blasting, and heavy hydraulic excavator loading.',
      deliverables: [
        'DTH diamond blast-hole drilling (150 mm diameter)',
        'Controlled blasting & uniform fragmentation',
        'Tata Hitachi 300 & SANY 215 excavator extraction',
        'Continuous overburden stripping & dump management'
      ],
      slug: '/services/drilling-mineral-processing'
    },
    {
      id: 'processing',
      stepNum: '04',
      title: 'Crushing, Screening & Mineral Processing',
      icon: <Factory className="w-5 h-5" />,
      tagline: 'Crushing to calibrated sizes & rigorous grade segregation',
      desc: 'Transforming raw in-situ ore into market-specified fractions with mobile crushing units, vibratory screening plants, and strict quality control.',
      deliverables: [
        'Primary, secondary and tertiary crushing circuits',
        'Vibratory sizing and fraction segregation',
        'Stockyard grade separation and sampling',
        'Wheel loader feed and dispatch staging'
      ],
      slug: '/services/drilling-mineral-processing'
    },
    {
      id: 'transportation',
      stepNum: '05',
      title: 'Logistics, Hauling & Destination Dispatch',
      icon: <Truck className="w-5 h-5" />,
      tagline: '40 dedicated Tata Hyva tippers for pit-to-siding mineral dispatch',
      desc: 'Ensuring seamless mineral evacuation with our massive 40-unit Tata Hyva fleet, road grading maintenance, water suppression, and rail siding management.',
      deliverables: [
        '40 dedicated Tata Hyva heavy tippers in operation',
        'Continuous dust suppression via heavy water tanker',
        'Motor grader & soil compactor haul road upkeep',
        'Automated weighbridge dispatch and siding loading'
      ],
      slug: '/services/logistics-mdo'
    }
  ];

  const current = steps[activeStep];

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 lg:p-8 shadow-card-hover">
      <div className="max-w-3xl mb-6">
        <div className="flex items-center gap-2 mb-1">
          <span className="w-4 h-0.5 bg-gold-500"></span>
          <span className="text-[11px] font-black uppercase tracking-widest text-gold-600">
            INTEGRATED MINING LIFECYCLE
          </span>
        </div>
        <h3 className="text-xl sm:text-2xl font-black text-navy-900">
          From Depth to Destination — Step-by-Step Execution
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Our unified operational framework ensures zero fragmentation between exploration, production, processing, and logistics.
        </p>
      </div>

      {/* Progress Bar & Step Selectors */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 mb-6">
        {steps.map((step, idx) => {
          const isActive = idx === activeStep;
          return (
            <button
              key={step.id}
              onClick={() => setActiveStep(idx)}
              className={`p-3.5 rounded-xl border text-left transition-all duration-300 ${
                isActive
                  ? 'bg-navy-900 border-navy-900 shadow-md text-white scale-[1.02]'
                  : 'bg-slate-50 border-slate-200 hover:border-gold-400 hover:bg-slate-100'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-[10px] font-mono font-bold ${isActive ? 'text-gold-400' : 'text-slate-400'}`}>
                  STEP {step.stepNum}
                </span>
                <div className={`p-1.5 rounded-lg ${isActive ? 'bg-navy-800 text-gold-400' : 'bg-white border border-slate-200 text-navy-900'}`}>
                  {step.icon}
                </div>
              </div>
              <div className={`text-xs font-bold leading-tight line-clamp-2 ${isActive ? 'text-white' : 'text-slate-800'}`}>
                {step.title}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Step Showcase */}
      <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2 py-0.5 rounded bg-navy-900 text-gold-400 text-[10px] font-mono font-bold">
                STAGE {current.stepNum} OF 05
              </span>
              <span className="text-xs text-slate-500 font-semibold">End-to-End Capability</span>
            </div>
            <h4 className="text-lg sm:text-xl font-black text-navy-900">
              {current.title}
            </h4>
            <p className="text-xs font-bold text-gold-600 mt-0.5">
              {current.tagline}
            </p>
          </div>

          {onNavigateService && (
            <button
              onClick={() => onNavigateService(current.slug)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white hover:bg-navy-900 hover:text-white border border-slate-200 text-xs font-bold uppercase tracking-wider text-navy-900 transition-colors shrink-0 shadow-sm"
            >
              <span>Explore Technical Scope</span>
              <ArrowRight className="w-3.5 h-3.5 text-gold-500" />
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-5">
          <div>
            <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-2">
              Operational Scope & Methodology
            </h5>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {current.desc}
            </p>
          </div>

          <div>
            <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-2">
              Key Deliverables & Specifications
            </h5>
            <div className="space-y-1.5">
              {current.deliverables.map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle className="w-3.5 h-3.5 text-gold-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
