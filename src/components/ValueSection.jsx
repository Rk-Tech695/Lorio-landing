import React from 'react';
import { CheckIcon } from '../components/Icons';

const ValueSection = () => {
  const benefits = [
    "Reduce wastage & save up to 30% in costs",
    "Know which trucks actually make you profit",
    "Zero paperwork — 100% digital records",
    "Make faster, smarter decisions from anywhere"
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-lorio-primary to-purple-700">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Because Your Fleet Deserves Smart Management
          </h2>
          <p className="text-xl text-purple-100">Why Choose Lorio?</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="bg-green-500 p-2 rounded-full flex-shrink-0">
                <CheckIcon />
              </div>
              <span className="text-white text-lg font-medium">
                {benefit}
              </span>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-block bg-white text-lorio-primary px-8 py-4 rounded-xl text-xl font-bold shadow-lg">
            Start Your Digital Journey Today
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;