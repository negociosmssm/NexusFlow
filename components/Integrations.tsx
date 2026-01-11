
import React from 'react';

const brands = [
  'Slack', 'AWS', 'Google Cloud', 'Stripe', 'Figma', 'GitHub',
  'Discord', 'Notion', 'Intercom', 'Zoom', 'Vercel', 'Linear'
];

export const Integrations: React.FC = () => {
  return (
    <section className="py-20 border-y border-white/5 bg-[#0B0E14]">
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <p className="text-[#94A3B8] uppercase tracking-[0.3em] text-xs font-bold">Integrado com o mundo</p>
      </div>
      <div className="overflow-hidden flex">
        <div className="infinite-scroll">
          {[...brands, ...brands].map((brand, idx) => (
            <div key={idx} className="w-[250px] flex items-center justify-center px-12 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
               <span className="text-2xl font-bold tracking-tighter text-white/80">{brand}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
