import React, { useEffect, useMemo, useState } from 'react';
import { ArrowLeft, Check, ChevronRight, Factory, Mail, PackageCheck, ShieldCheck, Truck } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { usePageSeo } from '../lib/seo';

const cleanTitle = (value) => {
  if (!value) return 'Product details available on request';
  return value
    .replace(/\s+-\s+Buy Product on Alibaba\.com.*$/i, '')
    .replace(/\s+Buy Product on Alibaba\.com.*$/i, '')
    .trim();
};

const formatPrice = (value) => {
  const match = String(value || '').match(/[0-9]+(?:\.[0-9]+)?/);
  return match ? match[0] : 'Contact';
};

const splitValues = (value) => String(value || '')
  .split(/[\n;,]+/)
  .map(item => item.replace(/[“”]/g, '').trim())
  .filter(Boolean);

const detailRows = (product) => [
  { label: 'Category', value: product.category || 'Factory catalog' },
  { label: 'Material', value: product.material || 'Factory certified material' },
  { label: 'MOQ', value: `${product.moq || 'Contact'} PCS` },
  { label: 'Product reference', value: `RM-${product.serial || product.id}` }
];

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetch('/products.json')
      .then(response => {
        if (!response.ok) throw new Error(`products.json returned ${response.status}`);
        return response.json();
      })
      .then(setProducts)
      .catch(error => console.error('Unable to load product details:', error));
  }, []);

  const product = useMemo(
    () => products.find(item => item.id === decodeURIComponent(productId || '')),
    [products, productId]
  );

  usePageSeo({
    title: product ? `${cleanTitle(product.title)} | OEM Product Details | SHANXI RUIMA` : 'Product Details | SHANXI RUIMA',
    description: product ? `Review product details, reference price, MOQ, materials and customization options for ${cleanTitle(product.title)} from Shanxi Ruima.` : 'Review factory-direct product details from Shanxi Ruima.',
    path: `/products/${productId || ''}`,
    type: 'product'
  });

  if (!product) {
    return (
      <main className="min-h-[70vh] bg-[#F8F9FB] px-4 py-24 text-center">
        <p className="mb-6 text-xs font-black uppercase tracking-[0.24em] text-gray-400">Product not found</p>
        <button onClick={() => navigate('/products')} className="rounded-full bg-[var(--secondary)] px-6 py-3 text-xs font-black uppercase tracking-widest text-white">
          Back to catalog
        </button>
      </main>
    );
  }

  const title = cleanTitle(product.title);
  const colors = splitValues(product.colors);
  const price = formatPrice(product.price);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#F8F9FB]">
      <div className="border-b border-white/10 bg-[var(--secondary)] text-white">
        <div className="mx-auto flex w-[1200px] max-w-full items-center gap-2 px-4 py-5 text-[10px] font-black uppercase tracking-[0.18em] text-white/50">
          <button onClick={() => navigate('/products')} className="inline-flex items-center gap-2 transition-colors hover:text-white">
            <ArrowLeft size={14} /> Product catalog
          </button>
          <ChevronRight size={12} />
          <span className="truncate text-[var(--primary-bright)]">{title}</span>
        </div>
      </div>

      <section className="mx-auto w-[1200px] max-w-full px-4 py-10 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(380px,0.92fr)]">
          <div className="rounded-[30px] border border-gray-100 bg-white p-6 shadow-sm lg:p-10">
            <div className="mb-5 flex items-center justify-between">
              <span className="rounded-full bg-[var(--primary-bright)]/10 px-4 py-2 text-[9px] font-black uppercase tracking-[0.18em] text-[var(--primary-bright)]">{product.category}</span>
              <span className="inline-flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.16em] text-blue-600"><ShieldCheck size={14} /> Factory verified</span>
            </div>
            <div className="flex min-h-[440px] items-center justify-center overflow-hidden rounded-[24px] bg-[#F7F8FA] p-8">
              <img src={product.image} alt={title} className="max-h-[500px] w-full object-contain transition-transform duration-700 hover:scale-105" />
            </div>
            <p className="mt-5 text-center text-[9px] font-black uppercase tracking-[0.2em] text-gray-300">Primary product image · color and finish can be customized</p>
          </div>

          <div className="flex flex-col">
            <p className="mb-4 text-[10px] font-black uppercase tracking-[0.28em] text-[var(--primary-bright)]">SHANXI RUIMA · OEM / ODM</p>
            <h1 className="mb-6 text-3xl font-black uppercase leading-[1.1] tracking-tight text-[var(--secondary)] lg:text-5xl">{title}</h1>
            <p className="mb-8 max-w-xl text-sm leading-7 text-gray-500">A factory-direct product from the SHANXI RUIMA catalog. Confirm the final size, color, branding and packaging requirements with our team before production.</p>

            <div className="mb-8 rounded-[24px] border border-gray-100 bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-end justify-between gap-4 border-b border-gray-100 pb-5">
                <div>
                  <span className="mb-2 block text-[9px] font-black uppercase tracking-[0.22em] text-gray-400">Reference price · USD</span>
                  <strong className="text-4xl font-black tracking-tight text-[var(--secondary)]">{price === 'Contact' ? price : `$${price}`}</strong>
                </div>
                <span className="rounded-full border border-gray-100 bg-[#F7F8FA] px-4 py-2 text-[9px] font-black uppercase tracking-[0.12em] text-[var(--primary-bright)]">MOQ {product.moq || 'Contact'} PCS</span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {detailRows(product).map(row => (
                  <div key={row.label} className="min-w-0">
                    <span className="mb-1 block text-[9px] font-black uppercase tracking-[0.16em] text-gray-400">{row.label}</span>
                    <span className="block truncate text-xs font-bold uppercase text-gray-700">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="rounded-[24px] bg-[var(--secondary)] p-6 text-white shadow-xl">
              <div className="mb-5 flex items-center gap-3">
                <Mail size={18} className="text-[var(--primary-bright)]" />
                <div>
                  <h2 className="text-sm font-black uppercase tracking-widest">Request product details</h2>
                  <p className="mt-1 text-[10px] text-white/50">Get a quote for this exact product.</p>
                </div>
              </div>
              <label className="mb-2 block text-[9px] font-black uppercase tracking-[0.18em] text-white/50" htmlFor="quantity">Target quantity (PCS)</label>
              <input id="quantity" value={quantity} onChange={event => setQuantity(event.target.value)} placeholder={`MOQ ${product.moq || 'available on request'}`} className="mb-4 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-[var(--primary-bright)]" />
              <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-full bg-[var(--primary-bright)] px-5 py-3.5 text-[10px] font-black uppercase tracking-[0.18em] text-white transition-transform hover:scale-[1.02]">
                {submitted ? <><Check size={15} /> Request noted</> : <>Send inquiry <ChevronRight size={15} /></>}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <section className="rounded-[28px] border border-gray-100 bg-white p-7 shadow-sm lg:p-9">
            <p className="mb-3 text-[9px] font-black uppercase tracking-[0.24em] text-[var(--primary-bright)]">Product specification</p>
            <h2 className="mb-6 text-2xl font-black uppercase tracking-tight text-[var(--secondary)]">Available tones & customization</h2>
            <div className="flex flex-wrap gap-2">
              {colors.length ? colors.map(color => <span key={color} className="rounded-full border border-gray-200 bg-[#F7F8FA] px-4 py-2 text-xs font-bold uppercase text-gray-600">{color}</span>) : <span className="text-sm text-gray-500">Color options available on request.</span>}
            </div>
            <div className="mt-8 grid gap-5 border-t border-gray-100 pt-7 sm:grid-cols-3">
              {[
                { icon: Factory, title: 'OEM / ODM', text: 'Logo, color and structure support.' },
                { icon: PackageCheck, title: 'Packaging', text: 'Retail and export packaging options.' },
                { icon: Truck, title: 'Global delivery', text: 'Confirm shipping terms with the team.' }
              ].map(({ icon: Icon, title: itemTitle, text }) => (
                <div key={itemTitle}>
                  <Icon size={20} className="mb-3 text-[var(--primary-bright)]" />
                  <h3 className="mb-1 text-[10px] font-black uppercase tracking-widest text-[var(--secondary)]">{itemTitle}</h3>
                  <p className="text-xs leading-5 text-gray-500">{text}</p>
                </div>
              ))}
            </div>
          </section>

          <aside className="rounded-[28px] bg-[#FFF7F0] p-7 lg:p-9">
            <p className="mb-3 text-[9px] font-black uppercase tracking-[0.24em] text-[var(--primary-bright)]">Next step</p>
            <h2 className="mb-4 text-2xl font-black uppercase tracking-tight text-[var(--secondary)]">Make it yours</h2>
            <p className="mb-6 text-sm leading-7 text-gray-600">Share your target quantity, preferred colors and branding requirements. We will confirm the production details before moving forward.</p>
            <button onClick={() => navigate('/products')} className="inline-flex items-center gap-2 rounded-full bg-[var(--secondary)] px-5 py-3 text-[10px] font-black uppercase tracking-widest text-white">Browse more products <ChevronRight size={15} /></button>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default ProductDetail;
