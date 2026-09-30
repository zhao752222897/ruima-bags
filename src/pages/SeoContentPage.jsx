import React from 'react';
import { ArrowRight, CheckCircle2, Factory, Globe2, Mail, PackageCheck, Ruler, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { usePageSeo } from '../lib/seo';

const PAGE_CONTENT = {
  luggage: {
    path: '/luggage',
    title: 'Custom Luggage Manufacturer | OEM Suitcases | SHANXI RUIMA',
    description: 'Explore custom hard-shell and soft luggage from Shanxi Ruima, an OEM manufacturer in China serving brands, wholesalers and importers.',
    eyebrow: 'Luggage manufacturing',
    heading: 'Custom luggage built for global travel brands',
    intro: 'Shanxi Ruima supplies factory-direct luggage for brands, wholesalers and importers. Our catalog includes hard-shell suitcases, soft luggage and trolley sets with OEM and ODM support.',
    facts: ['Hard-shell and soft luggage', 'Multiple sizes and color options', 'OEM logo and packaging support', 'EXW, FOB and CIF trade terms'],
    cta: 'Browse luggage products'
  },
  backpacks: {
    path: '/backpacks',
    title: 'Custom Backpack Manufacturer | Student & Laptop Bags | SHANXI RUIMA',
    description: 'Shanxi Ruima manufactures custom student backpacks, laptop backpacks and school bags for wholesalers and global brands.',
    eyebrow: 'Backpack manufacturing',
    heading: 'Backpacks designed for everyday use and private label programs',
    intro: 'From student school bags to business laptop backpacks, Shanxi Ruima develops practical bag programs with materials, colorways and branding tailored to your market.',
    facts: ['Student and school backpacks', 'Laptop and business backpack styles', 'Custom colors and logo placement', 'Factory-direct wholesale supply'],
    cta: 'Browse backpack products'
  },
  'crossbody-bags': {
    path: '/crossbody-bags',
    title: 'Crossbody Bag Manufacturer | Sling, Chest & Casual Bags | SHANXI RUIMA',
    description: 'Discover OEM crossbody, sling, chest and casual bags manufactured by Shanxi Ruima for brands and wholesalers worldwide.',
    eyebrow: 'Casual bag manufacturing',
    heading: 'Crossbody and sling bags for modern everyday carry',
    intro: 'Shanxi Ruima produces compact crossbody, sling, chest and casual bags in practical fabrics and adaptable silhouettes for retail and private label collections.',
    facts: ['Crossbody, sling and chest bags', 'Nylon, canvas and performance fabrics', 'Small-batch sample discussion available', 'Custom colors and brand details'],
    cta: 'Browse crossbody products'
  },
  'oem-odm': {
    path: '/oem-odm',
    title: 'OEM ODM Bag Manufacturing | Custom Luggage and Bags | SHANXI RUIMA',
    description: 'Shanxi Ruima provides OEM and ODM bag manufacturing, from concept and sampling to production, quality control and global logistics.',
    eyebrow: 'Private label services',
    heading: 'From product concept to market-ready bag production',
    intro: 'Our OEM/ODM workflow supports product development, sample confirmation, material selection, logo application, production, inspection and export packing.',
    facts: ['Concept and design coordination', 'Rapid prototyping and sample review', 'Logo, hardware, color and packaging customization', 'Quality control and export logistics'],
    cta: 'Start an OEM / ODM inquiry'
  },
  'company-profile': {
    path: '/company-profile',
    title: 'Company Profile | Shanxi Ruima Bag Manufacturer in Shanxi, China',
    description: 'Learn about Shanxi Ruima Trading Co., Ltd., a Shanxi, China manufacturer supplying luggage, backpacks and casual bags to global buyers.',
    eyebrow: 'About SHANXI RUIMA',
    heading: 'A factory-direct bag partner in Shanxi, China',
    intro: 'Shanxi Ruima Trading Co., Ltd. operates as an OEM/ODM specialist for luggage, backpacks and casual bags. We work with global buyers who need dependable product development and export support.',
    facts: ['Located in Shanxi, China (Mainland)', 'Professional market experience since 2013', 'Product portfolio: suitcases, backpacks and totes', 'Export markets include North America, Europe and Southeast Asia'],
    cta: 'Contact our team'
  },
  'contact-us': {
    path: '/contact-us',
    title: 'Contact Shanxi Ruima | OEM Bag Manufacturer Inquiry',
    description: 'Contact Shanxi Ruima for OEM and ODM luggage, backpack and casual bag inquiries. Share your target product, quantity, colors and branding needs.',
    eyebrow: 'Start a conversation',
    heading: 'Tell us what you want to manufacture',
    intro: 'For a useful first quotation, share the product category, target quantity, preferred colors, logo requirements and destination market. Our team can then confirm the appropriate product and trade details.',
    facts: ['Product category and reference image', 'Target quantity and MOQ discussion', 'Color, logo and packaging requirements', 'Destination market and preferred trade terms'],
    cta: 'Open product catalog'
  }
};

const CATEGORY_LINKS = {
  luggage: '/products?category=hard%20case',
  backpacks: '/products?category=Schoolbag',
  'crossbody-bags': '/products?category=Sling%20Bag'
};

const SeoContentPage = ({ pageKey }) => {
  const content = PAGE_CONTENT[pageKey];
  usePageSeo(content);

  const productLink = CATEGORY_LINKS[pageKey] || '/products';
  const ctaTarget = pageKey === 'contact-us' ? '/products' : pageKey === 'oem-odm' || pageKey === 'company-profile' ? '/contact-us' : productLink;

  return (
    <main className="min-h-screen bg-[#F8F9FB]">
      <section data-component="seo-page-hero" className="bg-[var(--secondary)] px-4 py-20 text-white lg:py-28">
        <div className="mx-auto max-w-[1040px]">
          <div className="mb-5 flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.25em] text-[var(--primary-bright)]">
            <Link to="/" className="hover:text-white">Home</Link><ArrowRight size={14} /><span>{content.eyebrow}</span>
          </div>
          <h1 className="max-w-4xl text-4xl font-black uppercase leading-[1.05] tracking-tight md:text-6xl">{content.heading}</h1>
          <p className="mt-7 max-w-3xl text-base leading-8 text-white/70 md:text-lg">{content.intro}</p>
        </div>
      </section>

      <section data-component="seo-page-facts" className="mx-auto max-w-[1040px] px-4 py-14 lg:py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {content.facts.map((fact, index) => {
            const icons = [Factory, PackageCheck, Ruler, Globe2];
            const Icon = icons[index % icons.length];
            return <div key={fact} className="flex gap-4 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm"><Icon className="mt-1 shrink-0 text-[var(--primary-bright)]" size={22} /><span className="text-sm font-bold leading-6 text-[var(--secondary)]">{fact}</span></div>;
          })}
        </div>

        <div className="mt-12 grid gap-8 rounded-[32px] bg-white p-8 shadow-sm lg:grid-cols-[1.2fr_0.8fr] lg:p-12">
          <div>
            <p className="mb-3 text-[10px] font-black uppercase tracking-[0.25em] text-[var(--primary-bright)]">What buyers can confirm</p>
            <h2 className="mb-5 text-3xl font-black uppercase tracking-tight text-[var(--secondary)]">Clear information before production</h2>
            <p className="mb-6 text-sm leading-7 text-gray-600">Every project starts with the actual product requirement. Confirm the sample, material, color, branding, packaging, quantity and destination before production begins. Product-level MOQ and reference pricing are shown in the catalog where available.</p>
            <ul className="space-y-3 text-sm text-gray-600">
              {['Product structure and materials', 'Available colors and customization scope', 'MOQ and reference price', 'Trade terms and export packing'].map(item => <li key={item} className="flex items-center gap-3"><CheckCircle2 size={17} className="text-[var(--primary-bright)]" />{item}</li>)}
            </ul>
          </div>
          <div className="rounded-3xl bg-[#FFF5EC] p-7">
            <ShieldCheck size={28} className="mb-5 text-[var(--primary-bright)]" />
            <h3 className="mb-3 text-xl font-black uppercase text-[var(--secondary)]">Factory-direct discussion</h3>
            <p className="mb-6 text-sm leading-7 text-gray-600">Send the product or category you are interested in. We will use your requirements to guide the next conversation.</p>
            <Link to={ctaTarget} className="inline-flex items-center gap-2 rounded-full bg-[var(--secondary)] px-5 py-3 text-[10px] font-black uppercase tracking-widest text-white">{content.cta}<ArrowRight size={15} /></Link>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-4 rounded-3xl border border-gray-100 bg-white p-6 text-sm text-gray-600 shadow-sm">
          <Mail className="text-[var(--primary-bright)]" size={20} />
          <span>Use the inquiry controls on the site to start a product conversation. No account or checkout is required.</span>
        </div>
      </section>
    </main>
  );
};

export { PAGE_CONTENT };
export default SeoContentPage;
