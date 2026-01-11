
import React, { useState } from 'react';
import { Mail, MessageSquare, MapPin, Phone, CheckCircle2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-32 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="max-w-7xl mx-auto px-6">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tight">
            Vamos <span className="text-gradient">Conversar</span>
          </h1>
          <p className="max-w-2xl mx-auto text-[#94A3B8] text-lg leading-relaxed">
            Estamos prontos para ouvir seus desafios e propor soluções inteligentes que escalam.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2 space-y-8">
            <div className="glass p-8 rounded-3xl border-white/10">
              <h3 className="text-xl font-bold mb-6">Contatos Diretos</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#00F5FF]/10 rounded-xl">
                    <Mail className="w-6 h-6 text-[#00F5FF]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#94A3B8] mb-1">Email Geral</p>
                    <p className="font-bold">hello@nexusflow.io</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#00F5FF]/10 rounded-xl">
                    <Phone className="w-6 h-6 text-[#00F5FF]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#94A3B8] mb-1">Telefone</p>
                    <p className="font-bold">+244 974 723 062</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#00F5FF]/10 rounded-xl">
                    <MapPin className="w-6 h-6 text-[#00F5FF]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#94A3B8] mb-1">Localização</p>
                    <p className="font-bold text-sm">Av. Brigadeiro Faria Lima, 4500<br/>São Paulo, SP - Brasil</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare className="w-5 h-5 text-[#00F5FF]" />
                <h4 className="font-bold">Suporte Prioritário</h4>
              </div>
              <p className="text-sm text-[#94A3B8] mb-4">Clientes Enterprise possuem canal direto no Slack com nossos engenheiros.</p>
              <button className="text-[#00F5FF] text-sm font-bold hover:underline">Acessar Hub de Suporte →</button>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="glass p-8 md:p-12 rounded-[2.5rem] border-white/10 relative">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-20 text-center animate-in zoom-in-95 duration-500">
                  <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Mensagem Enviada!</h3>
                  <p className="text-[#94A3B8]">Em breve um de nossos consultores entrará em contato.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm text-[#94A3B8] ml-1">Nome Completo</label>
                      <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-[#00F5FF] transition-all" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-[#94A3B8] ml-1">Email Corporativo</label>
                      <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-[#00F5FF] transition-all" placeholder="john@empresa.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-[#94A3B8] ml-1">Assunto</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-[#00F5FF] transition-all appearance-none cursor-pointer">
                      <option className="bg-[#0B0E14]">Solicitar Demonstração</option>
                      <option className="bg-[#0B0E14]">Parcerias</option>
                      <option className="bg-[#0B0E14]">Suporte Técnico</option>
                      <option className="bg-[#0B0E14]">Outros</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-[#94A3B8] ml-1">Sua Mensagem</label>
                    <textarea rows={5} className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-[#00F5FF] transition-all resize-none" placeholder="Conte-nos brevemente sobre sua operação..."></textarea>
                  </div>
                  <button type="submit" className="w-full py-5 bg-[#00F5FF] text-[#0B0E14] font-black rounded-2xl hover:shadow-[0_0_40px_rgba(0,245,255,0.3)] transition-all transform active:scale-[0.98]">
                    Enviar Mensagem
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
