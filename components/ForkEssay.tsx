'use client';

import { motion } from 'framer-motion';
import { forkEssays } from '@/lib/forkEssays';

interface ForkEssayProps {
  slug: string;
  onBack: () => void;
}

export default function ForkEssay({ slug, onBack }: ForkEssayProps) {
  const essay = forkEssays[slug];
  if (!essay) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      className="min-h-[400px]"
    >
      {/* Back link */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-sm text-foreground/40 hover:text-foreground/70 transition-colors mb-10 cursor-pointer"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M10 12L6 8L10 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Back to timeline
      </button>

      {/* Essay */}
      <div className="max-w-[600px]">
        <h2
          className="font-display text-3xl text-primary mb-8"
          style={{ letterSpacing: '-0.02em' }}
        >
          {essay.title}
        </h2>

        <div className="font-heading text-lg leading-[1.8] text-foreground/80 space-y-6">
          {essay.content}
        </div>
      </div>
    </motion.div>
  );
}
