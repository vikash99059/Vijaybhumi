import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { ShoppingBag, Globe, CheckCircle2, ArrowRight } from 'lucide-react';

interface BizharHeritagePageProps {
  onNavigate: (path: string) => void;
  onOpenEnquiry: () => void;
}

export const BizharHeritagePage: React.FC<BizharHeritagePageProps> = ({ onNavigate, onOpenEnquiry }) => {
  const craftCategories = [
    {
      title: 'Indigenous Handlooms & Textiles',
      desc: 'Authentic regional weaves, organic tribal fabrics, and traditional handcrafted garments crafted by master weavers.',
      tag: 'Textiles'
    },
    {
      title: 'Artisanal Metal & Dhokra Crafts',
      desc: 'Centuries-old lost-wax metal casting artifacts, heritage bronze sculptures, and handcrafted home accents.',
      tag: 'Metal Craft'
    },
    {
      title: 'Terracotta & Pottery Art',
      desc: 'Natural clay pottery, sculptural pottery, and handcrafted ceremonial earthen artifacts.',
      tag: 'Earthen Ware'
    },
    {
      title: 'Tribal Art & Folk Paintings',
      desc: 'Curated Sohrai, Khovar, and regional folk art forms preserved by indigenous artisan clusters.',
      tag: 'Folk Art'
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-surface-50 text-slate-800 min-h-screen">
      {/* Hero Banner */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-navy-900 text-white shadow-md">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-rose-600/20 text-rose-400 text-[10px] font-mono font-bold uppercase mb-3">
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>BUSINESS VERTICAL 05 • GROUP-ASSOCIATED BRAND</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
            BIZHAR HERITAGE<br />
            <span className="text-rose-400">Heritage • Craft • E-Marketplace.</span>
          </h1>

          <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-300 max-w-3xl leading-relaxed">
            A Vijaybhumi Group-associated e-marketplace brand dedicated to preserving indigenous art forms, empowering grassroots artisans, and showcasing authentic regional heritage.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenEnquiry}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-rose-600 hover:bg-rose-500 text-white text-xs font-black uppercase tracking-wider shadow-lg shadow-rose-600/20 transition-all"
            >
              <span>EXPLORE BRAND COLLABORATION</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('/businesses')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider border border-white/20 transition-colors"
            >
              <span>View All Group Verticals</span>
            </button>
          </div>
        </div>
      </section>

      {/* Brand Introduction & Mission (Clean White Layout) */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-4">
            <SectionHeading
              label="CULTURAL ECOSYSTEM"
              title="Empowering Artisans."
              highlight="Preserving Ancient Traditions."
              subtitle="BiZhar Heritage bridges grassroots master craftspeople with modern digital commerce."
            />
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Rooted in the vibrant tribal and folk traditions of Eastern and Central India, BiZhar Heritage creates sustainable livelihoods for traditional artisan clusters. By providing design inputs, fair price guarantees, and a modern digital marketplace, we bring rare handmade treasures to conscious consumers worldwide.
            </p>
            <div className="space-y-2 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                <span>100% Direct artisan sourcing with ethical compensation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                <span>GI-tagged regional handcraft authenticity verification</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                <span>Eco-friendly sustainable packaging and reliable logistics</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {craftCategories.map((cat, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                  <span className="text-[9px] font-mono text-rose-600 uppercase tracking-wider font-bold">
                    {cat.tag}
                  </span>
                  <h4 className="text-sm font-black text-navy-900 mt-1 mb-1">
                    {cat.title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {cat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* E-Marketplace Platform Vision */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl p-8 border border-slate-200 text-center max-w-2xl mx-auto space-y-3 shadow-sm">
          <div className="w-12 h-12 rounded-full bg-rose-50 text-rose-600 border border-rose-200 flex items-center justify-center mx-auto">
            <Globe className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-black text-navy-900">
            Digital E-Marketplace Portal
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            The BiZhar Heritage digital storefront and catalog integration are currently expanding to onboard verified artisan cooperatives.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenEnquiry}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <span>Connect with BiZhar Desk</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
