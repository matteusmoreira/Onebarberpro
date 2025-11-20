import React from 'react';
import { CheckCircle2, Infinity, Layout, Server, Headphones, TrendingUp } from 'lucide-react';

interface BenefitCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon: Icon, title, description }) => (
  <div className="relative group bg-neutral-900 p-8 rounded-2xl border border-neutral-800 overflow-hidden hover:shadow-2xl hover:shadow-black transition-all duration-500">
    {/* Metallic Gradient Border Effect on Hover */}
    <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/10 transition-all duration-500 pointer-events-none"></div>
    <div className="absolute -inset-px bg-gradient-to-b from-gold-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
    
    <div className="relative z-10">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-7 h-7 text-gold-500" />
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-neutral-400 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: Infinity,
      title: "Uso vitalício sem mensalidades",
      description: "Pague uma única vez e tenha acesso para sempre. Livre-se dos custos fixos que pesam no final do mês."
    },
    {
      icon: Layout,
      title: "Interface moderna e intuitiva",
      description: "Design pensado para o dia a dia corrido da barbearia. Agilidade e beleza em cada clique."
    },
    {
      icon: Server,
      title: "Painel com seu domínio",
      description: "Profissionalismo máximo com um endereço web exclusivo para sua marca."
    },
    {
      icon: Headphones,
      title: "Suporte e atualizações",
      description: "Suporte exclusivo para garantir que sua operação nunca pare, com melhorias constantes inclusas."
    },
    {
      icon: CheckCircle2,
      title: "Para todos os portes",
      description: "Seja você um barbeiro solo ou dono de uma rede de franquias, o sistema se adapta a você."
    },
    {
      icon: TrendingUp,
      title: "Aumenta agendamentos",
      description: "Facilidade para o cliente agendar significa agenda cheia. Reduza o tempo no WhatsApp."
    }
  ];

  return (
    <section id="benefits" className="py-24 bg-neutral-950 relative overflow-hidden">
      {/* Subtle Metal Background Lines */}
      <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.01)_10px,rgba(255,255,255,0.01)_11px)] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Por que escolher o <span className="text-gold-500 italic font-serif">BarberPro?</span>
          </h2>
          <div className="h-1 w-24 bg-gold-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;