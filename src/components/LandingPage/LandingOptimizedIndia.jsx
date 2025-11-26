import React from "react";
import { Languages, Users, Settings, Flag } from "lucide-react";

const items = [
  {
    icon: <Languages size={20} className="text-white" />,
    color: 'from-indigo-500 to-purple-600',
    title: 'Multi-language Interface & Support',
    desc: 'Available in multiple Indian languages'
  },
  {
    icon: <Users size={20} className="text-white" />,
    color: 'from-yellow-400 to-orange-400',
    title: 'Designed by Successful Truck Owner',
    desc: 'Real-world insights from experienced fleet operators'
  },
  {
    icon: <Settings size={20} className="text-white" />,
    color: 'from-emerald-500 to-green-600',
    title: 'Localized Custom Abilities',
    desc: 'Features tailored for Indian trucking operations'
  },
  {
    icon: <Flag size={20} className="text-white" />,
    color: 'from-blue-500 to-indigo-500',
    title: '100% Made in India',
    desc: 'Built for the Indian trucking ecosystem 🇮🇳'
  },
];

const LandingOptimizedIndia = () => (
  <section className="py-2 bg-white">
    <div className="container mx-auto py-3">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-4xl font-bold mb-2 text-gray-900">Optimized for India</h2>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow border border-gray-100 p-6">
          <ul className="space-y-6">
            {items.map((item, idx) => (
              <li key={idx} className="flex items-start">
                <div className={`rounded-full flex items-center justify-center mr-4 shrink-0 bg-gradient-to-r ${item.color}`} style={{ width: 40, height: 40 }}>
                  {item.icon}
                </div>
                <div>
                  <h6 className="font-bold mb-1 text-sm text-gray-900">{item.title}</h6>
                  <p className="text-gray-500 text-[12px] mb-0">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default LandingOptimizedIndia;
