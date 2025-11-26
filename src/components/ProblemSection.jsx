import React from 'react';
import {Users, DollarSign, TrendingUp } from 'lucide-react';

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
        'Effortlessly manage fleet growth without a proportional increase in administrative burden',
        'Unbox the potential for sustainable expansion',
        'Integrate new routes, vehicles, and drivers with minimal setup time and maximum control'
      ],
      icon: TrendingUp,
      iconBg: 'bg-linear-to-br from-purple-600 to-purple-900',
      gradientFrom: 'from-indigo-50',
      gradientTo: 'to-indigo-100'
    }
  ];

  return (
    <section className="overflow-hidden relative pt-5 pb-10" 
    style={{ 
      // background: 'linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)', 
    }}
    
    >

     <div className='object-conatin  absolute -bottom-[70%] opacity-[4%]'>
      <img src="/assets/images/truck-2.png" alt=""  />
     </div>
      
      <div className="absolute left-10 top-20 w-72 h-72 rounded-full blur-3xl bg-purple-200/30"></div>
      <div className="absolute right-10 bottom-20 w-96 h-96 rounded-full blur-3xl bg-purple-300/20"></div>
      
      <div className="container relative z-10 px-4 mx-auto max-w-7xl">

        {/* Header */}
        <div
          className="mb-4 text-center md:mb-16"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <div className="flex gap-3 justify-center items-center mb-4">
            <div className="h-0.5 w-12" style={{ backgroundColor: 'rgb(87, 8, 133)' }}></div>
            <span className="text-sm font-semibold tracking-wider uppercase" style={{ color: 'rgb(87, 8, 133)' }}>
              Our Service
            </span>
            <svg className="w-5 h-5" style={{ color: 'rgb(87, 8, 133)' }} fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 12l-18 12v-24z"/>
            </svg>
          </div>

          <h2 className="mb-2 text-2xl font-bold md:text-5xl">
            <span className="text-gray-800">Providing Efficient</span>
            <br />
            <span className="text-gray-800">Business Solutions For <span style={{ color: 'rgb(87, 8, 133)' }}>LOGISTICS</span></span>
          </h2>
        </div>

        {/* Service Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`bg-linear-to-br ${service.gradientFrom} ${service.gradientTo} rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-1000 ease-[cubic-bezier(.25,.46,.45,.94)] hover:-translate-y-2 group relative border border-purple-200`}
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay={index * 200}
              >
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl bg-white/30"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full blur-2xl bg-purple-300/20"></div>

                <div className="relative z-10 p-8">

                  <h3 className="mb-6 font-bold text-gray-800 text-md md:text-2xl">
                    {service.title}
                  </h3>

                  <ul className="space-y-4">
                    {service.points.map((point, pointIndex) => (
                      <li
                        key={pointIndex}
                        className="flex gap-3 items-start"
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay={index * 300 + pointIndex * 200}
                      >
                        <div className="mt-1 shrink-0">
                          {/* <svg className="w-6 h-6" style={{ color: 'rgb(87, 8, 133)' }} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg> */}
                          <img src="/assets/images/gif/check.gif" alt="check" width="20px" />
                        </div>

                        <span className="text-gray-700 leading-relaxed text-[12px] md:text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
