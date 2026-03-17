import { RefinedIndex } from './components/RefinedIndex';
import { Trajectory } from './components/Trajectory';
import { Creative } from './components/Creative';
import { CustomCursor } from './components/CustomCursor';
import { AuroraBackground } from './components/AuroraBackground';

function App() {
  return (
    <div className="min-h-screen bg-transparent text-foreground relative selection:bg-amber-500/30 grain-overlay cursor-none selection:text-amber-500">
      <CustomCursor />
      <AuroraBackground />

      {/* Global Vertical Grid Lines (Blueprint Feel) */}
      <div className="fixed inset-0 pointer-events-none max-w-[1700px] mx-auto grid grid-cols-4 divide-x divide-white/5 z-0" />

      <main className="relative z-10">
        <RefinedIndex />
        <Trajectory />
        <Creative />
      </main>

      <footer className="py-20 text-center text-white/20 text-[10px] font-bold uppercase tracking-[0.5em] border-t border-white/5 relative z-10 bg-black/40 backdrop-blur-sm">
        <p>© {new Date().getFullYear()} João Matsumoto • Portfólio </p>
      </footer>
    </div>
  );
}

export default App;
