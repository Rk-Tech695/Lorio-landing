import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Send, Loader } from "lucide-react";

const LandingContactForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    company: "",
    city: "",
    fleetSize: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ✅ Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Only allow numeric input for phone
    if (name === "phone" && !/^[0-9\b]*$/.test(value)) return;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

 // ✅ Handle form submission
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

 const dataToSend = {
  name: formData.fullName,
  phone: formData.phone,
  owner_name: formData.company,
  city_or_district : formData.city,
  fleet_size: formData.fleetSize, // ✅ add single quote to force text format
  remarks: formData.message,
};


  try {
    const response = await fetch("https://next-api.telecrm.in/enterprise/67ece5771e01efb76853095e/autoupdatelead", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer a01ca575-c4e4-4f9c-88d3-e461c2f6ab221762336460813:590bfd73-946e-42b0-a952-06e57deaac8d"
      },
      body: JSON.stringify({"fields" : dataToSend}), // ✅ SheetDB expects an array under "data"
    });

    if (response.ok) {
      console.log("Data sent successfully!");

      // Clear form
      setFormData({
        fullName: "",
        phone: "",
        company: "",
        city: "",
        fleetSize: "",
        message: "",
      });

      setIsSubmitting(false);
      
      // Navigate to thank you page
      navigate("/thank-you");
    } else {
      setIsSubmitting(false);
      console.error("Error sending data:", await response.text());
      alert("Failed to send data. Please try again.");
    }
  } catch (error) {
    setIsSubmitting(false);
    console.error("Error:", error);
    alert("Something went wrong. Please try again later.");
  }
};


  return (
    <section id="contact-demo" className="py-5 bg-white relative">
      <div className="container mx-auto flex justify-center">
        <div className="w-full max-w-2xl">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-4xl font-bold mb-1 text-gray-900">
              Get a Demo
            </h2>
            <p className="text-gray-500 text-[12px]">
              Join 1,300+ trucks already using LORIO
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow border border-gray-100 overflow-hidden">
            <div className="p-3">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-gray-700 text-xs mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full rounded-lg border-2 border-gray-200 px-4 py-2 text-sm focus:outline-none focus:border-[#1F6FBF]"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-gray-700 text-xs mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      maxLength="10"
                      className="w-full rounded-lg border-2 border-gray-200 px-4 py-2 text-sm focus:outline-none focus:border-[#1F6FBF]"
                      placeholder="Enter phone number"
                      required
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-gray-700 text-xs mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full rounded-lg border-2 border-gray-200 px-4 py-2 text-sm focus:outline-none focus:border-[#1F6FBF]"
                      placeholder="Enter company name"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-gray-700 text-xs mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full rounded-lg border-2 border-gray-200 px-4 py-2 text-sm focus:outline-none focus:border-[#1F6FBF]"
                      placeholder="Enter your city"
                      required
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block font-semibold text-gray-700 text-xs mb-1">
                      Fleet Size
                    </label>
                     <input
                      type="text"
                      name="fleetSize"
                      value={formData.fleetSize}
                      onChange={handleChange}
                      className="w-full rounded-lg border-2 border-gray-200 px-4 py-2 text-sm focus:outline-none focus:border-[#1F6FBF]"
                      placeholder="Enter your fleet size"
                      required
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block font-semibold text-gray-700 text-xs mb-1">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full rounded-lg border-2 border-gray-200 px-4 py-2 text-sm focus:outline-none focus:border-[#1F6FBF]"
                      rows={4}
                      placeholder="Tell us about your fleet management needs..."
                    />
                  </div>
                </div>

                <div className="text-center mt-6">
                  {isSubmitting ? (
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 btn-lorio  text-white font-semibold px-8 py-3 rounded-full shadow btn-lorio:hover transition-all text-sm cursor-not-allowed"
                    >
                      <Loader className="animate-spin" size={20} />
                      <span>Submitting...</span>
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 btn-lorio  text-white font-semibold px-8 py-3 rounded-full shadow btn-lorio:hover transition-all text-sm"
                    >
                      <Send className="-ml-1" size={20} />
                      <span>Request Free Demo</span>
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingContactForm;
