import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const CTAFooter = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us! We will get back to you soon.');
  };

  return (
    <section className="pt-10 pb-5 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #f9fafb 0%, #e5e7eb 50%, #f3e8ff 100%)' }}>
      {/* Decorative Background */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl"></div>

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
              Contact Us
            </span>
            <div className="h-0.5 w-12" style={{ backgroundColor: 'rgb(87, 8, 133)' }}></div>
          </div>
          <h2 className="text-2xl lg:text-5xl font-bold text-gray-800 mb-3">
            Get in Touch with Us
          </h2>
          <p className="text-[12px] md:text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to transform your fleet management? We're here to help you get started.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Side - Truck Image & Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Truck Image Card */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <div className="relative h-56">
                <img
                  src="https://plus.unsplash.com/premium_photo-1661963219843-f1a50a6cfcd3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
                  alt="Truck Fleet Management"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-purple-900/80 via-purple-900/30 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-white text-xl font-bold mb-1">
                    Ready to Transform Your Fleet?
                  </h3>
                  <p className="text-white/90 text-sm">
                    Join 1300+ trucks already digitally managed with Lorio
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Info Cards - Compact */}
            <div className="grid gap-4">
              <motion.div
                className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all"
                whileHover={{ x: 5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgb(87, 8, 133)' }}>
                    <Phone className="text-white" size={20} strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-gray-800 font-bold text-sm mb-0.5">Call Us</h3>
                    <a href="tel:8518021111" className="text-lg font-semibold hover:underline" style={{ color: 'rgb(87, 8, 133)' }}>
                      8518021111
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all"
                whileHover={{ x: 5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgb(87, 8, 133)' }}>
                    <Mail className="text-white" size={20} strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-gray-800 font-bold text-sm mb-0.5">Email Us</h3>
                    <a href="mailto:support@lorio.in" className="text-base hover:underline" style={{ color: 'rgb(87, 8, 133)' }}>
                      support@lorio.in
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all"
                whileHover={{ x: 5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgb(87, 8, 133)' }}>
                    <MapPin className="text-white" size={20} strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-gray-800 font-bold text-sm mb-0.5">Location</h3>
                    <p className="text-gray-600 text-sm">
                     5th Floor, Currency Tower, Raipur, Chhattisgarh, 492001
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-5">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-1.5 text-sm">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all text-sm"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-1.5 text-sm">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all text-sm"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-semibold mb-1.5 text-sm">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all text-sm"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-1.5 text-sm">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="3"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all resize-none text-sm"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="w-full py-3 px-6 rounded-lg font-bold text-white shadow-lg flex items-center justify-center gap-2"
                  style={{ backgroundColor: 'rgb(87, 8, 133)' }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={18} />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTAFooter;