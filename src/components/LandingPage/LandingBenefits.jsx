import React from "react";
import { Truck, TrendingUp, Star, MapPin } from "lucide-react";

const stats = [
  {
    icon: <Truck size={20} className="text-white" />, color: 'from-indigo-500 to-purple-600', value: '1,300+', label: 'Trucks Managed Daily', text: '#8B5CF6'
  },
  {
    icon: <TrendingUp size={20} className="text-white" />, color: 'from-emerald-500 to-green-600', value: '20-30%', label: 'Cost Reduction', text: '#10B981'
  },
  {
    icon: <Star size={20} className="text-white" />, color: 'from-yellow-400 to-orange-400', value: '1000+', label: 'Customer Satisfaction', text: '#F59E0B'
  },
  {
    icon: <MapPin size={20} className="text-white" />, color: 'from-blue-500 to-indigo-500', value: '12+', label: 'Indian States', text: '#3B82F6'
  },
];

const LandingBenefits = () => (
  <section id="benefits" className="py-2 bg-gradient-to-b from-indigo-600 to-indigo-700">
    <div className="container mx-auto py-3">
      <div className="text-center text-white mb-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-1">Lorio in Action</h2>
        <p className="mb-3 opacity-90 text-xs md:text-sm">Real results that matter to your business</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-3 px-2 ">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center justify-center bg-white bg-opacity-95 rounded-xl shadow p-4 text-center h-full">
            <div className={`mb-2 rounded-lg p-2 inline-block bg-gradient-to-r ${stat.color}`}>
              {stat.icon}
            </div>
            <h3 className="font-bold mb-0 text-xl" style={{ color: stat.text, lineHeight: '1.2' }}>{stat.value}</h3>
            <p className="text-gray-500 mb-0 text-[10px]" style={{lineHeight:'1.3'}}>{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default LandingBenefits;
