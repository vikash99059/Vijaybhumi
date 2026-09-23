import React from 'react';
import type { EquipmentItem } from '../data/equipment';
import { Truck, CheckCircle2 } from 'lucide-react';

interface FleetCardProps {
  item: EquipmentItem;
  categoryTitle?: string;
}

export const FleetCard: React.FC<FleetCardProps> = ({ item, categoryTitle }) => {
  return (
    <div className="group bg-white hover:bg-slate-50 rounded-xl p-5 border border-slate-200 hover:border-gold-400 transition-all duration-300 flex flex-col justify-between shadow-card-subtle hover:shadow-card-hover">
      <div>
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-navy-900 text-gold-400 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
            <Truck className="w-5 h-5" />
          </div>
          <div className="flex flex-col items-end">
            <span className="px-2.5 py-1 rounded-md bg-gold-500 text-navy-950 text-xs font-mono font-black shadow-sm">
              {item.quantity}
            </span>
            {item.badge && (
              <span className="text-[10px] text-slate-500 font-extrabold uppercase tracking-wider mt-1">
                {item.badge}
              </span>
            )}
          </div>
        </div>

        <h4 className="text-sm font-black text-navy-900 group-hover:text-gold-600 transition-colors">
          {item.name}
        </h4>
        
        {categoryTitle && (
          <p className="text-[10px] text-slate-400 font-medium mb-2">
            {categoryTitle}
          </p>
        )}

        <div className="mt-2 text-xs text-slate-700 font-medium bg-slate-100 p-2.5 rounded-lg border border-slate-200">
          <span className="text-slate-500 font-bold">Spec: </span>{item.specs}
        </div>

        <div className="mt-2.5 text-xs text-slate-600 leading-relaxed">
          <span className="text-slate-800 font-bold">Application: </span>{item.application}
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
        <span className="inline-flex items-center gap-1 text-emerald-700 font-bold">
          <CheckCircle2 className="w-3.5 h-3.5" />
          Active Fleet
        </span>
        <span className="text-navy-900 font-bold">Verified Asset</span>
      </div>
    </div>
  );
};
