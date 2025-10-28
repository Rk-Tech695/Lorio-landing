import React from 'react';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import ValueSection from './components/ValueSection';
import SocialProof from './components/SocialProof';
import PricingSection from './components/PricingSection';
import RoadmapSection from './components/RoadmapSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTAFooter from './components/CTAFooter';
import './index.css'

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <ValueSection />
      <SocialProof />
      <PricingSection />
      <RoadmapSection />
      <TestimonialsSection />
      <CTAFooter />
    </div>
  );
}

export default App;