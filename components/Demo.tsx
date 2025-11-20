import React from 'react';
import { TabletSmartphone } from 'lucide-react';

const Demo: React.FC = () => {
  return (
    <section id="demo" className="py-20 bg-gradient-to-b from-neutral-900 to-neutral-950 border-t border-neutral-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Area */}
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-flex items-center gap-3 text-gold-400">
              <TabletSmartphone className="w-6 h-6" />
              <span className="font-bold tracking-widest text-sm uppercase">Experiência Fluida</span>
            </div>
            
            <h2 className="text-4xl font-bold text-white leading-snug">
              Veja como é elegante e simples o painel do seu novo <span className="text-gold-500">sistema vitalício.</span>
            </h2>
            
            <p className="text-gray-400 text-lg">
              Projetado com foco na usabilidade. Em poucos toques, você gerencia sua agenda, financeiro e clientes. Sem menus confusos ou configurações complexas. Tudo o que você precisa, onde você precisa.
            </p>
            
            <ul className="space-y-4 mt-6">
                {['Design Responsivo (Celular, Tablet e PC)', 'Tema Escuro Nativo', 'Carregamento Ultra-rápido'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300">
                        <div className="w-2 h-2 bg-gold-500 rounded-full shadow-[0_0_10px_rgba(197,160,40,0.8)]"></div>
                        {item}
                    </li>
                ))}
            </ul>
          </div>

          {/* Image Area */}
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-neutral-800 shadow-2xl shadow-black group">
              <img 
                src="https://picsum.photos/id/445/800/600" 
                alt="Barber using tablet" 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80"></div>
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-neutral-900/90 backdrop-blur border border-white/10 p-4 rounded-lg shadow-xl flex items-center gap-4">
                    <img src="https://picsum.photos/id/64/100/100" alt="Avatar" className="w-12 h-12 rounded-full border-2 border-gold-500" />
                    <div>
                        <p className="text-white font-semibold">Próximo Cliente</p>
                        <p className="text-gold-400 text-sm">14:30 - Corte + Barba</p>
                    </div>
                    <div className="ml-auto bg-green-500/20 text-green-400 px-3 py-1 rounded text-xs font-bold uppercase border border-green-500/30">
                        Confirmado
                    </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold-600/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-600/5 rounded-full blur-3xl"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Demo;