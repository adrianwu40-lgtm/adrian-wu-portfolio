'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface HoverImageProps {
  src: string;
  alt: string;
  width?: number;
  children: React.ReactNode;
}

const MARGIN = 12;
const OFFSET_Y = 8;

export default function HoverImage({ src, alt, width = 300, children }: HoverImageProps) {
  const triggerRef = useRef<HTMLSpanElement>(null);
  const [hovered, setHovered] = useState(false);
  const [tapped, setTapped] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const [pos, setPos] = useState<{ x: number; y: number; placement: 'above' | 'below' } | null>(null);
  const tapCountRef = useRef(0);

  // SSR guard
  useEffect(() => {
    setMounted(true);
    setIsTouch(window.matchMedia('(hover: none)').matches);
  }, []);

  // Preload image
  useEffect(() => {
    const img = new Image();
    img.src = src;
  }, [src]);

  const calcPosition = useCallback(() => {
    if (!triggerRef.current) return null;
    const rect = triggerRef.current.getBoundingClientRect();
    const imgHeight = width * 0.75; // 4:3 aspect ratio estimate

    // Horizontal: center over trigger, clamp to viewport
    let x = rect.left + rect.width / 2 - width / 2;
    x = Math.max(MARGIN, Math.min(x, window.innerWidth - width - MARGIN));

    // Vertical: prefer above, flip to below if clipped
    let y = rect.top - imgHeight - OFFSET_Y;
    let placement: 'above' | 'below' = 'above';
    if (y < MARGIN) {
      y = rect.bottom + OFFSET_Y;
      placement = 'below';
      if (y + imgHeight > window.innerHeight - MARGIN) {
        y = MARGIN;
        placement = 'above';
      }
    }

    return { x, y, placement };
  }, [width]);

  const show = useCallback(() => {
    const p = calcPosition();
    if (p) {
      setPos(p);
      setHovered(true);
    }
  }, [calcPosition]);

  const hide = useCallback(() => {
    setHovered(false);
    setTapped(false);
    tapCountRef.current = 0;
  }, []);

  // Dismiss on scroll
  useEffect(() => {
    if (!hovered) return;
    const onScroll = () => hide();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [hovered, hide]);

  // Mobile: dismiss on outside tap
  useEffect(() => {
    if (!tapped) return;
    const onClickOutside = (e: MouseEvent) => {
      if (triggerRef.current && !triggerRef.current.contains(e.target as Node)) {
        hide();
      }
    };
    document.addEventListener('click', onClickOutside);
    return () => document.removeEventListener('click', onClickOutside);
  }, [tapped, hide]);

  const handleMouseEnter = () => {
    if (isTouch) return;
    show();
  };

  const handleMouseLeave = () => {
    if (isTouch) return;
    hide();
  };

  const handleClick = (e: React.MouseEvent) => {
    if (!isTouch) return;

    if (!tapped) {
      // First tap: show image, block link navigation
      e.preventDefault();
      e.stopPropagation();
      tapCountRef.current = 1;
      setTapped(true);
      show();
    } else {
      // Second tap: dismiss and allow navigation
      hide();
    }
  };

  const visible = hovered || tapped;

  return (
    <>
      <span
        ref={triggerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        style={{ display: 'inline', position: 'relative', color: '#1A1A6E', cursor: 'pointer' }}
      >
        {children}
      </span>
      {mounted && createPortal(
        <AnimatePresence>
          {visible && pos && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: pos.placement === 'above' ? 8 : -8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: pos.placement === 'above' ? 8 : -8 }}
              transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] as const }}
              style={{
                position: 'fixed',
                left: pos.x,
                top: pos.y,
                width,
                zIndex: 40,
                pointerEvents: 'none',
              }}
              className="rounded-lg overflow-hidden"
            >
              <img
                src={src}
                alt={alt}
                className="w-full h-auto object-cover"
                style={{ opacity: 0.96 }}
              />
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
