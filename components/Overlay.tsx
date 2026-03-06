'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

export default function Overlay() {
  const [isMobile, setIsMobile] = useState(false);
  const [adrianBox, setAdrianBox] = useState<{ width: number; height: number } | null>(null);
  const adrianRef = useRef<SVGTextElement>(null);

  const scrollToContent = useCallback(() => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  }, []);

  const measure = useCallback(() => {
    setIsMobile(window.innerWidth < 768);
    if (adrianRef.current) {
      const bbox = adrianRef.current.getBBox();
      setAdrianBox({ width: bbox.width, height: bbox.height });
    }
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [measure]);

  const px = isMobile ? 16 : 28;
  const pt = isMobile ? 20 : 28;
  const fontSize = isMobile ? '18vw' : '13.5vw';

  const textStyle: React.CSSProperties = {
    fontFamily: "'Alte Haas Grotesk', 'Inter', sans-serif",
    fontWeight: 700,
    fontSize,
    letterSpacing: '-0.025em',
  };

  // Bar dimensions — horizontal bar between words
  const gap = adrianBox ? adrianBox.width * 0.03 : 0;
  const barWidth = adrianBox ? adrianBox.height * 0.75 * 0.75 * 0.8 : 0;
  const barHeight = adrianBox ? adrianBox.height * 0.08 * 0.75 : 0;
  const barX = px + (adrianBox?.width ?? 0);
  const barY = pt + (adrianBox ? adrianBox.height * 0.72 : 0);
  const barRx = barHeight / 2;
  // Offset WU left so bar's right edge aligns with W's lower-left corner
  // (W's diagonal stroke means lower-left is ~12% of text height right of the text x)
  const wSlant = adrianBox ? adrianBox.height * 0.12 : 0;
  const wuX = barX + barWidth - wSlant;

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
              ref={adrianRef}
              x={px}
              y={pt}
              style={textStyle}
              fill="black"
              dominantBaseline="hanging"
            >
              ADRIAN
            </text>
            {adrianBox && (
              <>
                <rect
                  x={barX}
                  y={barY}
                  width={barWidth}
                  height={barHeight}
                  rx={barRx}
                  ry={barRx}
                  fill="black"
                >
                  <animate attributeName="opacity" values="1;1;0;0" keyTimes="0;0.49;0.5;1" dur="1s" repeatCount="indefinite" />
                </rect>
                <text
                  x={wuX}
                  y={pt}
                  style={textStyle}
                  fill="black"
                  dominantBaseline="hanging"
                >
                  WU
                </text>
              </>
            )}
          </mask>
        </defs>

        {/* Blue overlay with text-shaped holes */}
        <rect
          width="100%"
          height="100%"
          fill="rgba(0, 0, 255, 0.92)"
          mask="url(#text-knockout)"
        />

        {/* Semi-transparent text overlay */}
        <text
          x={px}
          y={pt}
          style={textStyle}
          fill="rgba(180, 180, 220, 0.7)"
          dominantBaseline="hanging"
        >
          ADRIAN
        </text>
        {adrianBox && (
          <>
            <rect
              x={barX}
              y={barY}
              width={barWidth}
              height={barHeight}
              rx={4}
              ry={4}
              fill="rgba(180, 180, 220, 0.7)"
            >
              <animate attributeName="opacity" values="1;1;0;0" keyTimes="0;0.49;0.5;1" dur="1s" repeatCount="indefinite" />
            </rect>
            <text
              x={wuX}
              y={pt}
              style={textStyle}
              fill="rgba(180, 180, 220, 0.7)"
              dominantBaseline="hanging"
            >
              WU
            </text>
          </>
        )}
      </svg>
    </section>
  );
}
