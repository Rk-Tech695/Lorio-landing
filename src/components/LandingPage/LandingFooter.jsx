import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

const LandingFooter = () => {
  return (
  <footer id="footer" className="w-full fleet-bg-gradient text-white py-8 mt-0">
      <div className="max-w-5xl mx-auto flex flex-col items-center px-4">
        <img
          width={100}
          src="/assets/images/logo/logo-png-flet.png"
          alt="Lorio"
          className="mb-4"
        />
        <div className="flex justify-center gap-6 mb-4">
          {/* Social icons from Hero section */}
          <a
            href="https://share.google/OPUPSbEAra0DzkTYR"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex items-center justify-center w-10 h-10 border-[#1F6FBF] bg-white rounded-full shadow-lg border-2 transition-all hover:scale-110"
          >
            <svg className="w-5 h-5 text-lorio"  fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a
            href="https://share.google/Z7JsL9kpzSaX3tnvJ"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="flex items-center justify-center w-10 h-10 bg-white border-[#1F6FBF] rounded-full shadow-lg border-2 transition-all hover:scale-110"
          >
            <svg className="w-5 h-5 text-lorio"  fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/lorio.__?igsh=ZXY2eGc1Z2w5NXpw"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex items-center justify-center w-10 h-10 border-[#1F6FBF] bg-white rounded-full shadow-lg border-2 transition-all hover:scale-110"
          >
            <svg className="w-5 h-5 text-lorio"  fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
        </div>

        {/* Contact Information */}
          <div className="flex items-center gap-2 mb-4">
            <MapPin size={18} className="text-white/80" />
            <span  className='text-[12px]'>5th Floor, Currency Tower, Telibandha, Raipur(C.G.)</span>
          </div>
        <div className="flex flex-wrap justify-center items-center gap-6 text-white/90 text-sm mb-4">
          <div className="flex items-center gap-2">
            <Phone size={18} className="text-white/80" />
            <span className='text-[12px]'>+91-8518041111</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={18} className="text-white/80" />
            <span className='text-[12px]'>support@lorio.in</span>
          </div>
        </div>

        <div className="w-full border-t border-white/20 pt-4 flex flex-col items-center">
          <div className="text-xs text-white/80">
            <span>&copy; </span>
            <strong className="px-1 font-semibold">Lorio</strong>
            <span>All Rights Reserved</span>
          </div>
          <div className="flex gap-2 mt-2 text-white/70 text-xs">
            <Link
              to={"/privacy-policy"}
              className="hover:text-white underline underline-offset-2 transition"
            >
              Privacy Policy
            </Link>
            <span>|</span>
            <Link
              to={"/terms-conditions"}
              className="hover:text-white underline underline-offset-2 transition"
            >
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default LandingFooter