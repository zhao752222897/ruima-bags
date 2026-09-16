import React from 'react';
import { ChevronRight } from 'lucide-react';

const ProductCard = ({ title, price, moq, sold }) => (
  <div className="bg-white border border-rm-line hover:border-rm-orange-500 transition-colors group cursor-pointer">
    <div className="aspect-square bg-rm-gray-50 flex items-center justify-center p-4">
      <div className="w-full h-full bg-white/20 border border-dashed border-rm-line rounded flex items-center justify-center text-rm-text-666 text-xs text-center p-2">
        {title} Image Placeholder
      </div>
    </div>
    <div className="p-4">
      <h4 className="text-sm text-rm-text-666 line-clamp-2 min-h-[40px] mb-2 group-hover:text-rm-text-333 transition-colors">
        {title}
      </h4>
      <div className="font-bold text-rm-text-333 text-lg mb-1">{price}</div>
      <div className="text-xs text-rm-text-666 mb-1">Min. Order: {moq}</div>
      {sold && <div className="text-xs text-rm-orange-500 font-medium italic">{sold} sold</div>}
    </div>
  </div>
);

const CategorySection = ({ title, subhead, products }) => (
  <div className="mb-16">
    {/* Category Banner */}
    <div className="bg-gradient-to-r from-rm-navy-900 to-rm-navy-800 text-white p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between mb-8">
      <div>
        <h3 className="text-3xl font-bold mb-2 uppercase italic tracking-tighter">
          VERSATILE / <span className="text-rm-gold">{title}</span>
        </h3>
        <p className="text-white/60 max-w-md text-sm leading-relaxed mb-6">
          {subhead}
        </p>
        <button className="bg-rm-orange-500 text-white px-6 py-2 rounded-sm font-bold text-sm uppercase flex items-center hover:bg-rm-orange-600 transition-colors">
          VIEW MORE <ChevronRight size={16} className="ml-1" />
        </button>
      </div>
      <div className="hidden lg:flex space-x-4 mt-8 md:mt-0">
        <div className="w-24 h-24 bg-white/10 rounded-full border border-white/20"></div>
        <div className="w-24 h-24 bg-white/10 rounded-full border border-white/20 translate-y-4"></div>
      </div>
    </div>

    {/* Product Grid */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {products.map((p, i) => <ProductCard key={i} {...p} />)}
    </div>
  </div>
);

const ProductSection = () => {
  const categories = [
    {
      title: "LUGGAGE",
      subhead: "High-performance travel solutions engineered for durability and style.",
      products: [
        { title: "Oxford Cloth Soft Shell Luggage", price: "$29.69 - 37.92", moq: "1 unit", sold: "2" },
        { title: "Customizable Unisex 20-inch Neoprene Spinner", price: "$136.92", moq: "1 unit" },
        { title: "Lightweight Neoprene Travel Trolley", price: "$59.08", moq: "1 unit" },
        { title: "Premium Neoprene Business Travel Trolley Set", price: "$89.50", moq: "1 unit" },
        { title: "Durable 1680D Oxford Cloth Travel Bag", price: "$15.80", moq: "10 units" }
      ]
    },
    {
      title: "BACKPACKS",
      subhead: "Designed for comfort and durability. Quality is and always will be our highest priority.",
      products: [
        { title: "Waterproof Multi-Compartment Backpack", price: "$10.38 - 11.55", moq: "10 units" },
        { title: "Anime-Inspired School Backpack", price: "$11.50", moq: "10 units" },
        { title: "Ladies' Backpack with Bow Canvas", price: "$8.07 - 8.77", moq: "10 units" },
        { title: "Chinese Ink Wash Print Nylon Backpack", price: "$12.50 - 14.00", moq: "10 units", sold: "5" },
        { title: "Korean Graffiti Print School Bag", price: "$10.50 - 12.00", moq: "10 units" }
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {categories.map((c, i) => <CategorySection key={i} {...c} />)}
      </div>
    </section>
  );
};

export default ProductSection;
