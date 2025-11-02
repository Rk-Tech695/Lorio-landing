import React from "react";
import LandingHero from "./LandingPage/LandingHero";
import LandingFeatures from "./LandingPage/LandingFeatures";
import LandingBenefits from "./LandingPage/LandingBenefits";
import LandingContactForm from "./LandingPage/LandingContactForm";
import LandingLorioFeatures from "./LandingPage/LandingLorioFeatures";
import LandingOptimizedIndia from "./LandingPage/LandingOptimizedIndia";
import LandingTestimonials from "./LandingPage/LandingTestimonials";
import "../landingCss.css"
import LandingFooter from "./LandingPage/LandingFooter";

// Main Landing Page for /fleet-management
const LandingPage = () => {
  return (
    <main className="bg-white min-h-screen">
      <LandingHero />
      <LandingFeatures />
      <LandingBenefits />
      <LandingContactForm />
      <LandingLorioFeatures />
      <LandingOptimizedIndia />
          <LandingTestimonials />
          <LandingFooter/>
    </main>
  );
};

export default LandingPage;
