'use client';

import { RefObject } from 'react';

interface NavigationArrowsProps {
  containerRef: RefObject<HTMLDivElement>;
}

export default function NavigationArrows({ containerRef }: NavigationArrowsProps) {
  const scrollToPanel = (direction: 'left' | 'right') => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const currentScroll = container.scrollLeft;
    const panelWidth = window.innerWidth;

    let targetScroll: number;
    if (direction === 'left') {
      targetScroll = currentScroll - panelWidth;
    } else {
      targetScroll = currentScroll + panelWidth;
    }

    container.scrollTo({
      left: targetScroll,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* Left Arrow - only visible on center panel */}
      <button
        onClick={() => scrollToPanel('left')}
        className="fixed left-8 top-1/2 -translate-y-1/2 z-50 text-gray-700 hover:text-gray-900 transition-colors bounce-left"
        aria-label="Navigate to Work panel"
      >
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Right Arrow - only visible on center panel */}
      <button
        onClick={() => scrollToPanel('right')}
        className="fixed right-8 top-1/2 -translate-y-1/2 z-50 text-gray-700 hover:text-gray-900 transition-colors bounce-right"
        aria-label="Navigate to Essays panel"
      >
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </>
  );
}
