import React from 'react';

const LANGS = [
  { flag: 'https://flagcdn.com/w80/us.png', name: 'English',    code: 'US' },
  { flag: 'https://flagcdn.com/w80/es.png', name: 'Español',    code: 'ES' },
  { flag: 'https://flagcdn.com/w80/gb.png', name: 'English',    code: 'GB' },
  { flag: 'https://flagcdn.com/w80/de.png', name: 'Deutsch',    code: 'DE' },
  { flag: 'https://flagcdn.com/w80/fr.png', name: 'Français',   code: 'FR' },
  { flag: 'https://flagcdn.com/w80/it.png', name: 'Italiano',   code: 'IT' },
  { flag: 'https://flagcdn.com/w80/jp.png', name: '日本語',      code: 'JP' },
  { flag: 'https://flagcdn.com/w80/ru.png', name: 'Русский',    code: 'RU' },
  { flag: 'https://flagcdn.com/w80/ae.png', name: 'العربية',    code: 'AE' },
  { flag: 'https://flagcdn.com/w80/br.png', name: 'Português',  code: 'BR' },
  { flag: 'https://flagcdn.com/w80/kr.png', name: '한국어',      code: 'KR' },
  { flag: 'https://flagcdn.com/w80/au.png', name: 'English',    code: 'AU' },
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
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/10 group-hover:scale-150 group-hover:border-[var(--primary-bright)] group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.8)] transition-all duration-300">
                <img src={flag} alt={code} className="w-full h-full object-cover" />
              </div>
              <span className="text-[10px] font-bold text-white opacity-60 group-hover:opacity-100 transition-opacity whitespace-nowrap drop-shadow-sm">{name}</span>
              <small className="text-[8px] font-black text-[var(--primary-bright)] tracking-widest opacity-80 uppercase">{code}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
