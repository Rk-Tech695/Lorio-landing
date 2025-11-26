import React, { useRef, useEffect, useState, useCallback } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { FolderOpen, Users, Truck, Target, Wrench } from "lucide-react";

const lorioFeatures = [
  {
    id: 1,
    title: "Document Management",
    icon: FolderOpen,
    iconSize: 20,
    gradient: "linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)",
    bgGradient: "linear-gradient(135deg, #FFFFFF 0%, #F9FAFB 100%)",
    color: "#8B5CF6",
    description:
      "Store, organize, and access all vehicle documents digitally in one secure place. Share documents instantly with one click.",
    badges: ["Digital Storage", "Instant Sharing"],
    badgeStyle: { background: "#F3F4F6", color: "#6B7280" },
  },
  {
    id: 2,
    title: "Driver Management",
    icon: Users,
    iconSize: 20,
    gradient: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
    bgGradient: "linear-gradient(135deg, #FFFFFF 0%, #FEF3C7 100%)",
    color: "#F59E0B",
    description:
      "Track driver performance, attendance, and maintain complete driver records effortlessly with real-time updates.",
    badges: ["Performance", "Attendance"],
    badgeStyle: { background: "#FEF3C7", color: "#92400E" },
  },
  {
    id: 3,
    title: "Trip Management",
    icon: Truck,
    iconSize: 20,
    gradient: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
    bgGradient: "linear-gradient(135deg, #FFFFFF 0%, #D1FAE5 100%)",
    color: "#10B981",
    description:
      "Plan, assign, and track every trip— from dispatch to delivery. Track every expense, trip earning, and trip-wise performance.",
    badges: ["Real-time", "Profitability"],
    badgeStyle: { background: "#D1FAE5", color: "#065F46" },
  },
  {
    id: 4,
    title: "Tyre Management",
    icon: Target,
    iconSize:20,
    gradient: "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)",
    bgGradient: "linear-gradient(135deg, #FFFFFF 0%, #DBEAFE 100%)",
    color: "#3B82F6",
    description:
      "Track tyre health, replacement schedules, and extend tyre life with smart monitoring and alerts.",
    badges: ["Health Tracking", "Alerts"],
    badgeStyle: { background: "#DBEAFE", color: "#1E40AF" },
  },
  {
    id: 5,
    title: "Maintenance Management",
    icon: Wrench,
    iconSize: 20,
    gradient: "linear-gradient(135deg, #EF4444 0%, #DC2626 100%)",
    bgGradient: "linear-gradient(135deg, #FFFFFF 0%, #FEE2E2 100%)",
    color: "#EF4444",
    description:
      "Schedule services, track repairs, and never miss important maintenance deadlines with automated reminders.",
    badges: ["Scheduling", "Reminders"],
    badgeStyle: { background: "#FEE2E2", color: "#991B1B" },
  },
];

const LandingLorioFeatures = () => {
  const sliderRef = useRef(null);

  // responsive slider state
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [centerMode, setCenterMode] = useState(false);

  // debounce function
  const debounce = (fn, delay = 120) => {
    let t;
    return (...args) => {
      clearTimeout(t);
      t = setTimeout(() => fn(...args), delay);
    };
  };

  // determine slides based on width
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

    const onResize = debounce(() => {
      applyWidthLogic(window.innerWidth);

      // force slick re-render
      setTimeout(() => {
        if (sliderRef.current && sliderRef.current.innerSlider) {
          try {
            sliderRef.current.innerSlider.onWindowResized();
          } catch (e) {
            sliderRef.current.slickGoTo(
              sliderRef.current.innerSlider.state.currentSlide || 0
            );
          }
        }
      }, 100);
    }, 120);

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [applyWidthLogic]);

  // second recalculation after mount
  useEffect(() => {
    setTimeout(() => {
      if (sliderRef.current && sliderRef.current.innerSlider) {
        try {
          sliderRef.current.innerSlider.onWindowResized();
        } catch (e) {
          sliderRef.current.slickGoTo(
            sliderRef.current.innerSlider.state.currentSlide || 0
          );
        }
      }
    }, 400);
  }, []);

  const sliderSettings = {
    dots: true,
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
    centerPadding: centerMode ? "0px" : "0px",
  };

  return (
    <section
      className=" pt-4 py-2 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #f9fafb 0%, #ffffff 100%)",
      }}
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
          className="text-center mb-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-2xl md:text-5xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Powerful <span style={{ color: "rgb(87, 8, 133)" }}>Features</span>
          </motion.h2>
          <motion.p
            className="text-gray-600 text-[12px] md:text-lg max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            LORIO simplifies fleet management — manage drivers, trips, tyres, and
            maintenance to save costs and boost efficiency.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="features-slider-container w-full overflow-visible"
        >
          <div className="max-w-[95%] mx-auto">
            <Slider ref={sliderRef} {...sliderSettings}>
              {lorioFeatures.map((feature) => {
                const IconComponent = feature.icon;
                return (
                  <div key={feature.id} className="px-0 py-4">
                    <motion.div
                      className="relative group h-full"
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div
                        className="rounded-2xl shadow-md overflow-hidden border border-gray-100 h-full flex flex-col"
                        style={{ background: feature.bgGradient }}
                      >
                        <div
                          className="p-3 text-center relative"
                          style={{ background: feature.gradient }}
                        >
                          <div
                            className="absolute inset-0 opacity-10 pointer-events-none"
                            style={{
                              background:
                                "radial-gradient(circle at top right, rgba(255,255,255,0.5), transparent)",
                            }}
                          ></div>
                          <div className="relative flex flex-col items-center">
                            <div
                              className="bg-white rounded-xl flex items-center justify-center mb-3"
                              style={{
                                width: 30,
                                height: 30,
                                boxShadow: `0 10px 30px ${feature.color}4D`,
                              }}
                            >
                              <IconComponent
                                size={feature.iconSize}
                                style={{ color: feature.color }}
                              />
                            </div>
                            <h5 className="font-bold text-white mb-2 text-sm">
                              {feature.title}
                            </h5>
                          </div>
                        </div>
                        <div className="p-3 text-center bg-white flex flex-col justify-between grow">
                          <p className="text-gray-600 mb-3 text-[12px] leading-relaxed">
                            {feature.description}
                          </p>
                          <div className="flex justify-center gap-2 mt-auto">
                            {feature.badges.map((badge, i) => (
                              <span
                                key={i}
                                className="rounded-full px-3 py-1 text-xs font-semibold"
                                style={feature.badgeStyle}
                              >
                                {badge}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .features-slider-container .slick-track {
          display: flex !important;
          align-items: stretch;
        }

        .features-slider-container .slick-slide {
          display: flex !important;
          justify-content: center;
          height: auto !important;
        }

        .features-slider-container .slick-slide > div {
          width: 100% !important;
          display: flex !important;
        }

        @media (max-width: 768px) {
          .features-slider-container .slick-slide {
            padding: 0 8px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default LandingLorioFeatures;
