import React, { useState } from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

export default function Faculty() {
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', 'Mathematics', 'Bengali', 'English', 'Science', 'ICT', 'Business Studies'];

  const teachers = [
    { name: 'Dr. Rafikul Islam', dept: 'Mathematics', initial: 'RI', sub: 'Higher Math' },
    { name: 'Mrs. Fatema Begum', dept: 'Bengali', initial: 'FB', sub: 'Bengali Literature' },
    { name: 'Dr. Sarah Ahmed', dept: 'Science', initial: 'SA', sub: 'Physics' },
    { name: 'Mr. Ahmed Ali', dept: 'ICT', initial: 'AA', sub: 'Computer Science' },
    { name: 'Ms. Nasrin Jahan', dept: 'Business Studies', initial: 'NJ', sub: 'Accounting' },
    { name: 'Mr. Siddiqur Rahman', dept: 'Mathematics', initial: 'SR', sub: 'General Math' },
    { name: 'Mrs. Rokeya Sakhawat', dept: 'Bengali', initial: 'RS', sub: 'Bengali Grammar' },
  ];

  const filteredTeachers = activeTab === 'All' 
    ? teachers 
    : teachers.filter(t => t.dept === activeTab);

  return (
    <section id="faculty" className="py-16 bg-ghost-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-[10px] tracking-[0.5em] text-academic-gold font-bold uppercase">◆ Our Educators</span>
          <h2 className="text-3xl font-serif font-bold text-royal-blue leading-tight">Dedicated Faculty</h2>
          <p className="text-[#6B7280] text-sm">Qualified educators bringing expertise and passion to every classroom.</p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-4 py-2 rounded-full text-[10px] font-bold transition-all duration-300 border",
                activeTab === tab 
                  ? "bg-royal-blue text-white border-royal-blue shadow-lg shadow-royal-blue/20" 
                  : "bg-white text-[#3D4166] border-royal-blue/10 hover:border-royal-blue/30"
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {filteredTeachers.map((teacher, i) => (
            <motion.div
              layout
              key={teacher.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="bg-white p-6 rounded-2xl border border-royal-blue/5 text-center group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-linear-to-br from-royal-blue to-sky-blue rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-serif font-bold border-2 border-white shadow-md group-hover:border-academic-gold transition-colors duration-500">
                {teacher.initial}
              </div>
              <h4 className="font-serif text-base font-bold text-[#1A1A2E] mb-1.5 group-hover:text-academic-gold transition-colors">
                {teacher.name}
              </h4>
              <div className="inline-block px-2.5 py-0.5 bg-royal-blue/5 text-royal-blue text-[9px] font-bold rounded-full mb-1.5">
                {teacher.dept}
              </div>
              <p className="text-[#6B7280] text-[9px] uppercase tracking-wider font-semibold">
                {teacher.sub}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
