import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, GraduationCap, Users, Binary, X, CheckCircle2, Star, Target } from 'lucide-react';

interface CourseDetail {
  title: string;
  overview: string;
  subjects: string[];
  outcome: string;
  features: string[];
}

const courseDetails: Record<string, CourseDetail> = {
  'pre-primary': {
    title: 'Pre-Primary Curriculum',
    overview: 'Our Early Years Foundation Stage (EYFS) inspired curriculum focuses on the holistic development of the child through play, exploration, and creative expression.',
    subjects: ['Literacy (Phonics & Storytelling)', 'Numeracy Concepts', 'Creative Arts & Craft', 'Physical Education', 'Social & Emotional Learning'],
    outcome: 'Students will develop confidence, basic communication skills, and a love for learning in a nurturing environment.',
    features: ['Activity-based learning', 'Safe and colorful classrooms', 'Individual attention from caring teachers']
  },
  'primary': {
    title: 'Primary Education Syllabus (Classes 1-5)',
    overview: 'Following the English Version National Curriculum, we build a solid foundation in core academic disciplines while fostering ethical values and critical thinking.',
    subjects: ['English Language & Literature', 'Mathematics', 'Integrated Science', 'Bangladesh & Global Studies', 'Religion & Moral Education', 'Arts & Physical Education'],
    outcome: 'Academic proficiency in core subjects and the development of strong character and social responsibility.',
    features: ['Weekly quiz competitions', 'Math Olympiad training', 'Science projects', 'Regular parents-teachers meetings']
  },
  'secondary': {
    title: 'Secondary Academic Program (Classes 6-9)',
    overview: 'Our secondary program prepares students for the Secondary School Certificate (SSC) examinations, offering specialized streams in Science and Business Studies.',
    subjects: ['Advanced Mathematics', 'Physics, Chemistry, Biology (Science Stream)', 'Accounting & Business (Business Stream)', 'ICT & Digital Literacy', 'Global Studies'],
    outcome: 'Excellence in national board examinations and readiness for higher education challenges.',
    features: ['Modern labs for practicals', 'Specialized board exam coaching', 'Mock tests and evaluation', 'Career counseling sessions']
  },
  'special-programs': {
    title: 'Specialized Skills & Leadership',
    overview: 'Beyond the classroom, we equip our students with global competencies in communication and technology.',
    subjects: ['Spoken English Proficiency', 'Digital Literacy & Coding', 'Debate & Public Speaking', 'Leadership Workshops', 'Talent Hunt Preparation'],
    outcome: 'Fluent communication, tech-savvy leaders ready for a globalized world.',
    features: ['Interactive multimedia sessions', 'Hands-on ICT lab work', 'Platform for public speaking', 'International collaboration projects']
  }
};

