import React from 'react';
import { Search, ChevronRight, CheckCircle2, MessageSquare, PhoneCall, Globe, Verified } from 'lucide-react';

const Navbar = () => (
  <nav className="bg-[var(--primary-600)] h-[var(--nav-height)]">
    <div className="container-custom h-full flex items-center justify-between">
      <div className="flex h-full">
        <a href="/" className="nav-item bg-[var(--primary-700)]">HOME</a>
        <a href="#" className="nav-item">PRODUCTS</a>
        <a href="#" className="nav-item">COMPANY PROFILE</a>
        <a href="#" className="nav-item">CONTACT US</a>
      </div>
      <div className="flex items-center gap-2">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search in this store" 
            className="rounded-full bg-white px-4 py-1 text-sm w-48 focus:outline-none border-none"
          />
        </div>
        <button className="bg-[var(--primary-600)] p-1.5 rounded-full text-white hover:bg-[var(--primary-700)] transition-colors">
          <Search size={16} />
        </button>
      </div>
    </div>
  </nav>
);

const Header = () => (
  <header className="bg-[var(--secondary)]">
    <div className="container-custom relative h-[var(--sign-height)] flex flex-col justify-between">
      {/* Top Trust Scrim */}
      <div className="w-full h-[45px] scrim-navy absolute top-0 left-0 px-5 flex items-center gap-3">
        <div className="bg-[#F5F5F5] rounded-[16px] px-2 py-0.5 text-[12px] font-bold text-[#333]">1 YR</div>
        <div className="flex items-center gap-1.5">
          <Globe size={16} className="text-[var(--tertiary)]" />
          <Verified size={16} className="text-[var(--tertiary)]" />
        </div>
        <h1 className="text-white text-sm font-medium ml-2.5 flex items-center gap-1">
          Shanxi Ruima Trading Co., Ltd.
          <ChevronRight size={14} />
        </h1>
      </div>
      
      {/* Main Brand Area */}
      <div className="flex-1 flex items-center px-10">
        <div className="text-white text-4xl font-bold tracking-tight">RUIMA BAGS</div>
      </div>
    </div>
    <Navbar />
  </header>
);

const Hero = () => (
  <section className="relative w-full h-[650px] overflow-hidden">
    <div className="absolute inset-0 w-full h-full">
      <img 
        src="/assets/images/hero-1.png" 
        alt="Luggage Factory Banner" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/20 flex items-center">
        <div className="container-custom text-white">
          <h2 className="text-5xl font-bold mb-4 drop-shadow-lg">Professional Luggage Solutions</h2>
          <p className="text-xl max-w-2xl drop-shadow-md">Leading exporter of rolling suitcases, school backpacks, and casual travel gear. Quality guaranteed from factory to your doorstep.</p>
        </div>
      </div>
    </div>
  </section>
);

const ProductCard = ({ title, image, price, moq, sold }) => (
  <div className="product-card group cursor-pointer">
    <div className="aspect-square bg-[#F7F7F7] mb-[13px] overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" 
      />
    </div>
    <h3 className="text-sm leading-[1.29] text-[var(--on-surface)] line-clamp-2 min-h-[36px] group-hover:text-[var(--primary-ink)] transition-colors mb-2">
      {title}
    </h3>
    <div className="text-sm font-bold text-[#333] mb-1">{price}</div>
    <div className="text-sm text-[var(--on-surface)] flex justify-between items-center">
      <span>{moq}</span>
      <span className="text-[var(--faint)] text-xs">{sold} sold</span>
    </div>
    <div className="mt-2 inline-block bg-white text-[var(--primary-ink)] text-[12px] rounded-[3px] px-2 py-0.5 border border-[var(--primary-ink)]">
      Trade Assurance
    </div>
  </div>
);

const ProductGrid = () => (
  <section className="py-10 bg-white">
    <div className="container-custom">
      <h2 className="text-[22px] font-medium text-[var(--primary-ink)] mb-5">Main Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <ProductCard 
          title="Premium Hard Shell Rolling Suitcase - Durable Travel Spinner"
          image="/assets/images/product-1.png"
          price="US $45.00 - $65.00"
          moq="10 pieces (MOQ)"
          sold="1.2k+"
        />
        <ProductCard 
          title="Ergonomic School Backpack with Laptop Compartment for Students"
          image="/assets/images/product-2.png"
          price="US $8.50 - $12.00"
          moq="50 pieces (MOQ)"
          sold="3.5k+"
        />
        <ProductCard 
          title="Water-resistant Casual Crossbody Bag - Stylish Travel Companion"
          image="/assets/images/product-3.png"
          price="US $5.20 - $7.80"
          moq="100 pieces (MOQ)"
          sold="800+"
        />
        <ProductCard 
          title="All-in-one Travel Gear Collection - Quality Backpacks & Cases"
          image="/assets/images/product-1.png"
          price="US $15.00 - $35.00"
          moq="20 pieces (MOQ)"
          sold="500+"
        />
      </div>
    </div>
  </section>
);

