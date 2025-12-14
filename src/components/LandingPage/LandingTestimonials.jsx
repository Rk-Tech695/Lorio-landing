import React, { useRef, useEffect, useState, useCallback } from "react";
import Slider from "react-slick";

const testimonials = [
  {
    quote: "Since using LORIO, I finally know which of my trucks make profit — and which eat it. Game changer!",
    author: "Sumit Singh",
    title: "Fleet Owner",
    location: "Raigada, Odisha",
    initials: "SS",
    rating: 5,
    gradient: "linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)",
    iconColor: "#8B5CF6"
  },
  {
    quote: "Best investment for my fleet. The automated alerts saved me from missing insurance renewals twice!",
    author: "Rajesh Kumar",
    title: "Transport Owner",
    location: "Delhi",
    initials: "RK",
    rating: 5,
    gradient: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
    iconColor: "#10B981"
  },
  {
    quote: "Simple, powerful, and actually made for Indian conditions. My entire fleet is now on LORIO.",
    author: "Amit Patel",
    title: "Logistics Head",
    location: "Mumbai",
    initials: "AP",
    rating: 5,
    gradient: "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)",
    iconColor: "#3B82F6"
  },
  {
    quote: "The document management feature alone saved us countless hours. LORIO is a must-have for fleet owners.",
    author: "Vikram Reddy",
    title: "Fleet Manager",
    location: "Hyderabad",
    initials: "VR",
    rating: 5,
    gradient: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
    iconColor: "#F59E0B"
  },
  {
    quote: "Real-time trip tracking and maintenance alerts have reduced our downtime by 30%. Highly recommended!",
    author: "Harpreet Singh",
    title: "Transport Business",
    location: "Ludhiana",
    initials: "HS",
    rating: 5,
    gradient: "linear-gradient(135deg, #EF4444 0%, #DC2626 100%)",
    iconColor: "#EF4444"
  }
];

const LandingTestimonials = () => {
  const sliderRef = useRef(null);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [centerMode, setCenterMode] = useState(false);

  const debounce = (fn, delay = 120) => {
    let t;
    return (...args) => {
      clearTimeout(t);
      t = setTimeout(() => fn(...args), delay);
    };
  };

  const applyWidthLogic = useCallback((w) => {
    if (w >= 1024) {
      setSlidesToShow(3);
      setCenterMode(false);
    } else if (w >= 768) {
      setSlidesToShow(2);
      setCenterMode(false);
    } else {
      setSlidesToShow(1);
      setCenterMode(true);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    applyWidthLogic(window.innerWidth);
    const onResize = debounce(() => applyWidthLogic(window.innerWidth), 120);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [applyWidthLogic]);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    arrows: false,
    swipeToSlide: true,
    touchThreshold: 10,
    centerMode,
    centerPadding: "0px"
  };

  return (
    <section
      className="overflow-hidden relative pt-10 pb-5"
      style={{ background: "linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)" }}
    >
      <div className="container relative z-10 px-4 mx-auto max-w-7xl">

        {/* HEADER AOS STAGGER */}
        <div className="mb-4 text-center md:mb-12"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="0"
        >
          <div className="flex gap-3 justify-center items-center mb-4"
            data-aos="fade-up"
            data-aos-delay="200">
            <div className="h-0.5 w-12" style={{ backgroundColor: "rgb(87, 8, 133)" }}></div>
            <span className="font-semibold uppercase tracking-wider text-[11px]" style={{ color: "rgb(87, 8, 133)" }}>
               <img src="assets/images/gif/start.gif" alt="star" />
               Client Testimonials 
               <img src="assets/images/gif/start.gif" alt="star" />
            </span>
            <div className="h-0.5 w-12" style={{ backgroundColor: "rgb(87, 8, 133)" }}></div>
          </div>

          <h2 className="mb-1 text-2xl font-bold text-gray-800 md:text-5xl"
            data-aos="fade-up"
            data-aos-delay="400">
            Loved by Fleet Owners <br />
            <span style={{ color: "rgb(87, 8, 133)" }}>Across India</span>
          </h2>

          <p className="text-gray-600 text-[12px] md:text-lg max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="600">
            Join 500+ successful truck owners who have transformed their business with Lorio
          </p>
        </div>

        {/* SLIDER AOS */}
        <div className="overflow-visible w-full testimonials-slider-container"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="800"
        >
          <div className="max-w-[95%] mx-auto">
            <Slider ref={sliderRef} {...sliderSettings}>
              {testimonials.map((t, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={1000 + index * 200}
                  data-aos-duration="1200"
                >
                  <div className="relative bg-white rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-xl transition-all duration-[1000ms] ease-[cubic-bezier(.25,.46,.45,.94)] h-full flex flex-col">
                    <div className="flex justify-between items-center">
                      <div className="flex justify-center items-center w-10 h-10 rounded-lg" style={{ background: t.iconColor }}>
                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>
                      <div className="flex gap-1 mb-3">
                        {[...Array(t.rating)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        ))}
                      </div>
                    </div>

                    <blockquote className="text-gray-700 text-[12px] leading-relaxed mb-4 grow">
                      "{t.quote}"
                    </blockquote>

                    <div className="flex gap-3 items-center pt-3 border-t border-gray-200">
                      <div className="flex justify-center items-center w-10 h-10 text-sm font-bold text-white rounded-full shrink-0"
                        style={{ background: t.iconColor }}>
                        {t.initials}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-800">{t.author}</h4>
                        <p className="text-xs text-gray-600">{t.title}</p>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LandingTestimonials;
