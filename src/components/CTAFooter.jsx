import React from 'react';
import { PhoneIcon, ChatIcon } from '../components/Icons';

const CTAFooter = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-lorio-primary to-purple-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Make Your Fleet Smart?
          </h2>
          <p className="text-xl text-purple-100 mb-12 leading-relaxed">
            Lorio is the easiest way to digitize your transport business — trusted by growing fleets across India.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-white hover:bg-gray-100 text-lorio-primary font-bold py-4 px-8 rounded-xl text-lg flex items-center gap-3 transition-all transform hover:scale-105 shadow-lg">
              <PhoneIcon />
              📞 Book Free Demo
            </button>
            
            <button className="bg-yellow-400 hover:bg-yellow-300 text-purple-900 font-bold py-4 px-8 rounded-xl text-lg flex items-center gap-3 transition-all transform hover:scale-105 shadow-lg">
              <ChatIcon />
              💬 Chat with Team Lorio
            </button>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-purple-200 mb-4">
              🚀 Get started in just 5 minutes • 📱 No technical knowledge required • 💯 100% secure
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-purple-300">
              <span>✓ Free setup assistance</span>
              <span>✓ 24/7 customer support</span>
              <span>✓ Money-back guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAFooter;