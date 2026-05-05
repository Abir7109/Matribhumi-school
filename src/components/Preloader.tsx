import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SchoolSeal } from './Icons';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [showBengali, setShowBengali] = useState(false);
  const [showTagline, setShowTagline] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer);
          setTimeout(onComplete, 800);
          return 100;
        }
        return Math.min(oldProgress + 2, 100);
      });
    }, 40);

    const bengaliTimer = setTimeout(() => setShowBengali(true), 1500);
    const taglineTimer = setTimeout(() => setShowTagline(true), 2000);

    return () => {
      clearInterval(timer);
      clearTimeout(bengaliTimer);
      clearTimeout(taglineTimer);
    };
  }, [onComplete]);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: 'spring' }}
        className="mb-8"
      >
        <SchoolSeal size={100} />
      </motion.div>

      <div className="text-center space-y-2">
        <motion.h1 
          className="font-serif text-2xl md:text-3xl font-bold text-royal-blue overflow-hidden"
        >
          Matribhumi Model School and College
        </motion.h1>
        
        <AnimatePresence>
          {showBengali && (
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[#3D4166] font-bengali text-lg"
            >
              মাতৃভূমি মডেল স্কুল এন্ড কলেজ
            </motion.p>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showTagline && (
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-serif italic text-academic-gold text-sm"
            >
              Where Excellence Begins
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-12 text-[#6B7280] font-mono text-xs tabular-nums">
        {Math.round(progress)}%
      </div>

      <div className="fixed bottom-0 left-0 w-full h-[3px] bg-ghost-white">
        <motion.div 
          className="h-full bg-linear-to-r from-royal-blue via-sky-blue to-academic-gold"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
        />
      </div>
    </motion.div>
  );
}
