import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-10 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/1033/1920/1080" 
          alt="Barbershop ambiance" 
          className="w-full h-full object-cover opacity-40 grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/90 via-neutral-950/80 to-neutral-950"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gold-600/10 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 z-10 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="space-y-8 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-gold-500/30 bg-gold-500/10 backdrop-blur-sm">
            <ShieldCheck className="w-4 h-4 text-gold-400" />
            <span className="text-xs font-bold tracking-widest text-gold-400 uppercase">Sistema Vitalício</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-2xl">
            O agendamento vitalício que sua barbearia <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-600">sempre pediu.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-lg mx-auto md:mx-0 font-light border-l-2 border-gold-500/50 pl-6">
            Sistema próprio, domínio personalizado e acesso vitalício. Diga adeus às mensalidades e assuma o controle.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="https://wa.me/+5522992938311" target="_blank" rel="noopener noreferrer" className="group relative px-8 py-4 bg-gold-600 hover:bg-gold-500 text-neutral-950 font-bold rounded-lg shadow-[0_0_20px_rgba(197,160,40,0.3)] transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <span className="relative flex items-center justify-center gap-2">
                QUERO MEU SISTEMA AGORA <ArrowRight className="w-5 h-5" />
              </span>
            </a>
          </div>
        </div>

        {/* Hero Image Mockup */}
        <div className="relative group perspective-1000">
          {/* Glow Effect behind */}
          <div className="absolute inset-0 bg-gold-500/20 blur-3xl rounded-full transform translate-y-10"></div>
          
          <div className="relative transform group-hover:rotate-1 transition-transform duration-700 ease-out">
            <img 
              src="https://picsum.photos/id/3/1200/800" 
              alt="Dashboard Preview on Laptop" 
              className="relative w-full rounded-xl shadow-2xl shadow-black border border-white/10 z-10"
            />
            
            {/* Floating Phone Mockup */}
            <div className="absolute -bottom-10 -left-6 w-1/3 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
              <div className="bg-neutral-900 rounded-3xl p-1.5 shadow-2xl shadow-black border border-neutral-700">
                <div className="bg-black rounded-2xl overflow-hidden border border-neutral-800 h-full">
                    <img 
                        src="https://picsum.photos/id/160/400/800"
                        alt="Mobile Schedule" 
                        className="w-full h-auto opacity-80"
                    />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      
      {/* Ambient Element */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-neutral-950 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;
