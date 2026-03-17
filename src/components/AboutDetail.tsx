import { Code2, PenTool, BookOpen, GraduationCap } from 'lucide-react';

export function AboutDetail() {
  return (
    <section id="about-detail" className="py-32 px-6 max-w-[1700px] mx-auto relative border-t border-white/5">
      
      {/* Editorial Marker */}
      <div className="absolute top-10 right-10 font-mono text-[9px] tracking-[0.4em] text-white/10 uppercase select-none">
        02_IDENTITY_MAPPING
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Side: Summary & Story */}
        <div className="lg:col-span-7 space-y-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4 font-mono text-[9px] tracking-widest text-amber-500/60 uppercase">
              <span>[ THE_NARRATIVE ]</span>
              <div className="h-px w-10 bg-amber-500/20" />
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase italic leading-none">
              Trajetória entre<br />
              <span className="text-amber-500">Código e Estética</span>
            </h2>
          </div>

          <div className="space-y-6 text-lg text-white/50 leading-relaxed font-light max-w-2xl">
            <p>
              Atualmente cursando <span className="text-white font-medium italic">Análise e Desenvolvimento de Sistemas</span> em Curitiba, minha jornada é definida pela busca constante em unir a robustez do software com a clareza do design visual.
            </p>
            <p>
              Não acredito em design sem propósito ou código sem alma. Cada interface que construo é um exercício de <span className="text-white font-medium">precisão técnica</span> e <span className="text-white font-medium italic">narrativa visual</span>, buscando criar experiências que não apenas funcionam, mas comunicam uma identidade clara.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
            <div className="p-8 border-tech bg-white/[0.01] space-y-4">
              <GraduationCap className="w-6 h-6 text-amber-500/40" />
              <h4 className="font-mono text-[10px] text-white uppercase tracking-widest">Educação</h4>
              <p className="text-xs text-white/40 leading-relaxed">
                ADS em andamento. Foco em arquitetura de software, lógica e sistemas interativos.
              </p>
            </div>
            <div className="p-8 border-tech bg-white/[0.01] space-y-4">
              <BookOpen className="w-6 h-6 text-amber-500/40" />
              <h4 className="font-mono text-[10px] text-white uppercase tracking-widest">Filosofia</h4>
              <p className="text-xs text-white/40 leading-relaxed">
                O design como ferramenta estratégica, o código como meio de execução impecável.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Quick Specs / Tech Metadata */}
        <div className="lg:col-span-5 lg:pl-12">
          <div className="border border-white/5 rounded-2xl p-10 space-y-12 bg-white/[0.02] relative overflow-hidden">
            <div className="space-y-8">
              <div className="flex justify-between items-end border-b border-white/5 pb-4">
                <div className="space-y-1">
                  <span className="font-mono text-[8px] text-white/20 uppercase tracking-widest">Role</span>
                  <div className="text-sm font-bold text-white uppercase">Product Designer & Dev</div>
                </div>
                <Code2 className="w-4 h-4 text-white/10" />
              </div>

              <div className="flex justify-between items-end border-b border-white/5 pb-4">
                <div className="space-y-1">
                  <span className="font-mono text-[8px] text-white/20 uppercase tracking-widest">Based_In</span>
                  <div className="text-sm font-bold text-white uppercase">Curitiba, Brasil</div>
                </div>
                <div className="w-2 h-2 rounded-full bg-amber-500/40" />
              </div>

              <div className="flex justify-between items-end border-b border-white/5 pb-4">
                <div className="space-y-1">
                  <span className="font-mono text-[8px] text-white/20 uppercase tracking-widest">Specialization</span>
                  <div className="text-sm font-bold text-white uppercase">High-Fidelity Interaction</div>
                </div>
                <PenTool className="w-4 h-4 text-white/10" />
              </div>
            </div>

            <div className="p-6 bg-amber-500/5 border border-amber-500/10 rounded-xl space-y-4">
              <h5 className="font-mono text-[8px] text-amber-500 font-bold uppercase tracking-widest">Manifesto_Short</h5>
              <p className="text-xs text-amber-500/60 leading-relaxed italic">
                "Procuro o equilíbrio entre a frieza do algoritmo e a vivacidade da arte editorial. Cada pixel deve ter uma razão de ser."
              </p>
            </div>

            {/* Background Decor */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/5 rounded-full blur-[80px] -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
