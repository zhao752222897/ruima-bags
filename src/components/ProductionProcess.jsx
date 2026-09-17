import React, { useState } from 'react';

const STEPS = [
  { 
    id: '01', 
    title: 'Paper Pattern', 
    desc: 'Our design team transforms conceptual ideas into precise technical drawings and paper patterns, ensuring every dimension meets client specifications.', 
    img: '/assets/images/proc-1.png' 
  },
  { 
    id: '02', 
    title: 'Precision Cutting', 
    desc: 'Utilizing advanced vertical and laser cutting machinery to ensure perfectly uniform parts with zero waste and maximum edge precision.', 
    img: '/assets/images/proc-2.png' 
  },
  { 
    id: '03', 
    title: 'Stitched with Care', 
    desc: 'Expert craftsmanship at the assembly line where heavy-duty industrial sewing machines create durable, double-reinforced seams for long-lasting use.', 
    img: '/assets/images/proc-3.png' 
  },
  { 
    id: '04', 
    title: 'Rigid Quality Control', 
    desc: 'Every single bag undergoes a rigorous 12-point inspection process, covering tensile strength, water resistance, and hardware smooth-pull testing.', 
    img: '/assets/images/proc-4.png' 
  },
  { 
    id: '05', 
    title: 'Secure Assembly & Packing', 
    desc: 'Final protective hardware application and eco-friendly packaging preparation for worldwide distribution from our global logistics hub.', 
    img: '/assets/images/proc-5.png' 
  },
];

export const ProductionProcess = () => {
  const [activeIdx, setActiveIdx] = useState(1); // Default active is step 2 (Cutting) like the screenshot

  return (
    <section className="bg-[#FBFBFB] py-24 full-bleed-band mb-[20px]">
      <div className="w-full max-w-[1500px] mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[11px] font-black tracking-[0.4em] text-[var(--primary-bright)] uppercase">Excellence from start to finish</span>
          <h2 className="text-5xl font-black text-[var(--secondary)] mt-4 tracking-tighter uppercase leading-none">
            FROM CONCEPT TO COMPLETION
          </h2>
          <p className="text-[var(--muted)] text-sm mt-6 max-w-2xl mx-auto">
            At Ruima, we are pursuing precise manufacturing standards, allowing us to ensure the best design requirements and durability for our global clients.
          </p>
        </div>

        <ul className="flex w-full overflow-hidden rounded-2xl shadow-2xl">
          {STEPS.map((step, index) => (
            <li 
              key={step.id}
              className={`process-accordion-item ${activeIdx === index ? 'active' : ''}`}
              onMouseEnter={() => setActiveIdx(index)}
            >
              <img 
                src={step.img} 
                alt={step.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] ease-out" 
                style={{ transform: activeIdx === index ? 'scale(1.1)' : 'scale(1)' }}
              />
              <div className="process-overlay"></div>
              
              {/* Collapsed View Number & Title */}
              <div className={`absolute inset-0 flex flex-col items-center justify-start pt-32 transition-opacity duration-300 ${activeIdx === index ? 'opacity-0' : 'opacity-100'}`}>
                <span className="process-number">{step.id}</span>
                <h5 className="process-label vertical-text">{step.title}</h5>
              </div>

              {/* Active Caption */}
              <div className="process-caption">
                <div className="w-[800px] mx-auto">
                  <div className="text-[var(--primary-bright)] text-xs font-black tracking-[0.3em] uppercase mb-2">{step.id}</div>
                  <h5 className="text-3xl font-black text-white mb-4 uppercase tracking-tight">{step.title}</h5>
                  <p className="text-white/70 text-base font-light leading-relaxed px-12">{step.desc}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
