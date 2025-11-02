import React from 'react';
import { TrendingUp, DollarSign, BarChart3, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const ValueSection = () => {
  const benefits = [
    {
      title: "Reduce wastage & save up to 30% in costs",
      icon: DollarSign,
      description: "Cut down operational costs with smart fleet management"
    },
    {
      title: "Know which trucks actually make you profit",
      icon: TrendingUp,
      description: "Get detailed profitability insights for each vehicle"
    },
    {
      title: "Zero paperwork — 100% digital records",
      icon: BarChart3,
      description: "Go completely paperless with digital documentation"
    },
    {
      title: "Make faster, smarter decisions from anywhere",
      icon: Zap,
      description: "Access real-time data and insights on the go"
    }
  ];

  const socialProofStats = [
    {
      number: "1300+",
      label: "Trucks Digitally Managed",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      number: "130+",
      label: "Fleet Owners Already Onboard",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      number: "20–30%",
      label: "Average Cost Reduction",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      number: "89%",
      label: "Positive Feedback",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    }
  ];

  return (
    <section className="pt-10 pb-5 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)' }}>
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-4 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-0.5 w-12" style={{ backgroundColor: 'rgb(87, 8, 133)' }}></div>
            <span className="font-semibold uppercase tracking-wider text-sm" style={{ color: 'rgb(87, 8, 133)' }}>
              Why Choose Lorio
            </span>
            <div className="h-0.5 w-12" style={{ backgroundColor: 'rgb(87, 8, 133)' }}></div>
          </div>
          <h2 className="text-2xl lg:text-5xl font-bold text-gray-800 mb-4">
            Because Your Fleet Deserves Smart Management
          </h2>
        </motion.div>

        {/* Compact Benefits Cards - 2x2 Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start gap-4">
                  <motion.div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: 'rgb(87, 8, 133)' }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="text-white" size={24} strokeWidth={2.5} />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-sm md:text-lg font-bold text-gray-800 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-[12px] md:text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Social Proof Section */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-3 md:mb-10">
            <motion.h2 
              className="text-xl md:text-4xl lg:text-5xl font-bold mb-1 md:mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <span className="text-gray-800">Proven. </span>
              <span className="text-gray-800">Trusted. </span>
              <span style={{ color: 'rgb(87, 8, 133)' }}>Growing.</span>
            </motion.h2>
            <p className="text-sm md:text-lg text-gray-600">Join thousands of truck owners who trust Lorio</p>
          </div>

          {/* Stats Grid - Clean Modern Design */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-3 md:mb-10">
            {socialProofStats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <motion.div
                  className="mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div 
                    className={`text-lg md:text-3xl  font-bold mb-2 ${stat.color}`}
                  >
                    {stat.number}
                  </div>
                  <div className="h-1 w-20 mx-auto rounded-full" style={{ 
                    backgroundColor: stat.color.includes('blue') ? '#2563eb' :
                                   stat.color.includes('green') ? '#16a34a' :
                                   stat.color.includes('purple') ? 'rgb(87, 8, 133)' :
                                   '#ea580c'
                  }}></div>
                </motion.div>
                <p className="text-gray-700 font-medium text-[12px] md:text-base">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default ValueSection;