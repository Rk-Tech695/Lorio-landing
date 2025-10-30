import React from 'react';
import Header from './components/Header';
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
import { Key } from 'lucide-react';
import Keyfeatures from './components/Keyfeatures';
import SimplePricing from './components/SimplePricing';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ProblemSection />
      <div id="keyfeatures">
        <Keyfeatures/>
      </div>
      {/* <SolutionSection /> */}
      <div id="services">
        <ValueSection />
      </div>
      {/* <SocialProof /> */}
      <div id="pricing">
        <SimplePricing/>
      </div>
      {/* <PricingSection /> */}
      {/* <RoadmapSection /> */}
      <TestimonialsSection />
      <div id="contact">
        <CTAFooter />
      </div>
    </div>
  );
}

export default App;