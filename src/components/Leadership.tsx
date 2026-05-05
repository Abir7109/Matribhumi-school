import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, X, ExternalLink, Globe, GraduationCap, Building2, User } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Leadership() {
  const [showFounderModal, setShowFounderModal] = useState(false);

  const leaders = [
    { 
      name: 'Al Mamun', 
      role: 'Principal', 
      tag: 'bg-royal-blue/10 text-royal-blue',
      image: 'https://i.postimg.cc/PqLKYShx/PRINCIPAL-AL-MAMUN.jpg'
    },
    { 
      name: 'MD Jahangir', 
      role: 'Principal', 
      tag: 'bg-royal-blue/10 text-royal-blue',
      image: 'https://i.postimg.cc/90xqxjYT/MADRASHA-PRINCIPAL.jpg'
    },
    { 
      name: 'Md. Safiullah', 
      role: 'Vice Principal', 
      tag: 'bg-sky-blue/10 text-sky-blue',
      image: 'https://i.postimg.cc/k59XtpWp/MADRASHA-VICE-PRINCIPAL.jpg'
    },
    { name: 'Md. Motaleb Hossain', role: 'Vice Principal', tag: 'bg-sky-blue/10 text-sky-blue' },
    { name: 'Md. Jasim Uddin Munshi', role: 'Exam Controller', tag: 'bg-purple-500/10 text-purple-600' },
    { name: 'Ayesha Siddika', role: 'Exam Controller', tag: 'bg-purple-500/10 text-purple-600' },
  ];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Founder Principal Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onClick={() => setShowFounderModal(true)}
          className="max-w-3xl mx-auto bg-linear-to-br from-primary-navy via-royal-blue to-royal-blue-medium p-6 md:p-10 rounded-[24px] shadow-2xl relative overflow-hidden mb-16 cursor-pointer group hover:shadow-royal-blue/20 transition-all duration-500"
        >
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-700" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-academic-gold/10 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="shrink-0 relative">
              <div className="w-24 h-24 rounded-full border-2 border-warm-gold p-1 shadow-xl group-hover:border-white transition-colors">
                <img 
                  src="https://i.postimg.cc/XN23Yv2L/AKHTER-HOSSAIN.jpg" 
                  alt="Md. Akhter Hossain"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-warm-gold text-primary-navy p-1 rounded-full">
                <Quote className="w-3 h-3 fill-primary-navy" />
              </div>
            </div>

            <div className="flex-1 text-center md:text-left space-y-3">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <span className="text-[9px] tracking-[0.4em] text-warm-gold font-black uppercase">Founder Principal</span>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mt-0.5">Md. Akhter Hossain</h3>
                </div>
                <button className="hidden md:flex items-center gap-2 text-[10px] font-bold text-white/50 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 hover:bg-white/10 hover:text-white transition-all">
                  CLICK TO VIEW DETAILS <ExternalLink className="w-3 h-3" />
                </button>
              </div>
              <div className="w-12 h-[1px] bg-warm-gold mt-3 mb-3 mx-auto md:mx-0" />
              <p className="text-white/80 font-serif italic text-sm">"MM, MF, (BA honors) MA — First Class"</p>
              <p className="text-white/70 text-base font-serif italic max-w-lg">
                "Our mission is to shape every student into a modern, ideal, and responsible member of society."
              </p>
            </div>
          </div>
        </motion.div>

        {/* Founder Modal */}
        <AnimatePresence>
          {showFounderModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowFounderModal(false)}
                className="absolute inset-0 bg-primary-navy/40 backdrop-blur-md"
              />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-2xl bg-white rounded-[2rem] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
              >
                {/* Header Image */}
                <div className="relative h-48 md:h-64 shrink-0 overflow-hidden">
                  <img 
                    src="https://i.postimg.cc/507GbXxz/AKHTER-HOSSAIN-OFFICE.jpg" 
                    alt="Akhter Hossain Office" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                  
                  <button 
                    onClick={() => setShowFounderModal(false)}
                    className="absolute top-6 right-6 p-2.5 bg-black/20 backdrop-blur-md text-white rounded-full hover:bg-white hover:text-royal-blue transition-all z-10"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="absolute bottom-6 left-8 right-8 flex items-end gap-6">
                    <div className="w-20 h-20 md:w-28 md:h-28 rounded-2xl border-4 border-white overflow-hidden shadow-xl shrink-0 bg-white">
                      <img 
                        src="https://i.postimg.cc/XN23Yv2L/AKHTER-HOSSAIN.jpg" 
                        alt="Md. Akhter Hossain"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="mb-2">
                       <h2 className="text-xl md:text-3xl font-serif font-bold text-white leading-tight">
                        Md. Akhter Hossain
                      </h2>
                      <p className="text-white/70 text-xs font-bold uppercase tracking-widest mt-1">Founder Principal</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-10 space-y-8 overflow-y-auto">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Education/Stats */}
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <h4 className="flex items-center gap-2 text-royal-blue font-bold text-xs uppercase tracking-widest">
                          <GraduationCap className="w-4 h-4" /> Academic Excellence
                        </h4>
                        <p className="text-[#3D4166] font-serif text-lg italic leading-relaxed">
                          "MM, MF, (BA honors) MA — First Class"
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {['Strategic Planner', 'Educational Leader', 'Dynamic Reformer'].map((trait, i) => (
                          <span key={i} className="px-3 py-1.5 bg-royal-blue/5 text-royal-blue rounded-lg text-[9px] font-black uppercase tracking-wider">
                            {trait}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Hajj Agency Info */}
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <h4 className="flex items-center gap-2 text-royal-blue font-bold text-xs uppercase tracking-widest">
                          <Building2 className="w-4 h-4 text-emerald-600" /> Other Ventures
                        </h4>
                        <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 group transition-all">
                          <p className="text-xs font-bold text-emerald-900 mb-2 uppercase tracking-wide">Professional Hajj Agency</p>
                          <h5 className="text-royal-blue font-serif font-bold text-xl mb-3">Hajj Kafela</h5>
                          <p className="text-zinc-600 text-[11px] leading-relaxed mb-4 italic">
                            Dedicated to providing premium, trusted, and well-managed Hajj & Umrah services for pilgrims across Bangladesh.
                          </p>
                          <a 
                            href="https://hajjkafela.vercel.app/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-between w-full p-3 bg-white hover:bg-royal-blue hover:text-white text-royal-blue rounded-xl text-xs font-bold transition-all shadow-sm group-hover:shadow-md border border-emerald-100"
                          >
                            <span className="flex items-center gap-2">
                              <Globe className="w-3.5 h-3.5" /> Visit Agency Website
                            </span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-zinc-100">
                    <p className="text-zinc-500 text-sm leading-relaxed font-serif italic text-center max-w-lg mx-auto">
                      "I believe that through quality education and strong moral values, our children will lead the nation towards a brighter future."
                    </p>
                  </div>
                </div>

                <div className="p-6 shrink-0 bg-zinc-50 border-t border-zinc-100 flex justify-center">
                  <button 
                    onClick={() => setShowFounderModal(false)}
                    className="px-8 py-3 bg-royal-blue text-white rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-primary-navy transition-all shadow-lg shadow-royal-blue/20"
                  >
                    Close Profile
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Other Leaders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {leaders.map((leader, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-5 rounded-2xl border-b-2 border-royal-blue shadow-sm hover:border-academic-gold hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl overflow-hidden bg-zinc-100 border border-zinc-100 shrink-0">
                  {leader.image ? (
                    <img src={leader.image} alt={leader.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-zinc-50 text-zinc-300">
                      <User className="w-6 h-6" />
                    </div>
                  )}
                </div>
                <div>
                  <div className={cn("inline-block px-2.5 py-0.5 text-[9px] font-black uppercase tracking-widest rounded-full mb-2", leader.tag)}>
                    {leader.role}
                  </div>
                  <h4 className="font-serif text-base font-bold text-[#1A1A2E] mb-0.5">{leader.name}</h4>
                  <p className="text-zinc-400 text-[10px] font-semibold uppercase tracking-wider">Board Member</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
