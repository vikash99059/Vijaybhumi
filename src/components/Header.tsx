import React, { useState, useEffect } from 'react';
import { MegaMenu } from './MegaMenu';
import { Menu, X, ChevronDown, Phone, Mail, ArrowUpRight, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenEnquiry: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate, onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'OUR BUSINESSES', path: '/businesses', hasMegaMenu: true },
    { name: 'SERVICES', path: '/services' },
    { name: 'OPERATIONAL STRENGTH', path: '/operational-strength' },
    { name: 'PROJECTS', path: '/projects' },
    { name: 'PARTNERS', path: '/partners' },
    { name: 'FUTURE', path: '/future' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow-md">
        
        {/* Top Mini Corporate Utility Bar (White with Navy & Gold Accents like reference) */}
        <div className="bg-white border-b border-slate-200 py-1.5 px-4 sm:px-6 lg:px-8 hidden md:block">
          <div className="max-w-7xl mx-auto flex items-center justify-between text-xs text-slate-600">
            <div className="flex items-center gap-4">
              <span className="font-extrabold text-navy-900 tracking-wider flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-gold-500"></span>
                VIJAYBHUMI GROUP
              </span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-500 font-medium">
                Mining • Properties • Solar Energy • Infrastructure • Strategic Ventures
              </span>
            </div>
            <div className="flex items-center gap-6">
              <a href="tel:+917970904797" className="flex items-center gap-1.5 text-navy-900 font-semibold hover:text-gold-600 transition-colors">
                <div className="w-5 h-5 rounded-full bg-navy-900 text-gold-400 flex items-center justify-center">
                  <Phone className="w-3 h-3" />
                </div>
                <span>+91 79709 04797</span>
              </a>
              <a href="mailto:vijaybhumimining@gmail.com" className="flex items-center gap-1.5 text-navy-900 font-semibold hover:text-gold-600 transition-colors">
                <div className="w-5 h-5 rounded-full bg-navy-900 text-gold-400 flex items-center justify-center">
                  <Mail className="w-3 h-3" />
                </div>
                <span>vijaybhumimining@gmail.com</span>
              </a>
              <span className="text-slate-400 font-medium">Ranchi, Jharkhand</span>
            </div>
          </div>
        </div>

        {/* Main Nav Bar (Deep Corporate Navy #0B1B3D from reference) */}
        <div className="bg-navy-900 border-b border-navy-800 py-2.5 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            
            {/* Logo */}
            <div 
              onClick={() => onNavigate('/')}
              className="cursor-pointer flex items-center gap-3 group select-none"
            >
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-gold-400 to-gold-600 border border-gold-300 flex items-center justify-center shadow-md shadow-black/20 group-hover:scale-105 transition-transform">
                <span className="font-black text-navy-950 text-lg">V</span>
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-black tracking-wider text-white group-hover:text-gold-400 transition-colors leading-tight">
                  VIJAYBHUMI<span className="text-gold-400">.</span>
                </span>
                <span className="text-[9px] tracking-[0.25em] font-extrabold text-gold-400 uppercase -mt-0.5">
                  GROUP
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-1 lg:gap-1.5">
              {navLinks.map((link) => {
                const isActive = currentPath === link.path || (link.path !== '/' && currentPath.startsWith(link.path));
                
                if (link.hasMegaMenu) {
                  return (
                    <div
                      key={link.name}
                      className="relative"
                      onMouseEnter={() => setMegaMenuOpen(true)}
                    >
                      <button
                        onClick={() => onNavigate(link.path)}
                        className={`px-3 py-1.5 rounded text-[11px] font-bold tracking-wider transition-all flex items-center gap-1 ${
                          isActive || megaMenuOpen
                            ? 'text-gold-400 bg-navy-800/80 shadow-sm'
                            : 'text-slate-100 hover:text-gold-400 hover:bg-navy-800/50'
                        }`}
                      >
                        {link.name}
                        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${megaMenuOpen ? 'rotate-180 text-gold-400' : 'text-slate-400'}`} />
                      </button>
                    </div>
                  );
                }

                return (
                  <button
                    key={link.name}
                    onClick={() => {
                      setMegaMenuOpen(false);
                      onNavigate(link.path);
                    }}
                    className={`px-3 py-1.5 rounded text-[11px] font-bold tracking-wider transition-all ${
                      isActive
                        ? 'text-gold-400 bg-navy-800/80 shadow-sm'
                        : 'text-slate-100 hover:text-gold-400 hover:bg-navy-800/50'
                    }`}
                  >
                    {link.name}
                  </button>
                );
              })}
            </nav>

            {/* Right Action CTA */}
            <div className="flex items-center gap-3">
              <button
                onClick={onOpenEnquiry}
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-500 text-navy-950 text-xs font-extrabold uppercase tracking-wider shadow-md shadow-gold-500/20 hover:shadow-gold-500/40 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>LET'S BUILD TOGETHER</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                className="xl:hidden p-2 rounded-lg bg-navy-800 text-white hover:text-gold-400 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mega Menu Component */}
        <MegaMenu
          isOpen={megaMenuOpen}
          onClose={() => setMegaMenuOpen(false)}
          onNavigate={(path) => {
            setMegaMenuOpen(false);
            onNavigate(path);
          }}
        />
      </header>

      {/* Mobile Drawer Navigation (Clean Light/Navy) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-navy-950/80 backdrop-blur-sm xl:hidden">
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-white border-l border-slate-200 p-6 overflow-y-auto shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded bg-navy-900 text-gold-400 font-black flex items-center justify-center text-sm">
                    V
                  </div>
                  <div>
                    <div className="text-sm font-black text-navy-900">VIJAYBHUMI GROUP</div>
                    <div className="text-[9px] tracking-widest text-gold-600 font-bold">CORPORATE PORTAL</div>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 rounded-lg bg-slate-100 text-slate-500 hover:text-slate-900"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-1">
                {navLinks.map((link) => {
                  const isActive = currentPath === link.path;
                  return (
                    <button
                      key={link.name}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        onNavigate(link.path);
                      }}
                      className={`w-full text-left px-3.5 py-2.5 rounded-lg text-xs font-bold tracking-wide transition-colors flex items-center justify-between ${
                        isActive
                          ? 'bg-navy-900 text-gold-400 font-extrabold'
                          : 'text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <span>{link.name}</span>
                      {link.hasMegaMenu && <span className="text-[10px] text-gold-600 font-semibold">5 Verticals</span>}
                    </button>
                  );
                })}
              </div>

              {/* Mobile Business Quick Links */}
              <div className="mt-6 pt-5 border-t border-slate-200">
                <div className="text-[10px] font-extrabold text-slate-400 tracking-wider uppercase mb-2">
                  Business Verticals
                </div>
                <div className="space-y-1">
                  <button
                    onClick={() => { setMobileMenuOpen(false); onNavigate('/business/mining'); }}
                    className="w-full text-left px-3 py-1.5 rounded text-xs font-semibold text-slate-700 hover:text-gold-600 hover:bg-slate-50"
                  >
                    01. Vijaybhumi Mining
                  </button>
                  <button
                    onClick={() => { setMobileMenuOpen(false); onNavigate('/business/properties'); }}
                    className="w-full text-left px-3 py-1.5 rounded text-xs font-semibold text-slate-700 hover:text-emerald-600 hover:bg-slate-50"
                  >
                    02. Vijaybhumi Properties
                  </button>
                  <button
                    onClick={() => { setMobileMenuOpen(false); onNavigate('/business/solar-energy'); }}
                    className="w-full text-left px-3 py-1.5 rounded text-xs font-semibold text-slate-700 hover:text-amber-600 hover:bg-slate-50"
                  >
                    03. Vijaybhumi Solar Energy
                  </button>
                  <button
                    onClick={() => { setMobileMenuOpen(false); onNavigate('/business/mining-limited'); }}
                    className="w-full text-left px-3 py-1.5 rounded text-xs font-semibold text-slate-700 hover:text-orange-600 hover:bg-slate-50"
                  >
                    04. Vijaybhumi Mining Limited
                  </button>
                  <button
                    onClick={() => { setMobileMenuOpen(false); onNavigate('/business/bizhar-heritage'); }}
                    className="w-full text-left px-3 py-1.5 rounded text-xs font-semibold text-slate-700 hover:text-rose-600 hover:bg-slate-50"
                  >
                    05. BiZhar Heritage
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="w-full py-2.5 rounded-lg bg-navy-900 text-gold-400 text-xs font-bold uppercase tracking-wider text-center shadow-md"
              >
                LET'S BUILD TOGETHER
              </button>
              <div className="mt-3 text-center">
                <a href="tel:+917970904797" className="text-xs font-semibold text-slate-600 hover:text-navy-900">
                  +91 79709 04797
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
