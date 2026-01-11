
import React from 'react';
import { Target, Users, Zap, Globe } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="pt-32 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="max-w-7xl mx-auto px-6">
        <header className="text-center mb-20">
          <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tight">
            Nossa <span className="text-gradient">Missão</span>
          </h1>
          <p className="max-w-3xl mx-auto text-[#94A3B8] text-lg md:text-xl leading-relaxed">
            Na Nexus Flow, acreditamos que a tecnologia deve ser um acelerador silencioso. Nossa missão é remover a complexidade da infraestrutura digital para que sua empresa possa focar no que realmente importa: inovar.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          <div className="glass p-10 rounded-[2.5rem] border-white/10">
            <div className="w-14 h-14 bg-[#00F5FF]/10 rounded-2xl flex items-center justify-center mb-6">
              <Target className="text-[#00F5FF] w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-white">Inovação Radical</h2>
            <p className="text-[#94A3B8] leading-relaxed">
              Não apenas resolvemos problemas; reinventamos processos. Nossa equipe de engenharia trabalha na fronteira do que é possível com IA e sistemas distribuídos.
            </p>
          </div>
          <div className="glass p-10 rounded-[2.5rem] border-white/10">
            <div className="w-14 h-14 bg-[#00F5FF]/10 rounded-2xl flex items-center justify-center mb-6">
              <Globe className="text-[#00F5FF] w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-white">Impacto Global</h2>
            <p className="text-[#94A3B8] leading-relaxed">
              Com clientes em 4 continentes, a Nexus Flow sustenta operações críticas que movem bilhões em dados diariamente.
            </p>
          </div>
        </div>

        <section className="mb-32">
          <h2 className="text-3xl font-bold mb-12 text-center">Nossos Números</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { label: 'Uptime', value: '99.99%' },
              { label: 'Países', value: '25+' },
              { label: 'Integrações', value: '150+' },
              { label: 'Processado/mês', value: '12PB' }
            ].map((stat, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/5">
                <p className="text-[#00F5FF] text-3xl font-black mb-2">{stat.value}</p>
                <p className="text-sm text-[#94A3B8] uppercase tracking-widest font-bold">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center py-20 glass rounded-[3rem] border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00F5FF]/5 blur-[100px] rounded-full" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Pronto para o próximo nível?</h2>
          <p className="text-[#94A3B8] mb-10 max-w-xl mx-auto">
            Junte-se às centenas de empresas que já transformaram suas operações com a Nexus Flow.
          </p>
          <button className="px-10 py-4 bg-[#00F5FF] text-[#0B0E14] font-bold rounded-full hover:shadow-[0_0_30px_rgba(0,245,255,0.4)] transition-all">
            Fale com um Especialista
          </button>
        </section>
      </div>
    </div>
  );
};
