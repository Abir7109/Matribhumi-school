import React from 'react';
import { motion } from 'motion/react';
import { Send, Phone, MapPin, Globe, Loader2, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 2000);
  };

  return (
    <section id="contact" className="py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left - Contact info */}
          <div className="space-y-8">
            <div className="space-y-3">
              <span className="text-[10px] tracking-[0.5em] text-academic-gold font-bold uppercase">◆ Get In Touch</span>
              <h2 className="text-3xl font-serif font-bold text-royal-blue leading-tight">We Are Here To <br /> Help Your Child Grow</h2>
            </div>

            <div className="space-y-5">
              {[
                { icon: MapPin, label: 'Location', value: '5 Dhansiri, Chandina, Cumilla, Bangladesh' },
                { icon: Phone, label: 'Call Us', value: '01877-761105 / 01833-333295' },
                { icon: Globe, label: 'EIIN NUmber', value: '134176' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start group">
                  <div className="w-10 h-10 bg-royal-blue/5 rounded-full flex items-center justify-center shrink-0 group-hover:bg-royal-blue group-hover:text-white transition-all duration-300">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-[9px] font-black uppercase text-zinc-400 tracking-[0.2em] mb-0.5">{item.label}</h5>
                    <p className="text-base font-bold text-royal-blue">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full h-64 bg-ghost-white rounded-2xl overflow-hidden border border-royal-blue/10 relative shadow-inner">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14620.468205779075!2d91.01185459345703!3d23.45624734316406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3753ffc64f7b6059%3A0xc0fb13f360980bd0!2sChandina!5e0!3m2!1sen!2sbd!4v1714838350000!5m2!1sen!2sbd" 
                 width="100%" 
                 height="100%" 
                 style={{ border: 0 }} 
                 allowFullScreen 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
                 className="grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
               />
            </div>
          </div>

          {/* Right - Glass Form */}
          <motion.div 
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-[32px] shadow-2xl relative border-white/50"
          >
            <h3 className="font-serif text-2xl font-bold text-royal-blue mb-6">Send an Enquiry</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                     <label className="text-[9px] font-black uppercase text-zinc-500 tracking-widest pl-1">Full Name</label>
                     <input type="text" required placeholder="John Doe" className="w-full bg-soft-white border border-royal-blue/10 rounded-lg px-4 py-3 text-xs focus:outline-none focus:border-royal-blue focus:ring-2 focus:ring-royal-blue/5 transition-all" />
                  </div>
                  <div className="space-y-1.5">
                     <label className="text-[9px] font-black uppercase text-zinc-500 tracking-widest pl-1">Phone Number</label>
                     <input type="tel" required placeholder="01XXX-XXXXXX" className="w-full bg-soft-white border border-royal-blue/10 rounded-lg px-4 py-3 text-xs focus:outline-none focus:border-royal-blue focus:ring-2 focus:ring-royal-blue/5 transition-all" />
                  </div>
               </div>

               <div className="space-y-1.5">
                  <label className="text-[9px] font-black uppercase text-zinc-500 tracking-widest pl-1">Enquiry Type</label>
                  <select className="w-full bg-soft-white border border-royal-blue/10 rounded-lg px-4 py-3 text-xs focus:outline-none focus:border-royal-blue transition-all">
                     <option>Admission Enquiry</option>
                     <option>Hostel Info</option>
                     <option>Spoken English</option>
                  </select>
               </div>

               <div className="space-y-1.5">
                  <label className="text-[9px] font-black uppercase text-zinc-500 tracking-widest pl-1">Message</label>
                  <textarea rows={3} placeholder="Your message..." className="w-full bg-soft-white border border-royal-blue/10 rounded-lg px-4 py-3 text-xs focus:outline-none focus:border-royal-blue transition-all resize-none" />
               </div>

               <button 
                 disabled={status !== 'idle'}
                 className="w-full py-4 bg-linear-to-br from-royal-blue to-royal-blue-medium text-white rounded-xl font-bold tracking-[0.2em] uppercase text-[10px] shadow-lg shadow-royal-blue/20 flex items-center justify-center gap-2 transition-all hover:-translate-y-1"
               >
                 {status === 'idle' && (
                   <>
                     Send Message
                     <Send className="w-3 h-3" />
                   </>
                 )}
                 {status === 'loading' && <Loader2 className="w-4 h-4 animate-spin" />}
                 {status === 'success' && (
                   <>
                     Sent
                     <CheckCircle2 className="w-4 h-4 text-success-green" />
                   </>
                 )}
               </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
