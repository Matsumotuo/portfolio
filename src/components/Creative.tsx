import { ProjectDialog } from './ProjectDialog';

const projects = [
  {
    id: 1,
    title: "Di Kang (Resistência)",
    category: "Filme Super 8",
    imageUrl: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/a958df234848565.Y3JvcCw0NjYzLDM2NDcsNDA0LDA.png",
    link: "https://www.behance.net/gallery/234848565/Di-Kang-(Resistencia)-FILME-ANALOGICO",
    tools: ['Super 8', 'Filme Analógico'],
    description: "Filme experimental em Super 8. Um projeto autoral que explora a estética analógica e a expressividade visual através da película, unindo técnica tradicional e visão contemporânea.",
    behanceEmbed: '<iframe src="https://www.behance.net/embed/project/234848565?ilo0=1" height="316" width="404" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>',
    images: []
  },
  {
    id: 2,
    title: "Questões+ | Redesign",
    category: "UX/UI",
    imageUrl: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/895f80242768667.Y3JvcCwyNzYxLDIxNjAsNTQwLDA.png",
    link: "https://www.behance.net/gallery/242768667/Questoes-Redesign",
    tools: ['Figma', 'UX Research'],
    description: "Redesign estratégico focado em otimizar a jornada de estudo. A nova interface utiliza princípios de usabilidade e acessibilidade para reduzir a carga cognitiva, facilitando o foco através de uma hierarquia visual clara e paleta equilibrada.",
    behanceEmbed: '<iframe src="https://www.behance.net/embed/project/242768667?ilo0=1" height="316" width="404" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>',
    images: []
  },
  {
    id: 3,
    title: "PacBank | Interface",
    category: "UX/UI",
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
      "/projects/leila3.png"]
  },
  {
    id: 5,
    title: "New Programmation",
    category: "Tshirt Design",
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
    category: "Filme Super 8",
    imageUrl: "/projects/Sinopse4.jpg",
    link: "https://www.behance.net/gallery/208377081/Wake-Up-Roddie-Movie-Poster",
    tools: ['Poster Design', 'Film'],
    description: "Pôster desenvolvido para o curta-metragem 'Wake Up Roddie'. A arte busca capturar a essência do filme através de uma composição visual impactante.",
    images: [
      "/projects/roddie2.png",
      "/projects/roddie.png"
    ]
  }
];

export function Creative() {
  return (
    <section id="creative" className="border-b border-white/5">
      {projects.map((project, index) => (
        <div key={project.id} className="max-w-[1700px] mx-auto grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-white/5 border-t border-white/5 first:border-t-0">

          {/* Project Sidebar (Col 1-3) */}
          <div className="md:col-span-3 p-6 space-y-8">
            <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.4em] text-white/20 uppercase">
              <span>[ PROJECT_0{index + 1} ]</span>
            </div>

            <div className="space-y-6">
              <div className="space-y-1">
                <span className="font-mono text-[9px] text-white/20 uppercase tracking-widest">CATEGORY</span>
                <p className="font-mono text-[11px] text-amber-500 uppercase tracking-widest">{project.category}</p>
              </div>
              <div className="space-y-1">
                <span className="font-mono text-[9px] text-white/20 uppercase tracking-widest">ROLE</span>
                <p className="font-mono text-[10px] text-white/60 uppercase tracking-widest">Designer UX/UI</p>
              </div>
              <div className="space-y-1">
                <span className="font-mono text-[9px] text-white/20 uppercase tracking-widest">TOOLS</span>
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
                    VIEW_PROJECT
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
    </section>
  );
}
