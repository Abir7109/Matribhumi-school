import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Trophy, Laptop, Globe, Users, Award } from 'lucide-react';

const stories = [
  [
    {
      title: "The Symphony of Shared Wisdom",
      desc: "Amidst sun-drenched shelves and cutting-edge resources, our students weave collective intellect into groundbreaking ideas. This collaborative spirit defines our pursuit of academic excellence and the strength of our community character.",
      image: "https://i.postimg.cc/9FChb7DD/CAMPUS-STORIES-1-FAMOUS-QOUTE.jpg",
      label: "INTELLECTUAL HUB",
      icon: <BookOpen className="w-5 h-5 text-academic-gold" />
    },
    {
      title: "The Sanctuary of Learning",
      desc: "Our classrooms are more than just rooms; they are vibrant spaces where curiosity meets guidance. With modern amenities and an environment of respect, students are empowered to explore their potential.",
      image: "https://i.postimg.cc/DfsGstGW/CAMPUS-STORIES-1-OUR-MADRASHA-CLASSROOMS.jpg",
      label: "MODERN CLASSROOMS",
      icon: <Laptop className="w-5 h-5 text-academic-gold" />
    }
  ],
  [
    {
      title: "Architects of Thought",
      desc: "In the hushed brilliance of our modern library, students unite to bridge diverse ideas into singular visions of excellence. Here, collaboration is the heartbeat of a community dedicated to intellectual growth.",
      image: "https://i.postimg.cc/6QGgtW8m/CAMPUS-STORIES-1-STUDENTS-DRAWING-BANGLADESH-MAP.jpg",
      label: "ACADEMIC COLLABORATION",
      icon: <Globe className="w-5 h-5 text-royal-blue" />
    },
    {
      title: "Global Standards",
      desc: "We follow a world-class curriculum that prepares students for national board success and international opportunities in an ever-evolving world.",
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=1200&auto=format&fit=crop",
      label: "WORLD READY",
      icon: <Globe className="w-5 h-5 text-royal-blue" />
    }
  ],
  [
    {
      title: "The Pillars of Purpose",
      desc: "As the morning sun warms the courtyard, our assembly stands as a testament to the unwavering discipline and integrity we instill in every scholar. This ritual prepares the heart and mind to lead.",
      image: "https://i.postimg.cc/Y2X3Dc9Y/CAMPUS-STORIES-1-OUR-PRICE-GIVING-CEREMONY.jpg",
      label: "MORNING RITUALS",
      icon: <Users className="w-5 h-5 text-success-green" />
    },
    {
      title: "The Spark of Discovery",
      desc: "Within the precise glass and steel of our laboratories, a breakthrough moment transforms a simple experiment into a lifelong passion for truth and rigorous scientific inquiry.",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200&auto=format&fit=crop",
      label: "SCIENTIFIC INQUIRY",
      icon: <Award className="w-5 h-5 text-success-green" />
    }
  ]
];

export default function PhotoHighlights() {
  const [indices, setIndices] = useState(stories.map(() => 0));

  useEffect(() => {
    const timer = setInterval(() => {
      setIndices(prev => prev.map((idx, i) => (idx + 1) % stories[i].length));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">
          <span className="text-[10px] tracking-[0.6em] text-academic-gold font-bold uppercase block">◆ The Matribhumi Experience</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-royal-blue leading-tight">
            Our Campus <span className="italic font-normal serif italic text-academic-gold">Stories</span>
          </h2>
          <p className="text-[#6B7280] text-sm max-w-xl mx-auto">
            Discover why we are the <span className="font-bold text-royal-blue">best school in Cumilla</span> through a visual journey of our daily life and achievements.
          </p>
        </div>

        {/* Rows */}
        <div className="space-y-20 lg:space-y-28">
          {stories.map((storyList, rowIndex) => {
            const isEven = rowIndex % 2 === 1;
            const currentItem = storyList[indices[rowIndex]];
            
            // Animation direction logic: 
            // Row 0 & 2 (Left Image): Exit Right, Enter From Left (Train moving Left to Right)
            // Row 1 (Right Image): Exit Left, Enter From Right (Train moving Right to Left)
            const xOffset = isEven ? 100 : -100;

            return (
              <div 
                key={rowIndex} 
                className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center justify-center gap-8 lg:gap-20`}
              >
                {/* Photo Side */}
                <div className="w-full lg:w-[40%] max-w-md relative h-[300px] md:h-[400px] overflow-hidden rounded-[1.5rem] shadow-xl bg-white border border-zinc-100">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${rowIndex}-${indices[rowIndex]}`}
                      initial={{ x: xOffset, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -xOffset, opacity: 0 }}
                      transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
                      className="absolute inset-0 flex items-center justify-center p-2"
                    >
                      <img 
                        src={currentItem.image} 
                        alt={currentItem.title}
                        className="w-full h-full object-contain"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Description Side */}
                <div className="w-full lg:w-[45%] max-w-lg space-y-5">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${rowIndex}-${indices[rowIndex]}-text`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="space-y-3"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${isEven ? 'bg-royal-blue/10' : 'bg-academic-gold/10'}`}>
                          {currentItem.icon}
                        </div>
                        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-400">
                          {currentItem.label}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-serif font-bold text-royal-blue">
                        {currentItem.title}
                      </h3>
                      
                      <p className="text-[#6B7280] text-base font-serif leading-relaxed italic">
                        "{currentItem.desc}"
                      </p>

                      <div className="pt-3 flex items-center gap-4">
                        <div className="w-10 h-px bg-zinc-200" />
                        <span className="text-[8px] font-bold text-zinc-400 uppercase tracking-widest">
                          Section {rowIndex + 1} of {stories.length}
                        </span>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-royal-blue/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-academic-gold/5 rounded-full blur-[100px]" />
      </div>
    </section>
  );
}
