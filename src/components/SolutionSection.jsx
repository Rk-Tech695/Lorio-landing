import React from 'react';
import { TruckIcon, MoneyIcon, AlertIcon, DocumentIcon } from '../components/Icons';

const SolutionSection = () => {
  const modules = [
    {
      icon: TruckIcon,
      title: "Trip Management",
      description: "Plan, track, and analyze every trip.",
      color: "bg-blue-500"
    },
    {
      icon: TruckIcon,
      title: "Driver Management",
      description: "Performance, attendance & payments.",
      color: "bg-green-500"
    },
    {
      icon: MoneyIcon,
      title: "Profit & Expense Report",
      description: "Real-time profit insights per truck.",
      color: "bg-purple-500"
    },
    {
      icon: AlertIcon,
      title: "Maintenance & Service Alerts",
      description: "Never miss a service again.",
      color: "bg-orange-500"
    },
    {
      icon: DocumentIcon,
      title: "Document Management",
      description: "Store & auto-alert before expiry.",
      color: "bg-indigo-500"
    },
    {
      icon: TruckIcon,
      title: "Tyre Management",
      description: "Track tyre history, performance & cost.",
      color: "bg-red-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            One Platform. Total Control.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lorio gives you real-time control over your entire fleet — from loading point to balance sheet.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <div key={index} className="group hover:scale-105 transition-transform duration-300">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl border border-gray-100">
                <div className={`${module.color} w-16 h-16 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                  <module.icon />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {module.title}
                </h3>
                <p className="text-gray-600">
                  {module.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-block bg-lorio-primary text-white px-8 py-4 rounded-xl text-lg font-semibold">
            Complete Fleet Management in Your Pocket
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;