import React from 'react';
import { Phone, Mail, MapPin, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/company';

interface FooterProps {
  onNavigate: (path: string) => void;
  onOpenEnquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenEnquiry }) => {
  return (
    <footer className="bg-navy-950 text-slate-300">
      {/* Curved Pre-Footer Banner (Navy + Gold highlights) */}
      <div className="bg-navy-900 border-b border-navy-800 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/20 border border-gold-400/30 text-gold-400 text-xs font-bold uppercase tracking-wider mb-2">
              <span>EXPLORE COLLABORATION</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Ready to execute your next milestone?
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-300 max-w-2xl">
              Connect with Vijaybhumi Group for end-to-end mining operations, heavy fleet deployment, exploration drilling, property development, or renewable energy ventures.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              onClick={onOpenEnquiry}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gold-500 hover:bg-gold-600 text-navy-950 text-xs font-black uppercase tracking-wider shadow-lg shadow-gold-500/20 transition-all duration-300"
            >
              <span>LET'S BUILD TOGETHER</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('/contact')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <span>CONTACT OFFICES</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main 4-Column Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: VIJAYBHUMI GROUP */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gold-500 flex items-center justify-center font-black text-navy-950 text-base">
                V
              </div>
              <div>
                <span className="text-base font-black text-white tracking-wider block leading-none">
                  VIJAYBHUMI GROUP
                </span>
                <span className="text-[9px] text-gold-400 uppercase tracking-widest font-extrabold">
                  Corporate Multi-Business Platform
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-5">
              Building a diversified business platform across mining & exploration, properties, renewable solar energy, and strategic ventures.
            </p>
            <div className="space-y-1.5">
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-1">
                Business Verticals
              </span>
              <ul className="space-y-1 text-xs text-slate-300">
                <li>
                  <button onClick={() => onNavigate('/business/mining')} className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                    <span className="text-gold-400 font-mono">01.</span> Vijaybhumi Mining
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('/business/properties')} className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                    <span className="text-emerald-400 font-mono">02.</span> Vijaybhumi Properties
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('/business/solar-energy')} className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                    <span className="text-amber-400 font-mono">03.</span> Vijaybhumi Solar Energy
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('/business/mining-limited')} className="hover:text-orange-400 transition-colors flex items-center gap-1.5">
                    <span className="text-orange-400 font-mono">04.</span> Vijaybhumi Mining Limited
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('/business/bizhar-heritage')} className="hover:text-rose-400 transition-colors flex items-center gap-1.5">
                    <span className="text-rose-400 font-mono">05.</span> BiZhar Heritage
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 2: COMPANY */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-gold-400 mb-3 border-b border-navy-800 pb-1.5">
              Company
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button onClick={() => onNavigate('/about')} className="hover:text-gold-400 transition-colors">
                  About Vijaybhumi Group
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/about#vision-mission')} className="hover:text-gold-400 transition-colors">
                  Vision & Mission
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/about#core-values')} className="hover:text-gold-400 transition-colors">
                  Our Core Values
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/operational-strength')} className="hover:text-gold-400 transition-colors">
                  Operational Strength & Fleet
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/partners')} className="hover:text-gold-400 transition-colors">
                  Strategic Network & Partners
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/future')} className="hover:text-gold-400 transition-colors">
                  Future Strategic Direction
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/contact')} className="hover:text-gold-400 transition-colors">
                  Corporate Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: SERVICES */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-gold-400 mb-3 border-b border-navy-800 pb-1.5">
              Services & Capabilities
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button onClick={() => onNavigate('/services/mining-exploration')} className="hover:text-gold-400 transition-colors">
                  Mining & Mineral Exploration
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/services/drilling-mineral-processing')} className="hover:text-gold-400 transition-colors">
                  Drilling & Mineral Processing
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/services/logistics-mdo')} className="hover:text-gold-400 transition-colors">
                  Logistics & MDO Services
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/services/allied-technical')} className="hover:text-gold-400 transition-colors">
                  Allied & Technical Support
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/business/properties')} className="hover:text-gold-400 transition-colors">
                  Properties & Land Development
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/business/solar-energy')} className="hover:text-gold-400 transition-colors">
                  Solar & Renewable Energy
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: CONTACT */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-gold-400 mb-3 border-b border-navy-800 pb-1.5">
              Official Contact
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Registered Office:</span>
                  <p className="leading-relaxed text-[11px] text-slate-300 mt-0.5">
                    {COMPANY_DETAILS.contact.registeredOffice.fullAddress}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <div>
                  <span className="font-bold text-white block">Phone:</span>
                  <a href={`tel:${COMPANY_DETAILS.contact.phone}`} className="hover:text-gold-400 text-slate-200 transition-colors">
                    {COMPANY_DETAILS.contact.displayPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <div>
                  <span className="font-bold text-white block">Email:</span>
                  <a href={`mailto:${COMPANY_DETAILS.contact.email}`} className="hover:text-gold-400 text-slate-200 transition-colors break-all">
                    {COMPANY_DETAILS.contact.email}
                  </a>
                </div>
              </div>

              <div className="pt-2 border-t border-navy-800 flex items-center gap-1.5 text-[10px] text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Primary Entity: {COMPANY_DETAILS.primaryMiningEntity}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Yellow/Gold Bottom Accent Bar (like reference image) */}
        <div className="mt-10 pt-4 border-t border-navy-800 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <div>
            © 2026 {COMPANY_DETAILS.brandName}. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Corporate Governance</span>
            <span>•</span>
            <span>Statutory Compliance</span>
            <span>•</span>
            <span>Responsible Mining</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
