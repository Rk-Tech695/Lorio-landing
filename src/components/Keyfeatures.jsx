import React from 'react'
import { Check } from 'lucide-react'
import { motion } from 'framer-motion'

const Keyfeatures = () => {
  // Features Data Object
  const featuresData = [
    {
      id: 1,
      title: "Document Management",
      image: "/public-assets/img/document.png",
      alt: "Document Management",
      bgGradient: "linear-gradient(135deg, #F8FAFC 0%, #E5E7EB 100%)",
      features: [
        "Verification from Vahan",
        "Cloud Storage Solutions",
        "Automated Reminders",
        "Easy Document Sharing",
      ],
    },
    {
      id: 2,
      title: "Driver Management",
      image: "/public-assets/img/driver.png",
      alt: "Driver Management",
      bgGradient: "linear-gradient(135deg, #FEF7ED 0%, #FFEDD5 100%)",
      features: [
        "License & Aadhar Verification",
        "Easy Salary Calculation",
        "Performance Tracking",
        "Complete Driver Database",
      ],
    },
    {
      id: 3,
      title: "Trip Management",
      image: "/public-assets/img/trip.png",
      alt: "Trip Management",
      bgGradient: "linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%)",
      features: [
        "Real-time Fleet Status",
        "Smart Communication via WhatsApp",
        "Comprehensive Trip Documentation",
        "Expense Tracking",
      ],
    },
    {
      id: 4,
      title: "Tyre Management",
      image: "/public-assets/img/tyre.png",
      alt: "Tyre Management",
      bgGradient: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)",
      features: [
        "Vehicle-wise Tyre Management",
        "Tyre Performance Report",
        "Tyre Stock Management",
        "Alignment Records & Reminders",
      ],
    },
    {
      id: 5,
      title: "Maintenance Management System",
      image: "/public-assets/img/maintenance.png",
      alt: "Maintenance Management",
      bgGradient: "linear-gradient(135deg, #FEE2E2 0%, #FECACA 100%)",
      features: [
        "Preventive Maintenance",
        "Breakdown Management",
        "Expense Records",
        "Smart Notifications",
      ],
    },
    {
      id: 6,
      title: "Business Insight",
      image: "/public-assets/img/insight.png",
      alt: "Business Insight",
      bgGradient: "linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%)",
      features: [
        "Driver Performance Report",
        "Vehicle Performance Report",
        "Data-driven Decision Making",
        "Reduce truck idle time",
        "Revenue & Cost Analytics",
      ],
    },
  ]

  return (
    <section id="features" className="pt-10 pb-5 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #f9fafb 0%, #e5e7eb 50%, #f3e8ff 100%)' }}>
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-5 md:mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-0.5 w-12" style={{ backgroundColor: 'rgb(87, 8, 133)' }}></div>
            <span className="font-semibold uppercase tracking-wider text-sm" style={{ color: 'rgb(87, 8, 133)' }}>
              Features
            </span>
            <div className="h-0.5 w-12" style={{ backgroundColor: 'rgb(87, 8, 133)' }}></div>
          </div>
          <h2 className="text-2xl lg:text-5xl font-bold text-gray-800 mb-3">Key Features</h2>
          <p className="text-gray-600 text-sm md:text-lg max-w-2xl mx-auto">
            Comprehensive solutions for every aspect of your fleet management needs
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              style={{ background: feature.bgGradient }}
              className="rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all relative overflow-hidden group border border-white/50"
            >
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/40 rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 opacity-20 rounded-tr-full" style={{ backgroundColor: 'rgb(87, 8, 133)' }}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon/Number Badge */}
                <motion.div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-md"
                  style={{ backgroundColor: 'rgb(87, 8, 133)' }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-white font-bold text-lg">{String(feature.id).padStart(2, '0')}</span>
                </motion.div>

                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-1 md:mb-6">{feature.title}</h3>

                {/* Feature list with animated checkmarks */}
                <ul className="space-y-3">
                  {feature.features.map((item, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-start gap-3 "
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 + idx * 0.05 }}
                    >
                      <div className="shrink-0 mt-0.5">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgb(87, 8, 133)' }}>
                          <Check className="text-white" size={14} strokeWidth={3} />
                        </div>
                      </div>
                      <span className="text-gray-700 text-sm leading-relaxed text-[12px] md:text-sm">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Bottom accent bar */}
              <motion.div 
                className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-purple-600 to-purple-800"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
              ></motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Keyfeatures