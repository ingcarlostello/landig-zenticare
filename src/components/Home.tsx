import React from 'react';
import Hero from './Hero';
import Features from './Features';
import HowItWorks from './HowItWorks';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
    </>
  );
};

export default Home;
