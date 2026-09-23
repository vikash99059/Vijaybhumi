import React, { useState } from 'react';
import { BUSINESS_VERTICALS } from '../data/businesses';
import { ArrowRight, Hammer, Building2, Sun, Layers, ShoppingBag, CheckCircle2 } from 'lucide-react';

interface BusinessSwitcherProps {
  onNavigate: (path: string) => void;
}

export const BusinessSwitcher: React.FC<BusinessSwitcherProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<string>('mining');

  const activeVertical = BUSINESS_VERTICALS.find(v => v.id === activeTab) || BUSINESS_VERTICALS[0];

  const getIcon = (id: string, isSelected: boolean) => {
    const iconClass = `w-4 h-4 ${isSelected ? 'text-gold-400' : 'text-navy-900'}`;
    switch (id) {
      case 'mining': return <Hammer className={iconClass} />;
      case 'properties': return <Building2 className={iconClass} />;
      case 'solar': return <Sun className={iconClass} />;
      case 'mining-limited': return <Layers className={iconClass} />;
      case 'bizhar-heritage': return <ShoppingBag className={iconClass} />;
      default: return null;
    }
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 lg:p-8 shadow-card-hover">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-slate-100 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-4 h-0.5 bg-gold-500"></span>
            <span className="text-[11px] font-black uppercase tracking-widest text-gold-600">
              EXPLORE VIJAYBHUMI GROUP
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-navy-900">
            Diversified Corporate Verticals
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-navy-900 border border-slate-200">
            5 Distinct Pillars
          </span>
        </div>
      </div>

      {/* Tabs / Switcher Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 mb-6">
        {BUSINESS_VERTICALS.map((item) => {
          const isSelected = item.id === activeTab;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`p-3.5 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between ${
                isSelected
                  ? 'bg-navy-900 border-navy-900 shadow-md scale-[1.02] text-white'
                  : 'bg-slate-50 border-slate-200 hover:border-gold-400 hover:bg-slate-100'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-[10px] font-mono font-bold ${isSelected ? 'text-gold-400' : 'text-slate-400'}`}>
                  {item.number}
                </span>
                <div className={`p-1.5 rounded-md ${isSelected ? 'bg-navy-800' : 'bg-white border border-slate-200 shadow-sm'}`}>
                  {getIcon(item.id, isSelected)}
                </div>
              </div>
              <div>
                <div className={`text-xs font-bold ${isSelected ? 'text-white' : 'text-navy-900'}`}>
                  {item.name.replace('Vijaybhumi ', '')}
                </div>
                <div className={`text-[10px] truncate ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                  {item.subtitle}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Tab Preview Display */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center bg-slate-50 rounded-xl p-6 border border-slate-200">
        <div className="lg:col-span-7 space-y-3.5">
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider bg-navy-900 text-gold-400">
              {activeVertical.category}
            </span>
            <span className="text-xs text-slate-500 font-medium">
              Status: <strong className="text-navy-900">{activeVertical.status}</strong>
            </span>
          </div>

          <div>
            <h4 className="text-xl sm:text-2xl font-black text-navy-900">
              {activeVertical.name}
            </h4>
            <p className="text-xs font-bold text-gold-600 mt-0.5">
              “{activeVertical.tagline}”
            </p>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {activeVertical.fullDescription}
          </p>

          {/* Capabilities mini list */}
          <div className="pt-2">
            <div className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-2">
              Key Capabilities & Focus Areas
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
              {activeVertical.capabilities.slice(0, 4).map((cap, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0 mt-0.5" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </div>

          {activeVertical.legalNote && (
            <div className="p-2.5 rounded bg-amber-50 text-[11px] text-amber-800 border-l-2 border-amber-500 font-medium">
              {activeVertical.legalNote}
            </div>
          )}

          <div className="pt-2">
            <button
              onClick={() => onNavigate(activeVertical.slug)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-navy-900 hover:bg-navy-800 text-gold-400 text-xs font-extrabold uppercase tracking-wider shadow-sm transition-all duration-200"
            >
              <span>{activeVertical.ctaText}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative rounded-xl overflow-hidden aspect-[4/3] border border-slate-200 shadow-md group">
            <img
              src={activeVertical.heroImage}
              alt={activeVertical.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent flex flex-col justify-end p-4">
              <span className="text-[10px] font-mono font-bold text-gold-400">
                VERTICAL {activeVertical.number}
              </span>
              <span className="text-sm font-black text-white">
                {activeVertical.name}
              </span>
              <span className="text-[11px] text-slate-200">
                {activeVertical.subtitle}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
