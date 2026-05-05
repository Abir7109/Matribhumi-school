import React from 'react';
import { SchoolSeal } from './Icons';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-primary-navy overflow-hidden">
      {/* CTA Band */}
      <div className="w-full py-10 lg:py-12 bg-linear-to-br from-royal-blue to-royal-blue-medium relative overflow-hidden flex flex-col lg:flex-row items-center justify-between px-8 lg:px-24">
         <h2 className="text-2xl lg:text-3xl font-serif font-bold text-white text-center lg:text-left mb-6 lg:mb-0 relative z-10 leading-tight">
            Ready to Join the <br /> <span className="text-gradient-gold">Matribhumi Family?</span>
         </h2>
         <button className="px-8 py-4 bg-linear-to-r from-academic-gold to-warm-gold text-primary-navy font-black tracking-[0.2em] rounded-full uppercase text-[10px] shadow-2xl hover:scale-105 transition-all relative z-10 group">
            APPLY NOW 2027
         </button>
      </div>

      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1 - Brand */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
               <SchoolSeal size={40} />
               <div>
                  <h3 className="text-white font-serif font-bold text-base leading-tight uppercase">Matribhumi Academy</h3>
                  <p className="text-white/40 text-[9px] tracking-widest mt-1">SINCE 2005</p>
               </div>
            </div>
            <p className="text-white/50 text-xs leading-relaxed">
               The best school in Cumilla, approved by the Govt. of Bangladesh and Cumilla Education Board. Shaping the future since 2005.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center text-white/50 hover:bg-academic-gold hover:text-white transition-all duration-300">
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-serif font-bold text-base border-b border-academic-gold/20 pb-3 inline-block">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Academics', 'Faculty', 'Admissions', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/50 text-xs hover:text-academic-gold flex items-center gap-2 group transition-all">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Programs */}
          <div className="space-y-4">
            <h4 className="text-white font-serif font-bold text-base border-b border-academic-gold/20 pb-3 inline-block">Services</h4>
            <ul className="space-y-3">
              {['Residential', 'Day-care', 'Spoken English', 'ICT Lab', 'Scholarships'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/50 text-xs hover:text-white flex items-center gap-2 transition-all">
                     <span className="text-academic-gold text-[9px]">◆</span>
                     {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact Info */}
          <div className="space-y-4">
            <h4 className="text-white font-serif font-bold text-base border-b border-academic-gold/20 pb-3 inline-block">Contact</h4>
            <div className="space-y-3">
              <div className="flex gap-3 items-start">
                 <MapPin className="text-academic-gold w-4 h-4 shrink-0" />
                 <p className="text-white/50 text-xs leading-relaxed">Chandina, Cumilla, BD</p>
              </div>
              <div className="flex gap-3 items-center">
                 <Phone className="text-academic-gold w-4 h-4 shrink-0" />
                 <p className="text-white/50 text-xs">01877-761105</p>
              </div>
              <div className="pt-2">
                 <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                    <p className="text-[9px] text-white/40 mb-1">EIIN: 134176</p>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 text-center lg:text-left flex flex-col lg:flex-row justify-between items-center gap-4">
           <p className="text-white/30 text-[10px] tracking-wider">
              © 2027 Matribhumi Academy.
           </p>
           <div className="text-white/40 text-[9px] flex items-center gap-2">
              DESIGNED BY MATRIBHUMI ICT
           </div>
        </div>
      </div>
    </footer>
  );
}
