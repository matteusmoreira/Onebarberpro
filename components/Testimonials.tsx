import { cn } from "@/lib/utils"
import { TestimonialCard } from "@/components/ui/testimonial-card"

const testimonials = [
  {
    author: {
      name: "Carlos Silva",
      handle: "Barbearia Silva",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "Depois que começamos a usar o sistema, acabou o estresse de organizar agenda no WhatsApp. Cada cliente escolhe o horário sozinho, e a equipe foca apenas em atender. O movimento aumentou e tudo ficou mais profissional."
  },
  {
    author: {
      name: "Ricardo Mendes",
      handle: "Mendes Barber Shop",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    text: "Antes eu pagava mensalidade em outras plataformas. Com essa solução vitalícia, economizo todos os meses e tenho mais controle da minha barbearia. Foi o melhor investimento que fiz para o negócio."
  },
  {
    author: {
      name: "Lucas Ferreira",
      handle: "Lucas Cortes",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    text: "Assim que ativamos o sistema, recebemos vários elogios. O cliente marca em segundos, recebe lembrete automático e diminuiu quase 80% dos atrasos e faltas. Hoje não trabalho sem isso."
  },
  // Repetindo para efeito de marquee mais preenchido
  {
    author: {
      name: "André Souza",
      handle: "Barbearia Souza",
      avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face"
    },
    text: "Eliminou fila e confusão no atendimento. A organização agora é outro nível e os clientes sentem a diferença."
  }
]

export default function Testimonials() {
  return (
    <section className="bg-neutral-950 py-20 relative overflow-hidden">
      <div className="mx-auto flex max-w-container flex-col items-center gap-4 text-center sm:gap-16">
        <div className="flex flex-col items-center gap-4 px-4 sm:gap-8 relative z-10">
          <h2 className="max-w-[720px] text-3xl font-bold leading-tight sm:text-5xl sm:leading-tight text-white">
            O que dizem nossos <span className="text-gold-500">Parceiros</span>
          </h2>
          <div className="h-1 w-24 bg-gold-600 mx-auto rounded-full"></div>
          <p className="text-md max-w-[600px] font-medium text-gray-400 sm:text-xl">
            Histórias reais de quem transformou sua barbearia com o OneBarber Pro
          </p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden mt-8">
          <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:60s]">
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
              {[...Array(2)].map((_, setIndex) => (
                testimonials.map((testimonial, i) => (
                  <TestimonialCard 
                    key={`a-${setIndex}-${i}`}
                    {...testimonial}
                  />
                ))
              ))}
            </div>
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]" aria-hidden="true">
              {[...Array(2)].map((_, setIndex) => (
                testimonials.map((testimonial, i) => (
                  <TestimonialCard 
                    key={`b-${setIndex}-${i}`}
                    {...testimonial}
                  />
                ))
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-neutral-950 to-transparent sm:block z-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-neutral-950 to-transparent sm:block z-20" />
        </div>
      </div>
    </section>
  )
}
