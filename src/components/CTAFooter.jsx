import React, { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const CTAFooter = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const info = [
    { title: "Call Us", text: "+91-8518021111", link: "tel:8518021111", img : <img src="/assets/images/contact/call.gif"/> },
    { title: "Email Us", text: "support@lorio.in", link: "mailto:support@lorio.in", img : <img src="/assets/images/contact/message.gif"/> },
    { title: "Location", text: "5th Floor, Currency Tower, Raipur, Chhattisgarh, 492001", img : <img src="/assets/images/contact/map.gif"/> }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for contacting us! We will get back to you soon.");
  };

  return (
    <section
      className="overflow-hidden relative pt-10 pb-5"
     style={{
  background:
    "linear-gradient(135deg, #f9fafb 0%, #e5e7eb 50%, #e8f2ff 100%)",
}}
    >
      {/* Decorative Background */}
      <div className="absolute left-10 top-20 w-72 h-72 rounded-full blur-3xl bg-blue-200/30"></div>
      <div className="absolute right-10 bottom-20 w-96 h-96 rounded-full blur-3xl bg-blue-300/20"></div>

      <div className="container relative z-10 px-4 mx-auto">
        {/* Header */}
        <div
          className="mb-4 text-center md:mb-12"
          data-aos="zoom-in"
          data-aos-duration="1200"
        >
          <div className="flex gap-3 justify-center items-center mb-4">
            <div className="h-0.5 w-12" style={{ backgroundColor: "#F68B1E" }}></div>
            <span
              className="text-sm font-semibold tracking-wider uppercase"
              style={{ color: "#F68B1E" }}
            >
              Contact Us
            </span>
            <div className="h-0.5 w-12" style={{ backgroundColor: "#F68B1E" }}></div>
          </div>

          <h2 className="mb-3 text-2xl font-bold text-gray-800 lg:text-5xl">
            Get in Touch with Us
          </h2>
          <p className="text-[12px] md:text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to transform your fleet management? We're here to help you get started.
          </p>
        </div>

        <div className="grid gap-8 mx-auto max-w-6xl lg:grid-cols-2">
          {/* Left Side */}
          <div
            className="space-y-6"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            {/* Image Card */}
            <div className="overflow-hidden relative rounded-2xl shadow-xl">
              <div className="relative h-56">
                <img
                  src="https://plus.unsplash.com/premium_photo-1661963219843-f1a50a6cfcd3?auto=format&fit=crop&q=80&w=1170"
                  alt="Truck Fleet"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-tfrom-blue-900/80 via-blue-900/30"></div>

                <div className="absolute right-0 bottom-0 left-0 p-5">
                  <h3 className="mb-1 text-xl font-bold text-white">
                    Ready to Transform Your Fleet?
                  </h3>
                  <p className="text-sm text-white/90">
                    Join 1300+ trucks already digitally managed with Lorio
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Info Cards */}
            <div className="grid gap-4">
              {info.map((Icon, idx) => {

                return (
                  <div
                    key={idx}
                    className="p-4 bg-white rounded-xl border border-gray-200 shadow-sm transition-transform duration-[900ms]ease-[cubic-bezier(.25,.46,.45,.94)] hover:translate-x-2 hover:shadow-md"
                    data-aos="fade-right"
                    data-aos-duration="1200"
                    data-aos-delay={idx * 200}
                  >
                    <div className="flex gap-3 items-center">
                      <div
                        className="flex justify-center items-center w-12 h-12 rounded-lg shrink-0"
                        style={{ backgroundColor: "rgb(87, 8, 133)" }}
                      >
                        {info[idx].img}
                      </div>
                      <div>
                        <h3 className="text-gray-800 font-bold text-sm mb-0.5">{info[idx].title}</h3>
                        {idx < 2 ? (
                          <a href={info[idx].link} className="text-lg font-semibold hover:underline text-lorio" >
                            {info[idx].text}
                          </a>
                        ) : (
                          <p className="text-sm text-gray-600">{info[idx].text}</p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Form with stagger input animation */}
          <div
            data-aos="fade-left"
            data-aos-duration="1200"
            data-aos-delay="200"
            className="transition-transform duration-[1100ms]ease-[cubic-bezier(.25,.46,.45,.94)]"
          >
            <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-xl">
              <h3 className="mb-5 text-xl font-bold text-gray-800">Send us a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* NAME */}
                <div
                  data-aos="fade-left"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  <label className="block text-gray-700 font-semibold mb-1.5 text-sm">
                    Your Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-sm"
                    placeholder="Enter your name"
                  />
                </div>

                {/* EMAIL */}
                <div
                  data-aos="fade-left"
                  data-aos-duration="1200"
                  data-aos-delay="450"
                >
                  <label className="block text-gray-700 font-semibold mb-1.5 text-sm">
                    Email Address<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-sm"
                    placeholder="your@email.com"
                  />
                </div>

                {/* PHONE */}
                <div
                  data-aos="fade-left"
                  data-aos-duration="1200"
                  data-aos-delay="600"
                >
                  <label className="block text-gray-700 font-semibold mb-1.5 text-sm">
                    Phone Number<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-sm"
                    placeholder="Enter your phone number"
                  />
                </div>

                {/* MESSAGE */}
                <div
                  data-aos="fade-left"
                  data-aos-duration="1200"
                  data-aos-delay="750"
                >
                  <label className="block text-gray-700 font-semibold mb-1.5 text-sm">
                    Your Message<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="3"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none resize-none transition-all text-sm"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  data-aos="fade-left"
                  data-aos-duration="1200"
                  data-aos-delay="900"
                  className="flex gap-2 cp justify-center items-center px-6 py-3 w-full font-bold text-white rounded-lg shadow-lg transition-transform duration-[1100ms]ease-[cubic-bezier(.25,.46,.45,.94)] hover:-translate-y-1"
                  style={{ backgroundColor: "#1F6FBF" }}
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTAFooter;
