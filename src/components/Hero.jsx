import React, { useState } from 'react';
import { RocketIcon } from '../components/Icons';
import { LayoutGridIcon, PlayCircle, X } from 'lucide-react';

const Hero = () => {

  const [open, setOpen] = useState(false);

  return (
    <section
      className="flex overflow-hidden relative items-center pt-5 pb-10 min-h-screen"
      style={{
        background: 'linear-gradient(135deg,  0%, #dee2e6 20%, #f3e8ff 100%)'
      }}
    >

      {/* Decorative Background Elements */}
      <div>
        <img src="assets/images/transparent/home-bg.png" alt="logistics-bg" className='absolute bottom-[0] -left-[1%] opacity-[3%]' />
      </div>

      <div className="absolute left-10 top-20 w-72 h-72 rounded-full blur-3xl bg-[#1F6FBF]/10"></div>
      <div className="absolute right-10 bottom-20 w-96 h-96 rounded-full blur-3xl bg-[#1F6FBF]/10"></div>


      <div className="relative z-10 px-4 mx-auto w-full max-w-7xl">
        <div className="grid gap-2 items-center lg:grid-cols-2 md:gap-12">

          {/* Left content */}
          <div className="space-y-8">

            {/* Main Heading */}
            <div
              className="mb-0 space-y-4 md:mb-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h1 className="text-lg font-extrabold leading-tight text-gray-800 md:text-3xl">
                Transform The Way You <br />
                <span
                  className=" text-lorio text-2xl italic drop-shadow-lg md:text-5xl sm:text-6xl lg:text-7xl"

                >
                  Manage Fleet & Business
                </span>
              </h1>
            </div>

            {/* Subheading */}
            <div
              className="mb-2 space-y-3 md:mb-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <p className="text-[14px] md:text-2xl sm:text-3xl font-bold text-lorio"

              >
                Less chaos. Improved efficiency.
              </p>
              <p className="text-[14px] md:text-lg text-gray-600">
                Manage trips, drivers, expenses and maintenance
              </p>
            </div>

            {/* All In One */}
            <div
              className='mb-2 md:mb-6'
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <span className="inline-block font-extrabold text-[24px] sm:text-3xl text-lorio" >
                All in one app
              </span>
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-col gap-4 sm:flex-row sm:items-center"
            // data-aos="fade-up"
            // data-aos-delay="500"
            >
              <a
                href="https://app.lorio.in"
                className="inline-flex whitespace-nowrap items-center justify-center gap-3 text-white font-bold p-2 md:py-5 md:px-8 rounded-xl text-[14px] sm:text-[16px] shadow-xl transition-all hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #1F6FBF 0%, #1E40AF 100%)' }}
                data-aos="fade-up"
                data-aos-delay="100"

              >
                <RocketIcon className="w-6 h-6" />
                Get started
              </a>

              <a
                // href="public/assets/video/Lorio-demo.mp4"
                className="cp inline-flex whitespace-nowrap  items-center justify-center gap-3 font-semibold p-2 md:py-5 md:px-5 rounded-xl  border-2 bg-white text-orange hover:scale-101 transition-all"
                onClick={() => setOpen(true)}
                data-aos="fade-up"
                data-aos-delay="150"
              >
                <PlayCircle className="w-6 h-6" />
                Watch Demo
              </a>



              <a
                href="https://play.google.com/store/search?q=lorio&c=apps&hl=en_IN"
                className="inline-flex items-center whitespace-nowrap justify-center gap-3 font-semibold p-2 md:py-5 md:px-5 rounded-xl text-[14px] sm:text-[16px] border-2 text-lorio bg-white text-lorio hover:scale-101 transition-all"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <LayoutGridIcon className="w-6 h-6 ]" />
                Download App
              </a>
            </div>

            {/* IIM Badge */}
            <div
              className="text-left transition"
              data-aos="fade-up"
              data-aos-delay="650"
            >
              <div className="flex gap-3 items-center transition-all hover:scale-105">
                <div className="flex justify-center items-center w-10 h-10 bg-white rounded-full">
                  <span className="text-sm font-bold text-lorio">IIM</span>
                </div>
                <span className="text-sm font-semibold text-lorio cp hover:underline">Incubated by IIM Visakhapatnam</span>
              </div>
            </div>

          </div>

          {/* Right Side */}
          <div
            className="relative"
            data-aos="fade-left"
            data-aos-delay="250"
          >

            {/* Rotating Ring Container (Non-motion now static) */}
            <div
              className="absolute inset-0 rounded-full border-4 opacity-20"
              style={{ borderColor: 'rgb(87, 8, 133)' }}
            />
            <div
              className="absolute inset-8 rounded-full border-2 opacity-15"
              style={{ borderColor: 'rgb(87, 8, 133)' }}
            />

            {/* Main visual card */}
            <div
              className="overflow-hidden relative rounded-3xl shadow-2xl gradient-lorio"
              data-aos="zoom-in"
            >
              <div className="relative z-10 p-6">
                <img
                  src="/assets/images/lorio/mainbg1.png"
                  alt="Lorio Dashboard Analytics"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>

            {/* Floating social icons */}
            <div
              className="absolute right-4 top-1/2 z-50 space-y-3 -translate-y-1/2"

            >
              {/* LinkedIn */}
              <a
                href="https://share.google/OPUPSbEAra0DzkTYR"
                className="flex justify-center items-center w-12 h-12 bg-white rounded-full border-2 shadow-lg transition-all hover:scale-110 
                "
                style={{ borderColor: 'rgba(31, 111, 191, 0.4)', cursor: 'pointer' }}
                data-aos="fade-up"
                data-aos-delay="700"
              >

                <img
                  src="/assets/images/svg-icon/6.svg"
                  alt="LinkedIn"
                  className="w-5 h-5"
                />
              </a>
              {/* Facebook */}
              <a
                href="https://share.google/Z7JsL9kpzSaX3tnvJ"
                className="flex justify-center items-center w-12 h-12 bg-white rounded-full border-2 shadow-lg transition-all hover:scale-110"
                style={{ borderColor: 'rgba(31, 111, 191, 0.4)' }}
                data-aos="fade-up"
                data-aos-delay="750"
              >

                <img
                  src="/assets/images/svg-icon/2.svg"
                  alt="Facebook"
                  className="w-5 h-5"
                />
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/lorio.__?igsh=ZXY2eGc1Z2w5NXpw"
                className="flex justify-center items-center w-12 h-12 bg-white rounded-full border-2 shadow-lg transition-all hover:scale-110"
                style={{ borderColor: 'rgba(31, 111, 191, 0.4)' }}
                data-aos="fade-up"
                data-aos-delay="800"
              >

                <img
                  src="/assets/images/svg-icon/4.svg"
                  alt="LinkedIn"
                  className="w-5 h-5"
                />
              </a>
            </div>

            {/* Process Timeline */}
            <div
              className="hidden p-6 mt-2 rounded-2xl  shadow-xl backdrop-blur-md md:block bg-white/90 "

              data-aos="fade-up"
              data-aos-delay="1200"
            >
              <div className="grid relative grid-cols-5 gap-2">

                {/* Connecting line */}
                <div className="glow-line absolute top-8 left-0 right-0 h-0.5 opacity-30" />

                {/* Step 1 */}
                <div
                  className="flex relative z-10 flex-col gap-3 items-center transition-all group"
                  data-aos="zoom-in"
                  data-aos-delay="1200"
                >
                  <div
                    className="flex justify-center items-center w-16 h-16 bg-white rounded-xl 
                      border-2 shadow-lg transition-all  hover:-translate-y-1 hover:shadow-orange-500/50 cp"
                    style={{ borderColor: 'rgba(246, 139, 30, 0.35)' }}
                  >
                    <svg
                      className="w-8 h-8 text-[#F68B1E]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>

                  <span className="text-xs font-semibold text-center text-gray-700">
                    Trip Created
                  </span>
                </div>

                {/* Step 2 */}
                <div
                  className="flex relative z-10 flex-col gap-3 items-center transition-all"
                  data-aos="zoom-in"
                  data-aos-delay="1300"
                >
                  <div
                    className="flex justify-center items-center w-16 h-16 bg-white rounded-xl  text-[#F68B1E] 
                      border-2 shadow-lg transition-all  hover:-translate-y-1 hover:shadow-orange-500/50 cp"
                    style={{ borderColor: 'rgba(246, 139, 30, 0.35)' }}>
                    <svg
                      className="w-8 h-8 text-[#F68B1E] "
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                      />
                    </svg>
                  </div>
                  <span className="text-xs font-semibold text-center text-gray-700">Vehicle Loaded</span>
                </div>

                {/* Step 3 */}
                <div
                  className="flex relative z-10 flex-col gap-3 items-center transition-all"
                  data-aos="zoom-in"
                  data-aos-delay="1400"
                >
                  <div className="flex justify-center items-center w-16 h-16 bg-white rounded-xl 
                      border-2 shadow-lg transition-all  hover:-translate-y-1 hover:shadow-orange-500/50 cp"
                    style={{ borderColor: 'rgba(246, 139, 30, 0.35)' }}>
                    <svg
                      className="w-8 h-8 text-[#F68B1E] "
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round" d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-xs font-semibold text-center text-gray-700">Trip Completed</span>
                </div>

                {/* Step 4 */}
                <div
                  className="flex relative z-10 flex-col gap-3 items-center transition-all"
                  data-aos="zoom-in"
                  data-aos-delay="1500"
                >
                  <div className="flex justify-center items-center w-16 h-16 bg-white rounded-xl 
                      border-2 shadow-lg transition-all  hover:-translate-y-1 hover:shadow-orange-500/50 cp"
                    style={{ borderColor: 'rgba(246, 139, 30, 0.35)' }}>
                    <svg
                      className="w-8 h-8 text-[#F68B1E] "
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <span className="text-xs font-semibold text-center text-gray-700">POD Submitted</span>
                </div>

                {/* Step 5 */}
                <div
                  className="flex relative z-10 flex-col gap-3 items-center transition-all"
                  data-aos="zoom-in"
                  data-aos-delay="1600"
                >
                  <div className="flex justify-center items-center w-16 h-16 bg-white rounded-xl border-2 border-blue-300 shadow-lg transition-all group hover:shadow-blue-500/50 hover:-translate-y-1 cp">
                    <svg
                      className="w-8 h-8 text-lorio"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      />
                    </svg>
                  </div>
                  <span className="text-xs font-semibold text-center text-gray-700">Freight Received</span>
                </div>

              </div>
            </div>
            {/* Decorative floating element */}
            {/* <div
              className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full blur-3xl opacity-60"
              style={{ backgroundColor: 'rgba(31, 111, 191, 0.3)' }}
              data-aos="zoom-in"
              data-aos-delay="1700"
              data-aos-duration="5000"
            ></div> */}

          </div>

          {/* Open Video in model */}
          {open && (
            <div className="inset-1 fixed bg-black/70 flex items-center justify-center z-20">
              <div>

                <div className="rounded-xl p-4 w-[90%] max-w-2xl relative">
                  <div>
                    <button >
                      <X onClick={() => setOpen(false)}
                        className="absolute top-3 right-3 cp text-red-500" />
                    </button>

                    <video
                      className="w-full rounded-lg"
                      controls
                      autoPlay
                    >
                      <source src="/assets/video/Lorio-demo.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </div>

          )}

        </div>
      </div>
    </section>
  );
};

export default Hero;