const CompanyProfile = () => (
  <section className="py-10">
    <div className="w-full h-[280px] relative overflow-hidden">
      <img 
        src="/assets/images/factory-view.png" 
        alt="Factory" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 scrim-black flex items-center justify-center text-center px-4">
        <div className="text-white">
          <h2 className="text-2xl font-bold mb-4">Quality Manufacturing Since 2026</h2>
          <div className="flex flex-wrap justify-center gap-4 text-xs font-bold">
            <span className="bg-white/90 text-[var(--primary-ink)] rounded-[3px] px-4 py-2 uppercase">Advanced Production Lines</span>
            <span className="bg-white/90 text-[var(--primary-ink)] rounded-[3px] px-4 py-2 uppercase">Strict QC Control</span>
            <span className="bg-white/90 text-[var(--primary-ink)] rounded-[3px] px-4 py-2 uppercase">Global Logistics Support</span>
          </div>
        </div>
      </div>
    </div>
    
    <div className="container-custom py-10 bg-white text-center">
      <h2 className="text-[22px] font-medium text-[var(--primary-600)] mb-8">Verified Capabilities</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="flex items-start text-left gap-4">
          <div className="w-[60px] h-[60px] rounded-full border border-[var(--border)] flex items-center justify-center shrink-0">
            <CheckCircle2 size={32} className="text-[var(--primary-600)]" />
          </div>
          <div>
            <div className="text-sm font-bold text-[var(--on-surface)]">Production Capacity</div>
            <div className="text-sm text-[var(--primary-ink)]">50,000+ Units / Month</div>
          </div>
        </div>
        <div className="flex items-start text-left gap-4">
          <div className="w-[60px] h-[60px] rounded-full border border-[var(--border)] flex items-center justify-center shrink-0">
            <Globe size={32} className="text-[var(--primary-600)]" />
          </div>
          <div>
            <div className="text-sm font-bold text-[var(--on-surface)]">Export Markets</div>
            <div className="text-sm text-[var(--primary-ink)]">North America, Europe, SE Asia</div>
          </div>
        </div>
        <div className="flex items-start text-left gap-4">
          <div className="w-[60px] h-[60px] rounded-full border border-[var(--border)] flex items-center justify-center shrink-0">
            <Verified size={32} className="text-[var(--primary-600)]" />
          </div>
          <div>
            <div className="text-sm font-bold text-[var(--on-surface)]">Quality Standard</div>
            <div className="text-sm text-[var(--primary-ink)]">ISO 9001 Certified Factory</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-white border-t border-[var(--border)]">
    <div className="container-custom py-10">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
        <div className="col-span-2">
          <div className="text-2xl font-bold text-[var(--secondary)] mb-6">RUIMA BAGS</div>
          <p className="text-sm text-[var(--body)] mb-6 max-w-xs">Professional manufacturer and exporter of premium travel gear and backpacks for global markets.</p>
        </div>
        <div>
          <h4 className="text-sm font-bold text-[var(--on-surface)] mb-5">Product Categories</h4>
          <ul className="space-y-3 text-sm text-[var(--body)]">
            <li><a href="#" className="hover:text-[var(--tertiary)]">Rolling Suitcases</a></li>
            <li><a href="#" className="hover:text-[var(--tertiary)]">School Backpacks</a></li>
            <li><a href="#" className="hover:text-[var(--tertiary)]">Casual Bags</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold text-[var(--on-surface)] mb-5">Customer Service</h4>
          <ul className="space-y-3 text-sm text-[var(--body)]">
            <li><a href="#" className="hover:text-[var(--tertiary)]">Contact Us</a></li>
            <li><a href="#" className="hover:text-[var(--tertiary)]">Inquiry History</a></li>
            <li><a href="#" className="hover:text-[var(--tertiary)]">Ordering Guide</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold text-[var(--on-surface)] mb-5">Legal Info</h4>
          <ul className="space-y-3 text-sm text-[var(--body)]">
            <li><a href="#" className="hover:text-[var(--tertiary)]">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-[var(--tertiary)]">Terms of Use</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="bg-[var(--surface-muted)] text-[var(--muted)] text-xs py-10">
      <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-4">
        <div>© 2026 Shanxi Ruima Trading Co., Ltd. All Rights Reserved.</div>
        <div className="flex gap-4">
          <a href="#" className="hover:underline">Alibaba.com</a>
          <a href="#" className="hover:underline">Trade Assurance</a>
        </div>
      </div>
    </div>
    
    {/* Floating Contact Rail */}
    <div className="fixed right-4 top-[300px] z-50 flex flex-col gap-2">
      <div className="w-[68px] bg-white rounded-[4px] shadow-lg flex flex-col items-center py-4 cursor-pointer hover:bg-[var(--surface-tint)] transition-colors border border-[var(--border)]">
        <MessageSquare className="text-[var(--primary)] mb-1" size={24} />
        <span className="text-[10px] font-bold">CHAT</span>
      </div>
      <div className="w-[68px] bg-white rounded-[4px] shadow-lg flex flex-col items-center py-4 cursor-pointer hover:bg-[var(--surface-tint)] transition-colors border border-[var(--border)]">
        <PhoneCall className="text-[var(--primary)] mb-1" size={24} />
        <span className="text-[10px] font-bold">CONTACT</span>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div className="min-h-screen bg-[#F4F4F4]">
      <Header />
      <main>
        <Hero />
        <ProductGrid />
        <CompanyProfile />
      </main>
      <Footer />
    </div>
  );
}

export default App;
