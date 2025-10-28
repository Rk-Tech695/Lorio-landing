import React from 'react';
import { RocketIcon, TruckIcon, PhoneIcon } from '../components/Icons';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-lorio-primary via-purple-600 to-purple-800 min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Revolutionize Your{' '}
                <span className="text-yellow-300">Truck Business</span>
              </h1>
              <h2 className="text-3xl lg:text-4xl font-semibold">
                Drive More Profit. Less Chaos.
              </h2>
              <p className="text-xl text-purple-100 leading-relaxed">
                No more registers. No more WhatsApp hassles.<br />
                Track every truck, trip, driver, and rupee — all in one simple dashboard.
              </p>
            </div>
            
            <button className="bg-yellow-400 hover:bg-yellow-300 text-purple-900 font-bold py-4 px-8 rounded-xl text-lg flex items-center gap-3 transition-all transform hover:scale-105 shadow-lg">
              <RocketIcon />
              🚀 Get started now
            </button>
          </div>
          
          <div className="relative">
            {/* Phone mockup with dashboard preview */}
            <div className="relative mx-auto w-80 h-96 bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="bg-lorio-primary h-8 rounded-t-3xl flex items-center justify-center">
                <div className="w-16 h-1 bg-white rounded-full"></div>
              </div>
              
              {/* Dashboard content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <img src="https://via.placeholder.com/48x48/6366F1/white?text=L" alt="Lorio" className="rounded-full" />
                  <h3 className="font-bold text-gray-800">Dashboard</h3>
                </div>
                
                {/* Stats widgets */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">22</div>
                    <div className="text-sm text-gray-600">Trips started</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">18</div>
                    <div className="text-sm text-gray-600">Trips completed</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">16</div>
                    <div className="text-sm text-gray-600">POD received</div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">3</div>
                    <div className="text-sm text-gray-600">Reminders</div>
                  </div>
                </div>
                
                {/* Chart placeholder */}
                <div className="bg-gray-100 h-20 rounded-lg flex items-center justify-center">
                  <div className="text-gray-500">Performance Chart</div>
                </div>
              </div>
            </div>
            
            {/* Person holding phone (placeholder) */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg">
              <img src="https://via.placeholder.com/120x120/4F46E5/white?text=👨‍💼" alt="Truck Owner" className="rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;