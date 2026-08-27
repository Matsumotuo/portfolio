import { useRef } from 'react';
import { Briefcase, GraduationCap, ChevronLeft, ChevronRight } from 'lucide-react';

const timeline = [
  {
    period: "2025 – 2026",
    title: "DESIGNER UX/UI JÚNIOR",
    company: "IESDE Brasil",
    description: "Desenvolvimento de interfaces para todo o ambiente IESDE, produtos internso como externos, trabalhando em colaboração com os desenvolvedores direto para unir funcionalidade e estética.",
    type: 'work'
  },
  {
    period: "2025 – 2025",
    title: "WEB DESIGNER",
    company: "Tecsinapse",
    description: "Criação de websites e interfaces responsivas, focando em prototipagem de alta fidelidade e experiência do usuário.",
    type: 'work'
  },
  {
    period: "2024 – 2025",
    title: "DESIGNER GRÁFICO",
    company: "273Mais",
    description: "Execução de projetos de branding, layouts editoriais e materiais digitais para diversos clientes.",
    type: 'work'
  },
  {
    period: "2023 – 2024",
    title: "JOVEM TECH APRENDIZ",
    company: "Contabilizei",
    description: "Atuação direta em processos tecnológicos e ferramentas de gestão de obrigações contábeis.",
    type: 'work'
  }
];

export function Trajectory() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -420 : 420;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="trajectory" className="border-t border-white/5 bg-black overflow-hidden">
      <div className="max-w-[1700px] mx-auto">
        <div className="p-8 border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.4em] text-amber-500 uppercase">
            <span>[ TRAJETÓRIA_02 ]</span>
          </div>

          <div className="flex items-center gap-3 font-mono">
            <button
              onClick={() => scroll('left')}
              aria-label="Anterior"
              className="p-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-amber-500/50 hover:text-amber-500 text-white/60 transition-all duration-300 active:scale-95 focus:outline-none"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Próximo"
              className="p-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-amber-500/50 hover:text-amber-500 text-white/60 transition-all duration-300 active:scale-95 focus:outline-none"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div ref={scrollRef} className="flex overflow-x-auto hide-scrollbar border-b border-white/5 scroll-smooth">
          {timeline.map((item, index) => (
            <div
              key={index}
              className="flex-none w-[350px] md:w-[450px] border-r border-white/5 p-8 md:p-10 space-y-8 group hover:bg-white/[0.01] transition-colors last:border-r-0"
            >
              {/* Period */}
              <div className="space-y-4">
                <span className="font-mono text-[9px] tracking-[0.3em] text-white/20 uppercase block">PERÍODO</span>
                <p className="font-mono text-[10px] text-white/60 tracking-widest">{item.period}</p>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 font-mono text-[9px] text-amber-500/60 uppercase tracking-widest">
                    {item.type === 'work' ? <Briefcase className="w-3 h-3" /> : <GraduationCap className="w-3 h-3" />}
                    {item.type === 'work' ? 'EXPERIÊNCIA' : 'FORMAÇÃO'}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white uppercase italic tracking-tighter leading-none group-hover:text-amber-500 transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-mono text-[10px] text-white/40 uppercase tracking-widest">{item.company}</p>
                </div>

                <p className="text-sm text-white/40 leading-relaxed font-light">
                  {item.description}
                </p>

                <div className="pt-4 font-mono text-[8px] text-white/10 group-hover:text-white/20 transition-colors uppercase tracking-[0.5em]">
                  ID_REC_{index + 1}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
