import React from 'react';

const PricingSection = () => {
  const plans = [
    {
      name: "Lorio Lite",
      suitable: "< 15 Trucks",
      price: "₹1,999/year per truck",
      features: "Limited features, unlimited trips",
      popular: false
    },
    {
      name: "Lorio Basic",
      suitable: "Up to 10 Trucks",
      price: "₹4,999/year",
      features: "All essential tracking features",
      popular: false
    },
    {
      name: "Lorio Essential",
      suitable: "Up to 20 Trucks",
      price: "₹9,999/year",
      features: "Advanced performance & reporting",
      popular: true
    },
    {
      name: "Lorio Standard",
      suitable: "Up to 50 Trucks",
      price: "₹19,999/year",
      features: "Full dashboard & support",
      popular: false
    },
    {
      name: "Enterprise",
      suitable: "50+ Trucks",
      price: "Custom",
      features: "API integrations, dedicated account manager",
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Choose the Right Lorio for You
          </h2>
          <p className="text-xl text-gray-600">Flexible pricing for fleets of all sizes</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {plans.map((plan, index) => (
            <div key={index} className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow relative ${plan.popular ? 'ring-2 ring-lorio-primary' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-lorio-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Popular
                  </span>
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.suitable}</p>
                <div className="text-2xl font-bold text-lorio-primary mb-4">{plan.price}</div>
                <p className="text-gray-600 text-sm">{plan.features}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-lorio-primary hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-xl transition-colors">
            See Detailed Features →
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;