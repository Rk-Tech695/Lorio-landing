import React from "react";
import { Send } from "lucide-react";

const LandingContactForm = () => (
  <section id="contact-demo" className="py-5 bg-white">
    <div className="container mx-auto flex justify-center">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-4xl font-bold mb-1 text-gray-900">Get a Demo</h2>
          <p className="text-gray-500 text-[12px]">Join 1,300+ trucks already using LORIO</p>
        </div>
        <div className="bg-white rounded-2xl shadow border border-gray-100 overflow-hidden">
          <div className="p-3">
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-gray-700 text-xs mb-1">Full Name *</label>
                  <input type="text" className="w-full rounded-lg border-2 border-gray-200 px-4 py-2 text-sm focus:outline-none focus:border-indigo-500" placeholder="Enter your name" required />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 text-xs mb-1">Phone Number *</label>
                  <input type="tel" className="w-full rounded-lg border-2 border-gray-200 px-4 py-2 text-sm focus:outline-none focus:border-indigo-500" placeholder="Enter phone number" required />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 text-xs mb-1">Company Name</label>
                  <input type="text" className="w-full rounded-lg border-2 border-gray-200 px-4 py-2 text-sm focus:outline-none focus:border-indigo-500" placeholder="Enter company name" />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 text-xs mb-1">City *</label>
                  <input type="text" className="w-full rounded-lg border-2 border-gray-200 px-4 py-2 text-sm focus:outline-none focus:border-indigo-500" placeholder="Enter your city" required />
                </div>
                <div className="md:col-span-2">
                  <label className="block font-semibold text-gray-700 text-xs mb-1">Fleet Size</label>
                  <select className="w-full rounded-lg border-2 border-gray-200 px-4 py-2 text-sm focus:outline-none focus:border-indigo-500">
                    <option value="">Select fleet size</option>
                    <option value="1-5">1-5 trucks</option>
                    <option value="6-15">6-15 trucks</option>
                    <option value="16-50">16-50 trucks</option>
                    <option value="50+">50+ trucks</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block font-semibold text-gray-700 text-xs mb-1">Message</label>
                  <textarea className="w-full rounded-lg border-2 border-gray-200 px-4 py-2 text-sm focus:outline-none focus:border-indigo-500" rows={4} placeholder="Tell us about your fleet management needs..." />
                </div>
              </div>
              <div className="text-center mt-6">
                <button type="submit" className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold px-8 py-3 rounded-full shadow hover:from-indigo-600 hover:to-purple-600 transition-all text-sm">
                  <Send className="-ml-1" size={20} />
                  <span>Request Free Demo</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default LandingContactForm;
