import React from 'react';
import { ChevronRight } from 'lucide-react';

export const FactoryTour = () => (
  <section className="bg-[var(--secondary-deep)] py-20 overflow-visible">
    <div className="w-[1200px] mx-auto px-4">
      <div className="grid grid-cols-12 grid-rows-6 gap-2 h-[900px]">
        {[
          { 
            span: "col-span-8 row-span-4", 
            img: "https://sc04.alicdn.com/kf/He19e276e614043e88da716688b81ecf2O.png", 
            zoom: "hover:scale-105",
            isAce: true 
          },
          { span: "col-span-4 row-span-3", img: "https://sc04.alicdn.com/kf/H883cee398d114d9aa25e44e2fe2daf392.png", zoom: "hover:scale-110" },
          { span: "col-span-4 row-span-3", img: "https://sc04.alicdn.com/kf/H631bf3adf154467c8014e731b1baf49cU.png", zoom: "hover:scale-110" },
          { span: "col-span-4 row-span-2", img: "https://sc04.alicdn.com/kf/He4307526616f49108a45124f652ca19dI.png", zoom: "hover:scale-110" },
          { span: "col-span-4 row-span-2", img: "https://sc04.alicdn.com/kf/H9629d0ebb7ad4213a29094344d5968d1P.png", zoom: "hover:scale-110" }
        ].map((item, idx) => (
          <div key={idx} className={`${item.span} relative overflow-hidden group cursor-pointer rounded-sm transition-all duration-500 hover:z-30 hover:shadow-[0_40px_80px_rgba(0,0,0,0.6)] hover:-translate-y-2 border border-white/5`}>
            <img src={item.img} alt="" className={`w-full h-full object-cover transition-all duration-700 grayscale-[0.2] group-hover:grayscale-0 ${item.zoom}`} />
            {item.isAce && (
              <div className="absolute top-6 left-6 bg-[var(--primary-bright)] text-white text-[10px] font-black px-3 py-1 rounded-sm shadow-2xl tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                Best Seller
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ProductItem = ({ title, price, image, material, specs, colors }) => (
  <div className="flip-card-group h-[420px] w-full flip-card-perspective cursor-pointer relative">
    <div className="flip-card-inner relative w-full h-full">
      
      {/* Front Face - Strictly Fixed 420px */}
      <div className="flip-card-face absolute inset-0 w-full h-full bg-white border border-[#eee] rounded-2xl p-5 flex flex-col items-center shadow-sm z-20 overflow-hidden" style={{ transform: 'rotateY(0deg)' }}>
        <div className="w-full aspect-square mb-4 bg-[#F8F8F8] flex items-center justify-center overflow-hidden rounded-xl">
          <img src={image} alt={title} className="w-full h-full object-contain" />
        </div>
        <div className="w-full px-2 text-center flex-1 flex flex-col justify-between">
          <h3 className="text-sm font-black text-[var(--secondary)] line-clamp-2 uppercase tracking-tighter leading-none mb-4">
            {title}
          </h3>
          <div className="flex justify-between items-center px-1">
            <span className="text-xl font-black text-[var(--primary)]">US ${price}</span>
            <div className="bg-[var(--secondary)] px-2.5 py-1 rounded-full text-[9px] font-black text-white uppercase tracking-widest">
              Catalog
            </div>
          </div>
        </div>
      </div>

      {/* Back Face - Strictly Fixed 420px & Darkened for Clarity */}
      <div className="flip-card-face flip-card-back absolute inset-0 w-full h-full unit-manifest-bg rounded-2xl p-8 flex flex-col justify-between text-white shadow-2xl overflow-hidden z-10">
        <div className="flex-1 flex flex-col justify-center">
          <span className="text-white/40 text-[9px] font-black tracking-[0.4em] uppercase mb-6 block border-b border-white/10 pb-2">
            Technical Manifest
          </span>
          <div className="space-y-5">
            {[
              { label: 'Main Material', val: material || 'Advanced Composite' },
              { label: 'Available Specs', val: specs || 'Full Range Sizing' },
              { label: 'Color Options', val: colors || 'Pantone / OEM Ready' }
            ].map(row => (
              <div key={row.label} className="flex flex-col gap-1.5">
                <span className="text-[9px] uppercase font-black opacity-50 tracking-[0.1em]">{row.label}</span>
                <span className="text-[11px] font-black uppercase tracking-wide drop-shadow-md text-white line-clamp-2 leading-tight">{row.val}</span>
              </div>
            ))}
            <div className="pt-3 flex gap-2 opacity-80">
               {['BSCI', 'ISO', 'REACH'].map(tag => (
                 <span key={tag} className="border border-white/30 px-1.5 py-0.5 rounded text-[7px] font-black tracking-widest">{tag}</span>
               ))}
            </div>
          </div>
        </div>
        <button className="w-full py-3.5 bg-white text-[var(--secondary)] text-[10px] font-black rounded-full hover:scale-105 transition-transform uppercase tracking-[0.2em] shadow-2xl mt-4">
          Inquire Specs
        </button>
      </div>

    </div>
  </div>
);

export const CategorySection = ({ title, products = [] }) => (
  <div className="flex flex-col mb-[60px]">
    <div className="canvas-container shadow-sm border-t-[4px] border-[var(--primary-bright)] bg-transparent">
      <div className="h-[75px] border-b border-[#eee] flex items-center justify-between px-10 bg-white">
        <h2 className="text-2xl font-black text-[var(--secondary)] tracking-tighter flex items-center gap-3 uppercase">
          <span className="w-2.5 h-8 bg-[var(--primary-bright)] rounded-full"></span>
          {title}
        </h2>
        <div className="text-[var(--primary)] text-xs font-black flex items-center gap-2 cursor-pointer hover:gap-3 transition-all uppercase tracking-widest">
           View Full Catalog <ChevronRight size={16} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-10 gap-10">
        {products.map((p, i) => (
          <ProductItem key={i} {...p} />
        ))}
      </div>
    </div>
  </div>
);
