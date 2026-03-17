import { Coffee, Music, Camera, MapPin, Sparkles } from 'lucide-react';

const curiosities = [
  {
    title: "Vibe Sonora",
    content: "Apaixonado por Deep House e música eletrônica melódica.",
    icon: Music,
    className: "lg:col-span-2 lg:row-span-1",
    accent: "bg-amber-500/10 text-amber-500"
  },
  {
    title: "Olhar Atento",
    content: "Fotógrafo amador, buscando capturar a beleza nos detalhes.",
    icon: Camera,
    className: "lg:col-span-1 lg:row-span-1",
    accent: "bg-white/5 text-white/40"
  },
  {
    title: "Raízes",
    content: "Nascido em Pato Branco, PR. Interior no sangue, Tech na mente.",
    icon: MapPin,
    className: "lg:col-span-1 lg:row-span-2",
    accent: "bg-white/5 text-white/40"
  },
  {
    title: "Processo",
    content: "Café de alta qualidade e uma boa edição de vídeo.",
    icon: Coffee,
    className: "lg:col-span-2 lg:row-span-1",
    accent: "bg-amber-500/10 text-amber-500"
  }
];

export function BentoGrid() {
  return (
    <section id="curiosities" className="py-40 px-6 max-w-7xl mx-auto relative overflow-hidden">
      
      {/* Label */}
      <div className="mb-20 space-y-6 animate-fade-in-up">
        <div className="flex items-center gap-2 text-amber-500/60 uppercase tracking-[0.2em] text-[10px] font-bold">
          <Sparkles className="w-3 h-3" />
          Offline & Soul
        </div>
        <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white uppercase italic leading-[0.85]">
          Bits de<br/>Curiosidade
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px]">
        {curiosities.map((item) => (
          <div
            key={item.title}
            className={`group glass-card p-10 flex flex-col justify-between ${item.className} hover:rotate-[-2deg] transition-all duration-700 hover:border-amber-500/20 hover:scale-[1.02] shadow-2xl relative overflow-hidden`}
          >
            <div className="space-y-6 relative z-10">
              <div className={`w-12 h-12 rounded-2xl ${item.accent} flex items-center justify-center group-hover:scale-110 transition-transform duration-700`}>
                <item.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter mb-2">{item.title}</h3>
                <p className="text-white/40 text-lg font-light leading-relaxed">{item.content}</p>
              </div>
            </div>
            
            {/* Background design element */}
            <item.icon className="absolute -bottom-8 -right-8 w-40 h-40 text-white/[0.02] group-hover:text-amber-500/[0.05] transition-colors duration-700 rotate-[-20deg]" />
          </div>
        ))}
      </div>
    </section>
  );
}
