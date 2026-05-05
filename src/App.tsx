/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import AcademicsPage from './pages/AcademicsPage';
import FacultyPage from './pages/FacultyPage';
import AdmissionsPage from './pages/AdmissionsPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

function AppContent() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  // Memoize handleComplete to prevent Preloader from resetting every render
  const handleComplete = React.useCallback(() => {
    setLoading(false);
  }, []);

  // Custom Cursor logic
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [dotPos, setDotPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Smooth lerp for circular cursor ring - only runs once
  useEffect(() => {
    let animationFrameId: number;
    
    const animate = () => {
      setDotPos(prev => ({
        x: prev.x + (mousePos.x - prev.x) * 0.1,
        y: prev.y + (mousePos.y - prev.y) * 0.1,
      }));
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [mousePos.x, mousePos.y]); // Depend on values, not object

  useEffect(() => {
    // Sync scroll progress bar
    const handleScroll = () => {
      const scroll = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = height > 0 ? (scroll / height) * 100 : 0;
      const bar = document.getElementById('scroll-bar');
      if (bar) bar.style.width = scrolled + '%';
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <Preloader onComplete={handleComplete} />
        )}
      </AnimatePresence>

      {!loading && (
        <div className="relative selection:bg-royal-blue/10 selection:text-royal-blue min-h-screen flex flex-col">
          {/* Custom Cursor */}
          <div className="hidden lg:block">
            <div 
              className="fixed w-[30px] h-[30px] border border-royal-blue/45 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-300"
              style={{ left: dotPos.x - 15, top: dotPos.y - 15 }}
            />
            <div 
              className="fixed w-[5px] h-[5px] bg-royal-blue rounded-full pointer-events-none z-50 transform"
              style={{ left: mousePos.x - 2.5, top: mousePos.y - 2.5 }}
            />
          </div>

          <Navbar />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/academics" element={<AcademicsPage />} />
              <Route path="/faculty" element={<FacultyPage />} />
              <Route path="/admissions" element={<AdmissionsPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>

          <Footer />
          
          {/* Global Scroll Progress */}
          <div className="fixed top-0 left-0 w-full h-[3px] bg-royal-blue/5 z-50 pointer-events-none">
             <div className="h-full bg-linear-to-r from-royal-blue via-sky-blue to-academic-gold w-0 transition-all duration-150" id="scroll-bar" />
          </div>
        </div>
      )}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

