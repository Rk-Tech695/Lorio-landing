import React from 'react';

const SocialProof = () => {
  const stats = [
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Proven. Trusted. Growing.
          </h2>
          <p className="text-xl text-gray-600">Join thousands of truck owners who trust Lorio</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className={`${stat.bgColor} p-8 rounded-xl text-center hover:scale-105 transition-transform`}>
              <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                {stat.number}
              </div>
              <div className="text-gray-700 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl inline-block">
            <div className="flex items-center gap-3">
              <img src="https://via.placeholder.com/40x40/ffffff/6366F1?text=IIM" alt="IIM" className="rounded-full" />
              <span className="font-semibold">Incubated by IIM Visakhapatnam</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;