
import React from 'react';
import { Check } from 'lucide-react';

interface PricingCardProps {
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ name, price, features, recommended }) => (
  <div className={`p-8 rounded-[2.5rem] flex flex-col transition-all duration-500 hover:-translate-y-2 ${recommended ? 'glass border-[#00F5FF]/50 shadow-[0_0_50px_rgba(0,245,255,0.1)] relative overflow-hidden' : 'bg-white/5 border border-white/10'}`}>
    {recommended && (
      <div className="absolute top-4 right-[-35px] bg-[#00F5FF] text-[#0B0E14] text-[10px] font-black py-1 px-10 rotate-45 uppercase tracking-widest">
        Destaque
      </div>
    )}
    <h3 className="text-xl font-bold mb-2">{name}</h3>
    <div className="flex items-baseline gap-1 mb-6">
      <span className="text-4xl font-black">{price}</span>
      {price !== 'Custom' && <span className="text-[#94A3B8]">/mês</span>}
    </div>
    <ul className="space-y-4 mb-8 flex-1">
      {features.map((feature, i) => (
        <li key={i} className="flex items-center gap-3 text-sm text-[#94A3B8]">
          <div className="w-5 h-5 rounded-full bg-[#00F5FF]/10 flex items-center justify-center">
            <Check className="w-3 h-3 text-[#00F5FF]" />
          </div>
          {feature}
        </li>
      ))}
    </ul>
    <button className={`w-full py-4 rounded-2xl font-bold transition-all ${recommended ? 'bg-[#00F5FF] text-[#0B0E14] hover:shadow-[0_0_20px_#00F5FF]' : 'bg-white text-[#0B0E14] hover:bg-[#00F5FF]'}`}>
      Começar Agora
    </button>
  </div>
);

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 md:py-40 bg-[#0B0E14]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Planos Transparentes</h2>
          <p className="text-[#94A3B8]">Escolha a escala ideal para o seu crescimento.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard 
            name="Starter" 
            price="R$ 199" 
            features={["Até 5.000 requisições", "Painel Básico", "Suporte via Email", "1 Usuário Admin"]}
          />
          <PricingCard 
            name="Growth" 
            price="R$ 499" 
            recommended
            features={["Até 50.000 requisições", "Painel Advanced", "Suporte 24/7", "5 Usuários Admin", "Integrações Ilimitadas"]}
          />
          <PricingCard 
            name="Enterprise" 
            price="Custom" 
            features={["Volume sob medida", "Gerente de conta dedicado", "SLA Garantido", "Usuários Ilimitados", "Treinamento Presencial"]}
          />
        </div>
      </div>
    </section>
  );
};
