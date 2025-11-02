import React from "react";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className=" w-full">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-700">
        {/* Logo left */}
        <div className="flex items-center gap-2 min-w-[120px]">
          <img src="/assets/images/logo/login.png" alt="Lorio Logo" className="h-10 w-auto" />
        </div>

        {/* Center links: Quick Links & Legal */}
        <div className="flex flex-col md:flex-row items-center gap-8 flex-1 justify-center">
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-purple-800 mb-1 text-base">Quick Links</h3>
            <ul className="flex flex-row gap-4 md:gap-6">
              <li><a href="#" className="hover:text-purple-700 transition">Home</a></li>
              <li><a href="#keyfeatures" className="hover:text-purple-700 transition">Features</a></li>
              <li><a href="#pricing" className="hover:text-purple-700 transition">Pricing</a></li>
              <li><a href="#contact" className="hover:text-purple-700 transition">Contact</a></li>
            </ul>
          </div>
          {/* Legal */}
          <div>
            <h3 className="font-bold text-purple-800 mb-1 text-base">Legal</h3>
            <ul className="flex flex-row gap-4 md:gap-6">
              <li><Link to="/terms-conditions" className="hover:text-purple-700 transition">Terms & Conditions</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-purple-700 transition">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright right */}
        <div className="flex items-center min-w-[160px] justify-end">
          <span className="text-xs text-gray-500">© Lorio. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
