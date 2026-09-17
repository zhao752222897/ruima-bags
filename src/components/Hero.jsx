import React, { useState, useEffect } from 'react';

const banners = [
  'https://sc02.alicdn.com/kf/H2f4d4cf213d3432496b45e6d4b226d4aI.jpg', // Banner 1
  'https://sc02.alicdn.com/kf/H8d1d77e3aedc47ab808f1ea7b347dc65q.jpg', // Banner 2
  'https://sc02.alicdn.com/kf/Hb48c347c138f47669f42255d24e49206m.jpg', // Banner 3
  'https://sc02.alicdn.com/kf/H9b679c64591e4062867159d9ad8a160bu.jpg', // Banner 4
  'https://sc02.alicdn.com/kf/H8cc4408921a64e69a5f92a54fd422d24W.jpg'  // Banner 5
];

export const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="full-bleed-band relative overflow-hidden bg-[var(--secondary-deep)] aspect-[1920/650]">
      {/* Carousel Track */}
      <div 
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {banners.map((src, idx) => (
          <div key={idx} className="min-w-full h-full relative">
            <img 
              src={src} 
              alt={`Slide ${idx + 1}`} 
              className="w-full h-full object-fill"
            />
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {banners.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-[25.6px] h-[25.6px] rounded-full border-2 border-white transition-all ${
              current === idx ? 'bg-[var(--primary-bright)] scale-110' : 'bg-transparent'
            }`}
          />
        ))}
      </div>

      {/* Side Overlay (Optional, used for navigation hit areas) */}
      <button 
        onClick={() => setCurrent((prev) => (prev - 1 + banners.length) % banners.length)}
        className="absolute left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-30"
      >
        <div className="bg-black/20 p-4 rounded-full">❮</div>
      </button>
      <button 
        onClick={() => setCurrent((prev) => (prev + 1) % banners.length)}
        className="absolute right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-30"
      >
        <div className="bg-black/20 p-4 rounded-full">❯</div>
      </button>
    </section>
  );
};
