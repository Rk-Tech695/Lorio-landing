import React from 'react'
import { TruckIcon } from './Icons'
import { motion } from 'framer-motion'

const SimplePricing = () => {
  const pricingPlans = [
    {
      id: 1,
      name: 'LORIO Plan',
      price: '3,000',
      period: 'year',
      popular: true,
      description: 'Complete fleet management solution',
      savings: 'Best Value for Fleet Owners',
      buttonText: 'Get Started Now',
      gradient: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)'
    }
  ]
  return (
    <section
      id="pricing"
      className="relative overflow-hidden pt-5 pb-5"
      style={{ background: 'linear-gradient(135deg, #f9fafb 0%, #e5e7eb 50%, #f3e8ff 100%)' }}
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-4 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-0.5 w-12" style={{ backgroundColor: 'rgb(87, 8, 133)' }}></div>
            <span className="font-semibold uppercase tracking-wider text-sm" style={{ color: 'rgb(87, 8, 133)' }}>
              Pricing
            </span>
            <div className="h-0.5 w-12" style={{ backgroundColor: 'rgb(87, 8, 133)' }}></div>
          </div>
          <h2 className="text-2xl lg:text-5xl font-bold text-gray-800 mb-3">Simple & Transparent Pricing</h2>
          <p className="text-sm md:text-lg text-gray-600">Complete fleet management solution at an unbeatable price</p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center justify-center max-w-6xl mx-auto mb-4 md:mb-16">
          {/* Left: Truck Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1616340786004-7c444e530ce3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
                alt="Truck Fleet Management"
                className="w-full h-[500px] object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-purple-900/80 via-purple-900/30 to-transparent"></div>
              
              {/* Stats Badge */}
              <motion.div
                className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-sm md:text-3xl font-bold text-white">2000+</div>
                    <div className="text-xs text-white/80 mt-1">Active Trucks</div>
                  </div>
                  <div>
                    <div className="text-sm md:text-3xl font-bold text-white">180+</div>
                    <div className="text-xs text-white/80 mt-1">Fleet Owners</div>
                  </div>
                  <div>
                    <div className="text-sm md:text-3xl font-bold text-yellow-400">30%</div>
                    <div className="text-xs text-white/80 mt-1">Cost Savings</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Pricing Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {pricingPlans.map((plan) => (
              <div key={plan.id} className="relative bg-white rounded-3xl shadow-2xl p-10 border-2" style={{ borderColor: 'rgb(87, 8, 133)' }}>
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-2 md:px-8 py-2 rounded-full text-[12px] md:text-sm font-bold shadow-lg text-white" style={{ backgroundColor: 'rgb(87, 8, 133)' }}>
                    🔥 Most Popular
                  </div>
                )}

                {/* Icon */}
                <div className="text-center mb-6">
                  <div className="mx-auto mb-4 rounded-2xl md:w-20 md:h-20 flex items-center justify-center shadow-lg" style={{ backgroundColor: 'rgb(87, 8, 133)' }}>
                    <TruckIcon className="w-5 h-5 md:w-10 md:h-10 text-white" />
                  </div>
                  <h3 className="text-xl md:text-3xl font-bold text-gray-900">{plan.name}</h3>
                  <p className="text-xs md:text-base text-gray-600 mt-2">{plan.description}</p>
                </div>

                {/* Pricing */}
                <div className="relative text-center py-8 mb-8 rounded-2xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #F3E8FF 0%, #E9D5FF 100%)' }}>
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 opacity-20">
                    <div className="absolute top-2 right-2 w-16 h-16 rounded-full" style={{ backgroundColor: 'rgb(87, 8, 133)' }}></div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-20 h-20 opacity-20">
                    <div className="absolute bottom-2 left-2 w-12 h-12 rounded-full" style={{ backgroundColor: 'rgb(87, 8, 133)' }}></div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-baseline justify-center gap-2 mb-2">
                      <span className="text-3xl font-bold" style={{ color: 'rgb(87, 8, 133)' }}>₹</span>
                      <span className="text-xl md:text-4xl font-extrabold" style={{ color: 'rgb(87, 8, 133)' }}>{plan.price}</span>
                      <span className="text-sm lg:text-2xl text-gray-700">/{plan.period}</span>
                    </div>
                    <p className="text-[12px] md:text-base  text-gray-700 font-medium mb-3">per truck • Billed Annually</p>
                    <div className="inline-block bg-green-100 text-green-700 px-6 py-2 rounded-full font-bold border-2 border-green-300 text-[12px] md:text-sm  ">
                      {plan.savings}
                    </div>
                  </div>
                </div>


                {/* CTA Button */}
                <motion.a 
                  href="#contact" 
                  className="block w-full text-center text-white font-bold py-4 rounded-xl shadow-lg text-lg"
                  style={{ background: 'linear-gradient(135deg, rgb(87, 8, 133) 0%, #7c3aed 100%)' }}
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {plan.buttonText}
                </motion.a>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default SimplePricing