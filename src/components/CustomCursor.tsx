import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' || 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON'
      );
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      <div 
        className={`fixed top-0 left-0 w-8 h-8 rounded-full border border-amber-500/50 pointer-events-none z-[9999] transition-transform duration-300 ease-out flex items-center justify-center
          ${isPointer ? 'scale-[2.5] bg-amber-500/10 border-amber-500' : 'scale-100'}
          ${isClicking ? 'scale-[0.8]' : ''}
        `}
        style={{ 
          transform: `translate3d(${position.x - 16}px, ${position.y - 16}px, 0) ${isPointer ? 'scale(2.5)' : 'scale(1)'}`,
          transition: 'transform 0.15s ease-out, scale 0.3s ease, background 0.3s ease'
        }}
      >
        <div className={`w-1 h-1 bg-amber-500 rounded-full ${isPointer ? 'opacity-0' : 'opacity-100'}`} />
      </div>
      
      {/* Magnetic trail or glow effect could be added here */}
    </>
  );
}
