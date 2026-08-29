import { useState } from 'react';
import { ProjectDialog } from './ProjectDialog';

type Category = "Todos" | "Design Gráfico" | "Design UX/UI" | "Filme Analógico" | "Music";

const projects = [
  {
    id: 1,
    title: "Di Kang (Resistência)",
    category: "Filme Analógico",
    imageUrl: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/a958df234848565.Y3JvcCw0NjYzLDM2NDcsNDA0LDA.png",
    link: "https://www.behance.net/gallery/234848565/Di-Kang-(Resistencia)-FILME-ANALOGICO",
    tools: ['Super 8', 'Filme Analógico'],
    description: "Filme experimental em Super 8. Um projeto autoral que explora a estética analógica e a expressividade visual através da película, unindo técnica tradicional e visão contemporânea.",
    behanceEmbed: '<iframe src="https://www.behance.net/embed/project/234848565?ilo0=1" height="316" width="404" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>',
    images: []
  },
  {
    id: 3,
    title: "PacBank | Interface",
    category: "Design UX/UI",
    imageUrl: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/3d4c28208717147.Y3JvcCw0Nzk0LDM3NTAsMTA2LDA.png",
    link: "https://www.behance.net/gallery/208717147/PacBank-Interface-Bancaria-Case-Study",
    tools: ['Figma', 'Design System'],
    description: "Case study de interface bancária moderna e intuitiva. O projeto foca na simplificação de processos financeiros complexos, priorizando uma navegação fluida e uma estética minimalista que transmite confiança e segurança.",
    behanceEmbed: '<iframe src="https://www.behance.net/embed/project/208717147?ilo0=1" height="316" width="404" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>',
    images: []
  },
  {
    id: 4,
    title: "Camiseta Leila Khaled",
    category: "Design Gráfico",
    imageUrl: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/d60a0e198029149.Y3JvcCw3NTIsNTg4LDMxNiwxODg.png",
    link: "https://www.behance.net/gallery/198029149/Projeto-Camiseta-Leila-Khaled",
    tools: ['Photoshop', 'Branding'],
    description: "Projeto de design de vestuário e estamparia inspirado na figura de Leila Khaled, unindo elementos históricos e design contemporâneo.",
    images: [
      "/projects/leila.png",
      "/projects/leila2.png",
      "/projects/leila3.png"
    ]
  },
  {
    id: 5,
    title: "New Programmation",
    category: "Design Gráfico",
    imageUrl: "/projects/np5.jpg",
    link: "https://www.behance.net/gallery/198028143/NewProgrammation",
    tools: ['Artwork', 'Graphic Design'],
    description: "Criação de artes para camisetas com foco em estética minimalista e urbana. Projeto que une ilustração digital e design gráfico aplicado.",
    images: [
      "/projects/np1.png",
      "/projects/np2.png",
      "/projects/np4.png"
    ]
  },
  {
    id: 6,
    title: "Wake Up Roddie",
    category: "Filme Analógico",
    imageUrl: "/projects/Sinopse4.jpg",
    link: "https://www.behance.net/gallery/208377081/Wake-Up-Roddie-Movie-Poster",
    tools: ['Poster Design', 'Film'],
    description: "Pôster desenvolvido para o curta-metragem 'Wake Up Roddie'. A arte busca capturar a essência do filme através de uma composição visual impactante.",
    images: [
      "/projects/roddie2.png",
      "/projects/roddie.png"
    ]
  },
  {
    id: 7,
    title: "L.I.A | Redesign Website",
    category: "Design UX/UI",
    imageUrl: "/projects/capalia.png",
    link: "https://www.behance.net/gallery/248333613/LIA-redesign-website",
    tools: ['Figma', 'UX Research', 'UI Design'],
    description: "O projeto se concentrou na modernização da interface da plataforma LIA(Livro Inteligente Autossuficiente).Transformou um layout denso e fragmentado em uma experiência de aprendizagem limpa, intuitiva e unificada, tornando mais fácil para os usuários consumirem perfeitamente vários formatos de conteúdo educacional.",
    images: [
      "/projects/lia2.png",
      "/projects/lia3.png",
      "/projects/lia4.png",
      "/projects/lia5.png"
    ]
  },
  {
    id: 8,
    title: "PROCESSO DE INSCRIÇÃO | REDESIGN",
    category: "Design UX/UI",
    imageUrl: "/projects/capa.png",
    link: "https://www.behance.net/gallery/252781277/PROCESSO-DE-INSCRICAO-REDESIGN",
    tools: ['Figma'],
    description: "Redesign completo do fluxo de inscrição em faculdade, otimizando layout, navegação e experiência do usuário para tornar o processo mais intuitivo e eficiente.",
    behanceEmbed: '<iframe src="https://www.behance.net/embed/project/252781277?ilo0=1" height="316" width="404" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>',
    images: ["/projects/capa.png"]
  },
  {
    id: 9,
    title: "feel good! | MUSIC",
    category: "Music",
    imageUrl: "/projects/capamusica.png",
    link: "https://soundcloud.com/matsuuuu/feel-good-proddj-bob-kelson-dj-sergin",
    tools: ['Music'],
    description: "Musica ambiental, voltada pro EDM, totalmente experimental em parceria com Rodrigo Sergio Rosa. A ideia era ser um deep house.",
    behanceEmbed: '<iframe height="316" width="404" scrolling="no" frameborder="no" allow="autoplay; encrypted-media" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A880426327&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/matsuuuu" title="puxa frango" target="_blank" style="color: #cccccc; text-decoration: none;">puxa frango</a> · <a href="https://soundcloud.com/matsuuuu/feel-good-proddj-bob-kelson-dj-sergin" title="feel good! (prod.dj bob kelson &amp; dj sergin)" target="_blank" style="color: #cccccc; text-decoration: none;">feel good! (prod.dj bob kelson &amp; dj sergin)</a></div>',
    images: ["/projects/capamusica.png"]
  },
];

