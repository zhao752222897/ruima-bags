import React, { useEffect, useMemo, useState } from 'react';
import { Search, ChevronRight, Filter, CheckCircle2 } from 'lucide-react';

const CATEGORIES = ["ALL", "hard case", "Soft box", "shoulder bag", "Sling Bag", "Luggage bag, fitness bag", "Schoolbag"];

const formatTitle = (value) => {
  if (!value) return "Product details available on request";
  return value
    .replace(/\s+-\s+Buy Product on Alibaba\.com.*$/i, '')
    .replace(/\s+Buy Product on Alibaba\.com.*$/i, '')
    .trim();
};

const formatPrice = (value) => {
  const match = String(value || '').match(/[0-9]+(?:\.[0-9]+)?/);
  return match ? match[0] : 'Contact';
};

const ProductCatalog = () => {
  const [products, setProducts] = useState([]);
  const [activeCat, setActiveCat] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch('/products.json')
      .then(response => {
        if (!response.ok) throw new Error(`products.json returned ${response.status}`);
        return response.json();
      })
      .then(setProducts)
      .catch(error => console.error('Unable to load product details:', error));
  }, []);

  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return products.filter(product => {
      const title = formatTitle(product.title);
      const matchCat = activeCat === "ALL" || product.category === activeCat;
      const matchSearch = !query || `${title} ${product.colors}`.toLowerCase().includes(query);
      return matchCat && matchSearch;
    });
  }, [products, activeCat, searchQuery]);

  return (
    <div className="min-h-screen bg-[#F8F9FB]">
      <div className="bg-[var(--secondary)] py-16 text-white border-b border-white/5">
        <div className="w-[1200px] mx-auto px-4 lg:text-left text-center">
          <div className="flex flex-col gap-4">
             <div className="flex items-center justify-center lg:justify-start gap-2 text-[var(--primary-bright)] text-xs font-black tracking-widest uppercase">
                <a href="/" className="hover:underline">Home</a>
                <ChevronRight size={12} />
                <span>Product Catalog</span>
             </div>
             <h1 className="text-5xl font-black tracking-tighter uppercase leading-none">REAL <span className="text-[var(--primary-bright)]">Remai Inventory</span></h1>

          </div>
        </div>
      </div>

      <main className="w-[1200px] mx-auto py-12 px-4 flex flex-col lg:flex-row gap-8">
        <aside className="w-full lg:w-64 flex-shrink-0 flex flex-col gap-8">
          <div className="bg-white p-6 rounded-[32px] shadow-sm border border-gray-100">
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] mb-8 text-[var(--secondary)] flex items-center gap-2">
              <Filter size={14} /> Catalog Filter
            </h3>
            <div className="flex flex-col gap-3">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCat(cat)}
                  className={`text-left px-5 py-3 rounded-2xl text-[10px] font-black uppercase transition-all duration-300 ${
                    activeCat === cat 
                    ? "bg-[var(--secondary)] text-white shadow-xl translate-x-2" 
                    : "text-gray-400 hover:bg-gray-50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </aside>

        <section className="flex-1 flex flex-col gap-8">
          <div className="flex justify-between items-center bg-white p-5 rounded-[24px] border border-gray-100 shadow-sm">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300" size={16} />
              <input 
                type="text" 
                placeholder="Search precise product names..." 
                className="w-full pl-14 pr-4 py-3.5 bg-gray-50 border-none rounded-xl text-sm outline-none focus:ring-2 ring-[var(--primary-bright)]/20"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="text-[9px] font-black text-white bg-[var(--secondary)] px-5 py-2.5 rounded-full uppercase tracking-widest ml-4">
              {filteredProducts.length} Verified SKUs
            </div>
          </div>

          <div className="grid gap-6">
            {filteredProducts.map((p, idx) => (
              <article key={p.id || idx} className="group grid gap-6 rounded-[28px] border border-gray-100 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-xl md:min-h-[292px] md:grid-cols-[220px_minmax(0,1fr)_190px] md:items-stretch">
                <div className="relative flex h-[220px] w-full items-center justify-center overflow-hidden rounded-[22px] border border-gray-100 bg-[#F7F8FA] p-5 md:h-full md:min-h-[240px]">
                  {p.image ? (
                    <img src={p.image} alt={formatTitle(p.title)} className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105" />
                  ) : (
                    <div className="text-center text-xs font-black uppercase tracking-widest text-gray-300">Image unavailable</div>
                  )}
                  <div className="absolute right-3 top-3 rounded-full border border-gray-100 bg-white/90 p-2 opacity-0 shadow-sm transition-opacity group-hover:opacity-100">
                    <CheckCircle2 size={15} className="text-blue-500" />
                  </div>
                </div>

                <div className="flex min-w-0 flex-col justify-between py-1 md:pr-2">
                  <div>
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-[var(--primary-bright)]/10 px-3 py-1 text-[9px] font-black uppercase tracking-[0.16em] text-[var(--primary-bright)]">{p.category}</span>
                      <span className="text-[9px] font-black uppercase tracking-[0.12em] text-blue-600">Factory Direct</span>
                    </div>
                      <h2 className="mb-6 line-clamp-2 text-xl font-black uppercase leading-[1.18] tracking-tight text-[var(--secondary)] transition-colors group-hover:text-[var(--primary-bright)]">{formatTitle(p.title)}</h2>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
                      <div className="min-w-0">
                        <span className="mb-1.5 block text-[9px] font-black uppercase tracking-[0.16em] text-gray-300">Material Manifest</span>
                        <span className="block truncate text-xs font-bold uppercase leading-tight text-gray-700">{p.material}</span>
                      </div>
                      <div className="min-w-0">
                        <span className="mb-1.5 block text-[9px] font-black uppercase tracking-[0.16em] text-gray-300">Available Tones</span>
                        <span className="block truncate text-xs font-bold uppercase leading-tight text-gray-700">{p.colors}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex min-h-[220px] flex-col items-center justify-between rounded-[22px] border border-gray-100 bg-[#F7F8FA] p-6 text-center md:min-h-0">
                  <div className="w-full">
                    <span className="mb-3 block text-[9px] font-black uppercase tracking-[0.22em] text-gray-400">FOB Price (USD)</span>
                    <div className="mb-4 whitespace-nowrap text-3xl font-black leading-none tracking-tight text-[var(--secondary)]">{formatPrice(p.price) === 'Contact' ? 'Contact' : `$${formatPrice(p.price)}`}</div>
                    <span className="inline-flex whitespace-nowrap rounded-full border border-gray-100 bg-white px-4 py-2 text-[9px] font-black uppercase tracking-[0.08em] text-[var(--primary-bright)] shadow-sm">MOQ: {p.moq} PCS</span>
                  </div>
                  <button className="mt-5 w-full rounded-full bg-[var(--secondary)] px-3 py-3.5 text-[8px] font-black uppercase tracking-[0.18em] text-white shadow-md transition-colors hover:bg-[var(--primary-bright)]">Start Catalog Order</button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductCatalog;

