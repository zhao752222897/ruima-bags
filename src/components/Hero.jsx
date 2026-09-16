import React from 'react';
import { ShieldCheck, Clock, Shield, ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full bg-rm-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-12 lg:py-24 flex flex-col lg:flex-row items-center">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 z-10">
          <h2 className="text-rm-navy-800 text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
            Uncompromising <br /> for Your Bags
          </h2>
          <p className="text-rm-text-666 text-xl mb-8">
            Eliminating risks and ensuring reliability.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="flex items-center space-x-3">
              <ShieldCheck className="text-rm-orange-500 w-10 h-10 shrink-0" />
              <span className="text-xs font-bold leading-tight uppercase">100% Quality Inspection</span>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="text-rm-orange-500 w-10 h-10 shrink-0" />
              <span className="text-xs font-bold leading-tight uppercase">On-Time Delivery Guarantee</span>
            </div>
            <div className="flex items-center space-x-3">
              <Shield className="text-rm-orange-500 w-10 h-10 shrink-0" />
              <span className="text-xs font-bold leading-tight uppercase">Safety & Assurance</span>
            </div>
          </div>

          <div className="bg-white p-6 border-l-4 border-rm-orange-500 shadow-sm max-w-md">
            <h3 className="text-rm-orange-500 font-bold mb-4 flex items-center">
              Options <ChevronRight size={16} />
            </h3>
            <ul className="space-y-2 text-sm text-rm-text-666">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-rm-orange-500 rounded-full mt-1.5 mr-3 shrink-0"></span>
                Silver Stamping, embossing, etc.
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-rm-orange-500 rounded-full mt-1.5 mr-3 shrink-0"></span>
                Glossy, Matte, Lychee Custom Embossing
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-rm-orange-500 rounded-full mt-1.5 mr-3 shrink-0"></span>
                Color Card Selection
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-rm-orange-500 rounded-full mt-1.5 mr-3 shrink-0"></span>
                Customizable Carton Color, Shipping Mark
              </li>
            </ul>
          </div>
        </div>

        {/* Visual Content Placeholder */}
        <div className="w-full lg:w-1/2 mt-12 lg:mt-0 lg:pl-12 relative">
          <div className="bg-rm-navy-900/5 aspect-square rounded-lg flex items-center justify-center border-2 border-dashed border-rm-line">
            <p className="text-rm-text-666 text-sm">Main Product / Quality Inspection Photo Placeholder</p>
          </div>
          {/* Decorative elements */}
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-rm-orange-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-rm-navy-800/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
