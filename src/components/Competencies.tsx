import { 
  PenTool, MonitorSmartphone, Figma, Accessibility,
  Code2, Layers, Paintbrush, MousePointerClick
} from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  size: string; // Tailwind width/height
  position: string; // Tailwind translate/margin
  rotate: string;
}

const allSkills: Skill[] = [
  { name: 'UX/UI', icon: MonitorSmartphone, size: 'w-42 h-42', position: 'lg:-translate-x-10', rotate: 'rotate-0' },
  { name: 'Branding', icon: PenTool, size: 'w-36 h-36', position: 'lg:translate-y-20 lg:translate-x-10', rotate: 'rotate-0' },
  { name: 'Figma', icon: Figma, size: 'w-44 h-44', position: 'lg:-translate-y-10 lg:translate-x-20', rotate: 'rotate-0' },
  { name: 'UX Engineering', icon: Code2, size: 'w-38 h-38', position: 'lg:translate-y-10 lg:-translate-x-20', rotate: 'rotate-0' },
  { name: 'Motion', icon: MousePointerClick, size: 'w-32 h-32', position: 'lg:translate-y-40', rotate: 'rotate-0' },
  { name: 'Visual Design', icon: Paintbrush, size: 'w-40 h-40', position: 'lg:-translate-y-20 lg:-translate-x-5', rotate: 'rotate-0' },
  { name: 'Acessibilidade', icon: Accessibility, size: 'w-32 h-32', position: 'lg:translate-y-5 lg:translate-x-40', rotate: 'rotate-0' },
  { name: 'Systems', icon: Layers, size: 'w-38 h-38', position: 'lg:translate-y-32 lg:-translate-x-32', rotate: 'rotate-0' },
];

export function Competencies() {
  return (
    <section id="toolkit" className="py-32 px-6 max-w-[1700px] mx-auto relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-10 right-10 font-mono text-[9px] tracking-[0.4em] text-white/5 uppercase select-none">
        04_SKILL_MATRIX
      </div>

      <div className="mb-24 space-y-4">
        <div className="flex items-center gap-4 font-mono text-[9px] tracking-widest text-amber-500/60 uppercase">
          <span>[ TECHNICAL_ARSENAL ]</span>
          <div className="h-px w-10 bg-amber-500/20" />
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-[6vw] font-black tracking-tighter text-white uppercase italic leading-[0.8]">
          Competências
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-px bg-white/[0.05] border border-white/5 relative z-10">
        {allSkills.map((skill, i) => {
          const Icon = skill.icon;
          return (
            <div 
              key={skill.name}
              className="group relative aspect-square bg-black flex flex-col items-center justify-center p-6 transition-all duration-500 hover:bg-white/[0.02]"
            >
              {/* Corner Accents */}
              <div className="absolute top-3 left-3 w-0.5 h-0.5 bg-amber-500/0 group-hover:bg-amber-500 transition-colors" />
              <div className="absolute bottom-3 right-3 w-0.5 h-0.5 bg-amber-500/0 group-hover:bg-amber-500 transition-colors" />

              <div className="relative z-10 flex flex-col items-center gap-4 text-center">
                <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01] group-hover:border-amber-500/20 group-hover:bg-amber-500/5 transition-all duration-700">
                  <Icon className="w-6 h-6 text-white/20 group-hover:text-amber-500 transition-colors duration-500" />
                </div>
                
                <div className="space-y-1">
                  <span className="font-mono text-[9px] tracking-widest text-white/20 group-hover:text-white transition-colors duration-500 uppercase">
                    {skill.name}
                  </span>
                  <div className="font-mono text-[7px] tracking-[0.2em] text-amber-500/0 group-hover:text-amber-500/30 transition-all uppercase">
                    Detected
                  </div>
                </div>
              </div>

              {/* Technical Metadata Tag */}
              <div className="absolute top-3 right-3 font-mono text-[7px] text-white/5 group-hover:text-white/10 uppercase transition-colors">
                M_{i < 9 ? `0${i+1}` : i+1}
              </div>
            </div>
          );
        })}
      </div>

      {/* Aesthetic Accents */}
      <div className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] bg-amber-500/[0.01] blur-[150px] -z-10" />
    </section>
  );
}
