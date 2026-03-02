'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Sidebar from '@/components/Sidebar';
import InfoCard from '@/components/InfoCard';
import Overlay from '@/components/Overlay';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function HomeContent() {
  const [infoOpen, setInfoOpen] = useState(false);

  return (
    <>
      {/* Home page — fixed in place, always visible behind the overlay */}
      <div className="fixed inset-0 z-0">
        <main className="min-h-screen px-6 py-16 md:px-12">
          <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-12 md:gap-20">
            <div className="md:pt-1 shrink-0">
              <Sidebar />
            </div>

            <motion.div
              className="flex-1"
              initial="hidden"
              animate="show"
              variants={container}
            >
              <motion.div variants={item} className="flex items-start justify-between mb-12">
                <h1 className="font-display text-5xl md:text-6xl text-primary leading-tight">
                  Adrian Wu
                </h1>
                <button
                  onClick={() => setInfoOpen(true)}
                  className="mt-2 hover:scale-110 transition-transform cursor-pointer"
                  aria-label="About me"
                >
                  <Image
                    src="/face-icon.png"
                    alt="About me"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </button>
              </motion.div>

              <motion.p
                variants={item}
                className="text-xl md:text-2xl leading-relaxed text-foreground/70 max-w-lg"
              >
                figuring stuff out
              </motion.p>
            </motion.div>
          </div>
        </main>
      </div>

      {/* Overlay — scrolls on top, peels away to reveal home */}
      <Overlay />

      {/* Transparent spacer so scrolling past the overlay reveals the fixed home */}
      <div className="relative z-0 h-screen pointer-events-none" />

      <InfoCard open={infoOpen} onClose={() => setInfoOpen(false)} />
    </>
  );
}
