import React, { useEffect, useState } from 'react';

const CursorDot = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
      style={{
        transform: `translate(${position.x - 75}px, ${position.y - 75}px)`,
      }}
    >
      <div className="w-[150px] h-[150px] bg-blue-400 rounded-full opacity-30 blur-2xl" />
    </div>
  );
};

export default CursorDot;
