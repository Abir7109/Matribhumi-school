import React from 'react';
import { motion } from 'motion/react';
import { Shield, GraduationCap, Home, MessageSquare, Award, Landmark } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: Landmark,
      title: 'Government Accredited',
      desc: 'Approved by the Government of Bangladesh and affiliated with the Cumilla Education Board.'
    },
    {
      icon: GraduationCap,
      title: 'Play Group to Class 9',
      desc: 'A complete educational journey under one roof — from the earliest playful learning stages through secondary education.'
    },
    {
      icon: Home,
      title: 'Residential & Care',
      desc: 'Flexible residential enrollment, with dedicated day-care and night-care services for busy families.'
    },
    {
      icon: MessageSquare,
      title: 'Spoken English Program',
      desc: 'Weekly Spoken English classes every Friday and Saturday — equipping students with confident communication skills.'
    },
    {
      icon: Shield,
      title: 'Disciplined Campus',
      desc: 'A mobile-free, safe, and structured learning environment where students can focus completely on growth.'
    },
    {
      icon: Award,
      title: 'Proven Excellence',
      desc: '827 A+ grades across PEC, JSC, and SSC. Consistently recognized as a Best Institution in Chandina.'
    }
  ];

  return (
    <section className="py-16 bg-ghost-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-[10px] tracking-[0.5em] text-academic-gold font-bold uppercase">◆ Why Choose Us</span>
          <h2 className="text-3xl font-serif font-bold text-royal-blue leading-tight">
            Why Families Trust <br /> <span className="text-gradient-gold">Matribhumi Academy</span>
          </h2>
          <div className="w-12 h-[2px] bg-academic-gold mx-auto rounded-full" />
          <p className="text-[#6B7280] text-sm">Our commitment to quality education and character building has made us a leader.</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card group p-6 rounded-[20px] hover:-translate-y-1.5 hover:shadow-xl transition-all duration-500 border-white/50"
            >
              <div className="w-12 h-12 bg-royal-blue/5 rounded-xl flex items-center justify-center mb-5 text-royal-blue group-hover:bg-royal-blue group-hover:text-white transition-all duration-500">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-royal-blue mb-3 group-hover:text-academic-gold transition-all duration-500">
                {feature.title}
              </h3>
              <p className="text-[#6B7280] text-[13px] leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
