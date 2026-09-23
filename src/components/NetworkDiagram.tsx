import React, { useState } from 'react';
import { STRATEGIC_NETWORK_STATS, NETWORK_NODES, VERIFIED_PARTNERS } from '../data/partners';
import { Share2, ShieldCheck } from 'lucide-react';

export const NetworkDiagram: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<number | null>(0);

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 lg:p-8 shadow-card-hover">
      {/* Top Header & Verified Stats */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-4 h-0.5 bg-gold-500"></span>
            <span className="text-[11px] font-black uppercase tracking-widest text-gold-600">
              STRATEGIC INDUSTRY NETWORK
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-navy-900">
            Ecosystem of Operational Strength
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-xl">
            A cohesive alliance connecting concession holders, OEM partners, accredited testing labs, and seasoned technical consultants.
          </p>
        </div>

        {/* 3 Verified Metric Badges */}
        <div className="grid grid-cols-3 gap-2.5 shrink-0">
          <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl text-center">
            <div className="text-lg sm:text-xl font-black text-navy-900">
              {STRATEGIC_NETWORK_STATS.miningCompanies}
            </div>
            <div className="text-[9px] text-slate-500 uppercase font-bold mt-0.5">
              Mining Companies
            </div>
          </div>
          <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl text-center">
            <div className="text-lg sm:text-xl font-black text-gold-600">
              {STRATEGIC_NETWORK_STATS.strategicPartnerships}
            </div>
            <div className="text-[9px] text-slate-500 uppercase font-bold mt-0.5">
              Strategic Partners
            </div>
          </div>
          <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl text-center">
            <div className="text-lg sm:text-xl font-black text-slate-800">
              {STRATEGIC_NETWORK_STATS.associatesCount}
            </div>
            <div className="text-[9px] text-slate-500 uppercase font-bold mt-0.5">
              Direct Associates
            </div>
          </div>
        </div>
      </div>

      {/* Visual Network Grid / Hub Representation */}
      <div className="py-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        
        {/* Center Node + Surrounding Nodes */}
        <div className="lg:col-span-8">
          <div className="relative p-5 bg-slate-50 rounded-2xl border border-slate-200">
            {/* Center Core */}
            <div className="flex items-center justify-center mb-5">
              <div className="p-3.5 rounded-xl bg-navy-900 text-white shadow-lg border border-gold-400/40 text-center max-w-xs w-full">
                <div className="text-[9px] font-mono tracking-widest text-gold-400 uppercase font-bold">
                  CENTRAL OPERATIONAL HUB
                </div>
                <div className="text-base font-black tracking-wider">
                  VIJAYBHUMI GROUP
                </div>
                <div className="text-[11px] text-slate-300">
                  Execution & Governance Core
                </div>
              </div>
            </div>

            {/* Surrounding Connected Nodes Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {NETWORK_NODES.map((node, index) => {
                const isSelected = selectedNode === index;
                return (
                  <div
                    key={index}
                    onClick={() => setSelectedNode(index)}
                    className={`p-3 rounded-xl border text-left cursor-pointer transition-all duration-200 ${
                      isSelected
                        ? 'bg-white border-navy-900 shadow-md scale-105'
                        : 'bg-white/80 border-slate-200 hover:border-gold-400 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-gold-500 animate-ping' : 'bg-slate-300'}`}></span>
                      <h4 className={`text-xs font-bold leading-tight ${isSelected ? 'text-navy-900' : 'text-slate-700'}`}>
                        {node.title}
                      </h4>
                    </div>
                    <p className="text-[10px] text-slate-500 leading-snug line-clamp-2">
                      {node.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Node Detail & Verified Partner Highlight */}
        <div className="lg:col-span-4 bg-slate-50 rounded-xl p-5 border border-slate-200 space-y-3.5">
          <div className="flex items-center gap-2 text-xs font-black text-navy-900 uppercase tracking-wider">
            <Share2 className="w-3.5 h-3.5 text-gold-600" />
            <span>Network Synergy</span>
          </div>

          {selectedNode !== null ? (
            <div>
              <h4 className="text-sm font-black text-navy-900">
                {NETWORK_NODES[selectedNode].title}
              </h4>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                {NETWORK_NODES[selectedNode].desc}
              </p>
              <div className="mt-3 pt-2.5 border-t border-slate-200 text-xs text-slate-500">
                <span className="text-navy-900 font-bold">Operational Value:</span> Ensures seamless equipment dispatch, rapid laboratory assays, statutory approvals, and uninterrupted supply chains.
              </div>
            </div>
          ) : (
            <p className="text-xs text-slate-400">
              Click any node in the network to inspect its operational linkage with Vijaybhumi.
            </p>
          )}

          {/* Verified Partner Box */}
          <div className="pt-2">
            <div className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Verified Strategic Partners</span>
            </div>
            <div className="space-y-1">
              {VERIFIED_PARTNERS.map(p => (
                <div key={p.id} className="p-2 rounded bg-white border border-slate-200 text-xs flex items-center justify-between">
                  <span className="font-bold text-navy-900">{p.name}</span>
                  <span className="text-[10px] text-gold-600 font-semibold">{p.category}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
