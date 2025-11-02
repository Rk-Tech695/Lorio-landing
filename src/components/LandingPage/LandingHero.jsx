import React from "react";
import { Star, MapPin, Shield } from "lucide-react";

const LandingHero = () => (
  <section id="hero" className="relative z-10 bg-gradient-to-br from-indigo-500 to-indigo-700 min-h-[80vh] flex items-center py-2 md:py-2">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-0 px-2">
      {/* Hero Content */}
            <div className="flex-1 text-white mb-4 md:mb-0 animate-fade-in-up">
                <div className="flex justify-between items-end mb-5 shadow-lg shadow-indigo-900/20 rounded-2xl p-4  bg-opacity-20">
                    <img src="/assets/images/logo/logo_dark.png" className="w-15" alt="" />

                    <button onClick={() => window.location.href = "https://app.lorio.in"} className="bg-white text-indigo-700 font-bold py-1 px-2 rounded-full hover:bg-indigo-100 transition-colors text-[12px]">
                        Get Started
                    </button>
                </div>
        <h1 className="font-bold text-2xl md:text-5xl leading-tight mb-4 tracking-tight" style={{wordSpacing : "5px"}}>
          The App for modern <span className="text-yellow-400">Fleet Owners</span>
        </h1>
        <p className="text-sm md:text-lg mb-6 max-w-md">  
          Designed to help truck owners track trucking operations & data backed business decision making
        </p>
        {/* Trust Indicators */}
        <div className="flex justify-between mt-3">
          <div className="flex items-center gap-2">
            <div className="bg-white rounded-full flex items-center justify-center w-4 h-4">
              <Star size={10} fill="#FCD34D" stroke="#F59E0B" strokeWidth={2} />
            </div>
            <div>
              <div className="font-bold text-white text-[12px]">1000+</div>
              <div className="text-white text-[10px] opacity-80">Active Users</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-white rounded-full flex items-center justify-center w-4 h-4">
              <MapPin size={10} color="#8B5CF6" fill="none" strokeWidth={2} />
            </div>
            <div>
              <div className="font-bold text-white text-[12px]">12+ States</div>
              <div className="text-white text-[10px] opacity-80">Pan India</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-white rounded-full flex items-center justify-center w-4 h-4">
              <Shield size={10} color="#10B981" fill="none" strokeWidth={2} />
            </div>
            <div>
              <div className="font-bold text-white text-[12px]">100% Secure</div>
              <div className="text-white text-[10px] opacity-80">Data Protected</div>
            </div>
          </div>
        </div>
      </div>
      {/* Hero Image */}
      <div className="flex-1 flex justify-center items-center mt-6 md:mt-0 shadow-lg shadow-indigo-900/20 rounded-2xl ">
        <div className="mascot-float">
          <img
            src="assets/images/lorio/mainbg1.png"
            alt="Lorio App"
            className="w-full h-auto object-contain drop-shadow-xl rounded-2xl"
          />
        </div>
      </div>
    </div>
  </section>
);

export default LandingHero;
