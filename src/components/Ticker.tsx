import React from 'react';
import { motion } from 'motion/react';

export default function Ticker() {
  const notices = [
    "Admission 2027 is now OPEN — Limited seats available",
    "Registration forms available from November 1, 2026",
    "Spoken English classes every Friday & Saturday",
    "Mobile phones strictly prohibited on campus",
    "Residential & Non-Residential options available",
    "Day-care & Night-care services available",
    "EIIN: 134176 | Approved by Cumilla Education Board",
    "827 A+ grades achieved across PEC, JSC & SSC",
    "Best Institution — National Creative Talent Hunt, Chandina Upazila",
    "Classes: Play Group to Class 9",
    "Contact: 01877-761105 / 01833-333295"
  ];

  return (
    <div className="relative z-20 bg-linear-to-r from-royal-blue to-royal-blue-medium h-10 flex items-center overflow-hidden border-y border-white/10">
      {/* Notice Badge */}
      <div className="absolute left-0 z-30 h-full flex items-center bg-royal-blue px-4 shadow-[10px_0_20px_-5px_rgba(0,0,0,0.3)] border-r border-white/10">
        <span className="bg-white text-royal-blue text-[8px] font-black px-1.5 py-0.5 rounded tracking-[0.2em]">NOTICE</span>
      </div>

      {/* Scrolling Text */}
      <div className="flex whitespace-nowrap">
        <motion.div 
          animate={{ x: [0, -100 + '%'] }}
          transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
          className="flex items-center gap-12 px-12"
        >
          {notices.map((notice, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="text-white text-xs font-medium">{notice}</span>
              <span className="text-academic-gold text-base">◆</span>
            </div>
          ))}
        </motion.div>
        
        {/* Duplicate for seamless infinite scroll */}
        <motion.div 
          animate={{ x: [0, -100 + '%'] }}
          transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
          className="flex items-center gap-12 px-12"
        >
          {notices.map((notice, i) => (
            <div key={i+"dup"} className="flex items-center gap-3">
              <span className="text-white text-xs font-medium">{notice}</span>
              <span className="text-academic-gold text-base">◆</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* View All */}
      <div className="absolute right-0 z-30 h-full flex items-center bg-linear-to-l from-royal-blue-medium to-transparent px-4">
        <a href="#" className="text-white/70 hover:text-white text-[10px] font-bold transition-colors">View All →</a>
      </div>
    </div>
  );
}
