import React from 'react';
import { Award, Factory, Search, Puzzle, Globe, Truck } from 'lucide-react';

const WhyChooseUs = () => {
  const items = [
    {
      icon: Award,
      title: "13-Year Expertise",
      desc: "Proven track record in industry leadership and innovation since 2011."
    },
    {
      icon: Factory,
      title: "Factory Direct Price",
      desc: "Eliminate middlemen, get best value directly from source."
    },
    {
      icon: Search,
      title: "Rigorous QC System",
      desc: "Multi-stage inspection processes ensure zero defects and superior quality."
    },
    {
      icon: Puzzle,
      title: "Flexible Customization",
      desc: "Tailored solutions and design options to meet unique business needs."
    },
    {
      icon: Globe,
      title: "Global Compliance",
      desc: "Adhering to international standards and certifications for worldwide markets."
    },
    {
      icon: Truck,
      title: "Stable Supply Chain",
      desc: "Robust network and logistics for consistent, reliable delivery."
    }
  ];

  return (
    <section className="bg-rm-navy-800 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center lg:text-left flex flex-col lg:flex-row lg:items-end justify-between border-b border-white/10 pb-8">
          <div>
            <span className="text-rm-orange-500 font-bold uppercase tracking-widest text-sm mb-2 block">RM ADVANTAGE</span>
            <h2 className="text-3xl lg:text-4xl font-bold">WHY PARTNER WITH RM <br className="hidden md:block"/> FOR YOUR BUSINESS?</h2>
          </div>
          <div className="mt-6 lg:mt-0 text-white/60 max-w-md">
            Partner for Success. We provide vertically integrated manufacturing solutions that empower your brand to lead the market.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {items.map((item, idx) => (
            <div key={idx} className="bg-rm-navy-800 p-8 lg:p-12 transition-all hover:bg-rm-navy-700 group">
              <item.icon className="w-12 h-12 text-rm-orange-500 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-white/60 leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
