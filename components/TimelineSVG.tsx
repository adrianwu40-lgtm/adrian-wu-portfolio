'use client';

import { motion, MotionValue, useTransform } from 'framer-motion';
import { timelineNodes, TIMELINE_WIDTH, TRUNK_Y, FORK_OFFSET } from '@/lib/timelineData';

interface TimelineSVGProps {
  scrollX: MotionValue<number>;
}

export default function TimelineSVG({ scrollX }: TimelineSVGProps) {
  const height = TRUNK_Y * 2;

  return (
    <svg
      width={TIMELINE_WIDTH}
      height={height}
      className="absolute top-0 left-0"
      style={{ overflow: 'visible' }}
    >
      {/* Trunk line */}
      <line
        x1={60}
        y1={TRUNK_Y}
        x2={TIMELINE_WIDTH - 60}
        y2={TRUNK_Y}
        stroke="#1A1A2E"
        strokeWidth={1.5}
        strokeOpacity={0.15}
      />

      {/* Fork branches */}
      {timelineNodes
        .filter((n) => n.type === 'fork')
        .map((node) => {
          if (node.type !== 'fork') return null;
          const endY = node.direction === 'up' ? TRUNK_Y - FORK_OFFSET : TRUNK_Y + FORK_OFFSET;
          const cp1Y = node.direction === 'up' ? TRUNK_Y - FORK_OFFSET * 0.6 : TRUNK_Y + FORK_OFFSET * 0.6;
          const path = `M ${node.x},${TRUNK_Y} C ${node.x},${cp1Y} ${node.x + 30},${endY} ${node.x + 50},${endY}`;

          return (
            <BranchPath
              key={node.id}
              d={path}
              nodeX={node.x}
              scrollX={scrollX}
            />
          );
        })}
    </svg>
  );
}

function BranchPath({
  d,
  nodeX,
  scrollX,
}: {
  d: string;
  nodeX: number;
  scrollX: MotionValue<number>;
}) {
  const isInitiallyVisible = nodeX < 800;
  const pathLength = useTransform(
    scrollX,
    [Math.max(0, nodeX - 500), Math.max(1, nodeX - 150)],
    [isInitiallyVisible ? 1 : 0, 1]
  );

  return (
    <motion.path
      d={d}
      fill="none"
      stroke="#2D2BCC"
      strokeWidth={1.5}
      strokeOpacity={0.5}
      style={{ pathLength }}
    />
  );
}
