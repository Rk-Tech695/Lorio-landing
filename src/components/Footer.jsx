import React from "react";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="flex flex-col gap-6 justify-between items-center px-4 py-4 mx-auto max-w-7xl text-sm text-gray-700 md:flex-row">
        {/* Logo left */}
        <div className="flex items-center justify-center gap-2 " style={{width: "200px", height:"20px"}}  >
          <img src="/assets/images/logo/logo-png-02.png" alt="Lorio Logo" className="w-36 h-32" />
        </div>

        {/* Center links: Quick Links & Legal */}
        <div className="flex flex-col flex-1 gap-8 justify-center items-center md:flex-row">
          {/* Quick Links */}
          <div>
            <h3 className="mb-1 text-base font-bold text-lorio">Quick Links</h3>
            <ul className="flex flex-row gap-4 md:gap-6">
              <li><a href="#" className="transition hover:text-[#1F6FBF]">Home</a></li>
              <li><a href="#keyfeatures" className="transition hover:text-[#1F6FBF]">Features</a></li>
              <li><a href="https://rkinnovations.in/" target="_blank" rel="noopener noreferrer" className="transition hover:text-[#1F6FBF]">About</a></li>
              <li><a href="#contact" className="transition hover:text-[#1F6FBF]">Contact</a></li>
            </ul>
          </div>
          {/* Legal */}
          <div>
            <h3 className="mb-1 text-base font-bold text-lorio">Legal</h3>
            <ul className="flex flex-row gap-4 md:gap-6">
              <li><Link to="/terms-conditions" className="transition hover:text-[#1F6FBF]">Terms & Conditions</Link></li>
              <li><Link to="/privacy-policy" className="transition hover:text-[#1F6FBF]">Privacy Policy</Link></li>
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
