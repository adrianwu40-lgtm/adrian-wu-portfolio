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
        <main className="min-h-screen">
          <motion.div
            className="relative w-full h-screen"
            initial="hidden"
            animate="show"
            variants={container}
          >
            {/* Sidebar — upper-left, inset 10vw from edge */}
            <motion.div
              variants={item}
              className="absolute top-12 left-[10vw] md:top-16"
            >
              <Sidebar />
            </motion.div>

            {/* Name — top of screen, aligned with central column */}
            <motion.div
              variants={item}
              className="absolute top-6 left-[30vw] md:top-8"
            >
              <h1 className="font-display text-5xl md:text-6xl text-foreground leading-tight">
                Adrian Wu
              </h1>
            </motion.div>

            {/* Face icon — top-right corner */}
            <motion.div
              variants={item}
              className="absolute top-6 right-6 md:top-8 md:right-12"
            >
              <button
                onClick={() => setInfoOpen(true)}
                className="hover:scale-110 transition-transform cursor-pointer"
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

            {/* Central column — shifted right 10vw from center */}
            <div className="absolute left-[30vw] top-32 md:top-40 w-[60%] md:w-[50%]">
              <motion.p
                variants={item}
                className="text-xl md:text-2xl leading-relaxed text-secondary max-w-lg"
              >
                figuring stuff out
              </motion.p>
            </div>
          </motion.div>
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
