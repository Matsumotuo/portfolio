import { useState, useRef } from 'react';
import { Briefcase, GraduationCap, ChevronLeft, ChevronRight, ChevronDown, ChevronUp, MapPin } from 'lucide-react';

const timeline = [
  {
    period: "NOVEMBRO DE 2025 – AGOSTO DE 2026",
    title: "UX/UI Designer Junior",
    company: "IESDE",
    location: "Curitiba, PR",
    description: "Atuei na equipe de UI/UX Design da IESDE Brasil, contribuindo para o ecossistema do Aprova, com foco na criação e evolução de experiências digitais para web e dispositivos móveis.",
    bullets: [
      "Criação de interfaces, wireframes, fluxos e protótipos no Figma",
      "Desenvolvimento e evolução de UI Design e UX Design, com foco em usabilidade, navegação e experiência do usuário",
      "Manutenção e evolução de Design Systems, garantindo consistência visual e escalabilidade das interfaces",
      "Colaboração direta com desenvolvedores e times multidisciplinares na implementação das soluções",
      "Transformação de necessidades dos usuários em soluções digitais centradas no usuário",
      "Participação em processos ágeis utilizando Scrum e trabalho colaborativo com o time de produto e tecnologia"
    ],
    type: 'work'
  },
  {
    period: "FEVEREIRO DE 2025 – NOVEMBRO DE 2025",
    title: "Web Design",
    company: "TecSinapse",
    location: "Brasil",
    description: "Atuei como Web Designer e UI/UX Designer, com foco na criação de interfaces responsivas, experiências digitais e Design Systems.",
    bullets: [
      "Criação de wireframes, fluxos e protótipos de alta fidelidade no Figma",
      "Desenvolvimento de UI Design e UX Design, com foco em usabilidade e experiência do usuário",
      "Estruturação e manutenção de Design Systems",
      "Realização de testes de usabilidade e melhorias contínuas nas interfaces",
      "Colaboração com desenvolvedores na implementação das soluções",
      "Suporte e criação de páginas em WordPress e plataformas CMS",
      "Conhecimentos em HTML, CSS, JavaScript e PHP, facilitando a comunicação com o time de desenvolvimento"
    ],
    type: 'work'
  },
  {
    period: "JUNHO DE 2024 – FEVEREIRO DE 2025",
    title: "Designer",
    company: "273+",
    location: "Curitiba, PR",
    description: "Atuei como Designer Gráfico e Web Designer, desenvolvendo materiais visuais e interfaces digitais para diferentes projetos e necessidades.",
    bullets: [
      "Criação de layouts, banners, cartazes e peças gráficas utilizando Adobe Illustrator e Photoshop",
      "Desenvolvimento de layouts e elementos para web com WordPress",
      "Criação de materiais para campanhas, datas comemorativas e comunicação digital",
      "Participação em projetos de branding e rebranding de empresas",
      "Organização e acompanhamento de demandas utilizando Asana",
      "Colaboração com a equipe no desenvolvimento de soluções visuais alinhadas à identidade e aos objetivos de cada projeto"
    ],
    type: 'work'
  },
  {
    period: "ABRIL DE 2023 – MARÇO DE 2024",
    title: "Jovem Aprendiz Tech",
    company: "Contabilizei",
    location: "Curitiba, PR",
    description: "Atuei como Jovem Aprendiz Tech na área de Tecnologia, desenvolvendo uma base em ferramentas e processos de tecnologia e documentação.",
    bullets: [
      "Utilização de Excel, Jira e Visual Studio Code no dia a dia",
      "Conhecimentos básicos em Postman e APIs",
      "Apoio na documentação e organização de processos da área",
      "Desenvolvimento de conhecimentos em tecnologia, ferramentas de desenvolvimento e metodologias de trabalho"
    ],
    type: 'work'
  }
];

export function Trajectory() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(prevIndex => (prevIndex === index ? null : index));
  };

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
        <div ref={scrollRef} className="flex overflow-x-auto hide-scrollbar border-b border-white/5 scroll-smooth pl-0">
          {timeline.map((item, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <div
                key={index}
                className="flex-none w-[320px] sm:w-[380px] md:w-[420px] lg:w-[25%] border-r border-white/5 p-6 md:p-10 space-y-6 md:space-y-8 group hover:bg-white/[0.01] transition-colors last:border-r-0 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  {/* Period */}
                  <div className="space-y-2">
                    <span className="font-mono text-[9px] tracking-[0.3em] text-white/20 uppercase block">PERÍODO</span>
                    <p className="font-mono text-[10px] text-white/60 tracking-widest">{item.period}</p>
                  </div>

                  {/* Content */}
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 font-mono text-[9px] text-amber-500/60 uppercase tracking-widest">
                        {item.type === 'work' ? <Briefcase className="w-3 h-3" /> : <GraduationCap className="w-3 h-3" />}
                        {item.type === 'work' ? 'EXPERIÊNCIA' : 'FORMAÇÃO'}
                        <span className="text-white/20">•</span>
                        <span className="text-white/40 flex items-center gap-1">
                          <MapPin className="w-2.5 h-2.5" />
                          {item.location}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white uppercase italic tracking-tighter leading-none group-hover:text-amber-500 transition-colors break-words">
                        {item.title}
                      </h3>
                      <p className="font-mono text-[10px] text-white/40 uppercase tracking-widest">{item.company}</p>
                    </div>

                    <div className="space-y-4">
                      {/* Description (Intro) */}
                      <p className="text-sm text-white/60 leading-relaxed font-light">
                        {item.description}
                      </p>

                      {/* Bullets lists */}
                      {isExpanded && item.bullets && (
                        <ul className="space-y-2 pt-4 border-t border-white/5 animate-in fade-in slide-in-from-top-1 duration-200">
                          {item.bullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="text-xs text-white/45 leading-relaxed font-mono flex items-start gap-2">
                              <span className="text-amber-500/50 shrink-0 mt-1.5">•</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      <button
                        onClick={() => toggleExpand(index)}
                        className="font-mono text-[10px] text-amber-500 hover:text-amber-400 font-bold uppercase tracking-wider flex items-center gap-1.5 py-1.5 focus:outline-none touch-manipulation active:scale-95 transition-transform"
                      >
                        {isExpanded ? (
                          <>
                            [ RECOLHER <ChevronUp className="w-3.5 h-3.5" /> ]
                          </>
                        ) : (
                          <>
                            [ DETALHES <ChevronDown className="w-3.5 h-3.5" /> ]
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="pt-4 font-mono text-[8px] text-white/10 group-hover:text-white/20 transition-colors uppercase tracking-[0.5em]">
                  ID_REC_0{index + 1}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
