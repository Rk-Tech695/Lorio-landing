import React from 'react';
import { RocketIcon } from '../components/Icons';
import { motion } from 'framer-motion'
import { LayoutGridIcon} from 'lucide-react';

const Hero = () => {
  return (
    <section
      className="min-h-screen relative overflow-hidden flex items-center pt-5 pb-10"
      style={{
        background: 'linear-gradient(135deg, #f9fafb 0%, #e5e7eb 50%, #f3e8ff 100%)'
      }}
    >
      {/* Decorative Background Elements - matching key features */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl"></div>

      {/* Additional animated background elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <motion.div
          className="absolute top-40 right-20 w-64 h-64 rounded-full blur-3xl"
          style={{ backgroundColor: 'rgb(87, 8, 133)' }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, 20, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-72 h-72 bg-purple-400 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -20, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-2 md:gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <motion.div
              className="space-y-4 mb-0 md:mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1 className="text-lg md:text-3xl font-extrabold leading-tight text-gray-800">
                Transform The Way You <br/>
                <span
                  className="italic text-2xl md:text-5xl sm:text-6xl lg:text-7xl drop-shadow-lg"
                  style={{ color: 'rgb(87, 8, 133)' }}
                >
                  Manage Fleet & Business
                </span>
              </h1>
            </motion.div>

            {/* Subheading */}
            <motion.div
              className="space-y-3  mb-2 md:mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <p className="text-[14px] md:text-2xl sm:text-3xl font-bold" style={{ color: 'rgb(87, 8, 133)' }}>
                Less chaos. Improved efficiency.
              </p>
              <p className="text-[14px] md:text-lg text-gray-600">
                Manage trips, drivers, expenses and maintenance
              </p>
            </motion.div>

            {/* Highlight: All in one app */}
            <motion.div
              initial={{ opacity: 0 }}
              className='mb-2 md:mb-6'
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <span className="inline-block font-extrabold text-[24px] sm:text-3xl" style={{ color: 'rgb(87, 8, 133)' }}>
                All in one app
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row sm:items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <motion.a
                href="https://app.lorio.in"
                className="inline-flex items-center justify-center gap-3 text-white font-bold p-2 md:py-4 md:px-8 rounded-xl text-[14px] sm:text-lg shadow-xl"
                style={{ background: 'linear-gradient(135deg, rgb(87, 8, 133) 0%, #7c3aed 100%)' }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <RocketIcon className="w-6 h-6" />
                Get started now
              </motion.a>

              <motion.a
                href="https://play.google.com/store/search?q=lorio&c=apps&hl=en_IN"
                className="inline-flex items-center justify-center gap-3 font-semibold  p-2 md:py-4 md:px-8 rounded-xl text-[14px] sm:text-lg border-2 transition-all text-gray-800 bg-white hover:text-white"
                style={{ borderColor: 'rgb(87, 8, 133)' }}
                whileHover={{ scale: 1.05, y: -2, backgroundColor: 'rgb(87, 8, 133)' }}
                whileTap={{ scale: 0.98 }}
              >
                <LayoutGridIcon className="w-6 h-6" style={{ color: 'rgb(87, 8, 133)' }} />
                Get mobile App
              </motion.a>
            </motion.div>


            {/* IIM Badge */}
            <motion.div
              className="text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <motion.div
                className=" "

                whileHover={{ scale: 1.05, y: -3 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                    <span className="font-bold text-sm" style={{ color: 'rgb(87, 8, 133)' }}>IIM</span>
                  </div>
                  <span className="font-semibold text-purple-800 text-sm">Incubated by IIM Visakhapatnam</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {/* Decorative rotating rings in background */}
            <motion.div
              className="absolute inset-0 rounded-full border-4 opacity-20"
              style={{ borderColor: 'rgb(87, 8, 133)' }}
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-8 rounded-full border-2 opacity-15"
              style={{ borderColor: 'rgb(87, 8, 133)' }}
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />

            {/* Main Card with Dashboard */}
            <motion.div
              className="relative rounded-3xl overflow-hidden shadow-2xl"
              style={{ background: 'linear-gradient(135deg, #E9D5FF 0%, #DDD6FE 50%, #E9D5FF 100%)' }}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {/* Decorative corner accents */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-20">
                <div className="absolute top-2 right-2 w-24 h-24 rounded-full" style={{ backgroundColor: 'rgb(87, 8, 133)' }}></div>
              </div>
              <div className="absolute bottom-0 left-0 w-24 h-24 opacity-20">
                <div className="absolute bottom-2 left-2 w-16 h-16 rounded-full" style={{ backgroundColor: 'rgb(87, 8, 133)' }}></div>
              </div>

              <div className="p-6 relative z-10">
                <img
                  src="/assets/images/lorio/mainbg1.png"
                  alt="Lorio Dashboard Analytics"
                  className="w-full h-auto rounded-2xl"
                />
              </div>

              {/* Floating social icons on the right */}
              <motion.div
                className="absolute right-4 top-1/2 -translate-y-1/2 space-y-3 z-50"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <motion.a
                  href="https://share.google/OPUPSbEAra0DzkTYR"
                  className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg border-2 transition-all"
                  style={{ borderColor: 'rgba(87, 8, 133, 0.2)', cursor: 'pointer' }}
                  whileHover={{ scale: 1.15,  }}
                >
                  <svg className="w-5 h-5" style={{ color: 'rgb(87, 8, 133)' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </motion.a>

                <motion.a
                  href="https://share.google/Z7JsL9kpzSaX3tnvJ"
                  className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg border-2 transition-all"
                  style={{ borderColor: 'rgba(87, 8, 133, 0.2)' }}
                  whileHover={{ scale: 1.15,}}
                >
                  <svg className="w-5 " style={{ color: 'rgb(87, 8, 133)' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </motion.a>

                <motion.a
                  href="https://www.instagram.com/lorio.__?igsh=ZXY2eGc1Z2w5NXpw"
                  className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg border-2 transition-all"
                  style={{ borderColor: 'rgba(87, 8, 133, 0.2)' }}
                  whileHover={{ scale: 1.15,  }}
                >
                  <svg className="w-5 " style={{ color: 'rgb(87, 8, 133)' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </motion.a>


              </motion.div>

            </motion.div>

            {/* Process Timeline below - matching reference */}
            <motion.div
              className="hidden md:block mt-2 bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl border-2"
              style={{ borderColor: 'rgba(87, 8, 133, 0.1)' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <div className="grid grid-cols-5 gap-2 relative">
                {/* Connecting line */}
                <div className="absolute top-8 left-0 right-0 h-0.5 opacity-30" style={{ background: 'linear-gradient(to right, rgb(87, 8, 133), rgb(124, 58, 237))' }} />

                {/* Step 1: Trip Created */}
                <motion.div
                  className="flex flex-col items-center gap-3 relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center group hover:shadow-purple-500/50 transition-all border-2" style={{ borderColor: 'rgba(87, 8, 133, 0.1)' }}>
                    <svg className="w-8 h-8" style={{ color: 'rgb(87, 8, 133)' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                
                  <span className="text-gray-700 text-xs font-semibold text-center">Trip Created</span>
                </motion.div>

                {/* Step 2: Vehicle Loaded */}
                <motion.div
                  className="flex flex-col items-center gap-3 relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center group hover:shadow-purple-500/50 transition-all border-2" style={{ borderColor: 'rgba(87, 8, 133, 0.1)' }}>
                    <svg className="w-8 h-8" style={{ color: 'rgb(87, 8, 133)' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                    </svg>
                  </div>
                
                  <span className="text-gray-700 text-xs font-semibold text-center">Vehicle Loaded</span>
                </motion.div>

                {/* Step 3: Trip Completed */}
                <motion.div
                  className="flex flex-col items-center gap-3 relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center group hover:shadow-purple-500/50 transition-all border-2" style={{ borderColor: 'rgba(87, 8, 133, 0.1)' }}>
                    <svg className="w-8 h-8" style={{ color: 'rgb(87, 8, 133)' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
              
                  <span className="text-gray-700 text-xs font-semibold text-center">Trip Completed</span>
                </motion.div>

                {/* Step 4: POD Submitted */}
                <motion.div
                  className="flex flex-col items-center gap-3 relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center group hover:shadow-purple-500/50 transition-all border-2" style={{ borderColor: 'rgba(87, 8, 133, 0.1)' }}>
                    <svg className="w-8 h-8" style={{ color: 'rgb(87, 8, 133)' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
               
                  <span className="text-gray-700 text-xs font-semibold text-center">POD Submitted</span>
                </motion.div>

                {/* Step 5: Freight Received */}
                <motion.div
                  className="flex flex-col items-center gap-3 relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center group hover:shadow-green-500/50 transition-all border-2 border-green-100">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-xs font-semibold text-center">Freight Received</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Decorative floating elements */}
            <motion.div
              className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full blur-2xl"
              style={{ backgroundColor: 'rgba(87, 8, 133, 0.2)' }}
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;