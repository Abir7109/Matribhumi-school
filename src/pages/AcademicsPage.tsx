import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Academics from '../components/Academics';

export default function AcademicsPage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 300); // Small delay to ensure render
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="pt-20">
      <Academics />
    </div>
  );
}
