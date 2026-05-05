import React from 'react';
import Hero from '../components/Hero';
import Ticker from '../components/Ticker';
import PhotoHighlights from '../components/PhotoHighlights';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import WhyChooseUs from '../components/WhyChooseUs';

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <PhotoHighlights />
      <WhyChooseUs />
      <Stats />
      <Testimonials />
    </>
  );
}
