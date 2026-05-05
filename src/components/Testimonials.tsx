import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ahmed Kabir",
      role: "Parent of Class 8 Student",
      quote: "The environment at Matribhumi is exceptionally student-friendly. My child has grown not just academically, but also in terms of character and discipline.",
      stars: 5,
      initial: "AK"
    },
    {
      name: "Sultana Razia",
      role: "Alumni (Session 2023)",
      quote: "The spoken English program here is a game changer. It gave me the confidence I needed for my higher studies and future career.",
      stars: 5,
      initial: "SR"
    },
    {
      name: "Mohammad Ali",
      role: "Local Guardian",
      quote: "Being a mobile-free campus, students here are truly focused on their books and personal growth. Best decision for my family.",
      stars: 5,
      initial: "MA"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-[10px] tracking-[0.5em] text-academic-gold font-bold uppercase">◆ Community Voices</span>
          <h2 className="text-3xl font-serif font-bold text-royal-blue leading-tight">What Families Say</h2>
        </div>

        {/* Layout Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 rounded-[24px] border-royal-blue/5 hover:border-academic-gold/30 hover:shadow-xl transition-all duration-500 relative group"
            >
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-academic-gold rounded-full flex items-center justify-center text-white opacity-10 group-hover:opacity-100 transition-opacity">
                <Quote className="w-4 h-4 fill-white" />
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(t.stars)].map((_, idx) => (
                  <Star key={idx} className="w-3 h-3 fill-academic-gold text-academic-gold" />
                ))}
              </div>

              <p className="font-serif italic text-base text-[#1A1A2E] leading-relaxed mb-6">
                "{t.quote}"
              </p>

              <div className="w-8 h-[1px] bg-academic-gold/30 mb-6" />

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-linear-to-br from-royal-blue to-sky-blue rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {t.initial}
                </div>
                <div>
                  <h5 className="font-serif font-bold text-royal-blue text-sm">{t.name}</h5>
                  <p className="text-[9px] text-zinc-400 font-bold uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
