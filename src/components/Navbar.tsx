

export function Navbar() {
  return (
    <nav className="fixed top-4 left-4 right-4 md:top-8 md:left-8 md:right-8 z-50 flex items-center justify-between pointer-events-none">
      <div className="pointer-events-auto">
        <a href="#" className="group flex items-center gap-3 md:gap-4">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center text-black font-black text-lg md:text-xl italic hover:scale-110 transition-transform duration-500 shadow-xl">
            JM
          </div>
          <div className="flex flex-col opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-[-10px] group-hover:translate-x-0 hidden sm:flex">
            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-white">João</span>
            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-amber-500">Matsumoto</span>
          </div>
        </a>
      </div>

      <div className="hidden md:flex gap-4 pointer-events-auto">
        <div className="glass px-8 py-4 rounded-full flex gap-8 items-center border-white/5 bg-black/50 backdrop-blur-2xl">
          {['Sobre', 'Skills', 'Jornada', 'Criativo'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase() === 'sobre' ? 'about' : item.toLowerCase() === 'jornada' ? 'trajectory' : item.toLowerCase() === 'criativo' ? 'creative' : 'skills'}`}
              className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 hover:text-amber-500 transition-colors"
            >
              {item}
            </a>
          ))}
          <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
        </div>
      </div>
    </nav>
  );
}
