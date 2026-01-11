
import React from 'react';

interface LegalProps {
  type: 'privacy' | 'terms';
}

export const Legal: React.FC<LegalProps> = ({ type }) => {
  const content = {
    privacy: {
      title: 'Política de Privacidade',
      update: 'Última atualização: Outubro de 2024',
      text: [
        'A Nexus Flow valoriza a sua privacidade. Esta política descreve como coletamos e usamos seus dados.',
        'Dados Coletados: Coletamos informações de uso técnico para melhorar nossa infraestrutura e dados de contato fornecidos voluntariamente.',
        'Uso de Dados: Seus dados são usados exclusivamente para a prestação de nossos serviços e comunicações autorizadas.',
        'Compartilhamento: Não vendemos seus dados para terceiros. Compartilhamos apenas com provedores de infraestrutura estritamente necessários.',
        'Segurança: Utilizamos criptografia de nível militar em todos os trânsitos de dados (TLS 1.3) e repouso (AES-256).'
      ]
    },
    terms: {
      title: 'Termos de Serviço',
      update: 'Última atualização: Outubro de 2024',
      text: [
        'Ao utilizar a plataforma Nexus Flow, você concorda com estes termos.',
        'Uso Permitido: A plataforma deve ser usada apenas para fins lícitos e de acordo com as especificações técnicas contratadas.',
        'Propriedade Intelectual: Todo o código, design e marca Nexus Flow são de propriedade exclusiva da Nexus Flow Sistemas Inteligentes.',
        'Limitação de Responsabilidade: A Nexus Flow não se responsabiliza por perdas indiretas resultantes de mau uso da API pelo cliente.',
        'Rescisão: O cliente pode rescindir o contrato a qualquer momento respeitando o aviso prévio definido no plano de adesão.'
      ]
    }
  };

  const active = content[type];

  return (
    <div className="pt-32 pb-20 animate-in fade-in duration-700">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-black mb-2">{active.title}</h1>
        <p className="text-sm text-[#94A3B8] mb-12">{active.update}</p>
        
        <div className="glass p-10 md:p-16 rounded-[2.5rem] border-white/10 prose prose-invert max-w-none">
          {active.text.map((paragraph, i) => (
            <div key={i} className="mb-8">
              <h3 className="text-[#00F5FF] font-bold text-lg mb-4">{paragraph.split(':')[0]}</h3>
              <p className="text-[#94A3B8] leading-relaxed italic">
                {paragraph.split(':').slice(1).join(':') || paragraph}
              </p>
            </div>
          ))}
          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-sm text-[#94A3B8]">Dúvidas sobre nossos termos? Entre em contato com <span className="text-white">legal@nexusflow.io</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};
