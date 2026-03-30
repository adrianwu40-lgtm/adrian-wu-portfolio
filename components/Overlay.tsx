'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface OverlayProps {
  onDismiss: () => void;
}

export default function Overlay({ onDismiss }: OverlayProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [adrianBox, setAdrianBox] = useState<{ width: number; height: number } | null>(null);
  const [wuWidth, setWuWidth] = useState(0);
  const [measured, setMeasured] = useState(false);
  const adrianRef = useRef<SVGTextElement>(null);
  const wuRef = useRef<SVGTextElement>(null);
  const est06Ref = useRef<SVGTextElement>(null);

  const measure = useCallback(() => {
    setIsMobile(window.innerWidth < 768);
    if (adrianRef.current) {
      const bbox = adrianRef.current.getBBox();
      setAdrianBox({ width: bbox.width, height: bbox.height });
    }
    if (wuRef.current) {
      setWuWidth(wuRef.current.getBBox().width);
    }
  }, []);

  useEffect(() => {
    measure();
    // Mark as measured after a frame so positions are settled
    requestAnimationFrame(() => setMeasured(true));
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

  const barWidth = adrianBox ? adrianBox.height * 0.75 * 0.75 * 0.8 : 0;
  const barHeight = adrianBox ? adrianBox.height * 0.08 * 0.75 : 0;
  const barX = px + (adrianBox?.width ?? 0);
  const barY = pt + (adrianBox ? adrianBox.height * 0.72 : 0);
  const barRx = barHeight / 2;
  const wSlant = adrianBox ? adrianBox.height * 0.12 : 0;
  const wuX = barX + barWidth - wSlant;

  const tmGap = adrianBox ? adrianBox.height * 0.02 : 0;
  const tmX = wuX + wuWidth + tmGap;
  const tmDy = adrianBox ? adrianBox.height * 0.04 : 0;
  const tmStyle: React.CSSProperties = {
    ...textStyle,
    fontSize: isMobile ? '10.8vw' : '8.1vw',
  };

  const lineGap = adrianBox ? adrianBox.height * -0.25 : 0;
  const line2Y = pt + (adrianBox ? adrianBox.height + lineGap : 0);

  const textColor = '#B0B4DC';

  return (
    <motion.section
      className="fixed inset-0 z-50 cursor-pointer"
      onClick={onDismiss}
      initial={{ opacity: 0 }}
      animate={{ opacity: measured ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: measured ? 0.5 : 0, ease: [0.4, 0, 0.2, 1] }}
    >
      <svg className="w-full h-full" style={{ userSelect: 'none' }}>
        <rect
          width="100%"
          height="100%"
          fill="rgba(0, 0, 220, 0.92)"
        />

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
    </motion.section>
  );
}
