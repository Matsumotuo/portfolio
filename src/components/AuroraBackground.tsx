export function AuroraBackground() {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
      {/* Slow-moving aurora blobs */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-blue-500/8 blur-[180px] animate-aurora-1 top-[-10%] left-[-5%]" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-purple-500/8 blur-[160px] animate-aurora-2 top-[30%] right-[-10%]" />
      <div className="absolute w-[400px] h-[400px] rounded-full bg-indigo-500/6 blur-[140px] animate-aurora-3 bottom-[5%] left-[20%]" />
      <div className="absolute w-[350px] h-[350px] rounded-full bg-pink-500/5 blur-[120px] animate-aurora-4 top-[60%] right-[30%]" />
      
      {/* Subtle grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(240_10%_3.9%/0.4)_70%,hsl(240_10%_3.9%/0.9)_100%)]" />
    </div>
  );
}
