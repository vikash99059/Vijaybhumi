import React, { useState } from 'react';
import { X, Send, CheckCircle2, Building, Mail, Phone, User, MessageSquare, AlertCircle, MessageCircle } from 'lucide-react';
import { BUSINESS_VERTICALS } from '../data/businesses';
import { openWhatsAppInquiry, getWhatsAppUrl, DISPLAY_WHATSAPP_NUMBER } from '../utils/whatsapp';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultVertical?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({ isOpen, onClose, defaultVertical = 'mining' }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    vertical: defaultVertical,
    service: 'Turnkey Contract Mining / MDO',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [generatedWhatsAppUrl, setGeneratedWhatsAppUrl] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please provide a valid corporate email address.');
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

  const handleReset = () => {
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      vertical: 'mining',
      service: 'Turnkey Contract Mining / MDO',
      message: ''
    });
    setGeneratedWhatsAppUrl('');
    setStatus('idle');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-navy-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-xl bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 sm:p-8 overflow-hidden text-slate-800">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg bg-slate-100 text-slate-500 hover:text-navy-900 hover:bg-slate-200 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {status === 'success' ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 border border-emerald-300 flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <div>
              <h3 className="text-xl font-black text-navy-900">Enquiry Submitted & WhatsApp Opened</h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed mt-1">
                Thank you, <span className="font-bold text-navy-900">{formData.name}</span>. Your enquiry details have been pre-filled in WhatsApp to directly connect with our executive desk at <strong className="text-navy-900">{DISPLAY_WHATSAPP_NUMBER}</strong>.
              </p>
            </div>

            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 flex items-center justify-center gap-2">
              <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>WhatsApp should open automatically. If not, tap below:</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              {generatedWhatsAppUrl && (
                <a
                  href={generatedWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider shadow-md transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Open WhatsApp Directly</span>
                </a>
              )}
              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-navy-900 text-gold-400 text-xs font-bold uppercase tracking-wider hover:bg-navy-800 transition-colors"
              >
                Close & Return
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-5">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-0.5 bg-gold-500"></span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-gold-600">
                    DIRECT CORPORATE INQUIRY
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-bold">
                  <MessageCircle className="w-3 h-3 text-emerald-600" />
                  <span>WhatsApp: {DISPLAY_WHATSAPP_NUMBER}</span>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-navy-900">
                Initiate Project Enquiry
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Submitting this form collects your project specifications and instantly prepares a pre-filled message on WhatsApp for immediate response.
              </p>
            </div>

            {errorMessage && (
              <div className="mb-4 p-2.5 rounded-lg bg-red-50 border border-red-200 text-xs text-red-600 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Name */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-8 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-navy-900 placeholder-slate-400 focus:outline-none focus:border-navy-900 focus:bg-white"
                    />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Company Name
                  </label>
                  <div className="relative">
                    <Building className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      placeholder="e.g. Apex Mineral Corp"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full pl-8 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-navy-900 placeholder-slate-400 focus:outline-none focus:border-navy-900 focus:bg-white"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Official Email *
                  </label>
                  <div className="relative">
                    <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-8 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-navy-900 placeholder-slate-400 focus:outline-none focus:border-navy-900 focus:bg-white"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Phone / Mobile *
                  </label>
                  <div className="relative">
                    <Phone className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-8 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-navy-900 placeholder-slate-400 focus:outline-none focus:border-navy-900 focus:bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* Vertical & Service */}
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
                      <option key={v.id} value={v.id}>{v.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Service Required
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
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

              {/* Message */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Project Details *
                </label>
                <div className="relative">
                  <MessageSquare className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                  <textarea
                    rows={3}
                    required
                    placeholder="Briefly describe project location, volume, timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full pl-8 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-navy-900 placeholder-slate-400 focus:outline-none focus:border-navy-900 focus:bg-white resize-none"
                  ></textarea>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-1.5 text-[10px] text-slate-500">
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Opens WhatsApp directly with +91 79709 04797</span>
                </div>
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black uppercase tracking-wider shadow-md disabled:opacity-50 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{status === 'submitting' ? 'Opening WhatsApp...' : 'Submit & Open WhatsApp'}</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
