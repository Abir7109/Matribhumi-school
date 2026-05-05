import React from 'react';
import { motion } from 'motion/react';
import { Building, BookOpen, MapPin, GraduationCap, Phone, Clock } from 'lucide-react';
import { SchoolSeal } from './Icons';

export default function About() {
  return (
    <section id="about" className="py-16 lg:py-20 bg-white relative overflow-hidden">
      {/* Decorative BG element */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-royal-blue/5 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Card Stack */}
        <div className="relative">
          <div className="relative w-full aspect-square max-w-[300px] mx-auto">
            {/* Background Layer (Static) */}
            <div className="absolute inset-0 bg-royal-blue/5 rounded-[20px] translate-x-2 translate-y-2" />
            
            {/* Main Profile Card (Static Fade In) */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 bg-white shadow-xl rounded-[20px] border border-royal-blue/10 p-5 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-[3px] bg-linear-to-r from-royal-blue to-sky-blue" />
              <div className="flex flex-col items-center mb-4">
                <SchoolSeal size={40} className="mb-2" />
                <h4 className="text-[8px] tracking-[0.4em] uppercase font-black text-[#6B7280]">Official Profile</h4>
              </div>

              <div className="space-y-2">
                {[
                  { icon: Building, label: 'Institution', value: 'Matribhumi Model School' },
                  { icon: GraduationCap, label: 'EIIN', value: "134176" },
                  { icon: MapPin, label: 'Address', value: 'Chandina, Cumilla' },
                  { icon: BookOpen, label: 'Classes', value: 'Play to Class 9' },
                  { icon: Clock, label: 'Founded', value: '2005' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 py-1.5 border-b border-royal-blue/5 last:border-0">
                    <item.icon className="w-3 h-3 text-academic-gold" />
                    <div className="flex-1">
                      <p className="text-[7px] text-[#6B7280] font-bold uppercase">{item.label}</p>
                      <p className="text-[10px] font-bold text-royal-blue leading-tight">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="space-y-6">
          <div className="space-y-3">
            <span className="text-[10px] tracking-[0.5em] text-academic-gold font-bold uppercase">◆ Our Story</span>
            <h2 className="text-3xl font-serif font-bold text-royal-blue leading-tight">
              Building Tomorrow's<br />Leaders Today
            </h2>
          </div>

          <div className="space-y-4 text-[#6B7280] leading-relaxed text-sm">
            <p>
              Matribhumi Model School and College is widely recognized as the <span className="text-royal-blue font-bold">best school in Cumilla</span> and the top private educational institution in Chandina Upazila. For nearly two decades, we have been a cornerstone of quality education, character building, and academic excellence in the Comilla region.
            </p>
          </div>

          <div className="space-y-3">
            <div className="bg-white/80 border-l-4 border-academic-gold p-4 rounded-r-xl shadow-sm">
              <p className="font-bengali text-base font-medium text-royal-blue">ক্লাসের পড়া ক্লাসেই শেষ, শিক্ষাবান্ধব পরিবেশ।</p>
            </div>
            
            <div className="bg-white/80 border-l-4 border-academic-gold p-4 rounded-r-xl shadow-sm">
              <p className="font-bengali text-base font-medium text-royal-blue">সন্তান আপনার, তাকে যুগোপযোগী ও আদর্শ মানুষ গড়ার দায়িত্ব আমাদের।</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {['Government Approved ✓', 'Cumilla Education Board ✓', 'Since 2005 ✓'].map((tag) => (
              <span key={tag} className="px-4 py-2 bg-royal-blue/5 border border-royal-blue/10 text-royal-blue text-xs font-bold rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
