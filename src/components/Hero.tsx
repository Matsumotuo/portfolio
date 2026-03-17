import { ArrowRight, MapPin, Sparkles } from 'lucide-react';

const PROFILE_PHOTO = "/profile.jpg";

export function Hero() {
  return (
    <section id="about" className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden pt-32 pb-20 grid-blueprint">
      {/* Background Hero Image - Subtle & Integrated */}
      <div className="absolute inset-0 z-0 opacity-[0.03] grayscale pointer-events-none">
        <img
          src={PROFILE_PHOTO}
          alt="Profile Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-[1700px] w-full mx-auto px-6 lg:px-12 relative z-10">

        {/* Main Editorial Frame */}
        <div className="border-tech p-8 md:p-12 lg:p-20 relative overflow-hidden bg-black/40 backdrop-blur-sm">

          {/* Metadata Brackets - Top */}
          <div className="absolute top-6 left-8 right-8 flex justify-between items-start font-mono text-[9px] tracking-widest text-white/20 uppercase">
            <div className="flex flex-col gap-1">
              <span>[ PROJECT_VOLUME_01 ]</span>
              <span className="text-amber-500/40 font-bold">STATUS // ACTIVE_DEVELOPMENT</span>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="flex items-center gap-2">
                <MapPin className="w-2.5 h-2.5 text-amber-500/40" />
                CURITIBA // PR // BR
              </span>
              <span>EST_2004</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mt-12 md:mt-16">
            {/* Kinetic Heading Area */}
            <div className="lg:col-span-9">
              <h1 className="text-7xl sm:text-[9vw] lg:text-[7vw] leading-[0.85] text-white uppercase select-none italic font-black tracking-tighter">
                <div className="overflow-hidden">
                  <span className="inline-block animate-text-reveal">JOÃO</span>
                </div>
                <div className="overflow-hidden mt-[-1vw]">
                  <span className="inline-block animate-text-reveal [animation-delay:200ms] text-amber-500">
                    MATSU
                  </span>
                </div>
                <div className="overflow-hidden mt-[-1vw]">
                  <span className="inline-block animate-text-reveal [animation-delay:400ms]">
                    MOTO
                  </span>
                </div>
              </h1>
            </div>

            {/* Title / Description */}
            <div className="lg:col-span-3 space-y-6">
              <div className="space-y-4">
                <div className="h-px w-10 bg-amber-500/40" />
                <p className="text-sm font-mono text-white/40 leading-relaxed uppercase tracking-tight">
                  <span className="text-white">Designer UX/UIr</span> &<br />
                  <span className="text-white">Web Designer</span> focado na interseção entre precisão técnica e estética editorial.
                </p>
              </div>

              <a
                href="#creative"
                className="inline-flex items-center gap-4 group"
              >
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-amber-500 group-hover:border-amber-500 transition-all duration-500">
                  <ArrowRight className="w-3 h-3 text-white group-hover:text-black transition-all" />
                </div>
                <span className="text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-white/40 group-hover:text-white transition-colors">
                  EXPLORE_WORK
                </span>
              </a>
            </div>
          </div>

          {/* Bottom Indicators */}
          <div className="mt-16 pt-6 border-t border-white/5 flex flex-wrap gap-8 items-center justify-between opacity-30">
            <div className="flex gap-10">
              <div className="flex flex-col gap-1">
                <span className="text-[7px] font-mono uppercase tracking-widest">Main_Focus</span>
                <span className="text-[9px] font-bold uppercase text-white">Visual Systems & UX</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[7px] font-mono uppercase tracking-widest">Education</span>
                <span className="text-[9px] font-bold uppercase text-white">Analysis & Systems Dev</span>
              </div>
            </div>
            <div className="flex items-center gap-4 font-mono text-[7px] tracking-[0.3em] uppercase">
              <span>[ SYSTEM_READY ]</span>
              <Sparkles className="w-3 h-3 text-amber-500/40" />
            </div>
          </div>
        </div>
      </div>

      {/* Background Static Grain */}
      <div className="absolute inset-0 pointer-events-none grain-overlay opacity-20" />
    </section>
  );
}
