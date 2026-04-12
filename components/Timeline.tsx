'use client';

import { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useMotionValue } from 'framer-motion';
import { timelineNodes, TIMELINE_WIDTH, TRUNK_Y } from '@/lib/timelineData';
import TimelineSVG from '@/components/TimelineSVG';
import TimelineNode from '@/components/TimelineNode';
import ForkEssay from '@/components/ForkEssay';

export default function Timeline() {
  const [activeEssay, setActiveEssay] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollX = useMotionValue(0);

  const handleScroll = useCallback(() => {
    if (containerRef.current) {
      scrollX.set(containerRef.current.scrollLeft);
    }
  }, [scrollX]);

  const handleForkClick = useCallback((slug: string) => {
    setActiveEssay(slug);
  }, []);

  const handleBack = useCallback(() => {
    setActiveEssay(null);
  }, []);

  const height = TRUNK_Y * 2;

  return (
    <div>
      <h2 className="text-xs uppercase tracking-widest text-foreground/40 mb-6">Experience</h2>

      <AnimatePresence mode="wait">
        {activeEssay ? (
          <ForkEssay key="essay" slug={activeEssay} onBack={handleBack} />
        ) : (
          <motion.div
            key="timeline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Timeline viewport — native horizontal scroll */}
            <div
              ref={containerRef}
              className="relative overflow-x-auto overflow-y-hidden"
              style={{ height: height + 20 }}
              onScroll={handleScroll}
            >
              {/* Edge fade indicators */}
              <div
                className="sticky left-0 top-0 bottom-0 w-16 z-10 pointer-events-none float-left"
                style={{
                  height,
                  background: 'linear-gradient(to right, #FAFAFA, transparent)',
                  marginRight: -64,
                }}
              />

              {/* Inner container */}
              <div
                className="relative"
                style={{
                  width: TIMELINE_WIDTH,
                  height,
                }}
              >
                <TimelineSVG scrollX={scrollX} />

                {timelineNodes.map((node) => (
                  <TimelineNode
                    key={node.id}
                    node={node}
                    scrollX={scrollX}
                    onForkClick={node.type === 'fork' ? handleForkClick : undefined}
                  />
                ))}
              </div>
            </div>

            {/* Scroll hint */}
            <p className="text-xs text-foreground/20 mt-2 text-center">
              scroll horizontally to explore
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
