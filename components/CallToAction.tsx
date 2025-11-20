import React from 'react';
import { MessageCircle, Check } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-24 relative bg-neutral-950 overflow-hidden flex items-center justify-center text-center">
      {/* Neon/Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gold-600/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          A nova era dos <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gold-200 to-gold-500">agendamentos chegou.</span>
        </h2>
        
        <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-12 font-light">
          Tenha seu sistema próprio e vitalício com total controle do seu negócio. Sem mensalidades, sem surpresas.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <button className="w-full md:w-auto px-10 py-5 bg-gold-600 hover:bg-gold-500 text-neutral-950 text-lg font-bold rounded-lg shadow-[0_0_30px_rgba(197,160,40,0.4)] hover:shadow-[0_0_50px_rgba(197,160,40,0.6)] transition-all duration-300 transform hover:-translate-y-1">
            ADQUIRIR AGORA
          </button>
          
          <button className="w-full md:w-auto px-10 py-5 bg-transparent border border-neutral-700 hover:border-green-500 text-white text-lg font-semibold rounded-lg hover:bg-neutral-900 transition-all duration-300 flex items-center justify-center gap-3 group">
            <MessageCircle className="w-6 h-6 text-green-500 group-hover:text-green-400" />
            <span className="group-hover:text-green-400 transition-colors">Falar via WhatsApp</span>
          </button>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-500 font-medium">
            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-gold-500" /> Acesso Imediato</span>
            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-gold-500" /> Pagamento Seguro</span>
            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-gold-500" /> Satisfação Garantida</span>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;