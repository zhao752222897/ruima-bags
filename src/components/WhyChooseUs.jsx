import React, { useState } from 'react';
import { Globe, Clock, Package, CreditCard, PieChart, ShieldCheck, Mail, X } from 'lucide-react';

const WhatsAppIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.353-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export const CompanyProfile = () => {
  const [showQR, setShowQR] = useState(false);

  return (
    <>
      <section className="flex flex-col gap-[30px] mb-20">
        {/* Full-width Image Showcase - PERFECTLY CENTERED */}
        <div className="canvas-container relative h-[600px] overflow-hidden rounded-[40px] shadow-2xl bg-[#0A192F]">
          <img
            alt="Premium Branding Board"
            className="w-full h-full object-cover object-center transition-transform duration-[4000ms] hover:scale-105"
            src="https://sc04.alicdn.com/kf/A7aede22247694ae0a5a63e05fee25bc7m.jpg" 
          />
        </div>

        {/* Digital Dashboard Profile - Polished Card Layout */}
        <div className="canvas-container bg-white p-12 shadow-xl border border-gray-100 rounded-3xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <span className="text-[var(--primary-bright)] text-[11px] font-black tracking-[0.4em] uppercase block mb-2">Verified Manufacturing Excellence</span>
              <h2 className="text-4xl font-black text-[var(--secondary)] tracking-tighter uppercase leading-none">Company Profile</h2>
            </div>
            <div className="flex items-center gap-2 text-[var(--tertiary)] text-[10px] font-black bg-[var(--surface-tint)] px-5 py-2.5 rounded-full cursor-pointer hover:bg-[var(--secondary)] hover:text-white transition-all uppercase tracking-widest">
              <ShieldCheck size={14} />
              <span>Full Production Line Audit &gt;</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-gray-100 rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/5">
            {[
              { icon: <Globe size={28}/>, label: "Country / Region", val: "Shanxi, China (Mainland)" },
              { icon: <Clock size={28}/>, label: "Market Experience", val: "Professional Since 2013" },
              { icon: <PieChart size={28}/>, label: "Core Operations", val: "OEM/ODM Specialist Factory" },
              { icon: <Package size={28}/>, label: "Product Portfolio", val: "Suitcases, Backpacks, Totes" },
              { icon: <CreditCard size={28}/>, label: "Trade Logistics", val: "EXW, FOB, CIF Supported" },
              { icon: <ShieldCheck size={28}/>, label: "Export Markets", val: "Global Reach (NA, EU, SEA)" },
            ].map((item, idx) => (
              <div key={idx} className="group p-10 border-[0.5px] border-gray-100 bg-white hover:bg-[var(--surface-tint)] transition-all flex flex-col gap-6">
                <div className="text-[var(--primary-bright)] opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all transform origin-left">
                  {item.icon}
                </div>
                <div>
                  <span className="text-[10px] uppercase font-black text-[var(--muted)] tracking-[0.2em] block mb-2">{item.label}</span>
                  <span className="text-base font-black text-[var(--secondary)] uppercase leading-tight tracking-tight">{item.val}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8">
             <a href="mailto:zhao752222897@163.com" className="bg-[var(--primary-600)] hover:bg-[var(--primary-700)] text-white px-14 py-5 rounded-full font-black uppercase text-xs tracking-widest shadow-2xl transition-all hover:-translate-y-1">Send Inquiry Email</a>
             <button className="border-2 border-[var(--secondary)] text-[var(--secondary)] px-14 py-5 rounded-full font-black uppercase text-xs tracking-widest hover:bg-[var(--secondary)] hover:text-white transition-all">Download Catalog</button>
          </div>
        </div>
      </section>

      {/* REFINED Floating Toolbar: Mail & WhatsApp Only */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-[80] flex flex-col gap-4">
        {[
          { 
            icon: <Mail size={24} />, 
            label: "INQUIRY", 
            color: "bg-white text-[var(--secondary)] hover:bg-[var(--surface-tint)]",
            onClick: () => window.location.href = "mailto:zhao752222897@163.com"
          },
          { 
            icon: <WhatsAppIcon size={24} />, 
            label: "WHATSAPP", 
            color: "bg-[#25D366] text-white hover:bg-[#128C7E] shadow-green-500/20",
            onClick: () => setShowQR(true)
          },
        ].map((btn, i) => (
          <div 
            key={i} 
            onClick={btn.onClick}
            className={`w-[80px] h-[80px] ${btn.color} shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-[24px] flex flex-col items-center justify-center cursor-pointer border border-gray-100/50 group hover:scale-110 transition-all`}
          >
            <div className="mb-1.5 group-hover:animate-bounce">{btn.icon}</div>
            <span className="text-[10px] font-black tracking-tighter uppercase">{btn.label}</span>
          </div>
        ))}
      </div>

      {/* WhatsApp QR Modal */}
      {showQR && (
        <div className="qr-modal-overlay" onClick={() => setShowQR(false)}>
          <div className="qr-modal-content text-center" onClick={e => e.stopPropagation()}>
            <button onClick={() => setShowQR(false)} className="absolute top-5 right-5 text-gray-400 hover:text-gray-900 transition-colors"><X size={24} /></button>
            <div className="w-16 h-16 bg-[#25D366] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/20 text-white"><WhatsAppIcon size={32} /></div>
            <h3 className="text-xl font-black text-[var(--secondary)] mb-2 uppercase tracking-tight">Direct WhatsApp</h3>
            <p className="text-xs text-gray-500 mb-8 font-medium px-4">Scan to start a priority conversation with our manufacturing team.</p>
            <div className="aspect-square bg-white border border-gray-100 rounded-2xl flex items-center justify-center relative group overflow-hidden shadow-inner p-4">
               <img src="https://sc04.alicdn.com/kf/A8eee21827e8b42db9639a5317c5ecc52k.jpg" alt="WhatsApp QR" className="w-full h-full object-contain" />
               <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-100"><span className="text-[10px] font-black text-[var(--primary-bright)] uppercase tracking-[0.2em]">Available 24/7 Global Support</span></div>
          </div>
        </div>
      )}
    </>
  );
};

export const Footer = () => (
  <footer className="bg-[var(--secondary-deep)] py-20 border-t border-white/5">
    <div className="w-[1200px] mx-auto px-8">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-16">
        <div className="col-span-2">
           <h4 className="text-white text-2xl font-black tracking-tighter mb-6">RUIMA <span className="text-[var(--primary-bright)]">BAGS</span></h4>
           <p className="text-white/40 text-sm leading-relaxed max-w-xs font-light">Leading global manufacturer of luggage and bags since 2013. Excellence in quality, reliability, and worldwide delivery.</p>
        </div>
        {[
          { title: "Products", links: ["Hard Luggage", "Soft Luggage", "School Bags", "Casual Bags"] },
          { title: "Company", links: ["About Us", "Certificates", "Factory Tour", "Contact"] },
          { title: "Support", links: ["Help Center", "Trade Assurance", "Shipping Info", "Payment"] }
        ].map(group => (
          <div key={group.title}>
            <h5 className="text-white text-[10px] font-black uppercase tracking-[0.2em] mb-6">{group.title}</h5>
            <ul className="space-y-4">
              {group.links.map(link => (
                <li key={link} className="text-white/40 text-xs hover:text-[var(--primary-bright)] cursor-pointer transition-colors font-medium uppercase tracking-wide">{link}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <p className="text-white/20 text-[10px] font-bold uppercase tracking-widest">&copy; 2026 Shanxi Ruima Trading Co., Ltd. All Rights Reserved.</p>
        <div className="flex gap-8">
          {["Privacy Policy", "Terms of Service", "Legal"].map(t => (
            <span key={t} className="text-white/20 text-[10px] font-bold uppercase tracking-widest hover:text-white cursor-pointer transition-colors">{t}</span>
          ))}
        </div>
      </div>
    </div>
  </footer>
);