export default function Academics() {
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);

  const programs = [
    {
      id: 'pre-primary',
      title: 'Pre-Primary Education',
      classes: 'Play Group & Nursery',
      icon: Binary,
      color: 'bg-sky-blue',
      desc: 'Our pre-primary program at Matribhumi Academy, known as the best school in Cumilla for early childhood development, provides a playful introduction to learning. We focus on Montessori-inspired methods to build confidence and social values.',
      points: ['Play Group & Nursery', 'Montessori-inspired Learning', 'Art, Music & Fun Activities', 'Early Literacy & Numeracy']
    },
    {
      id: 'primary',
      title: 'Primary Education',
      classes: 'Class 1 – 5',
      icon: BookOpen,
      color: 'bg-royal-blue',
      desc: 'Recognized as a top primary school in Comilla, we follow the National Curriculum (English Version). Our primary section emphasizes core subjects like Mathematics, Science, and English, while integrating strong moral and ethical value building.',
      points: ['Classes 1 to 5', 'English Version Curriculum', 'Ethics & Social Value Building', 'Weekly Quiz & Math Olympiads']
    },
    {
      id: 'secondary',
      title: 'Secondary Education',
      classes: 'Class 6 – 9',
      icon: GraduationCap,
      color: 'bg-academic-gold',
      desc: 'Our secondary division provides rigorous academic preparation for Board Exams (SSC). As the premier secondary education center in Chandina, we offer both Science and Business Studies streams with highly qualified faculty and modern lab facilities.',
      points: ['Classes 6 to 9 (SSC Prep)', 'Advanced Science & Business Labs', 'Analytical Skills Development', 'Special Mock Exams']
    },
    {
      id: 'special-programs',
      title: 'Special Programs',
      classes: 'English & Global Skills',
      icon: Users,
      color: 'bg-success-green',
      desc: 'We go beyond textbooks with our Spoken English and ICT programs. We are the leading institution in Cumilla for developing communication skills, offering specialized coaching for talent hunt competitions and global leadership skills.',
      points: ['Spoken English (Fri & Sat)', 'Modern ICT & Computer Lab', 'Talent Hunt & Debate Club', 'Character & Leadership Training']
    }
  ];

  const currentDetail = selectedProgram ? courseDetails[selectedProgram] : null;

  return (
    <section id="academics" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-[10px] tracking-[0.5em] text-academic-gold font-bold uppercase">◆ Academic Programs</span>
          <h2 className="text-4xl font-serif font-bold text-royal-blue leading-tight">Excellence in English Version Education</h2>
          <p className="text-[#6B7280] text-sm">
            Matribhumi Model School & College offers the <span className="font-bold text-royal-blue">best English version curriculum in Cumilla</span>, 
            designed to prepare students for national board success and global opportunities.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, i) => (
            <motion.div
              key={i}
              id={program.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white rounded-[20px] overflow-hidden shadow-sm border border-royal-blue/5 hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 scroll-mt-24"
            >
              <div className={`h-1.5 ${program.color} w-full`} />
              <div className="p-6">
                <div className={`w-10 h-10 ${program.color}/10 rounded-xl flex items-center justify-center mb-5`}>
                  <program.icon className={`w-5 h-5 ${program.color.replace('bg-', 'text-')}`} />
                </div>
                
                <div className="inline-block px-2.5 py-0.5 bg-royal-blue/5 text-royal-blue text-[9px] font-black uppercase tracking-widest rounded-full mb-2">
                  {program.classes}
                </div>
                
                <h3 className="font-serif text-lg font-bold text-royal-blue mb-3 leading-tight group-hover:text-academic-gold transition-colors">
                  {program.title}
                </h3>
                
                <p className="text-[#6B7280] text-xs leading-relaxed mb-4">
                  {program.desc}
                </p>
                
                <ul className="space-y-1.5 mb-6">
                  {program.points.map((point, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-[11px] font-bold text-[#3D4166]">
                      <span className="text-academic-gold text-[8px]">◆</span> {point}
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => setSelectedProgram(program.id)}
                  className="w-full py-3 bg-royal-blue/5 hover:bg-royal-blue hover:text-white text-royal-blue font-bold text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 transition-all rounded-xl"
                >
                  Course Overview <span>→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Course Overview Modal */}
      <AnimatePresence>
        {selectedProgram && currentDetail && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProgram(null)}
              className="absolute inset-0 bg-royal-blue/20 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden overflow-y-auto max-h-[90vh]"
            >
              <div className="p-8 md:p-12 relative">
                <button 
                  onClick={() => setSelectedProgram(null)}
                  className="absolute top-6 right-6 p-2 bg-royal-blue/5 rounded-full hover:bg-royal-blue/10 text-royal-blue transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="space-y-8">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-academic-gold font-bold text-[10px] uppercase tracking-[0.3em]">
                      <Star className="w-3 h-3" />
                      Detailed Syllabus
                    </div>
                    <h2 className="text-3xl font-serif font-bold text-royal-blue leading-tight">
                      {currentDetail.title}
                    </h2>
                    <p className="text-[#6B7280] text-sm leading-relaxed border-l-2 border-academic-gold pl-4 italic">
                      {currentDetail.overview}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h4 className="flex items-center gap-2 text-royal-blue font-bold text-xs uppercase tracking-widest">
                        <BookOpen className="w-4 h-4" />
                        Core Subjects
                      </h4>
                      <ul className="space-y-2.5">
                        {currentDetail.subjects.map((s, i) => (
                          <li key={i} className="flex items-start gap-3 group">
                            <div className="mt-1">
                              <CheckCircle2 className="w-3.5 h-3.5 text-success-green" />
                            </div>
                            <span className="text-xs font-medium text-[#3D4166] group-hover:text-royal-blue transition-colors">
                              {s}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-6">
                      <div className="space-y-4">
                        <h4 className="flex items-center gap-2 text-royal-blue font-bold text-xs uppercase tracking-widest">
                          <Target className="w-4 h-4" />
                          Key Features
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {currentDetail.features.map((f, i) => (
                            <span key={i} className="px-3 py-1.5 bg-royal-blue/5 text-royal-blue rounded-lg text-[10px] font-bold">
                              {f}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="p-5 bg-academic-gold/5 rounded-2xl border border-academic-gold/10">
                        <h5 className="text-[10px] font-black text-academic-gold uppercase tracking-[0.2em] mb-2">Learning Outcome</h5>
                        <p className="text-xs text-[#3D4166] leading-relaxed font-serif italic">
                          "{currentDetail.outcome}"
                        </p>
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={() => setSelectedProgram(null)}
                    className="w-full py-4 bg-royal-blue text-white rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-primary-navy shadow-lg shadow-royal-blue/20 transition-all transform hover:-translate-y-1"
                  >
                    Close Overview
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
