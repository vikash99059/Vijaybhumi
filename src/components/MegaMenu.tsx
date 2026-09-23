import React from 'react';
import { BUSINESS_VERTICALS } from '../data/businesses';
import { ArrowRight, Sparkles, Building2, Sun, Hammer, Layers, ShoppingBag } from 'lucide-react';

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (path: string) => void;
}

const getIcon = (id: string) => {
  switch (id) {
    case 'mining': return <Hammer className="w-4 h-4 text-navy-900" />;
    case 'properties': return <Building2 className="w-4 h-4 text-emerald-600" />;
    case 'solar': return <Sun className="w-4 h-4 text-amber-500" />;
    case 'mining-limited': return <Layers className="w-4 h-4 text-orange-600" />;
    case 'bizhar-heritage': return <ShoppingBag className="w-4 h-4 text-rose-600" />;
    default: return <Sparkles className="w-4 h-4 text-gold-500" />;
  }
};

export const MegaMenu: React.FC<MegaMenuProps> = ({ isOpen, onClose, onNavigate }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-2xl z-50 transition-all duration-300"
      onMouseLeave={onClose}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Header inside Mega Menu */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 mb-4 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-widest text-gold-600 mb-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
              VIJAYBHUMI GROUP ARCHITECTURE
            </div>
            <h3 className="text-lg md:text-xl font-black text-navy-900">OUR BUSINESSES</h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Building capabilities across industries. Creating long-term value.
            </p>
          </div>
          <div className="mt-2 md:mt-0">
            <button
              onClick={() => { onNavigate('/businesses'); onClose(); }}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-900 hover:text-gold-600 transition-colors uppercase tracking-wider group"
            >
              View All Business Verticals
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* 5 Business Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
          {BUSINESS_VERTICALS.map((vertical) => (
            <div
              key={vertical.id}
              onClick={() => { onNavigate(vertical.slug); onClose(); }}
              className="group relative bg-slate-50 hover:bg-white p-4 rounded-xl border border-slate-200 hover:border-gold-400 hover:shadow-card-hover transition-all duration-200 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-[11px] font-mono font-bold text-slate-400">
                    {vertical.number}
                  </span>
                  <div className="p-1.5 rounded-lg bg-white border border-slate-200 group-hover:border-gold-400 transition-colors shadow-sm">
                    {getIcon(vertical.id)}
                  </div>
                </div>

                <h4 className="text-xs font-extrabold text-navy-900 group-hover:text-gold-600 transition-colors">
                  {vertical.name}
                </h4>
                <p className="text-[10px] font-semibold text-gold-600 mb-1.5">
                  {vertical.subtitle}
                </p>
                <p className="text-[11px] text-slate-500 leading-relaxed line-clamp-3 mb-3">
                  {vertical.shortDescription}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center text-[11px] font-bold text-navy-900 group-hover:text-gold-600 transition-colors">
                <span>{vertical.ctaText}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
