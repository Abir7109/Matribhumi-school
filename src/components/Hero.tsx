import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play, GraduationCap, School, Globe, Pencil, Award, Braces, Binary, Sparkles, Calendar, Phone } from 'lucide-react';
import { SchoolSeal, FloatingAssetBook, FloatingAssetCap, FloatingAssetGlobe } from './Icons';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center pt-20 pb-12 lg:pt-24 lg:pb-0">
      {/* BACKGROUND SYSTEM */}
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-[#EEF2FF] via-[#E8EFFF] to-[#F5F7FF]">
        {/* Animated Orbs */}
        <motion.div 
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[-200px] right-[-200px] w-[700px] h-[700px] rounded-full bg-royal-blue/10 blur-[90px]"
        />
        <motion.div 
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-[-150px] left-[-150px] w-[600px] h-[600px] rounded-full bg-academic-gold/10 blur-[100px]"
        />
        
        {/* SVG Arcs */}
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-20">
          <svg width="100%" height="100%" className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3">
            <circle cx="100%" cy="0" r="600" stroke="#1B3A7A" strokeWidth="1" fill="none" />
            <circle cx="100%" cy="0" r="450" stroke="#1B3A7A" strokeWidth="1" fill="none" className="opacity-70" />
            <circle cx="100%" cy="0" r="300" stroke="#1B3A7A" strokeWidth="1" fill="none" className="opacity-50" />
          </svg>
        </div>

        {/* Floating Assets */}
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 0.1 }}
          className="absolute top-[15%] left-[8%] w-20 h-16 text-royal-blue"
        >
          <FloatingAssetBook className="w-full h-full" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 0.1 }}
          className="absolute top-[10%] right-[15%] w-16 h-12 text-academic-gold"
        >
          <FloatingAssetCap className="w-full h-full" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 0.08 }}
          className="absolute bottom-[20%] right-[10%] w-24 h-24 text-royal-blue"
        >
          <FloatingAssetGlobe className="w-full h-full" />
        </motion.div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 w-full flex flex-col items-center">
        {/* TOP CENTERED BADGE */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-royal-blue/15 shadow-sm mb-10"
        >
          <span className="w-2 h-2 bg-success-green rounded-full animate-pulse shadow-[0_0_8px_rgba(5,150,105,0.6)]" />
          <span className="text-[11px] font-medium text-royal-blue uppercase tracking-widest">Admissions Open for 2027 Session</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          {/* LEFT COLUMN */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-8"
          >

          {/* Bengali Line */}
          <motion.div variants={itemVariants} className="border-l-4 border-academic-gold bg-academic-gold/5 px-4 py-2 rounded-r-lg">
            <p className="font-bengali italic text-academic-gold font-medium">সন্তান আপনার, তাকে যুগোপযোগী ও আদর্শ মানুষ গড়ার দায়িত্ব আমাদের</p>
          </motion.div>

          {/* Headlines */}
          <div className="space-y-2">
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-serif font-bold text-royal-blue leading-tight">
              Inspiring Minds,<br />
              Building <span className="text-gradient-gold">Futures,</span><br />
              Shaping Bangladesh.
            </motion.h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 60 }}
              className="h-[2px] bg-linear-to-r from-royal-blue to-academic-gold rounded-full my-4"
            />
          </div>

          {/* Description */}
          <div className="space-y-4">
            <motion.p variants={itemVariants} className="text-base text-zinc-700 font-medium font-bengali">
              ক্লাসের পড়া ক্লাসেই শেষ, শিক্ষাবান্ধব পরিবেশ।
              <span className="block text-zinc-400 font-sans text-[10px] mt-1 italic tracking-wide">Classroom lessons are finished within the classroom — a student-friendly environment.</span>
            </motion.p>
            <motion.p variants={itemVariants} className="text-[#6B7280] text-sm leading-relaxed max-w-xl text-balance">
              Matribhumi Model School & College is recognized as the <span className="text-royal-blue font-bold">best school in Cumilla</span>, offering a premier English version curriculum approved by the GOVT & Cumilla Board. 
              Serving students from Play Group to Class 9 in Chandina, we set the standard for academic excellence and character building in the Comilla region.
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 pt-2">
            <button className="group px-6 py-3 bg-linear-to-br from-royal-blue to-royal-blue-medium text-white rounded-lg font-bold tracking-widest text-xs flex items-center gap-2 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              ADMISSION 2027
              <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="group px-6 py-3 bg-white border border-royal-blue text-royal-blue rounded-lg font-bold tracking-widest text-xs flex items-center gap-2 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <Play className="w-3 h-3 fill-academic-gold text-academic-gold" />
              EXPLORE SCHOOL
            </button>
          </motion.div>

          {/* Quick Info Strip */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-6 text-[#6B7280] text-xs font-semibold pt-4">
            <div className="flex items-center gap-2"><School className="w-4 h-4 text-academic-gold" /> GOVT. APPROVED</div>
            <div className="flex items-center gap-2"><Award className="w-4 h-4 text-academic-gold" /> CUMILLA BOARD</div>
            <div className="flex items-center gap-2 text-royal-blue"><Phone className="w-4 h-4" /> 01877-761105</div>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN - Glass Info Panel */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 flex justify-center lg:justify-end relative group"
        >
          {/* Background Decorative Logo */}
          <div className="absolute -top-12 -right-12 w-64 h-64 opacity-[0.03] grayscale pointer-events-none -z-10 rotate-12 transition-all duration-700 group-hover:rotate-0 group-hover:opacity-[0.05]">
            <SchoolSeal size={256} />
          </div>

          <div className="glass-card rounded-[20px] overflow-hidden border-white shadow-xl relative z-10 w-full max-w-[360px]">
            {/* Panel Header */}
            <div className="h-10 bg-linear-to-br from-royal-blue to-royal-blue-medium flex items-center justify-between px-5">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="text-white text-[10px] font-bold tracking-wider">Matribhumi Academy</span>
              </div>
              <span className="bg-white text-royal-blue text-[8px] font-black px-2 py-0.5 rounded-full uppercase">2027</span>
            </div>

            {/* Admission Strip */}
            <div className="bg-success-green/10 border-b border-success-green/15 px-5 py-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-success-green rounded-full animate-pulse" />
              <span className="text-success-green text-[8px] font-black uppercase tracking-[0.15em]">Admission Open — 2027</span>
            </div>

            {/* Data Grid */}
            <div className="p-4 grid grid-cols-2 gap-2">
              {[
                { icon: Binary, title: 'Play to Class 9', sub: 'Classes' },
                { icon: School, title: 'Residential', sub: 'Hostel' },
                { icon: Sparkles, title: 'Day-care', sub: 'Available' },
                { icon: Globe, title: 'Spoken English', sub: 'Programs' },
                { icon: Pencil, title: 'ICT Lab', sub: 'Computing' },
                { icon: Award, title: 'Top Success', sub: 'Results' },
              ].map((item, idx) => (
                <div key={idx} className="bg-soft-white border border-royal-blue/5 p-3 rounded-lg hover:bg-white transition-all duration-300">
                  <item.icon className="w-3.5 h-3.5 text-royal-blue mb-1.5" />
                  <div className="text-[10px] font-black text-royal-blue leading-tight">{item.title}</div>
                  <div className="text-[8px] text-zinc-400 mt-0.5">{item.sub}</div>
                </div>
              ))}
            </div>

            {/* Forms Box */}
            <div className="mx-4 p-3 rounded-lg bg-academic-gold/10 border border-academic-gold/30 flex items-center gap-3 mb-4">
              <Calendar className="w-5 h-5 text-academic-gold shrink-0" />
              <div>
                <div className="text-[8px] text-zinc-500 font-bold uppercase">Forms From</div>
                <div className="text-xs font-bold text-academic-gold">November 1, 2026</div>
              </div>
            </div>

            {/* Register Action */}
            <button className="w-full py-3 bg-linear-to-r from-academic-gold via-warm-gold to-academic-gold text-royal-blue font-black tracking-widest text-[11px] uppercase transition-all duration-300">
              Apply For Admission →
            </button>
          </div>
          
          {/* Decorative Shadows */}
          <div className="absolute -bottom-4 -right-4 w-full h-full bg-royal-blue/5 blur-3xl -z-10" />
        </motion.div>
      </div>
    </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#6B7280]">Scroll to Discover</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }} 
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-[1px] h-12 bg-linear-to-b from-royal-blue/30 to-transparent"
        />
      </motion.div>
    </section>
  );
}
