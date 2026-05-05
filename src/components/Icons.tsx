/**
 * Matribhumi Model School & College Icons
 * Custom SVG versions of the brand identity icons
 */

import React from 'react';

export const SchoolSeal = ({ size = 100, className = '' }: { size?: number; className?: string }) => (
  <img 
    src="https://i.postimg.cc/SsKF0dNV/cropped-Matribhumi-1.jpg" 
    alt="Matribhumi Academy Logo"
    style={{ width: size, height: 'auto' }}
    className={className}
    referrerPolicy="no-referrer"
  />
);

export const FloatingAssetBook = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

export const FloatingAssetCap = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
);

export const FloatingAssetGlobe = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);
