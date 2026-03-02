'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function InfoCard({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [time, setTime] = useState('');
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function tick() {
      setTime(
        new Date().toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      );
    }
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (cardRef.current && !cardRef.current.contains(e.target as Node)) {
        onClose();
      }
    }
    if (open) {
      document.addEventListener('mousedown', handleClick);
    }
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            ref={cardRef}
            className="bg-primary text-white rounded-2xl p-8 w-[90vw] max-w-md relative"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="font-display text-2xl mb-4">Adrian Wu</h2>

            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Student and aspiring builder. Interested in technology, design, and making things that are useful.
              Currently studying CS and exploring ideas through code.
            </p>

            <div className="space-y-2 text-sm mb-6">
              <a
                href="mailto:adrian.wu.atw@gmail.com"
                className="block text-white/70 hover:text-white transition-colors"
              >
                adrian.wu.atw@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/feed/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white/70 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>

            <div className="text-xs text-white/50 flex items-center justify-between">
              <span>&copy; {new Date().getFullYear()} Adrian Wu</span>
              <span className="font-mono">{time}</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
