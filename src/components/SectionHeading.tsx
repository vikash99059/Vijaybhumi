import React from 'react';

interface SectionHeadingProps {
  label?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  centered?: boolean;
  dark?: boolean;
  badge?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  title,
  highlight,
  subtitle,
  centered = false,
  dark = false,
  badge
}) => {
  return (
    <div className={`mb-10 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-4xl'}`}>
      {badge && (
        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider mb-2.5 ${
          dark ? 'bg-gold-500/20 text-gold-400 border border-gold-400/30' : 'bg-gold-50 text-gold-700 border border-gold-200'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
          {badge}
        </div>
      )}
      
      {label && !badge && (
        <div className={`flex items-center gap-2 mb-2 ${centered ? 'justify-center' : ''}`}>
          <span className="w-6 h-0.5 bg-gold-500"></span>
          <p className="text-xs font-black tracking-[0.18em] text-gold-600 uppercase">
            {label}
          </p>
        </div>
      )}

      <h2 className={`text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight ${
        dark ? 'text-white' : 'text-navy-900'
      }`}>
        {title} {highlight && <span className="text-gold-500">{highlight}</span>}
      </h2>

      {subtitle && (
        <p className={`mt-3 text-xs sm:text-sm md:text-base leading-relaxed ${
          dark ? 'text-slate-300' : 'text-slate-600'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
