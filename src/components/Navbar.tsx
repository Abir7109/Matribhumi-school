import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Menu, X, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { SchoolSeal } from './Icons';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    // Only scroll to top if there's no hash
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { 
      name: 'Academics', 
      href: '/academics',
      dropdown: [
        { name: 'Play Group & Nursery', href: '/academics#pre-primary' },
        { name: 'Primary (1–5)', href: '/academics#primary' },
        { name: 'Junior Secondary (6–8)', href: '/academics#secondary' },
        { name: 'Secondary (9)', href: '/academics#secondary' },
        { name: 'English & Global Skills', href: '/academics#special-programs' }
      ]
    },
    { name: 'Faculty', href: '/faculty' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-40 transition-all duration-500",
        isScrolled 
          ? "h-16 bg-white/88 backdrop-blur-3xl shadow-sm border-b border-royal-blue/5" 
          : "h-[80px] bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <SchoolSeal size={isScrolled ? 40 : 48} className="transition-all duration-500" />
          <div className="hidden sm:block">
            <h1 className={cn(
              "font-serif font-bold text-royal-blue leading-none transition-all duration-300",
              isScrolled ? "text-sm" : "text-base"
            )}>
              Matribhumi Model School & College
            </h1>
            <p className="text-[10px] text-zinc-500 mt-1">EIIN: 134176 | Chandina, Cumilla</p>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div 
              key={link.name} 
              className="relative group"
              onMouseEnter={() => setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link 
                to={link.href}
                className={cn(
                  "text-[13px] font-medium uppercase tracking-wider relative py-2 transition-colors",
                  location.pathname === link.href ? "text-royal-blue" : "text-[#3D4166] hover:text-royal-blue"
                )}
              >
                {link.name}
                {link.dropdown && <ChevronDown className="inline-block w-3 h-3 ml-1" />}
                <span className={cn(
                  "absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-academic-gold transition-all duration-300 group-hover:w-full",
                  location.pathname === link.href ? "w-full" : "w-0"
                )} />
              </Link>

              {link.dropdown && (
                <AnimatePresence>
                  {activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute top-full left-0 w-64 bg-white/95 backdrop-blur-xl border border-royal-blue/10 rounded-xl shadow-xl p-2"
                    >
                      {link.dropdown.map((item, i) => (
                        <motion.div
                          key={`nav-dropdown-${item.href}-${i}`}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                        >
                          <Link
                            to={item.href}
                            className="w-full text-left block px-4 py-3 text-xs text-[#3D4166] hover:bg-royal-blue/5 hover:text-royal-blue rounded-lg transition-colors"
                          >
                            {item.name}
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <Link to="/admissions" className="hidden md:flex items-center gap-2 bg-linear-to-br from-royal-blue to-royal-blue-medium text-white px-6 py-2.5 rounded-md text-xs font-bold tracking-widest hover:-translate-y-0.5 hover:shadow-lg transition-all relative">
            ADMISSION 2027
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full animate-ping" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full" />
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-royal-blue"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Rendered via Portal to avoid parent positioning issues */}
      {isMobileMenuOpen && createPortal(
        <AnimatePresence>
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-[9998] bg-royal-blue/30 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] z-[9999] bg-white shadow-2xl flex flex-col p-6 lg:hidden"
            >
              <div className="flex justify-between items-center mb-8 shrink-0">
                <SchoolSeal size={40} />
                <button 
                  className="text-royal-blue p-2 hover:bg-royal-blue/5 rounded-full transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex flex-col gap-2 mb-8 overflow-y-auto flex-1 pr-2 min-h-0">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "block px-4 py-2.5 font-serif text-lg font-bold rounded-xl transition-all",
                        location.pathname === link.href 
                          ? "bg-royal-blue text-white shadow-md shadow-royal-blue/20" 
                          : "text-royal-blue hover:bg-royal-blue/5"
                      )}
                    >
                      {link.name}
                    </Link>
                    
                    {/* Sub-links for Mobile */}
                    {link.dropdown && (
                      <div className="ml-6 mt-1 flex flex-col gap-1 border-l-2 border-royal-blue/10 pl-4 py-1">
                        {link.dropdown.map((subItem, subIndex) => (
                          <Link
                            key={`mobile-dropdown-${subItem.href}-${subIndex}`}
                            to={subItem.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block py-2 text-sm text-zinc-500 hover:text-royal-blue font-medium"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="pt-6 border-t border-royal-blue/10 space-y-4 shrink-0">
                <div className="flex items-center gap-3 text-[#6B7280] px-4">
                  <Phone size={14} />
                  <span className="text-xs font-bold">01877-761105</span>
                </div>
                <Link 
                  to="/admissions" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-royal-blue text-white py-3 rounded-xl font-bold text-sm text-center block shadow-lg shadow-royal-blue/10"
                >
                  APPLY NOW
                </Link>
              </div>
            </motion.div>
          </>
        </AnimatePresence>,
        document.body
      )}
    </nav>
  );
}
