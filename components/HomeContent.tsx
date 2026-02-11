'use client';

import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';
import { motion } from 'framer-motion';
import { Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import type { EssayMeta } from '@/lib/essays';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function HomeContent({ essays }: { essays: EssayMeta[] }) {
  return (
    <main className="min-h-screen px-6 py-16">
      <motion.div
        className="max-w-lg mx-auto"
        initial="hidden"
        animate="show"
        variants={container}
      >
        {/* Header */}
        <motion.div variants={item} className="flex items-center justify-between mb-12">
          <h1 className="text-4xl font-bold text-accent">Adrian Wu</h1>
          <ThemeToggle />
        </motion.div>

        {/* Bio */}
        <motion.p variants={item} className="text-lg leading-relaxed mb-16 text-foreground/80">
          figuring stuff out
        </motion.p>

        {/* Essays */}
        <motion.section variants={item} className="mb-16">
          <h2 className="text-sm font-mono uppercase tracking-widest text-foreground/50 mb-6">Essays</h2>
          <div className="space-y-3">
            {essays.map((essay, index) => (
              <motion.div
                key={essay.slug}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Link
                  href={`/essays/${essay.slug}`}
                  className="group block p-4 -mx-4 rounded-xl hover:bg-foreground/5 transition-all hover:shadow-lg hover:shadow-accent/10 border border-transparent hover:border-foreground/10"
                >
                  <div className="flex items-baseline justify-between gap-4 mb-1">
                    <span className="text-lg font-semibold group-hover:text-accent transition-colors">
                      {essay.title}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-foreground/30 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                  </div>
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="text-foreground/60 text-sm">{essay.description}</p>
                    <span className="text-xs text-foreground/40 shrink-0">{essay.date}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Links */}
        <motion.section variants={item}>
          <h2 className="text-sm font-mono uppercase tracking-widest text-foreground/50 mb-4">Links</h2>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/feed/"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-foreground/5 hover:bg-foreground/10 text-foreground/70 hover:text-accent transition-all hover:shadow-md hover:-translate-y-0.5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-4 h-4" />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
            <a
              href="mailto:adrian.wu.atw@gmail.com"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-foreground/5 hover:bg-foreground/10 text-foreground/70 hover:text-accent transition-all hover:shadow-md hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm font-medium">Email</span>
            </a>
          </div>
        </motion.section>
      </motion.div>
    </main>
  );
}
