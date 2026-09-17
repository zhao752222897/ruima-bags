import React from 'react';

const LANGS = [
  { flag: 'us', name: 'English',    code: 'US' },
  { flag: 'ca', name: 'English',    code: 'CA' },
  { flag: 'gb', name: 'English',    code: 'GB' },
  { flag: 'de', name: 'Deutsch',    code: 'DE' },
  { flag: 'fr', name: 'Français',   code: 'FR' },
  { flag: 'it', name: 'Italiano',   code: 'IT' },
  { flag: 'jp', name: '日本語',      code: 'JP' },
  { flag: 'kr', name: '한국어',      code: 'KR' },
  { flag: 'br', name: 'Português',  code: 'BR' },
  { flag: 'au', name: 'English',    code: 'AU' },
  { flag: 'be', name: 'Français',   code: 'BE' },
  { flag: 'at', name: 'Deutsch',    code: 'AT' },
];

export const LanguageStrip = () => {
  return (
    <section className="language-strip-container full-bleed-band" aria-label="Global market presence">
      <div className="w-[1200px] mx-auto px-4 flex items-center gap-12" style={{ overflow: 'visible' }}>
        <div className="flex-shrink-0 grid gap-1 relative z-10">
          <span className="text-[11px] font-black tracking-[0.4em] text-[var(--primary-bright)] uppercase opacity-90">Global Market Presence</span>
          <strong className="text-3xl font-black text-white tracking-tight leading-none">Choose your language</strong>
        </div>
        <div className="flex-1 flex justify-between items-center gap-4 py-2" style={{ overflow: 'visible' }}>
          {LANGS.map(({ flag, name, code }, idx) => (
            <div key={`${code}-${idx}`} className="group relative flex flex-col items-center gap-2 cursor-pointer min-w-[55px] transition-all duration-300 hover:-translate-y-2 hover:z-50">
              <i className={`flag-icon-wrapper f-${flag} group-hover:scale-150 group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.8)]`}>
                <b></b>
              </i>
              <span className="text-[10px] font-bold text-white opacity-60 group-hover:opacity-100 transition-opacity whitespace-nowrap drop-shadow-sm">{name}</span>
              <small className="text-[8px] font-black text-[var(--primary-bright)] tracking-widest opacity-80 uppercase">{code}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
