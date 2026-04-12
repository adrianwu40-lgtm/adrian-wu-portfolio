'use client';

import { motion, MotionValue, useTransform } from 'framer-motion';
import { TimelineNode as NodeType, TRUNK_Y, FORK_OFFSET } from '@/lib/timelineData';

interface TimelineNodeProps {
  node: NodeType;
  scrollX: MotionValue<number>;
  onForkClick?: (slug: string) => void;
}

export default function TimelineNode({ node, scrollX, onForkClick }: TimelineNodeProps) {
  // Nodes within the first viewport-width should be visible immediately
  const effectiveX = node.type === 'fork' ? node.x + 50 : node.x;
  const isInitiallyVisible = effectiveX < 800;
  const opacity = useTransform(
    scrollX,
    [Math.max(0, effectiveX - 450), Math.max(1, effectiveX - 200)],
    [isInitiallyVisible ? 1 : 0, 1]
  );

  if (node.type === 'trunk') {
    return (
      <motion.div
        className="absolute flex flex-col items-center"
        style={{
          left: node.x,
          top: TRUNK_Y,
          opacity,
          transform: 'translate(-50%, -50%)',
        }}
      >
        {/* Dot */}
        <div
          className="rounded-full"
          style={{
            width: 8,
            height: 8,
            backgroundColor: '#1A1A2E',
            opacity: 0.25,
          }}
        />
        {/* Label */}
        <span
          className="absolute top-5 whitespace-nowrap text-foreground/30"
          style={{ fontSize: '11px', letterSpacing: '0.05em' }}
        >
          {node.label}
        </span>
      </motion.div>
    );
  }

  // Fork node
  const endY = node.direction === 'up' ? TRUNK_Y - FORK_OFFSET : TRUNK_Y + FORK_OFFSET;
  const labelAbove = node.direction === 'up';

  return (
    <motion.div
      className="absolute flex flex-col items-center cursor-pointer group"
      style={{
        left: node.x + 50, // offset to match branch endpoint
        top: endY,
        opacity,
        transform: 'translate(-50%, -50%)',
      }}
      onClick={() => onForkClick?.(node.essaySlug)}
    >
      {/* Label */}
      <span
        className={`absolute whitespace-nowrap font-semibold text-primary group-hover:text-primary/80 transition-colors ${
          labelAbove ? 'bottom-6' : 'top-6'
        }`}
        style={{ fontSize: '13px', letterSpacing: '0.03em' }}
      >
        {node.label}
      </span>
      {/* Circle */}
      <div className="relative">
        <div
          className="rounded-full transition-transform duration-200 group-hover:scale-125"
          style={{
            width: 16,
            height: 16,
            backgroundColor: '#2D2BCC',
          }}
        />
        {/* Hover ring */}
        <div
          className="absolute inset-0 rounded-full border-2 border-primary/0 group-hover:border-primary/30 transition-all duration-200"
          style={{ margin: -4, width: 24, height: 24 }}
        />
      </div>
    </motion.div>
  );
}
