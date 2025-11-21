import React from 'react';
import { Calendar, Users, Bell, Globe } from 'lucide-react';

const FeatureItem: React.FC<{ icon: React.ElementType, title: string, desc: string }> = ({ icon: Icon, title, desc }) => (
  <div className="flex items-start gap-4 p-6 rounded-xl bg-neutral-900/50 border border-white/5 hover:border-gold-500/30 hover:bg-neutral-900 transition-all duration-300 group">
    <div className="p-3 rounded-lg bg-neutral-800 group-hover:bg-gold-500/20 transition-colors">
      <Icon className="w-6 h-6 text-gray-400 group-hover:text-gold-400 transition-colors" />
    </div>
    <div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 leading-relaxed text-sm">{desc}</p>
    </div>
  </div>
);

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-neutral-950 relative">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold-500 font-bold tracking-widest text-sm uppercase block mb-4">Tecnologia Premium</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Tecnologia criada para barbearias que levam a sério o <span className="text-gold-500">próprio negócio.</span>
          </h2>
          <p className="text-gray-400">
            Não somos apenas uma agenda. Somos a estrutura digital que sua barbearia precisa para crescer com profissionalismo e autonomia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <FeatureItem 
            icon={Calendar} 
            title="Gerenciamento de Horários" 
            desc="Controle total da sua agenda. Bloqueie horários, configure intervalos e deixe seus clientes agendarem 24/7." 
          />
          <FeatureItem 
            icon={Users} 
            title="Cadastro de Clientes" 
            desc="Histórico completo de cortes, preferências e contatos. Fidelize quem senta na sua cadeira." 
          />
          <FeatureItem 
            icon={Bell} 
            title="Lembretes Automáticos" 
            desc="Reduza o 'no-show' drasticamente. O sistema avisa seus clientes via E-mail automaticamente." 
          />
          <FeatureItem 
            icon={Globe} 
            title="Painel Personalizado" 
            desc="Seu domínio (suabarbearia.com.br) e sua marca. Nada de usar links genéricos de terceiros." 
          />
        </div>
      </div>
    </section>
  );
};

export default About;
