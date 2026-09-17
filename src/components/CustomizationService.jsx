import React from 'react';

export const CustomizationService = () => (
  <section className="relative overflow-hidden bg-[#050B16] py-28 text-white full-bleed-band mb-[20px]">
    {/* 1. Base Layer: Clean Factory Image (Pure Local Asset) */}
    <img
      alt="Professional Factory Workshop"
      className="absolute inset-0 h-full w-full object-cover grayscale-[0.4] opacity-30 scale-105"
      src="/assets/images/factory-bg-clean.png" 
    />
    
    {/* 2. Deep Gradient Layer: Creates the high-end "Navy to Black" feel */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#0A192F] via-[#050B16]/90 to-black z-10"></div>

    {/* 3. Accent Light: A subtle radial glow to pop the text */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[var(--primary-bright)]/5 rounded-full blur-[160px] z-10"></div>

    <div className="relative mx-auto w-[1200px] px-8 text-center z-20">
      <div className="inline-flex items-center gap-3 mb-8">
        <div className="h-[1px] w-8 bg-[var(--primary-bright)]"></div>
        <p className="text-[11px] font-black tracking-[0.5em] text-[var(--primary-bright)] uppercase">
          Elite Manufacturing · Private Label
        </p>
        <div className="h-[1px] w-8 bg-[var(--primary-bright)]"></div>
      </div>

      <h2 className="text-6xl font-black leading-[0.95] tracking-tighter md:text-[84px] mb-8">
        Mastered <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40">OEM/ODM</span><br />
        <span className="text-[var(--primary-bright)]">Customization</span>
      </h2>
      
      <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/60 font-light mb-16 italic border-l-2 border-[var(--primary-bright)]/30 pl-6">
        "Turning complex bag concepts into market-ready reality. Precision engineering at global scale."
      </p>

      <div className="grid gap-8 text-left md:grid-cols-2">
        {/* Advanced Glass Panel 1 */}
        <div className="group rounded-[40px] border border-white/5 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-3xl p-12 hover:border-[var(--primary-bright)]/30 transition-all duration-700 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
          <div className="flex items-center gap-6 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-[var(--primary-bright)] flex items-center justify-center font-black text-2xl shadow-[0_10px_40px_rgba(252,106,6,0.3)]">01</div>
            <h3 className="text-3xl font-black text-white tracking-tighter uppercase">Process Flow</h3>
          </div>
          <ul className="space-y-6 text-sm font-bold text-white/50 tracking-wide uppercase">
            <li className="flex items-center gap-4 group-hover:text-white transition-colors">
              <span className="w-2 h-2 rounded-full bg-[var(--primary-bright)] group-hover:scale-150 transition-transform"></span>
              Concept & Design Strategy
            </li>
            <li className="flex items-center gap-4 group-hover:text-white transition-colors delay-75">
              <span className="w-2 h-2 rounded-full bg-[var(--primary-bright)] group-hover:scale-150 transition-transform"></span>
              Rapid Prototyping
            </li>
            <li className="flex items-center gap-4 group-hover:text-white transition-colors delay-150">
              <span className="w-2 h-2 rounded-full bg-[var(--primary-bright)] group-hover:scale-150 transition-transform"></span>
              Bulk Precision Production
            </li>
            <li className="flex items-center gap-4 group-hover:text-white transition-colors delay-200">
              <span className="w-2 h-2 rounded-full bg-[var(--primary-bright)] group-hover:scale-150 transition-transform"></span>
              Global Logistics Management
            </li>
          </ul>
        </div>

        {/* Advanced Glass Panel 2 */}
        <div className="group rounded-[40px] border border-white/5 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-3xl p-12 hover:border-[var(--primary-bright)]/30 transition-all duration-700">
          <div className="flex items-center gap-6 mb-10">
            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center font-black text-2xl border border-white/10">02</div>
            <h3 className="text-3xl font-black text-white tracking-tighter uppercase">Capabilities</h3>
          </div>
          <div className="grid grid-cols-2 gap-x-12 gap-y-10">
            <div className="space-y-2">
              <b className="text-[10px] font-black tracking-[0.2em] text-[var(--primary-bright)] uppercase">Materials</b>
              <p className="text-sm font-bold text-white/80 leading-tight uppercase">High-Grade PC, ABS, Neoprene & Tactical Nylon</p>
            </div>
            <div className="space-y-2">
              <b className="text-[10px] font-black tracking-[0.2em] text-[var(--primary-bright)] uppercase">Branding</b>
              <p className="text-sm font-bold text-white/80 leading-tight uppercase">Laser Etch, Metal Badges & 3D Embossing</p>
            </div>
            <div className="space-y-2">
              <b className="text-[10px] font-black tracking-[0.2em] text-[var(--primary-bright)] uppercase">Colors</b>
              <p className="text-sm font-bold text-white/80 leading-tight uppercase">Full Pantone Matching & Custom Palettes</p>
            </div>
            <div className="space-y-2">
              <b className="text-[10px] font-black tracking-[0.2em] text-[var(--primary-bright)] uppercase">Packing</b>
              <p className="text-sm font-bold text-white/80 leading-tight uppercase">Custom Retail Boxes & Eco-Friendly Sets</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
