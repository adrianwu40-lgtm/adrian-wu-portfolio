'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from '@/components/Sidebar';
import Overlay from '@/components/Overlay';
import HoverImage from '@/components/HoverImage';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const galleryItems = [
  { key: 'court', src: '/images/volleyball.jpg', alt: 'Volleyball celebration', aspect: '4/5' },
  { key: 'concertHall', src: '/images/conducting.jpg', alt: 'Conducting', aspect: '5/4' },
  { key: 'kitchen', src: '/images/kitchen.jpg', alt: 'Restaurant vibes', aspect: '4/3' },
] as const;

export default function HomeContent() {
  const [overlayVisible, setOverlayVisible] = useState(true);
  const [hoveredSlot, setHoveredSlot] = useState<string | null>(null);
  const [filledSlots, setFilledSlots] = useState<Set<string>>(new Set());

  const handleWordHover = (key: string) => setHoveredSlot(key);
  const handleWordLeave = () => setHoveredSlot(null);
  const handleWordClick = (key: string) => {
    setFilledSlots((prev) => {
      const next = new Set(prev);
      next.add(key);
      return next;
    });
  };

  return (
    <>
      <main>
        <motion.div
          initial="hidden"
          animate={overlayVisible ? 'hidden' : 'show'}
          variants={container}
        >
          {/* Hero section — full viewport, just the blurbs + scroll arrow */}
          <section className="min-h-screen flex flex-col justify-center px-6 md:px-[10vw]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-[6vw]">
              <motion.p
                variants={item}
                className="font-heading text-2xl md:text-[1.75rem] lg:text-[2rem] leading-[1.55] md:leading-[1.5] text-foreground"
              >
                Hello! I&apos;m Adrian, just a kid figuring out this whole growing up thing. I study Economics + LOC + AI at Northwestern. Previously, I built{' '}
                <HoverImage src="/images/rhythm.jpg" alt="Rhythm lamp">super-lamps</HoverImage>
                {' '}at{' '}
                <a
                  href="https://www.betterwithrhythm.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
                >
                  Rhythm
                </a>
                , got my butt kicked in{' '}
                <HoverImage src="/images/michelin.jpg" alt="Michelin starred restaurants">restaurants</HoverImage>
                , and worked on a neurosurgery tool at{' '}
                <a
                  href="https://saif.mechse.illinois.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
                >
                  UIUC
                </a>
                .
              </motion.p>

              <motion.div variants={item}>
                <p className="font-heading text-2xl md:text-[1.75rem] lg:text-[2rem] leading-[1.55] md:leading-[1.5] text-foreground">
                  I love people and helping lead teams with great culture. Currently bringing awesome vibes on the{' '}
                  <span
                    onMouseEnter={() => handleWordHover('court')}
                    onMouseLeave={handleWordLeave}
                    onClick={() => handleWordClick('court')}
                    style={{ color: '#1A1A6E', cursor: 'pointer' }}
                  >
                    court
                  </span>
                  , in the{' '}
                  <span
                    onMouseEnter={() => handleWordHover('concertHall')}
                    onMouseLeave={handleWordLeave}
                    onClick={() => handleWordClick('concertHall')}
                    style={{ color: '#1A1A6E', cursor: 'pointer' }}
                  >
                    concert hall
                  </span>
                  , and in the{' '}
                  <span
                    onMouseEnter={() => handleWordHover('kitchen')}
                    onMouseLeave={handleWordLeave}
                    onClick={() => handleWordClick('kitchen')}
                    style={{ color: '#1A1A6E', cursor: 'pointer' }}
                  >
                    kitchen
                  </span>
                  . Find me on{' '}
                  <a
                    href="https://www.linkedin.com/in/adrianwu2028"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
                  >
                    LinkedIn
                  </a>{' '}
                  or{' '}
                  <a
                    href="mailto:adrianwu2028@u.northwestern.edu"
                    className="underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
                  >
                    by email
                  </a>
                  .
                </p>

                {/* Photo gallery outlines */}
                <div className="flex gap-3 mt-8">
                  {galleryItems.map((img) => {
                    const isFilled = filledSlots.has(img.key);
                    const isHovered = hoveredSlot === img.key;
                    return (
                      <div
                        key={img.key}
                        className="relative overflow-hidden rounded-md"
                        style={{
                          width: 140,
                          aspectRatio: img.aspect,
                          border: '2px dashed',
                          borderColor: isFilled ? 'transparent' : isHovered ? '#1A1A6E' : '#B0B4C8',
                          transition: 'border-color 0.3s',
                        }}
                      >
                        <motion.img
                          src={img.src}
                          alt={img.alt}
                          className="absolute inset-0 w-full h-full object-cover"
                          initial={false}
                          animate={{
                            opacity: isFilled ? 1 : isHovered ? 0.35 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            {/* Down arrow */}
            <motion.div
              variants={item}
              className="flex justify-center mt-16 md:mt-24"
            >
              <motion.svg
                width="28"
                height="140"
                viewBox="0 0 28 140"
                fill="none"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                {/* Vertical line */}
                <line
                  x1="14"
                  y1="0"
                  x2="14"
                  y2="118"
                  stroke="#0000DD"
                  strokeWidth="4"
                />
                {/* Filled arrowhead */}
                <polygon
                  points="14,140 2,114 26,114"
                  fill="#0000DD"
                />
              </motion.svg>
            </motion.div>
          </section>

          {/* Below the fold — page two */}
          <section className="min-h-screen px-6 md:px-[10vw] pt-0">
            {/* Sticky top bar */}
            <motion.div
              variants={item}
              className="sticky top-0 z-10 flex items-center justify-between py-4 bg-background/90 backdrop-blur-sm border-b border-foreground/10"
            >
              <span className="text-sm font-semibold tracking-wide text-foreground">Adrian Wu</span>
              <a
                href="mailto:adrianwu2028@u.northwestern.edu"
                className="text-sm text-foreground/50 hover:text-foreground transition-colors"
              >
                Contact
              </a>
            </motion.div>

            {/* Sidebar + content layout */}
            <div className="flex gap-12 md:gap-16 pt-12 md:pt-16">
              {/* Fixed sidebar */}
              <motion.div variants={item} className="hidden md:block w-32 shrink-0">
                <div className="sticky top-20">
                  <Sidebar />
                </div>
              </motion.div>

              {/* Main content area */}
              <motion.div variants={item} className="flex-1 min-w-0">
                <div id="experience" className="mb-24">
                  <h2 className="text-xs uppercase tracking-widest text-foreground/40 mb-6">Experience</h2>
                  <div className="h-48 border border-dashed border-foreground/20 rounded-md flex items-center justify-center text-foreground/30 text-sm">
                    Experience content
                  </div>
                </div>

                <div id="text" className="mb-24">
                  <h2 className="text-xs uppercase tracking-widest text-foreground/40 mb-6">Text</h2>
                  <div className="h-48 border border-dashed border-foreground/20 rounded-md flex items-center justify-center text-foreground/30 text-sm">
                    Writing &amp; essays
                  </div>
                </div>

                <div id="restaurants" className="mb-24">
                  <h2 className="text-xs uppercase tracking-widest text-foreground/40 mb-6">Restaurants</h2>
                  <div className="h-48 border border-dashed border-foreground/20 rounded-md flex items-center justify-center text-foreground/30 text-sm">
                    Restaurant subpage
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </motion.div>
      </main>

      {/* Overlay — click to dismiss, never comes back */}
      <AnimatePresence>
        {overlayVisible && (
          <Overlay onDismiss={() => setOverlayVisible(false)} />
        )}
      </AnimatePresence>
    </>
  );
}
