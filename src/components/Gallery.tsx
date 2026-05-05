import React from 'react';
import { motion } from 'motion/react';
import { Camera, Image as ImageIcon } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Gallery() {
  const activities = [
    { title: 'Annual Sports Day', color: 'bg-blue-100', icon: '🏆' },
    { title: 'Spoken English Class', color: 'bg-amber-100', icon: '🗣️' },
    { title: 'Cultural Program', color: 'bg-purple-100', icon: '🎭' },
    { title: 'Science Lab Work', color: 'bg-emerald-100', icon: '🧪' },
    { title: 'Art & Crafts', color: 'bg-rose-100', icon: '🎨' },
    { title: 'Prize Distribution', color: 'bg-indigo-100', icon: '🎖️' },
  ];

  return (
    <section id="gallery" className="py-16 bg-ghost-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-[10px] tracking-[0.5em] text-academic-gold font-bold uppercase">◆ Campus Life</span>
          <h2 className="text-3xl font-serif font-bold text-royal-blue leading-tight">Life at Matribhumi</h2>
          <p className="text-[#6B7280] text-sm">Beyond the classroom, our campus buzzes with creativity and sports.</p>
        </div>

        {/* Gallery Masonry-style Grid with coming soon overlay */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-40 select-none pointer-events-none grayscale">
            {activities.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative group rounded-xl overflow-hidden shadow-lg aspect-video cursor-pointer"
              >
                <div className={cn("absolute inset-0 transition-transform duration-700", item.color)} />
                
                {/* Content Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-40">
                   <Camera size={32} className="text-royal-blue" />
                </div>

                {/* Text Label */}
                <div className="absolute bottom-4 left-5 right-5">
                  <h4 className="font-serif text-lg font-bold text-royal-blue">
                    {item.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Coming Soon Overlay Content */}
          <div className="absolute inset-0 z-40 flex flex-col items-center justify-center -translate-y-6">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-academic-gold/20 text-center space-y-4"
            >
              <div className="w-16 h-16 bg-academic-gold/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <ImageIcon className="w-8 h-8 text-academic-gold" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-black tracking-[0.4em] text-academic-gold uppercase">Feature Expected</span>
                <h3 className="text-2xl md:text-3xl font-serif font-black text-royal-blue">COMING SOON</h3>
              </div>
              <p className="text-zinc-500 text-sm max-w-[280px] mx-auto font-medium">
                Our digital gallery is currently under curation. Stay tuned for a glimpse into our vibrant campus life.
              </p>
              <div className="flex justify-center gap-1.5">
                {[0, 1, 2].map((i) => (
                  <motion.div 
                    key={i}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                    className="w-2 h-2 rounded-full bg-academic-gold"
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
            <button className="px-8 py-3 bg-white/50 border border-zinc-200 text-zinc-400 rounded-full font-bold tracking-widest cursor-not-allowed flex items-center mx-auto gap-3 text-[10px]">
              <ImageIcon className="w-3 h-3" />
              ALBUM UNDER CURATION
            </button>
        </div>
      </div>
    </section>
  );
}
