import React from 'react';
import { Search, ChevronDown, Globe, Verified, Star, Clock, MapPin, Award, CheckCircle2, MessageSquare, PhoneCall, ChevronRight } from 'lucide-react';

export const StoreHeader = () => (
  <header className="w-full flex flex-col items-center">
    {/* Main Sign Area - High-fidelity banner image from User (Image 2) */}
    <div className="relative w-full h-[400px] overflow-hidden bg-[#0A192F]">
      <img 
        src="https://sc02.alicdn.com/kf/H249babd85e0341a7b2be8ab4ccded49eO.jpg" 
        className="w-full h-full object-cover object-center" 
        alt="Ruima Bags Correct Banner" 
      />
      
      {/* Top Identity Bar (Floating on top) */}
      <div className="absolute top-0 left-0 w-full h-[50px] z-20 px-12 flex items-center gap-3 text-white/90 bg-gradient-to-b from-black/50 to-transparent">
        <div className="bg-white/20 backdrop-blur-md rounded-lg px-3 py-1 text-[11px] font-bold border border-white/10 uppercase tracking-widest">
          13 YRS GOLD
        </div>
        <Globe size={14} className="text-[#007FFC]" />
        <Verified size={14} className="text-[#007FFC]" />
      </div>
    </div>

    {/* Full-width Trade Bar (Navigation) */}
    <nav className="w-full bg-[var(--primary-bright)] h-[48px] flex justify-center shadow-lg border-b border-white/10 z-30">
      <div className="w-[1200px] h-full flex items-center justify-between px-4">
        <div className="flex h-full">
          <div className="nav-item-block nav-item-selected uppercase text-xs font-black tracking-widest px-8">Home</div>
          <div className="nav-item-block group relative uppercase text-xs font-bold tracking-widest px-8">
            Products <ChevronDown size={12} className="ml-2" />
            <div className="hidden group-hover:block absolute top-[48px] left-0 w-[240px] bg-white shadow-xl z-50 text-[var(--body)] py-2 border-t-2 border-[var(--primary)]">
              {['Hard & Soft Luggage', 'Student Backpacks', 'Casual & Crossbody Bags', 'Sports & Gym Bags', 'Shoulder Bags', 'Pet Bags'].map(cat => (
                <div key={cat} className="h-10 flex items-center px-4 hover:bg-[#F5F5F5] text-sm cursor-pointer capitalize">{cat}</div>
              ))}
            </div>
          </div>
          <div className="nav-item-block uppercase text-xs font-bold tracking-widest px-8 opacity-80 hover:opacity-100 transition-opacity">Company Profile</div>
          <div className="nav-item-block uppercase text-xs font-bold tracking-widest px-8 opacity-80 hover:opacity-100 transition-opacity">Contact Us</div>
        </div>

        {/* Search Bar */}
        <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full h-[32px] w-[280px] px-4 border border-white/20">
          <input type="text" placeholder="SEARCH PRODUCTS..." className="bg-transparent border-none outline-none text-[10px] font-bold text-white placeholder:text-white/50 w-full" />
          <button className="text-white ml-2 hover:scale-110 transition-transform"><Search size={14} /></button>
        </div>
      </div>
    </nav>
  </header>
);
