import { Mail, Instagram, Linkedin, GraduationCap, Code, Heart, Palette, Image, Layout } from 'lucide-react';

export function RefinedIndex() {
  return (
    <section id="index" className="pt-32 border-b border-white/5">
      {/* 4-Column Header Grid */}
      <div className="max-w-[1700px] mx-auto grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/5 border-t border-white/5">

        {/* Column 1: Index Label & Name */}
        <div className="p-8 space-y-24">
          <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.4em] text-amber-500 uppercase">
            <span>[ INDEX_01 ]</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-black tracking-tighter text-white uppercase italic leading-none relative z-20">
              João Vitor<br />
              <span className="text-amber-500 block">Matsumoto</span>
            </h1>
            <p className="font-mono text-[10px] text-white/40 uppercase tracking-widest leading-relaxed">
              Designer UX/UI<br />
              Graduado em ADS @ UP
            </p>
          </div>
        </div>

        {/* Column 2: Profile & Contact */}
        <div className="p-8 space-y-12">
          {/* Profile Photo */}
          <div className="aspect-[4/5] bg-white/5 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 relative group border border-white/5">
            <img
              src="/projects/eu.jpeg"
              alt="João Vitor Matsumoto"
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
            <div className="absolute bottom-6 left-6 font-mono text-[9px] text-white/60">
              PR_CURITIBA_2025
            </div>
          </div>

          <div className="space-y-6">
            <span className="font-mono text-[9px] tracking-[0.3em] text-white/20 uppercase">CONTACT</span>
            <div className="space-y-3">
              <a href="mailto:joao.matsumoto@outlook.com" className="flex items-center gap-3 text-white/40 hover:text-amber-500 transition-colors group">
                <Mail className="w-3.5 h-3.5" />
                <span className="font-mono text-[10px] uppercase tracking-widest">joao.matsumoto@outlook.com</span>
              </a>
              <a href="https://instagram.com/matsuvv" target="_blank" className="flex items-center gap-3 text-white/40 hover:text-amber-500 transition-colors group">
                <Instagram className="w-3.5 h-3.5" />
                <span className="font-mono text-[10px] uppercase tracking-widest">@matsulovve</span>
              </a>
              <a href="https://www.linkedin.com/in/joao-vitor-matsumoto-25b6071b9/" target="_blank" className="flex items-center gap-3 text-white/40 hover:text-amber-500 transition-colors group">
                <Linkedin className="w-3.5 h-3.5" />
                <span className="font-mono text-[10px] uppercase tracking-widest">Linkedin</span>
              </a>
            </div>
          </div>
        </div>

        {/* Column 3: Bio & Education */}
        <div className="p-8 space-y-16">
          <div className="space-y-6">
            <span className="font-mono text-[9px] tracking-[0.3em] text-white/20 uppercase">ABOUT_ME</span>
            <p className="text-sm text-white/60 leading-relaxed font-light">
              Me chamo <span className="text-white font-medium">João Vitor Matsumoto</span> e sou graduado em Análise e Desenvolvimento de Sistemas pela Universidade Positivo. Apesar de amador, sou apaixonado por fotografia, edição de vídeos e música. Costumo criar soluções criativas que unem funcionalidade e inovação, sempre buscando crescer e colaborar em projetos desafiadores. E uma curiosidade que gosto de peixes e sou de Pato Branco.
            </p>
          </div>

          <div className="space-y-8">
            <div className="space-y-6">
              <span className="font-mono text-[9px] tracking-[0.3em] text-white/20 uppercase flex items-center gap-2">
                <Code className="w-3 h-3" /> CORE_SKILLS
              </span>
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <div className="space-y-2">
                  <span className="text-[9px] text-white/20 font-mono block">SOFT</span>
                  <ul className="text-[10px] text-white/60 space-y-1 uppercase tracking-tighter">
                    <li>Paciência</li>
                    <li>Trabalho Equipe</li>
                    <li>Programação</li>
                    <li>Criatividade</li>
                    <li>Persistência</li>
                    <li>Prototipação</li>
                    <li>Proatividade</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <span className="text-[9px] text-white/20 font-mono block">HARD</span>
                  <ul className="text-[10px] text-white/60 space-y-3 uppercase tracking-tighter">
                    <li className="flex items-center gap-2"><Layout className="w-3 h-3 text-amber-500/40" /> Figma</li>
                    <li className="flex items-center gap-2"><Palette className="w-3 h-3 text-amber-500/40" /> Illustrator</li>
                    <li className="flex items-center gap-2"><Image className="w-3 h-3 text-amber-500/40" /> Photoshop</li>
                    <li className="flex items-center gap-2"><Image className="w-3 h-3 text-amber-500/40" /> Visual Studio</li>                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <span className="font-mono text-[9px] tracking-[0.3em] text-white/20 uppercase flex items-center gap-2">
                <Heart className="w-3 h-3" /> INTERESTS
              </span>
              <div className="flex flex-wrap gap-2">
                {['Fotografia', 'Música', 'Edição de Vídeos', 'Peixes'].map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-white/5 border border-white/5 rounded text-[9px] text-white/40 font-mono uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Column 4: Experience & Skills Summary */}
        <div className="p-8 space-y-16">
          <div className="space-y-4">
            <span className="font-mono text-[9px] tracking-[0.3em] text-white/20 uppercase flex items-center gap-2">
              <GraduationCap className="w-3 h-3" /> EDUCATION
            </span>
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Universidade Positivo</h4>
              <p className="text-[11px] text-white/40 font-mono italic">Análise e Desenvolvimento de Sistemas (ADS)</p>
              <p className="text-[9px] text-amber-500/60 font-mono uppercase tracking-[0.2em]">[ CONCLUÍDO ]</p>
            </div>
          </div>

          <div className="space-y-6 pt-8">
            <div className="aspect-square bg-white/5 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 relative group border border-white/5">
              <img
                src="/tumblr_obcp4fTQNc1vv62k7o1_250.jpg"
                alt="Mystic Earth"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-40" />
            </div>
            <p className="font-mono text-[9px] text-white/40 uppercase tracking-[0.3em] text-center">
              Curitiba, Paraná, Brasil
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
