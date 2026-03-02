'use client';

import { useCallback } from 'react';

export default function Overlay() {
  const scrollToContent = useCallback(() => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  }, []);

  return (
    <section
      className="relative z-10 h-screen bg-[#0C0CD6]/80 flex items-start justify-start cursor-pointer px-8 pt-12 md:px-16 md:pt-16"
      onClick={scrollToContent}
    >
      <div className="flex items-center">
        <h1 className="font-display text-white text-[18vw] md:text-[13.5vw] leading-none tracking-tight select-none">
          ADRIAN WU
        </h1>
        <span className="inline-block w-[6px] h-[13.5vw] md:h-[10.5vw] bg-white ml-4 animate-blink" />
      </div>
    </section>
  );
}
