'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

export default function Overlay() {
  const [isMobile, setIsMobile] = useState(false);
  const [adrianBox, setAdrianBox] = useState<{ width: number; height: number } | null>(null);
  const [wuWidth, setWuWidth] = useState(0);
  const [est06Box, setEst06Box] = useState<{ width: number; height: number } | null>(null);
  const adrianRef = useRef<SVGTextElement>(null);
  const wuRef = useRef<SVGTextElement>(null);
  const est06Ref = useRef<SVGTextElement>(null);

  const scrollToContent = useCallback(() => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  }, []);

  const measure = useCallback(() => {
    setIsMobile(window.innerWidth < 768);
    if (adrianRef.current) {
      const bbox = adrianRef.current.getBBox();
      setAdrianBox({ width: bbox.width, height: bbox.height });
    }
    if (wuRef.current) {
      setWuWidth(wuRef.current.getBBox().width);
    }
    if (est06Ref.current) {
      const bbox = est06Ref.current.getBBox();
      setEst06Box({ width: bbox.width, height: bbox.height });
    }
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [measure]);

  const px = isMobile ? 8 : 10;
  const pt = isMobile ? 8 : 10;
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

  // TM superscript — positioned at top-right of WU, ~25% font size
  const tmGap = adrianBox ? adrianBox.height * 0.02 : 0;
  const tmX = wuX + wuWidth + tmGap;
  const tmDy = adrianBox ? adrianBox.height * 0.04 : 0;
  const tmStyle: React.CSSProperties = {
    ...textStyle,
    fontSize: isMobile ? '10.8vw' : '8.1vw',
  };

  // Line 2: EST06
  const lineGap = adrianBox ? adrianBox.height * -0.25 : 0;
  const line2Y = pt + (adrianBox ? adrianBox.height + lineGap : 0);

  const textColor = '#B0B4DC';

  return (
    <section
      className="relative z-10 h-screen cursor-pointer"
      onClick={scrollToContent}
    >
      <svg className="w-full h-full" style={{ userSelect: 'none' }}>
        {/* Solid blue background */}
        <rect
          width="100%"
          height="100%"
          fill="rgba(0, 0, 220, 0.92)"
        />

        {/* Solid text — no knockout/see-through */}
        <text
          ref={adrianRef}
          x={px}
          y={pt}
          style={textStyle}
          fill={textColor}
          dominantBaseline="hanging"
        >
          ADRIAN
        </text>
        {/* WU rendered unconditionally so wuRef can measure it */}
        <text
          ref={wuRef}
          x={wuX}
          y={pt}
          style={textStyle}
          fill={textColor}
          dominantBaseline="hanging"
        >
          WU
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
              fill={textColor}
            >
              <animate attributeName="opacity" values="1;1;0;0" keyTimes="0;0.49;0.5;1" dur="1s" repeatCount="indefinite" />
            </rect>
            {wuWidth > 0 && (
              <text
                x={tmX}
                y={pt}
                dy={tmDy}
                style={tmStyle}
                fill={textColor}
                dominantBaseline="hanging"
              >
                TM
              </text>
            )}
            <text
              ref={est06Ref}
              x={px}
              y={line2Y}
              style={textStyle}
              fill={textColor}
              dominantBaseline="hanging"
            >
              EST06
            </text>
          </>
        )}
      </svg>
    </section>
  );
}
