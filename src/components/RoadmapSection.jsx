import React from 'react';
import { RocketIcon } from '../components/Icons';

const RoadmapSection = () => {
  const roadmapItems = [
    {
      title: "Launching Broker App & Marketplace soon",
      status: "coming-soon",
      color: "bg-blue-500"
    },
    {
      title: "Predictive maintenance & fuel analytics coming next",
      status: "in-development",
      color: "bg-green-500"
    },
    {
      title: "Expanding across India, connecting 100K+ trucks",
      status: "planned",
      color: "bg-purple-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <RocketIcon />
            <h2 className="text-4xl font-bold">
              The Future of Trucking is Lorio
            </h2>
          </div>
          <p className="text-xl text-gray-300">Innovative features coming your way</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {roadmapItems.map((item, index) => (
            <div key={index} className="flex items-center gap-6 mb-8 last:mb-0">
              <div className={`${item.color} w-4 h-4 rounded-full flex-shrink-0`}></div>
              <div className="flex-1">
                <p className="text-lg font-medium">{item.title}</p>
              </div>
              <div className="text-sm text-gray-400 capitalize">
                {item.status.replace('-', ' ')}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Be Part of the Revolution</h3>
            <p className="text-gray-300 mb-6">
              Join early adopters who are transforming their truck business with smart technology
            </p>
            <button className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-3 px-8 rounded-xl transition-colors">
              Get Early Access
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;