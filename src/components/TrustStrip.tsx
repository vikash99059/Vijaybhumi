import React from 'react';
import { ShieldCheck, Truck, Award, Factory, Compass } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const trustItems = [
    {
      icon: <Truck className="w-4 h-4 text-navy-900" />,
      title: '40 Heavy Hyva Tippers',
      desc: 'Dedicated haulage fleet'
    },
    {
      icon: <Compass className="w-4 h-4 text-navy-900" />,
      title: '500–650m Drill Depth',
      desc: 'Deep wireline exploration'
    },
    {
      icon: <ShieldCheck className="w-4 h-4 text-navy-900" />,
      title: 'DGMS Safety Aligned',
      desc: 'Strict statutory compliance'
    },
    {
      icon: <Award className="w-4 h-4 text-navy-900" />,
      title: 'NABL Lab Partners',
      desc: 'Certified chemical assays'
    },
    {
      icon: <Factory className="w-4 h-4 text-navy-900" />,
      title: '25+ Industry Network',
      desc: 'Active mining alliances'
    }
  ];

  return (
    <div className="bg-white border-y border-slate-200 py-6 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center">
          {trustItems.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold-400/20 border border-gold-400/40 flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <div>
                <div className="text-xs sm:text-sm font-extrabold text-navy-900 leading-tight">
                  {item.title}
                </div>
                <div className="text-[10px] text-slate-500 mt-0.5">
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
