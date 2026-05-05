import React from 'react';
import { motion } from 'motion/react';
import { Calendar, FileText, CheckCircle, Send, UserCheck, CreditCard } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Admissions() {
  const steps = [
    { icon: FileText, title: 'Obtain Form', desc: 'Collect the admission form from the office starting Nov 1.' },
    { icon: Send, title: 'Submission', desc: 'Submit the filled form with required documents and photos.' },
    { icon: UserCheck, title: 'Assessment', desc: 'A short assessment test for appropriate grade placement.' },
    { icon: CheckCircle, title: 'Verification', desc: 'Document verification and interaction with the principal.' },
    { icon: CreditCard, title: 'Enrollment', desc: 'Complete the fees to confirm your seat for 2027.' },
  ];

  return (
    <section id="admissions" className="py-16 bg-linear-to-b from-ghost-white to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left - Info */}
          <div className="space-y-6">
            <div className="space-y-3">
              <span className="text-[10px] tracking-[0.5em] text-academic-gold font-bold uppercase">◆ Admissions 2027</span>
              <h2 className="text-3xl font-serif font-bold text-royal-blue leading-tight">Start Your Journey <br /> With Matribhumi</h2>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-success-green/10 rounded-full text-success-green font-bold text-[9px] uppercase tracking-wider">
                <span className="w-1.5 h-1.5 bg-success-green rounded-full animate-pulse" />
                Forms Now Available
              </div>
            </div>

            <div className="glass-card rounded-xl overflow-hidden shadow-xl border-white/50">
              {[
                { label: 'Available Classes', value: 'Play Group to Class 9' },
                { label: 'Residential Status', value: 'Residential & Day-Care' },
                { label: 'Admission Fee', value: 'Contact Office' },
                { label: 'Boarding Options', value: 'Full & Semi-Board' },
                { label: 'Spoken English', value: 'Included' },
              ].map((row, i) => (
                <div key={i} className={cn("p-4 flex justify-between items-center transition-colors hover:bg-royal-blue/5", i % 2 === 0 ? "bg-white" : "bg-soft-white")}>
                  <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">{row.label}</span>
                  <span className="text-xs font-bold text-royal-blue">{row.value}</span>
                </div>
              ))}
            </div>

            <div className="bg-academic-gold/10 border border-academic-gold/30 p-4 rounded-xl flex gap-3">
              <Calendar className="w-6 h-6 text-academic-gold shrink-0" />
              <div>
                <h4 className="font-serif text-base font-bold text-academic-gold">Important Dates</h4>
                <p className="text-[11px] text-[#6B7280] mt-0.5 italic">Registration starts Nov 01, 2026. Session begins Jan 2027.</p>
              </div>
            </div>
          </div>

          {/* Right - Timeline */}
          <div className="relative pt-4">
            <div className="absolute top-0 left-6 h-full w-[1.5px] bg-academic-gold/30" />
            
            <div className="space-y-8">
              {steps.map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-12 group"
                >
                  <div className="absolute left-6 top-0 -translate-x-1/2 w-6 h-6 bg-white border border-academic-gold rounded-full flex items-center justify-center z-10 group-hover:bg-academic-gold group-hover:text-white transition-all duration-300">
                    <step.icon className="w-3 h-3" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-bold text-royal-blue mb-1 transition-colors group-hover:text-academic-gold">
                      {i + 1}. {step.title}
                    </h4>
                    <p className="text-zinc-500 text-[11px] leading-relaxed max-w-sm">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
