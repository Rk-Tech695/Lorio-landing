import React from 'react'
import { Check } from 'lucide-react'

const Keyfeatures = () => {
  const featuresData = [
    {
      id: 1,
      title: "Document Management",
      image: "/public-assets/img/document.png",
      alt: "Document Management",
      bgGradient: "linear-gradient(135deg, #F8FAFC 0%, #E5E7EB 100%)",
      badgeColor: "#6D28D9", // Deep Purple
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
      badgeColor: "#EA580C", // Fresh Orange
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
      badgeColor: "#059669", // Emerald Green
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
      badgeColor: "#1D4ED8", // Royal Blue
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
      badgeColor: "#DC2626", // Crisp Strong Red
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
      badgeColor: "#C2410C", // Dark Burnt Orange
      features: [
        "Driver Performance Report",
        "Vehicle Performance Report",
        "Data-driven Decision Making",
        "Reduce Truck Idle Time",
        "Revenue & Cost Analytics",
      ],
    },
  ];



  return (
    <section id="features" className="overflow-hidden relative pt-10 pb-5"
      style={{
        background: 'linear-gradient(135deg, #f9fafb 0%, #e5e7eb 50%, #f3e8ff 100%)',
        backgroundImage: 'url(/assets/images/transparent/hero-background.png)',
        backgroundSize: 'cover',
        // backgroundPosition: 'center',

      }}

    >

      <div className="absolute left-10 top-20 w-72 h-72 rounded-full blur-3xl bg-purple-200/30"></div>
      <div className="absolute right-10 bottom-20 w-96 h-96 rounded-full blur-3xl bg-purple-300/20"></div>

      <div className="relative z-10 px-4 mx-auto max-w-7xl">

        {/* Header */}
        <div
          className="mb-5 text-center md:mb-10"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <div className="flex gap-3 justify-center items-center mb-4">
            <div className="h-0.5 w-12" style={{ backgroundColor: 'rgb(87, 8, 133)' }}></div>
            <span className="text-sm font-semibold tracking-wider uppercase" style={{ color: 'rgb(87, 8, 133)' }}>
              Features
            </span>
            <div className="h-0.5 w-12" style={{ backgroundColor: 'rgb(87, 8, 133)' }}></div>
          </div>

          <h2 className="mb-3 text-2xl font-bold text-gray-800 lg:text-5xl">Key Features</h2>
          <p className="mx-auto max-w-2xl text-sm text-gray-600 md:text-lg">
            Comprehensive solutions for every aspect of your fleet management needs
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((feature, index) => (
            <div
              key={feature.id}
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay={index * 150}
              className="overflow-hidden relative p-8 rounded-2xl border shadow-lg transition-all hover:shadow-2xl group border-white/50"
              style={{ background: feature.bgGradient }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 rounded-bl-full bg-white/40"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 rounded-tr-full opacity-20" style={{background: feature.badgeColor}}></div>

              <div className="relative z-10">

                {/* Number Badge */}
                <div
                  className="flex justify-center items-center mb-4 w-12 h-12 rounded-xl shadow-md transition-all duration-1000 ease-[cubic-bezier(.25,.46,.45,.94)] group-hover:rotate-[360deg] "
                  style={{ background: feature.badgeColor, backdropFilter: 'blur(6px)' }}


                >
                  <span className="text-lg font-bold text-white">{String(feature.id).padStart(2, '0')}</span>
                </div>

                <h3 className="mb-1 text-lg font-bold text-gray-900 md:text-2xl md:mb-6">{feature.title}</h3>

                <ul className="space-y-3">
                  {feature.features.map((item, idx) => (
                    <li
                      key={idx}
                      data-aos="fade-right"
                      data-aos-delay={idx * 100}
                      data-aos-duration="1000"
                      className="flex gap-3 items-start"
                    >
                      <div className="shrink-0 mt-0.5">
                        <div className="flex justify-center items-center" >
                          {/* <Check className="text-white" size={14} strokeWidth={3} /> */}
                          <img src="/assets/images/gif/check.gif" alt="check" width="20px" />

                        </div>
                      </div>

                      <span className="text-gray-700 text-sm leading-relaxed text-[12px] md:text-sm">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="absolute right-0 bottom-0 left-0 h-1"
                style={{ backgroundColor: feature.badgeColor }}
                data-aos="zoom-in"
                data-aos-duration="1200"
                data-aos-delay={index * 180 + 200}
              ></div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Keyfeatures
