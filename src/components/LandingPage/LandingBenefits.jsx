import React from "react";
import { Truck, TrendingUp, Star, MapPin } from "lucide-react";

const stats = [
  {
    icon: <Truck size={20} className="text-white" />, color: 'fleet-bg-gradient', value: '1,300+', label: 'Trucks Managed Daily', text: '#1F6FBF'
  },
  {
    icon: <TrendingUp size={20} className="text-white" />, color: 'fleet-bg-gradient-orange', value: '20-30%', label: 'Cost Reduction', text: '#F68B1E'
  },
  {
    icon: <Star size={20} className="text-white" />, color: 'fleet-bg-gradient-orange', value: '1000+', label: 'Customer Satisfaction', text: '#F68B1E'
  },
  {
    icon: <MapPin size={20} className="text-white" />, color: 'fleet-bg-gradient', value: '12+', label: 'Indian States', text: '#1F6FBF'
  },
];

const LandingBenefits = () => (
  <section id="benefits" className="py-2 fleet-bg-gradient">
    <div className="container mx-auto py-3">
      <div className="text-center text-white mb-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-1"><span className="text-orange">Lorio</span> in Action</h2>
        <p className="mb-3 opacity-90 text-xs md:text-sm">Real results that matter to your business</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-3 px-2 ">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center justify-center bg-white bg-opacity-95 rounded-xl shadow p-4 text-center h-full">
            <div className={`mb-2 rounded-lg p-2 inline-block ${stat.color}`}>
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
