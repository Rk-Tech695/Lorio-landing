import React, { useRef, useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";

/**
 * Dynamic TestimonialsSection
 * - measures window width and sets slidesToShow accordingly
 * - forces Slick to recalc on width changes
 * - uses debounce for resize
 */

const TestimonialsSection = () => {
  const sliderRef = useRef(null);

  // slidesToShow state controlled by measured width
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [centerMode, setCenterMode] = useState(false);

  // Debounce helper
  const debounce = (fn, delay = 120) => {
    let t;
    return (...args) => {
      clearTimeout(t);
      t = setTimeout(() => fn(...args), delay);
    };
  };

  // function to determine slidesToShow & centerMode from width
  const applyWidthLogic = useCallback((w) => {
    // you can tweak breakpoints here
    if (w >= 1024) {
      setSlidesToShow(3);
      setCenterMode(false);
    } else if (w >= 768) {
      setSlidesToShow(2);
      setCenterMode(false);
    } else {
      // mobile / small screens
      setSlidesToShow(1);
      setCenterMode(true); // help centering single slide
    }
  }, []);

  // set initial value and add resize listener
  useEffect(() => {
    // guard for SSR
    if (typeof window === "undefined") return;

    // initial
    applyWidthLogic(window.innerWidth);

    // on resize (debounced)
    const onResize = debounce(() => {
      applyWidthLogic(window.innerWidth);

      // force slick to recalc width after layout change
      // small timeout ensures DOM updated
      setTimeout(() => {
        window.dispatchEvent(new Event("resize"));
        if (sliderRef.current && sliderRef.current.innerSlider) {
          try {
            // slick internal method exists on some versions
            sliderRef.current.innerSlider.onWindowResized();
          } catch (e) {
            // fallback: go to current slide to trigger re-render
            sliderRef.current.slickGoTo(sliderRef.current.innerSlider.state.currentSlide || 0);
          }
        }
      }, 80);
    }, 120);

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [applyWidthLogic]);

  // also trigger one recalculation after mount (some devices need it)
  useEffect(() => {
    if (typeof window === "undefined") return;
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
      if (sliderRef.current && sliderRef.current.innerSlider) {
        try {
          sliderRef.current.innerSlider.onWindowResized();
        } catch (_) {
          sliderRef.current.slickGoTo(sliderRef.current.innerSlider.state.currentSlide || 0);
        }
      }
    }, 450);
  }, []);

  const testimonials = [
    {
      quote:
        "Earlier I used to manage on WhatsApp and notebooks. Now with Lorio, I track all 22 trucks easily and know my real profit.",
      author: "Sumit Singh",
      title: "Fleet Owner",
      location: "Madhya Pradesh",
      initials: "SS",
      rating: 5,
    },
    {
      quote:
        "My drivers are more disciplined now — payments and reports are all on time. The app has made everything so much easier.",
      author: "Ravinder Yadav",
      title: "Transporter",
      location: "Haryana",
      initials: "RY",
      rating: 5,
    },
    {
      quote:
        "Managing 15 trucks was becoming impossible. Lorio simplified everything - from trip tracking to expense management.",
      author: "Prakash Kumar",
      title: "Fleet Owner",
      location: "Punjab",
      initials: "PK",
      rating: 5,
    },
    {
      quote:
        "The real-time tracking and profit analysis have helped me increase my revenue by 35% in just 6 months.",
      author: "Amit Sharma",
      title: "Transport Business Owner",
      location: "Rajasthan",
      initials: "AS",
      rating: 5,
    },
    {
      quote:
        "No more manual record keeping! Lorio's digital system has saved me countless hours and improved my cash flow.",
      author: "Vikas Patel",
      title: "Fleet Manager",
      location: "Gujarat",
      initials: "VP",
      rating: 5,
    },
    {
      quote:
        "Maintenance alerts have reduced my breakdown costs by 60%. The app pays for itself within weeks!",
      author: "Rahul Verma",
      title: "Transport Contractor",
      location: "Uttar Pradesh",
      initials: "RV",
      rating: 5,
    },
  ];

  // Build slider settings using current slidesToShow and centerMode
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    arrows: false,
    swipeToSlide: true,
    touchThreshold: 10,
    centerMode: centerMode,
    centerPadding: centerMode ? "0px" : "0px",
    // do not rely on responsive here - we control via state
  };

  return (
    <section
      className="pt-10 pb-5 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)" }}
    >
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#6366F1 1px, transparent 1px), linear-gradient(90deg, #6366F1 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <motion.div
          className="text-center mb-4 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className="flex items-center justify-center gap-3 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="h-0.5 w-12" style={{ backgroundColor: "rgb(87, 8, 133)" }}></div>
            <span className="font-semibold uppercase tracking-wider text-sm" style={{ color: "rgb(87, 8, 133)" }}>
              ⭐ Client Testimonials ⭐
            </span>
            <div className="h-0.5 w-12" style={{ backgroundColor: "rgb(87, 8, 133)" }}></div>
          </motion.div>

          <motion.h2
            className="text-2xl md:text-5xl font-bold mb-4 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Loved by Fleet Owners
            <br />
            <span style={{ color: "rgb(87, 8, 133)" }}>Across India</span>
          </motion.h2>

          <motion.p
            className="text-gray-600 text-[12px] md:text-lg max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Join 500+ successful truck owners who have transformed their business with Lorio
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="testimonials-slider-container w-full overflow-visible"
        >
          <div className="max-w-[95%] mx-auto">
            <Slider ref={sliderRef} {...sliderSettings}>
              {testimonials.map((t, index) => (
                <div key={index} className="px-3 py-4">
                  <motion.div className="relative group h-full" whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                    <div className="relative bg-white rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                      <div className="mb-4">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "rgb(87, 8, 133)" }}>
                          <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                          </svg>
                        </div>
                      </div>

                      <div className="flex gap-1 mb-3">
                        {[...Array(t.rating)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        ))}
                      </div>

                      <blockquote className="text-gray-700 text-sm leading-relaxed mb-4 grow">"{t.quote}"</blockquote>

                      <div className="flex items-center gap-3 pt-3 border-t border-gray-200">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0" style={{ backgroundColor: "rgb(87, 8, 133)" }}>
                          {t.initials}
                        </div>
                        <div>
                          <h4 className="text-gray-800 font-bold text-sm">{t.author}</h4>
                          <p className="text-gray-600 text-xs">{t.title}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </Slider>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .testimonials-slider-container .slick-track {
          display: flex !important;
          align-items: stretch;
        }

        .testimonials-slider-container .slick-slide {
          display: flex !important;
          justify-content: center;
          height: auto !important;
        }

        .testimonials-slider-container .slick-slide > div {
          width: 100% !important;
          display: flex !important;
        }

        @media (max-width: 768px) {
          .testimonials-slider-container .slick-slide {
            padding: 0 8px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
