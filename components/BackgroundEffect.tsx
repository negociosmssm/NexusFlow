
import React, { useEffect, useState } from 'react';

export const BackgroundEffect: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dynamic Gradient */}
      <div 
        className="absolute w-[800px] h-[800px] bg-[#00F5FF] opacity-[0.03] blur-[150px] rounded-full transition-transform duration-700 ease-out"
        style={{
          transform: `translate(${mousePos.x - 400}px, ${mousePos.y - 400}px)`
        }}
      />
      
      {/* Dot Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.05]" 
        style={{
          backgroundImage: 'radial-gradient(circle, #00F5FF 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Grid Lines */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}
      />
    </div>
  );
};
