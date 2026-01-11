
import React from 'react';
import { Cpu, Send } from 'lucide-react';
import { Page } from '../App';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="pt-20 pb-10 border-t border-white/5 bg-[#0B0E14] relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <button 
              onClick={() => onNavigate('home')}
              className="flex items-center gap-2 mb-6 hover:opacity-80 transition-opacity"
            >
              <Cpu className="w-6 h-6 text-[#00F5FF]" />
              <span className="text-xl font-extrabold tracking-tight">NEXUS <span className="text-[#00F5FF]">FLOW</span></span>
            </button>
            <p className="text-[#94A3B8] text-sm leading-relaxed mb-6">
              Inovação em sistemas inteligentes para a nova era digital. Sua operação na velocidade da luz.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6">Plataforma</h4>
            <ul className="space-y-4 text-sm text-[#94A3B8]">
              <li><button onClick={() => onNavigate('home')} className="hover:text-[#00F5FF] transition-colors">Segurança</button></li>
              <li><button onClick={() => onNavigate('home')} className="hover:text-[#00F5FF] transition-colors">Infraestrutura</button></li>
              <li><button onClick={() => onNavigate('home')} className="hover:text-[#00F5FF] transition-colors">Inteligência Artificial</button></li>
              <li><button onClick={() => onNavigate('home')} className="hover:text-[#00F5FF] transition-colors">Integrações</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Empresa</h4>
            <ul className="space-y-4 text-sm text-[#94A3B8]">
              <li><button onClick={() => onNavigate('about')} className="hover:text-[#00F5FF] transition-colors">Sobre Nós</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-[#00F5FF] transition-colors">Carreiras</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-[#00F5FF] transition-colors">Contato</button></li>
              <li><button onClick={() => onNavigate('privacy')} className="hover:text-[#00F5FF] transition-colors">Privacidade</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Nexus News</h4>
            <p className="text-sm text-[#94A3B8] mb-4">Fique por dentro das atualizações tecnológicas.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Seu melhor email" 
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-[#00F5FF] transition-colors"
              />
              <button className="absolute right-2 top-2 h-8 w-8 bg-[#00F5FF] text-[#0B0E14] rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#94A3B8]">© 2024 Nexus Flow - Sistemas Inteligentes. Todos os direitos reservados.</p>
          <div className="flex gap-6 text-[#94A3B8] text-xs">
            <button onClick={() => onNavigate('terms')} className="hover:text-[#00F5FF]">Termos</button>
            <button onClick={() => onNavigate('privacy')} className="hover:text-[#00F5FF]">Privacidade</button>
            <button onClick={() => onNavigate('contact')} className="hover:text-[#00F5FF]">Suporte</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
