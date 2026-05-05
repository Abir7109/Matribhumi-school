import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, BookOpen, Star, Binary, Award, Users, Trophy, Building2 } from 'lucide-react';

export default function Stats() {
  const stats = [
    { icon: Trophy, value: '827+', label: 'A+ GRADES ACHIEVED', sub: 'PEC, JSC, SSC' },
    { icon: GraduationCap, value: 'PLAY–9', label: 'CLASSES OFFERED', sub: 'Play to Class 9' },
    { icon: Award, value: '#1', label: 'RANKED INSTITUTION', sub: 'Chandina Upazila' },
    { icon: Building2, value: '2', label: 'SCHOOL CAMPUSES', sub: 'Chandina & Cumilla' },
    { icon: GraduationCap, value: '19+', label: 'YEARS OF EXCELLENCE', sub: 'Since 2005' },
    { icon: Users, value: '50+', label: 'TEACHING FACULTY', sub: 'Qualified Educators' },
  ];

  return (
    <section className="py-16 bg-linear-to-br from-primary-navy via-royal-blue to-primary-navy relative overflow-hidden text-white">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-academic-gold rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
        {/* Header */}
        <div className="space-y-3 mb-12">
          <span className="text-[10px] tracking-[0.5em] text-academic-gold font-bold uppercase">◆ Our Achievements</span>
          <h2 className="text-3xl font-serif font-bold leading-tight">Proven Excellence <br /> <span className="opacity-70 italic font-medium">Year After Year</span></h2>
          <div className="w-12 h-[2px] bg-warm-gold mx-auto rounded-full" />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-navy p-4 rounded-2xl group hover:bg-white/10 transition-all duration-500 border-white/10 hover:border-warm-gold/30"
            >
              <stat.icon className="w-4 h-4 text-warm-gold mx-auto mb-3 transition-transform duration-500 group-hover:scale-110" />
              <div className="text-2xl font-serif font-bold text-gradient-gold mb-1">
                {stat.value}
              </div>
              <div className="text-[8px] font-bold tracking-[0.2em] text-white/50 mb-0.5">{stat.label}</div>
              <div className="text-[7px] uppercase font-medium text-white/30">{stat.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Banner */}
        <div className="inline-flex items-center gap-3 glass-navy px-6 py-2.5 rounded-full border-warm-gold/20">
           <Trophy className="w-4 h-4 text-warm-gold" />
           <p className="font-serif italic text-sm">Recognized as the <span className="text-warm-gold font-bold">Best School in Cumilla</span> — Repeatedly Awarded Best Institution</p>
        </div>
      </div>
    </section>
  );
}
