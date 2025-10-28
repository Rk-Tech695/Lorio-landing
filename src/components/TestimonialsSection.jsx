import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Earlier I used to manage on WhatsApp and notebooks. Now with Lorio, I track all 22 trucks easily and know my real profit.",
      author: "Sumit Singh",
      title: "Fleet Owner, Madhya Pradesh",
      avatar: "https://via.placeholder.com/80x80/6366F1/white?text=SS"
    },
    {
      quote: "My drivers are more disciplined now — payments and reports are all on time.",
      author: "Ravinder Yadav",
      title: "Transporter, Haryana",
      avatar: "https://via.placeholder.com/80x80/22C55E/white?text=RY"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            What Fleet Owners Say
          </h2>
          <p className="text-xl text-gray-600">Real feedback from real truck owners</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full flex-shrink-0"
                />
                <div className="flex-1">
                  <blockquote className="text-gray-700 text-lg mb-4 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-bold text-gray-800">{testimonial.author}</div>
                    <div className="text-gray-600">{testimonial.title}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-lorio-primary/10 border-l-4 border-lorio-primary p-6 rounded-lg max-w-2xl mx-auto">
            <p className="text-gray-700 font-medium">
              Join hundreds of satisfied fleet owners who have transformed their business with Lorio
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;