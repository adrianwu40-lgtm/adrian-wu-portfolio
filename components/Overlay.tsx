'use client';

import { useCallback, useEffect, useState } from 'react';

export default function Overlay() {
  const [isMobile, setIsMobile] = useState(false);

  const scrollToContent = useCallback(() => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const px = isMobile ? 16 : 28;
  const pt = isMobile ? 20 : 28;
  const fontSize = isMobile ? '18vw' : '13.5vw';

  const textStyle: React.CSSProperties = {
    fontFamily: "'Alte Haas Grotesk', 'Inter', sans-serif",
    fontWeight: 700,
    fontSize,
    letterSpacing: '-0.025em',
  };

  return (
    <section
      className="relative z-10 h-screen cursor-pointer"
      onClick={scrollToContent}
    >
      <svg className="w-full h-full" style={{ userSelect: 'none' }}>
        <defs>
          <mask id="text-knockout">
            <rect width="100%" height="100%" fill="white" />
            <text
              x={px}
              y={pt}
              style={textStyle}
              fill="black"
              dominantBaseline="hanging"
            >
              ADRIAN WU
            </text>
          </mask>
        </defs>

        {/* Blue overlay with text-shaped holes */}
        <rect
          width="100%"
          height="100%"
          fill="rgba(0, 0, 255, 0.92)"
          mask="url(#text-knockout)"
        />

        {/* Semi-transparent white text */}
        <text
          x={px}
          y={pt}
          style={textStyle}
          fill="rgba(180, 180, 220, 0.7)"
          dominantBaseline="hanging"
        >
          ADRIAN WU
        </text>
      </svg>
    </section>
  );
}
