import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { BusinessSwitcher } from '../components/BusinessSwitcher';
import { MiningLifecycle } from '../components/MiningLifecycle';
import { NetworkDiagram } from '../components/NetworkDiagram';
import { TrustStrip } from '../components/TrustStrip';
import { FleetCard } from '../components/FleetCard';
import { BUSINESS_VERTICALS } from '../data/businesses';
import { MINING_SERVICES, BUSINESS_MODELS } from '../data/services';
import { VERIFIED_PARTNERS } from '../data/partners';
import { COMPANY_DETAILS } from '../data/company';
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  Building2,
  Sun,
  Truck,
  Compass,
  Award,
  Layers,
  ChevronRight,
  Check
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenEnquiry: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenEnquiry }) => {
  const [selectedModel, setSelectedModel] = useState<string>('contract-mining');
  const activeModel = BUSINESS_MODELS.find(m => m.id === selectedModel) || BUSINESS_MODELS[0];

  return (
    <div className="relative min-h-screen bg-surface-50 text-slate-800 overflow-hidden">
      
      {/* ============================================================ */}
      {/* 01 — HERO SECTION (Exact Reference Replication) */}
      {/* ============================================================ */}
      <section className="relative min-h-[85vh] lg:min-h-[88vh] flex items-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-navy-950 overflow-hidden">
        {/* Background Image with Deep Navy Atmospheric Gradient */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero_mining_banner.jpg"
            alt="Vijaybhumi Mining Pit Haul Truck"
            className="w-full h-full object-cover object-center"
          />
          {/* Exact multi-layer atmospheric gradient matching user reference */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/70 to-navy-950/20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-navy-950/30"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-8 space-y-4">
              
              {/* Badge: VIJAYBHUMI GROUP • CORPORATE PLATFORM */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-navy-950/50 border border-gold-500/40 text-gold-400 text-[10px] sm:text-[11px] font-extrabold tracking-widest uppercase backdrop-blur-sm shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
                <span>VIJAYBHUMI GROUP • CORPORATE PLATFORM</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight leading-[1.14] text-white">
                BUILDING BUSINESS.<br />
                <span className="text-gold-400">CREATING VALUE.</span><br />
                SHAPING THE FUTURE.
              </h1>

              {/* Accent Divider Bar */}
              <div className="w-10 h-1 bg-gold-400 rounded-full my-2"></div>

              {/* Subtitle */}
              <p className="text-xs sm:text-sm text-slate-300 max-w-lg leading-relaxed">
                Vijaybhumi is building a diversified corporate business platform across mining, properties, renewable energy and strategic ventures.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onNavigate('/businesses')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gold-500 hover:bg-gold-400 text-navy-950 text-xs font-black uppercase tracking-wider shadow-md shadow-gold-500/20 transition-all duration-200"
                >
                  <span>EXPLORE OUR BUSINESSES</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onNavigate('/contact')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-navy-950/60 hover:bg-navy-900 text-white text-xs font-bold uppercase tracking-wider border border-slate-600/60 backdrop-blur-md transition-all duration-200 hover:border-gold-400/60"
                >
                  <span>CONTACT US</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gold-400" />
                </button>
              </div>

              {/* Bottom Verified Badges Strip with Golden Silhouettes and Vertical Dividers */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 sm:gap-8 text-xs text-slate-300">
                <div className="flex items-center gap-3">
                  <div className="text-gold-400">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M19 8h-2V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h.2a3 3 0 0 0 5.6 0h4.4a3 3 0 0 0 5.6 0H22v-5l-3-4zM7 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm11 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM15 9h3.75l1.8 3H15V9z" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-extrabold text-white text-xs block leading-tight">40 Dedicated</span>
                    <span className="text-[10px] text-slate-400">Hyva Tippers</span>
                  </div>
                </div>

                <div className="h-7 w-px bg-slate-700/60 hidden sm:block"></div>

                <div className="flex items-center gap-3">
                  <div className="text-gold-400">
                    <svg className="w-6 h-6 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                      <path d="M12 2v20M8 22l4-18 4 18M7 16h10M9 10h6" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-extrabold text-white text-xs block leading-tight">500–650m</span>
                    <span className="text-[10px] text-slate-400">Drill Depth</span>
                  </div>
                </div>

                <div className="h-7 w-px bg-slate-700/60 hidden sm:block"></div>

                <div className="flex items-center gap-3">
                  <div className="text-gold-400">
                    <svg className="w-6 h-6 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="3" />
                      <circle cx="19" cy="5" r="2" />
                      <circle cx="5" cy="5" r="2" />
                      <circle cx="19" cy="19" r="2" />
                      <circle cx="5" cy="19" r="2" />
                      <path d="M12 9V5M12 15v4M9.5 10.5L6.5 6.5M14.5 10.5l3-4M9.5 13.5l-3 4M14.5 13.5l3 4" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-extrabold text-white text-xs block leading-tight">25+</span>
                    <span className="text-[10px] text-slate-400">Mining Network</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Hero Card (Exact Replication from reference) */}
            <div className="lg:col-span-4">
              <div className="bg-white rounded-2xl p-6 lg:p-7 shadow-2xl relative border-t-4 border-gold-500 text-slate-800">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
                  <span className="text-[10px] font-mono font-bold text-amber-600 uppercase tracking-wider">
                    CORE MINING DIVISION
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#0B1728] text-white">
                    Active
                  </span>
                </div>

                <h3 className="text-base sm:text-[17px] font-black text-navy-950 leading-snug">
                  Vijaybhumi Mining & Allied Ventures Pvt. Ltd.
                </h3>

                <p className="text-[11px] font-bold text-amber-600 italic mt-0.5 mb-2.5">
                  “From Depth to Destination – We Deliver”
                </p>

                <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed mb-4">
                  End-to-end mining capabilities spanning exploration, mine development, overburden stripping, blast-hole drilling, processing, and dispatch logistics.
                </p>

                <div className="space-y-2 mb-5 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full border border-amber-500 flex items-center justify-center text-amber-600 shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span className="text-[11px] font-medium text-slate-700">Contract Mining & MDO Frameworks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full border border-amber-500 flex items-center justify-center text-amber-600 shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span className="text-[11px] font-medium text-slate-700">NABL Laboratory Sample Testing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full border border-amber-500 flex items-center justify-center text-amber-600 shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span className="text-[11px] font-medium text-slate-700">DGMS Statutory Compliance</span>
                  </div>
                </div>

                <button
                  onClick={() => onNavigate('/business/mining')}
                  className="w-full py-3 rounded-xl bg-[#0B1B36] hover:bg-[#071324] text-gold-400 text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <span>EXPLORE MINING VERTICAL</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <TrustStrip />

      {/* ============================================================ */}
      {/* 02 — ABOUT US (Circular Photo composition matching reference) */}
      {/* ============================================================ */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-surface-50">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Circular Image Cutout Composition (from reference image) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full border-4 border-gold-500 overflow-hidden shadow-2xl p-1 bg-white">
              <img
                src="/images/about_mining_main.jpg"
                alt="Vijaybhumi Mining Haulage & Excavator"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            {/* Secondary Floating Mini Circle */}
            <div className="absolute -bottom-2 -right-2 w-32 h-32 rounded-full border-4 border-navy-900 overflow-hidden shadow-xl bg-white hidden sm:block">
              <img
                src="/images/about_mining_small.jpg"
                alt="Heavy Mining Excavator Bucket"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          {/* Right: Clean About Text */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-4 h-0.5 bg-gold-500"></span>
              <span className="text-[11px] font-black uppercase tracking-widest text-gold-600">
                ABOUT VIJAYBHUMI GROUP
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-navy-900 leading-tight">
              ONE GROUP. MULTIPLE CAPABILITIES.<br />
              <span className="text-gold-500">LONG-TERM VISION.</span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Vijaybhumi is a growing business group with a strong foundation in mining and allied services, backed by an expanding vision toward properties, solar renewable energy projects, strategic investments, and digital mineral platforms.
            </p>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Rooted in deep technical know-how and heavy mechanized operations, Vijaybhumi operates across the entire mineral value chain — from scientific exploration drilling and mine planning to heavy excavation, mineral processing, and dispatch logistics.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-200">
              <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-sm">
                <div className="text-[10px] text-slate-400 font-bold uppercase">Headquarters</div>
                <div className="text-xs font-black text-navy-900 mt-0.5">Ranchi, Jharkhand</div>
              </div>
              <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-sm">
                <div className="text-[10px] text-slate-400 font-bold uppercase">Core DNA</div>
                <div className="text-xs font-black text-gold-600 mt-0.5">Mining & Allied</div>
              </div>
              <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-sm">
                <div className="text-[10px] text-slate-400 font-bold uppercase">Expansion</div>
                <div className="text-xs font-black text-navy-900 mt-0.5">Solar & Properties</div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('/about')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-navy-900 hover:bg-navy-800 text-gold-400 text-xs font-black uppercase tracking-wider shadow-sm transition-all"
              >
                <span>LEARN MORE ABOUT US</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 03 — WHY CHOOSE US? (Curved Deep Navy Banner with Yellow Badges like reference) */}
      {/* ============================================================ */}
      <section className="relative py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-navy-900 text-white overflow-hidden shadow-xl">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-gold-400 mb-2">
            <span className="w-2 h-2 rounded-full bg-gold-400"></span>
            <span>WHY CHOOSE VIJAYBHUMI?</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white">
            Operational Excellence, Proven Safety & Reliable Delivery
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto">
            Seasoned industry professionals with deep domain background across Coal India, DGMS compliance, and heavy mechanized fleets.
          </p>
        </div>

        {/* 3 Yellow Circular Badge Columns (from reference template) */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          
          <div className="flex flex-col items-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-gold-500 text-navy-950 flex items-center justify-center shadow-gold-glow">
              <Award className="w-8 h-8" />
            </div>
            <h3 className="text-sm font-black text-white uppercase tracking-wider">
              WE ARE SPECIALISTS
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed max-w-xs">
              Experienced mining team with proven expertise across Coal India, DGMS, CMPDI, and PSU mining operations.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-gold-500 text-navy-950 flex items-center justify-center shadow-gold-glow">
              <Truck className="w-8 h-8" />
            </div>
            <h3 className="text-sm font-black text-white uppercase tracking-wider">
              WE ARE OPERATIONALLY EQUIPPED
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed max-w-xs">
              Dedicated fleet of 40 Tata Hyvas, 5 hydraulic excavators, and 150mm diamond drills ready for immediate deployment.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-gold-500 text-navy-950 flex items-center justify-center shadow-gold-glow">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="text-sm font-black text-white uppercase tracking-wider">
              STATUTORY SAFETY & COMPLIANCE
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed max-w-xs">
              Rigorous adherence to DGMS safety standards, NABL laboratory sample testing, and environmental management.
            </p>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 04 — OUR BUSINESSES (Interactive Switcher & Clean Grid) */}
      {/* ============================================================ */}
      <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading
          label="OUR BUSINESSES"
          title="Building Capabilities Across Industries."
          highlight="Creating Long-Term Value."
          subtitle="Explore the five corporate verticals under the unified governance of Vijaybhumi Group."
          centered
        />

        {/* Business Switcher */}
        <BusinessSwitcher onNavigate={onNavigate} />

        {/* 5 Business Vertical Cards (Clean Light 3x2 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {BUSINESS_VERTICALS.map((vertical) => (
            <div
              key={vertical.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-gold-400 hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group shadow-card-subtle"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={vertical.heroImage}
                  alt={vertical.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-0.5 rounded bg-navy-900 text-[10px] font-mono font-black text-gold-400">
                    VERTICAL {vertical.number}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider bg-white/90 text-navy-900 shadow-sm">
                    {vertical.status}
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-black text-navy-900 group-hover:text-gold-600 transition-colors">
                    {vertical.name}
                  </h3>
                  <p className="text-[10px] font-bold text-gold-600 mt-0.5 mb-2">
                    {vertical.subtitle}
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed mb-4 line-clamp-3">
                    {vertical.shortDescription}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] text-slate-400 font-bold">
                    {vertical.category}
                  </span>
                  <button
                    onClick={() => onNavigate(vertical.slug)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-navy-900 hover:text-gold-600 transition-colors"
                  >
                    <span>{vertical.ctaText}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 05 — MINING SERVICES (6-Box Grid layout matching Courses from reference) */}
      {/* ============================================================ */}
      <section className="py-16 bg-slate-100 border-y border-slate-200 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="MINING DIVISIONS"
            title="OUR MINING SERVICES"
            highlight="END-TO-END."
            subtitle="Four specialized service divisions covering exploration drilling, excavation, processing, and hauling."
            centered
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {MINING_SERVICES.map((srv) => (
              <div
                key={srv.id}
                className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-gold-400 hover:shadow-card-hover transition-all flex flex-col justify-between group shadow-card-subtle"
              >
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent flex items-end p-3">
                    <span className="text-xs font-extrabold text-white">
                      {srv.title}
                    </span>
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <p className="text-xs text-slate-500 leading-relaxed mb-3 line-clamp-2">
                    {srv.shortDesc}
                  </p>
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] font-bold text-gold-600 uppercase">SERVICE {srv.number}</span>
                    <button
                      onClick={() => onNavigate(srv.slug)}
                      className="w-6 h-6 rounded-full bg-gold-500 text-navy-950 flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mining Lifecycle Step-by-Step */}
          <MiningLifecycle onNavigateService={(slug) => onNavigate(slug)} />
        </div>
      </section>

      {/* ============================================================ */}
      {/* 06 — TRUSTED PARTNER FULL-WIDTH CALLOUT (like reference banner) */}
      {/* ============================================================ */}
      <section className="relative py-14 px-4 sm:px-6 lg:px-8 bg-navy-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gold-500 text-navy-950 flex items-center justify-center shrink-0 shadow-md">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                YOUR TRUSTED MINING & INFRASTRUCTURE PARTNER
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5 max-w-xl">
                Operating with transparent corporate governance, zero-harm safety standards, and performance-backed delivery schedules.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenEnquiry}
            className="px-6 py-3 rounded-lg bg-gold-500 hover:bg-gold-600 text-navy-950 text-xs font-black uppercase tracking-wider shrink-0 shadow-lg shadow-gold-500/20"
          >
            DISCUSS YOUR PROJECT REQUIREMENTS →
          </button>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 07 — OPERATIONAL FLEET HIGHLIGHTS */}
      {/* ============================================================ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <SectionHeading
              label="OPERATIONAL STRENGTH"
              title="BUILT FOR EXECUTION."
              subtitle="Verified fleet and technical assets owned and operated by Vijaybhumi Group."
            />
          </div>
          <button
            onClick={() => onNavigate('/operational-strength')}
            className="inline-flex items-center gap-1.5 text-xs font-extrabold text-navy-900 hover:text-gold-600 uppercase tracking-wider"
          >
            <span>View Full Fleet Directory</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <FleetCard
            item={{
              id: 'tata-hyva-40',
              name: 'Tata Hyva Heavy Tippers',
              quantity: '40 Nos.',
              units: 40,
              specs: 'Multi-axle heavy haulage dumpers',
              application: 'Pit-to-siding mineral transportation and dispatch',
              badge: 'Dedicated Fleet'
            }}
            categoryTitle="Hauling & Logistics"
          />
          <FleetCard
            item={{
              id: 'sany-215',
              name: 'SANY 215 Excavators',
              quantity: '4 Nos.',
              units: 4,
              specs: '21.5 Ton class high-performance excavators',
              application: 'Overburden breakout and high-cycle face loading',
              badge: 'Extraction Fleet'
            }}
            categoryTitle="Earthmoving & Excavation"
          />
          <FleetCard
            item={{
              id: 'tata-hitachi-300',
              name: 'Tata Hitachi 300 Excavator',
              quantity: '1 No.',
              units: 1,
              specs: 'Heavy 30-Ton Operating Class',
              application: 'Deep excavation & primary rock stripping',
              badge: 'Heavy Production'
            }}
            categoryTitle="Earthmoving & Excavation"
          />
          <FleetCard
            item={{
              id: 'adv-drill-rig',
              name: 'Advanced Exploration Drill',
              quantity: 'Active Unit',
              units: 1,
              specs: 'Drilling up to 500–650 metres depth',
              application: 'Deep wireline core exploration & sampling',
              badge: '500–650m Depth'
            }}
            categoryTitle="Exploration & Testing"
          />
        </div>
      </section>

      {/* ============================================================ */}
      {/* 08 — STRATEGIC NETWORK & PARTNERS */}
      {/* ============================================================ */}
      <section className="py-16 bg-slate-100 border-y border-slate-200 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <NetworkDiagram />
          
          {/* Verified Partner Cards */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-4 h-0.5 bg-gold-500"></span>
              <span className="text-xs font-black uppercase tracking-widest text-gold-600">
                VERIFIED INDUSTRY PARTNERS
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {VERIFIED_PARTNERS.map(p => (
                <div key={p.id} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] font-bold text-gold-600 uppercase block">{p.category}</span>
                    <h4 className="text-xs font-black text-navy-900 mt-0.5 mb-1">{p.name}</h4>
                    <p className="text-[11px] text-slate-500 leading-snug">{p.role}</p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-100 text-[10px] text-emerald-700 font-bold flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" /> Verified Partner
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 09 — LOCATIONS & REGISTERED OFFICE (like Locations Map in reference) */}
      {/* ============================================================ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl p-6 lg:p-10 border border-slate-200 shadow-card-hover">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-4 h-0.5 bg-gold-500"></span>
                <span className="text-[11px] font-black uppercase tracking-widest text-gold-600">
                  OFFICIAL HEADQUARTERS
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-navy-900">
                LOCATIONS & CORPORATE DESK
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Connect with our administrative headquarters in Ranchi, Jharkhand for operational deployments, mineral exploration bids, and group partnerships.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <MapPin className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-black text-navy-900 uppercase block">Registered Office:</span>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed font-medium">
                      {COMPANY_DETAILS.contact.registeredOffice.fullAddress}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-gold-600 shrink-0" />
                    <div>
                      <span className="text-[10px] font-black text-slate-400 uppercase block">Direct Line:</span>
                      <a href={`tel:${COMPANY_DETAILS.contact.phone}`} className="text-xs font-bold text-navy-900 hover:text-gold-600">
                        {COMPANY_DETAILS.contact.displayPhone}
                      </a>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-gold-600 shrink-0" />
                    <div>
                      <span className="text-[10px] font-black text-slate-400 uppercase block">Email:</span>
                      <a href={`mailto:${COMPANY_DETAILS.contact.email}`} className="text-xs font-bold text-navy-900 hover:text-gold-600 break-all">
                        {COMPANY_DETAILS.contact.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenEnquiry}
                  className="px-6 py-2.5 rounded-lg bg-navy-900 hover:bg-navy-800 text-gold-400 text-xs font-black uppercase tracking-wider shadow-sm transition-all"
                >
                  CONTACT US →
                </button>
              </div>
            </div>

            {/* Visual Location Map Pin Graphic */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border-2 border-gold-400 shadow-md aspect-[4/3] bg-slate-100 flex items-center justify-center p-6 text-center">
                <div className="space-y-3">
                  <div className="w-14 h-14 rounded-full bg-navy-900 text-gold-400 flex items-center justify-center mx-auto shadow-md">
                    <MapPin className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-base font-black text-navy-900">Ranchi, Jharkhand, India</h4>
                    <p className="text-xs text-slate-500 font-medium">Pin: 835221 • Eastern Mineral Heartland</p>
                  </div>
                  <div className="inline-block px-3 py-1 rounded-full bg-gold-100 text-gold-800 text-[10px] font-black uppercase tracking-wider">
                    Operational Hub & Headquarters
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