export function Creative() {
  const [activeCategory, setActiveCategory] = useState<Category>("Todos");
  const categories: Category[] = ["Todos", "Design Gráfico", "Design UX/UI", "Filme Analógico", "Music"];

  const filteredProjects = activeCategory === "Todos"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const handleCategorySelect = (category: Category) => {
    setActiveCategory(category);

    // No celular, rola a tela suavemente para o início da lista de projetos filtrados
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      const section = document.getElementById('creative');
      if (section) {
        // Rola até o topo da seção garantindo que a barra fixa e os projetos fiquem visíveis
        const yOffset = -10;
        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="creative" className="border-b border-white/5 scroll-mt-0">
      {/* Filters Bar - Blueprint Tech Style */}
      <div className="max-w-[1700px] mx-auto py-3 px-4 md:py-4 md:px-8 border-t border-white/5 bg-black/90 backdrop-blur-md sticky top-0 z-40">
        <div className="flex items-center gap-2 md:gap-3 overflow-x-auto hide-scrollbar scroll-smooth w-full">

          <span className="font-mono text-[9px] text-white/30 uppercase tracking-[0.25em] shrink-0 mr-2 select-none">
            // FILTRO:
          </span>

          {categories.map((category, idx) => {
            const count = category === "Todos"
              ? projects.length
              : projects.filter(p => p.category === category).length;
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                onClick={() => handleCategorySelect(category)}
                className={`font-mono text-[11px] md:text-xs uppercase tracking-wider px-3 md:px-4 py-2 md:py-2.5 transition-all duration-200 shrink-0 border flex items-center gap-1.5 md:gap-2 touch-manipulation active:scale-95 whitespace-nowrap ${isActive
                  ? 'bg-amber-500/10 border-amber-500/60 text-amber-400 font-bold'
                  : 'bg-white/[0.02] border-white/10 text-white/40 hover:text-white hover:border-white/20'
                  }`}
              >
                <span className="text-[10px] opacity-40">0{idx + 1}.</span>
                <span>{category}</span>
                <span className={`text-[10px] font-mono ${isActive ? 'text-amber-400/80' : 'text-white/20'}`}>
                  ({count})
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects List */}
      <div className="animate-in fade-in duration-500">
        {filteredProjects.map((project, index) => (
          <div key={project.id} className="max-w-[1700px] mx-auto grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-white/5 border-t border-white/5 first:border-t-0">

            {/* Project Sidebar (Col 1-3) */}
            <div className="md:col-span-3 p-6 space-y-8">
              <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.4em] text-white/20 uppercase">
                <span>[ PROJETO_0{index + 1} ]</span>
              </div>

              <div className="space-y-6">
                <div className="space-y-1">
                  <span className="font-mono text-[9px] text-white/20 uppercase tracking-widest">CATEGORIA</span>
                  <p className="font-mono text-[11px] text-amber-500 uppercase tracking-widest">{project.category}</p>
                </div>
                <div className="space-y-1">
                  <span className="font-mono text-[9px] text-white/20 uppercase tracking-widest">FERRAMENTAS</span>
                  <div className="flex flex-wrap gap-2 pt-1 uppercase">
                    {project.tools.map(tool => (
                      <span key={tool} className="text-[9px] text-white/40 font-mono tracking-tighter border border-white/5 px-1.5 py-0.5 rounded-sm bg-white/5">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Project Content (Col 4-12) */}
            <div className="md:col-span-9 p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8 order-2 lg:order-1">
                  <div className="space-y-6">
                    <h3 className={`font-black text-white uppercase italic tracking-tighter leading-[0.85] ${project.title.length > 15
                      ? 'text-3xl md:text-4xl lg:text-5xl'
                      : 'text-4xl md:text-5xl lg:text-6xl'
                      }`}>
                      {project.title}
                    </h3>

                    <p className="text-base text-white/60 leading-relaxed font-light max-w-xl">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-8 pt-6">
                    <a
                      href={project.link}
                      target="_blank"
                      className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-white/20 hover:text-amber-500 transition-colors border-b border-white/10 pb-1"
                    >
                      VER PROJETO
                    </a>
                  </div>
                </div>

                {/* Project Image Aspect Trigger */}
                <div className="order-1 lg:order-2 w-full lg:max-w-md xl:max-w-lg ml-auto">
                  <div className="relative group">
                    <ProjectDialog project={project} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
