import React from 'react';
import {Users, DollarSign, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const ProblemSection = () => {
  const services = [
    {
      title: 'Enhanced Operational Efficiency',
      points: [
        'Streamline daily operations by centralizing real-time data on vehicle status',
        'Driver performance and vehicle wise performance tracking',
        'Maintenance schedules, reducing manual tasks & improving response times'
      ],
      icon: Users,
      iconBg: 'bg-linear-to-br from-purple-600 to-purple-900',
      gradientFrom: 'from-purple-50',
      gradientTo: 'to-purple-100'
    },
    {
      title: 'Improved Financial Visibility',
      points: [
        'Gain clear insights into fleet costs and profitability',
        'Comprehensive tracking of expenses, fuel consumption',
        'Revenue per truck or route, enabling smarter budgeting and strategic decision-making'
      ],
      icon: DollarSign,
      iconBg: 'bg-linear-to-br from-purple-600 to-purple-900',
      gradientFrom: 'from-blue-50',
      gradientTo: 'to-blue-100'
    },
    {
      title: 'Seamlessly Scale your Business',
      points: [
        'Effortlessly manage fleet growth without a proportional increase in administrative burden', 'Unbox the potential for sustainable expansion','Integrate new routes, vehicles, and drivers with minimal setup time and maximum control'
      ],
      icon: TrendingUp,
      iconBg: 'bg-linear-to-br from-purple-600 to-purple-900',
      gradientFrom: 'from-indigo-50',
      gradientTo: 'to-indigo-100'
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)' }}>
      {/* Decorative Background */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-0.5 w-12" style={{ backgroundColor: 'rgb(87, 8, 133)' }}></div>
            <span className="font-semibold uppercase tracking-wider text-sm" style={{ color: 'rgb(87, 8, 133)' }}>
              Our Service
            </span>
            <svg className="w-5 h-5" style={{ color: 'rgb(87, 8, 133)' }} fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 12l-18 12v-24z"/>
            </svg>
          </div>
          
          <h2 className="text-5xl font-bold mb-2">
            <span className="text-gray-800">Provide Efficient Logistics</span>
            <br />
            <span className="text-gray-800">Solutions <span style={{ color: 'rgb(87, 8, 133)' }}>BUSINESS</span></span>
          </h2>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                className={`bg-linear-to-br ${service.gradientFrom} ${service.gradientTo} rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group relative border border-purple-200`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-300/20 rounded-full blur-2xl"></div>

                {/* Content */}
                <div className="p-8 relative z-10">
                  {/* Icon */}
                  {/* <motion.div 
                    className={`w-10 h-10 ${service.iconBg} rounded-2xl flex items-center justify-center shadow-xl mb-6`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-5 h-5 text-white" strokeWidth={2} />
                  </motion.div> */}
                     <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 text-sm">
                    {service.description}
                  </p>

                  {/* Bullet Points */}
                  <ul className="space-y-4">
                    {service.points.map((point, pointIndex) => (
                      <motion.li
                        key={pointIndex}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.2 + pointIndex * 0.1 }}
                      >
                        <div className="shrink-0 mt-1">
                          <svg className="w-6 h-6" style={{ color: 'rgb(87, 8, 133)' }} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700 leading-relaxed">
                          {point}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
