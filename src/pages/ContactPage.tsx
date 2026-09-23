import React, { useState } from 'react';
import { COMPANY_DETAILS } from '../data/company';
import { BUSINESS_VERTICALS } from '../data/businesses';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ShieldCheck, AlertCircle, Building, User, MessageSquare, MessageCircle } from 'lucide-react';
import { openWhatsAppInquiry, getWhatsAppUrl, DISPLAY_WHATSAPP_NUMBER, BUSINESS_WHATSAPP_NUMBER } from '../utils/whatsapp';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    vertical: 'Vijaybhumi Mining',
    serviceRequired: 'Turnkey Contract Mining / MDO',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [generatedWhatsAppUrl, setGeneratedWhatsAppUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    setErrorMessage('');
    setStatus('submitting');

    // Automatically generate and open WhatsApp with pre-filled professional inquiry message
    const url = getWhatsAppUrl(formData);
    setGeneratedWhatsAppUrl(url);

    setTimeout(() => {
      openWhatsAppInquiry(formData);
      setStatus('success');
    }, 400);
  };

  return (
    <div className="pt-24 pb-20 bg-surface-50 text-slate-800 min-h-screen">
      {/* Hero */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-navy-900 text-white shadow-md">
        <div className="max-w-7xl mx-auto">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-gold-400 block mb-1">
            HEADQUARTERS & ENQUIRIES
          </span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
            LET'S BUILD THE NEXT<br />
            <span className="text-gold-400">PROJECT TOGETHER.</span>
          </h1>
          <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-300 max-w-3xl leading-relaxed">
            Connect with Vijaybhumi Group for mining, technical, property, renewable-energy and strategic business opportunities.
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Verified Office Details */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: Contact Form (Clean White Card) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 lg:p-9 border border-slate-200 shadow-card-hover">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-100">
              <div>
                <h2 className="text-xl font-black text-navy-900 mb-0.5">
                  Corporate Project Enquiry
                </h2>
                <p className="text-xs text-slate-500">
                  Complete your details below — submitting automatically pre-fills WhatsApp for immediate response.
                </p>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold shrink-0 self-start sm:self-auto">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp: {DISPLAY_WHATSAPP_NUMBER}</span>
              </div>
            </div>

            {status === 'success' ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-navy-900">Enquiry Submitted & WhatsApp Opened</h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed mt-1">
                    Thank you, <span className="font-bold text-navy-900">{formData.name}</span>. Your enquiry details have been formatted and opened directly in WhatsApp with our executive desk at <strong className="text-navy-900">{DISPLAY_WHATSAPP_NUMBER}</strong>.
                  </p>
                </div>

                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 flex items-center justify-center gap-2 max-w-md mx-auto">
                  <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>If WhatsApp did not open automatically, tap below:</span>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  {generatedWhatsAppUrl && (
                    <a
                      href={generatedWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider shadow-md transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Open WhatsApp Chat</span>
                    </a>
                  )}
                  <button
                    onClick={() => {
                      setStatus('idle');
                      setGeneratedWhatsAppUrl('');
                      setFormData({
                        name: '',
                        company: '',
                        email: '',
                        phone: '',
                        vertical: 'Vijaybhumi Mining',
                        serviceRequired: 'Turnkey Contract Mining / MDO',
                        message: ''
                      });
                    }}
                    className="px-6 py-2.5 rounded-lg bg-navy-900 text-gold-400 text-xs font-bold uppercase tracking-wider hover:bg-navy-800 transition-colors"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                {errorMessage && (
                  <div className="p-2.5 rounded-lg bg-red-50 border border-red-200 text-xs text-red-600 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Your Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Chandra"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-8 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-navy-900 placeholder-slate-400 focus:outline-none focus:border-navy-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Company / Organization
                    </label>
                    <div className="relative">
                      <Building className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        placeholder="e.g. Mineral Ventures Ltd."
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full pl-8 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-navy-900 placeholder-slate-400 focus:outline-none focus:border-navy-900"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-8 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-navy-900 placeholder-slate-400 focus:outline-none focus:border-navy-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-8 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-navy-900 placeholder-slate-400 focus:outline-none focus:border-navy-900"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Business Vertical
                    </label>
                    <select
                      value={formData.vertical}
                      onChange={(e) => setFormData({ ...formData, vertical: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-navy-900 focus:outline-none focus:border-navy-900"
                    >
                      {BUSINESS_VERTICALS.map(v => (
                        <option key={v.id} value={v.name}>{v.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Service Required
                    </label>
                    <select
                      value={formData.serviceRequired}
                      onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-navy-900 focus:outline-none focus:border-navy-900"
                    >
                      <option value="Turnkey Contract Mining / MDO">Turnkey Contract Mining / MDO</option>
                      <option value="Deep Core Exploration Drilling (500–650m)">Deep Core Exploration Drilling (500–650m)</option>
                      <option value="150mm DTH Blast Hole Drilling & Excavation">150mm DTH Blast Hole Drilling & Excavation</option>
                      <option value="Hyva Fleet Haulage & Siding Logistics">Hyva Fleet Haulage & Siding Logistics</option>
                      <option value="NABL Laboratory Core & Mineral Testing">NABL Laboratory Core & Mineral Testing</option>
                      <option value="Properties & Industrial Land Development">Properties & Industrial Land Development</option>
                      <option value="Solar Power Project Strategic Partnership">Solar Power Project Strategic Partnership</option>
                      <option value="General Corporate Opportunity">General Corporate Opportunity</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Message / Project Scope *
                  </label>
                  <div className="relative">
                    <MessageSquare className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                    <textarea
                      rows={3}
                      required
                      placeholder="Please specify location of operations, estimated volume or requirements, expected timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full pl-8 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-navy-900 placeholder-slate-400 focus:outline-none focus:border-navy-900 resize-none"
                    ></textarea>
                  </div>
                </div>

                <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                    <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Automatically connects to WhatsApp ({DISPLAY_WHATSAPP_NUMBER})</span>
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full sm:w-auto px-7 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black uppercase tracking-wider shadow-md disabled:opacity-50 transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{status === 'submitting' ? 'OPENING WHATSAPP...' : 'SUBMIT & OPEN WHATSAPP'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right: Verified Official Contact Cards */}
          <div className="lg:col-span-5 space-y-5">

            {/* Direct WhatsApp Quick Connect Card */}
            <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-3xl p-6 text-white shadow-lg space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold tracking-widest text-emerald-200 uppercase">
                  INSTANT CORPORATE MESSAGING
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse"></span>
              </div>
              <h3 className="text-lg font-black text-white leading-tight">
                Connect Directly on Business WhatsApp
              </h3>
              <p className="text-xs text-emerald-100 leading-relaxed">
                Need an immediate operational consultation or quick quote? Speak directly with our commercial desk.
              </p>
              <div className="pt-2">
                <a
                  href={`https://wa.me/${BUSINESS_WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello Vijaybhumi Group, I would like to inquire about your corporate services.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-white hover:bg-emerald-50 text-emerald-800 text-xs font-black uppercase tracking-wider shadow-md transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Chat on WhatsApp: {DISPLAY_WHATSAPP_NUMBER}</span>
                </a>
              </div>
            </div>
            
            {/* Registered Office Card (Clean White) */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-card-subtle space-y-3.5">
              <div className="flex items-center gap-2 text-xs font-black text-navy-900 uppercase tracking-wider">
                <MapPin className="w-4 h-4 text-gold-600" />
                <span>OFFICIAL REGISTERED OFFICE</span>
              </div>

              <div>
                <h3 className="text-sm font-black text-navy-900 mb-1">
                  {COMPANY_DETAILS.primaryMiningEntity}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {COMPANY_DETAILS.contact.registeredOffice.line1},<br />
                  {COMPANY_DETAILS.contact.registeredOffice.city}, {COMPANY_DETAILS.contact.registeredOffice.district},<br />
                  {COMPANY_DETAILS.contact.registeredOffice.state}, {COMPANY_DETAILS.contact.registeredOffice.pincode}, {COMPANY_DETAILS.contact.registeredOffice.country}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 space-y-2.5 text-xs text-slate-700">
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-gold-600 shrink-0" />
                  <div>
                    <span className="text-slate-400 block text-[9px] uppercase font-bold">Direct Phone / WhatsApp:</span>
                    <a href={`tel:${COMPANY_DETAILS.contact.phone}`} className="font-bold text-navy-900 hover:text-gold-600 transition-colors">
                      {COMPANY_DETAILS.contact.displayPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-gold-600 shrink-0" />
                  <div>
                    <span className="text-slate-400 block text-[9px] uppercase font-bold">Official Email:</span>
                    <a href={`mailto:${COMPANY_DETAILS.contact.email}`} className="font-bold text-navy-900 hover:text-gold-600 transition-colors break-all">
                      {COMPANY_DETAILS.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-gold-600 shrink-0" />
                  <div>
                    <span className="text-slate-400 block text-[9px] uppercase font-bold">Operating Hours:</span>
                    <span className="font-medium text-slate-700">{COMPANY_DETAILS.contact.hours}</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-emerald-700 font-bold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified Corporate Headquarters</span>
              </div>
            </div>

            {/* Visual Location Map Pin Graphic */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 text-center space-y-2 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-gold-100 text-navy-900 flex items-center justify-center mx-auto">
                <MapPin className="w-5 h-5 text-gold-600" />
              </div>
              <h4 className="text-xs font-black text-navy-900">Ranchi, Jharkhand Hub</h4>
              <p className="text-[11px] text-slate-500">
                Strategic presence in India's central & eastern mineral corridors.
              </p>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};
