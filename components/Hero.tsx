
import React, { useState, useEffect } from 'react';
import { ArrowRight, Play } from 'lucide-react';

export const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Sua operação em Hyper-Drive.";
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-52 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00F5FF]/10 border border-[#00F5FF]/20 text-[#00F5FF] text-sm font-semibold mb-8 animate-bounce">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F5FF] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F5FF]"></span>
          </span>
          Nexus v3.0 está disponível
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black mb-6 leading-tight tracking-tight">
          <span className="text-gradient h-32 inline-block leading-normal">
            {displayText}
            <span className="animate-pulse">|</span>
          </span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-[#94A3B8] mb-10 leading-relaxed">
          A Nexus Flow unifica seus processos, automatiza tarefas complexas e entrega insights em tempo real. A infraestrutura que sua empresa precisa para escalar sem limites.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="group px-8 py-4 bg-[#00F5FF] text-[#0B0E14] font-bold rounded-full hover:shadow-[0_0_30px_rgba(0,245,255,0.4)] transition-all flex items-center gap-2 hover:scale-105">
            Solicitar Demo Gratuita
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 glass text-white font-bold rounded-full hover:bg-white/10 transition-all flex items-center gap-2 border border-white/20">
            <Play className="w-5 h-5 fill-current" />
            Assista ao Vídeo
          </button>
        </div>
      </div>
    </section>
  );
};
