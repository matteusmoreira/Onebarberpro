import React from 'react';
import { Calendar, LayoutDashboard, RefreshCw, Users, FileText, BarChart3, Puzzle } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '../lib/utils';

type FeatureType = {
  title: string;
  icon: React.ElementType;
  description: string;
};

type FeatureCardProps = React.ComponentProps<'div'> & {
  feature: FeatureType;
};

function genRandomPattern(length?: number): number[][] {
  length = length ?? 5;
  return Array.from({ length }, () => [
    Math.floor(Math.random() * 4) + 7, // random x between 7 and 10
    Math.floor(Math.random() * 6) + 1, // random y between 1 and 6
  ]);
}

function GridPattern({
  width,
  height,
  x,
  y,
  squares,
  ...props
}: React.ComponentProps<'svg'> & { width: number; height: number; x: string; y: string; squares?: number[][] }) {
  const patternId = React.useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern id={patternId} width={width} height={height} patternUnits="userSpaceOnUse" x={x} y={y}>
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([sx, sy], index) => (
            <rect strokeWidth="0" key={index} width={width + 1} height={height + 1} x={sx * width} y={sy * height} />
          ))}
        </svg>
      )}
    </svg>
  );
}

function FeatureCard({ feature, className, ...props }: FeatureCardProps) {
  const p = genRandomPattern();

  return (
    <div className={cn('relative overflow-hidden p-6 bg-neutral-950 hover:bg-neutral-900 transition-colors duration-300 group', className)} {...props}>
      <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
        <div className="absolute inset-0 bg-gradient-to-r from-gold-500/10 to-white/5 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] opacity-100">
          <GridPattern
            width={20}
            height={20}
            x="-12"
            y="4"
            squares={p}
            className="fill-white/5 stroke-white/10 absolute inset-0 h-full w-full mix-blend-overlay"
          />
        </div>
      </div>
      <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-neutral-900 border border-neutral-800 p-2 group-hover:bg-neutral-800 group-hover:scale-110 transition-all duration-300 shadow-lg shadow-black/50">
        <feature.icon className="h-6 w-6 text-gold-500" strokeWidth={2} aria-hidden />
      </div>
      <h3 className="mt-4 text-lg font-bold text-white group-hover:text-gold-400 transition-colors">{feature.title}</h3>
      <p className="mt-2 text-sm font-light text-neutral-400 leading-relaxed">{feature.description}</p>
    </div>
  );
}

type ViewAnimationProps = {
  delay?: number;
  className?: string;
  children: React.ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const features = [
  {
    title: 'Agendamento online intuitivo',
    icon: Calendar,
    description: 'Reserva rápida com disponibilidade em tempo real, seleção de serviço, profissional e confirmação automática.',
  },
  {
    title: 'Painel administrativo centralizado',
    icon: LayoutDashboard,
    description: 'Filtragem por data/serviço/colaborador, edição rápida de reservas e controle de capacidade.',
  },
  {
    title: 'Sincronização com calendários',
    icon: RefreshCw,
    description: 'Bi-direcional com Google Calendar/Outlook para que agenda do profissional e do site fiquem sincronizadas.',
  },
  {
    title: 'Perfis de clientes e agentes',
    icon: Users,
    description: 'Históricos de atendimento, notas internas, salvos para reservas rápidas e perfis de colaboradores com disponibilidade própria.',
  },
  {
    title: 'Campos e formulários personalizados',
    icon: FileText,
    description: 'Adicione campos obrigatórios ou opcionais no fluxo de reserva (upload, perguntas pré-atendimento, consentimentos).',
  },
  {
    title: 'Relatórios & métricas',
    icon: BarChart3,
    description: 'Vendas, conversão por canal, taxa de novas reservas, horas faturáveis e relatórios exportáveis.',
  },
  {
    title: 'Extensões e integrações',
    icon: Puzzle,
    description: 'Cupons, pacotes, integrações com CRM/ERP, Zapier/Make para automações e webhooks para eventos.',
  },
];

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="py-20 bg-neutral-950 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedContainer className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Diferenciais do <span className="text-gold-500">Sistema</span>
          </h2>
          <div className="h-1 w-24 bg-gold-600 mx-auto rounded-full"></div>
        </AnimatedContainer>

        <AnimatedContainer
          delay={0.2}
          className="grid grid-cols-1 gap-px bg-neutral-800 border border-neutral-800 sm:grid-cols-2 lg:grid-cols-3 rounded-2xl overflow-hidden"
        >
          {features.map((feature, i) => (
            <FeatureCard 
              key={i} 
              feature={feature} 
              className={i === 6 ? "sm:col-span-2 lg:col-span-3" : ""}
            />
          ))}
        </AnimatedContainer>
      </div>
    </section>
  );
}
