'use client';

import { useEffect, useRef } from 'react';
import NavigationArrows from '@/components/NavigationArrows';
import WorkPanel from '@/components/WorkPanel';
import LandingPanel from '@/components/LandingPanel';
import EssaysPanel from '@/components/EssaysPanel';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Initialize scroll position to center panel on mount
  useEffect(() => {
    if (containerRef.current) {
      const centerPanel = containerRef.current.children[1] as HTMLElement;
      if (centerPanel) {
        centerPanel.scrollIntoView({ behavior: 'auto', block: 'nearest', inline: 'start' });
      }
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex h-screen w-screen overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      {/* Hide horizontal scrollbar */}
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Left Panel - Work */}
      <WorkPanel />

      {/* Center Panel - Landing */}
      <LandingPanel />

      {/* Right Panel - Essays */}
      <EssaysPanel />

      {/* Navigation Arrows */}
      <NavigationArrows containerRef={containerRef} />
    </div>
  );
}
