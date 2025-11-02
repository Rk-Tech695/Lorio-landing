import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import ValueSection from './components/ValueSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTAFooter from './components/CTAFooter';
import Keyfeatures from './components/Keyfeatures';
import SimplePricing from './components/SimplePricing';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from 'framer-motion';
import Footer from './components/Footer';
import TermsAndConditions from './components/TermsAndConditions';
import './index.css'
import PolicyPage from './components/PolicyPage';
import LandingPage from './components/LandingPage';
function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Routes>
          <Route
            path="/"
            element={
              <>
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

                {/* Floating WhatsApp Button */}
                <motion.a
                  href="https://api.whatsapp.com/send/?phone=918518021111&text=Hello%2C+I+would+like+to+discuss+the+project+details.+When+can+we+talk%3F&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl hover:bg-green-100 transition-all"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5, type: "spring" }}
                  whileHover={{ scale: 1.1, boxShadow: "0 25px 50px -12px rgba(34, 197, 94, 0.5)" }}
                  whileTap={{ scale: 0.9 }}
                >
                  {/* WhatsApp Icon */}
                  <img 
                    src="/assets/images/logo/whatsapp.svg" 
                    alt="WhatsApp" 
                    className="w-9 h-9"
                  />

                  {/* Pulse Animation */}
                  <motion.div
                    className="absolute inset-0 bg-purple-100 rounded-full -z-10"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.7, 0, 0.7]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.a>

                {/* Main Footer */}
                <Footer />
              </>
            }
          />
          <Route path="/terms-conditions" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PolicyPage />} />
          <Route path="/fleet-management" element={<LandingPage />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;