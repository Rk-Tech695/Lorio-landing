import React from 'react';
import { AlertIcon, MoneyIcon, DocumentIcon, TruckIcon, DashboardIcon } from '../components/Icons';

const ProblemSection = () => {
  const painPoints = [
    {
      icon: DocumentIcon,
      title: "Scattered spreadsheets & paper registers",
      emoji: "📒"
    },
    {
      icon: AlertIcon,
      title: "Missed service alerts and compliance penalties",
      emoji: "⚠️"
    },
    {
      icon: MoneyIcon,
      title: "Untracked expenses, low visibility on profits",
      emoji: "💸"
    },
    {
      icon: TruckIcon,
      title: "Demotivated drivers & operational delays",
      emoji: "🚚"
    },
    {
      icon: DashboardIcon,
      title: "Poor decision-making due to lack of data",
      emoji: "📊"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            The Real Cost of Manual Truck Management
          </h2>
          <p className="text-xl text-gray-600">Why Lorio?</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {painPoints.map((point, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="text-4xl">{point.emoji}</div>
                <div className="flex-1">
                  <point.icon />
                  <p className="text-gray-700 mt-2">{point.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-red-50 border-l-4 border-red-400 p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold text-red-700 mb-2">
            Every month, Indian truck owners lose up to 10% of revenue to inefficiency.
          </h3>
          <p className="text-xl text-red-600 font-semibold">
            Lorio stops that loss.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;