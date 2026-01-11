
import React from 'react';
import { Shield, Zap, TrendingUp, Layers, MousePointer2, Smartphone } from 'lucide-react';

interface BentoItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const BentoItem: React.FC<BentoItemProps> = ({ title, description, icon, className }) => (
  <div className={`glass group p-8 rounded-3xl flex flex-col justify-between hover:border-[#00F5FF]/50 hover:shadow-[0_0_40px_rgba(0,245,255,0.1)] transition-all duration-500 cursor-default ${className}`}>
    <div className="w-12 h-12 rounded-2xl bg-[#00F5FF]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <div>
      <h3 className="text-xl font-bold mb-2 group-hover:text-[#00F5FF] transition-colors">{title}</h3>
      <p className="text-[#94A3B8] text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

export const BentoGrid: React.FC = () => {
  return (
    <section id="features" className="py-20 md:py-32 bg-[#0B0E14]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Construído para o Amanhã</h2>
          <p className="text-[#94A3B8]">Tecnologia de ponta para empresas que não aceitam o comum.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:grid-rows-2 h-auto md:h-[600px]">
          <BentoItem 
            title="Inteligência Nativa" 
            description="Algoritmos que aprendem com seu fluxo de trabalho, otimizando cada etapa automaticamente."
            icon={<Zap className="text-[#00F5FF]" />}
            className="md:col-span-2 md:row-span-1"
          />
          <BentoItem 
            title="Segurança de Elite" 
            description="Criptografia de ponta a ponta e conformidade total com LGPD/GDPR."
            icon={<Shield className="text-[#00F5FF]" />}
            className="md:col-span-1 md:row-span-1"
          />
          <BentoItem 
            title="Analytics 360°" 
            description="Visualize cada métrica em tempo real."
            icon={<TrendingUp className="text-[#00F5FF]" />}
            className="md:col-span-1 md:row-span-1"
          />
          <BentoItem 
            title="Implantar Instantâneo" 
            description="Instale e configure sua infraestrutura em menos de 10 minutos, sem fricção."
            icon={<Layers className="text-[#00F5FF]" />}
            className="md:col-span-1 md:row-span-1"
          />
          <BentoItem 
            title="Interface Adaptativa" 
            description="Experiência fluida em qualquer dispositivo com UI preditiva."
            icon={<Smartphone className="text-[#00F5FF]" />}
            className="md:col-span-2 md:row-span-1"
          />
          <BentoItem 
            title="Automação Low-Code" 
            description="Crie workflows complexos arrastando e soltando."
            icon={<MousePointer2 className="text-[#00F5FF]" />}
            className="md:col-span-1 md:row-span-1"
          />
        </div>
      </div>
    </section>
  );
};
