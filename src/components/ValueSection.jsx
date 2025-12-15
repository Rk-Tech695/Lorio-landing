import React from 'react';
import { TrendingUp, DollarSign, BarChart3, Zap } from 'lucide-react';

const   ValueSection = () => {
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
    { number: "2000+", label: "Trucks Digitally Managed", color: "text-[#1F6FBF]" },
    { number: "180+", label: "Fleet Owners Already Onboard", color: "text-[#F68B1E]" },
    { number: "20–30%", label: "Average Cost Reduction", color: "text-[#1F6FBF]" },
    { number: "89%", label: "Positive Feedback", color: "text-[#F68B1E]" }
  ];

  return (
    <section className="overflow-hidden relative pt-10 pb-5"
      style={{ background: 'linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)', 
         backgroundImage: 'url("/assets/images/transparent/bg-pattarn.jpg")' }}
      >
      
      <div className="container relative px-4 mx-auto">
        
      
        {/* Header */}
        <div className="mb-4 text-center md:mb-12"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="0"
        >
          <div className="flex gap-3 justify-center items-center mb-4"
            data-aos="fade-up"
            data-aos-delay="200">
            <div className="h-0.5 w-12" style={{ backgroundColor: '#F68B1E' }}></div>
            <span className="text-sm font-semibold tracking-wider uppercase text-[#F68B1E]"
              >Why Choose Lorio</span>
            <div className="h-0.5 w-12" style={{ backgroundColor: '#F68B1E' }}></div>
          </div>

          <h2 className="mb-4 text-2xl font-bold text-gray-800 lg:text-5xl"
            data-aos="fade-up"
            data-aos-delay="400">
            Because Your Fleet Deserves Smart Management
          </h2>
        </div>

        {/* Benefits Cards */}
        <div className="grid gap-6 mx-auto max-w-6xl md:grid-cols-2">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="p-6 bg-white rounded-xl border border-gray-100 shadow-md group hover:shadow-xl hover:-translate-y-3 cp transition-all duration-[1100ms] ease-[cubic-bezier(.25,.46,.45,.94)]"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay={200 + index * 200}
              >
                <div className="flex gap-4 items-start">
                  <div
                    className="flex justify-center items-center w-14 h-14 rounded-xl shrink-0 transition-transform duration-[1200ms]  group-hover:rotate-[360deg]"
                    style={{ 
                      backgroundColor: '#1F6FBF',
                      
                    }}
                  >
                    <Icon className="text-white" size={24} strokeWidth={2.5} />
                  </div>

                  <div className="flex-1">
                    <h3 className="mb-2 text-sm font-bold text-gray-800 md:text-lg">{benefit.title}</h3>
                    <p className="text-gray-600 text-[12px] md:text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Social Proof */}
        <div className="mt-10"
          data-aos="fade-up"
          data-aos-duration="1100"
          data-aos-delay="1000"
        >
          <div className="mb-3 text-center md:mb-10">
            <h2 className="mb-1 text-xl font-bold md:text-4xl lg:text-5xl md:mb-4"
              data-aos="fade-up"
              data-aos-delay="1200">
              <span className="text-gray-800">Proven. </span>
              <span className="text-gray-800">Trusted. </span>
              <span style={{ color: '#F68B1E' }}>Growing.</span>
            </h2>

            <p className="text-sm text-gray-600 md:text-lg"
              data-aos="fade-up"
              data-aos-delay="1400">
              Join thousands of truck owners who trust Lorio
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8 mx-auto max-w-6xl lg:grid-cols-4">
            {socialProofStats.map((stat, index) => (
              <div
                key={index}
                className="text-center"
                data-aos="zoom-in"
                data-aos-duration="1200"
                data-aos-delay={1600 + index * 200}
              >
                <div className="mb-4">
                  <div className={`text-lg md:text-3xl font-bold mb-2 ${stat.color}`}>
                    {stat.number}
                  </div>
                  <div className="mx-auto w-20 h-1 rounded-full"
                    style={{
                      backgroundColor:
                        stat.color.includes('[#1F6FBF]') ? '#1F6FBF' :
                        stat.color.includes('[#F68B1E]') ? '#F68B1E' :
                        '#1F6FBF'
                    }}></div>
                </div>
                <p className="text-gray-700 font-medium text-[12px] md:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ValueSection;
