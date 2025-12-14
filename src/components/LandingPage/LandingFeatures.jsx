import React, { useRef, useEffect, useState, useCallback } from "react";
import Slider from "react-slick";
import { BarChart3, Bell, FolderOpen, Truck, Settings, CheckCircle } from "lucide-react";

const features = [
  {
    id: 1,
    icon: BarChart3,
    title: "Profit & Expense Reports",
    description:
      "Comprehensive tracking of expenses, fuel consumption, and profitability insights.",
    benefits: [
      "Expense Tracking",
      "Fuel Consumption Monitoring",
      "Fleet Cost Analysis",
      "Profitability Insights",
    ],
  },
  {
    id: 2,
    icon: Bell,
    title: "Maintenance & Service Alerts",
    description:
      "Automated reminders for servicing, fitness, insurance, and renewals.",
    benefits: [
      "Service Reminders",
      "Fitness Alerts",
      "Insurance Renewals",
      "Maintenance Schedules",
    ],
  },
  {
    id: 3,
    icon: FolderOpen,
    title: "Document Management",
    description:
      "Store and track all vehicle papers securely. Share instantly with one click.",
    benefits: [
      "Store All Documents",
      "Track Vehicle Papers",
      "One-Click Sharing",
      "Secure Access",
    ],
  },
  {
    id: 4,
    icon: Truck,
    title: "Driver Management",
    description:
      "Track driver attendance, trips, and payments — reducing disputes and improving efficiency.",
    benefits: [
      "Auto-record attendance & trip details",
      "Maintain clear payment & incentive logs",
      "Monitor driver behavior trends",
      "Encourage professionalism",
    ],
  },
  {
    id: 5,
    icon: Settings,
    title: "Tyre Management",
    description:
      "Track tyre usage, cost, and condition — maximize mileage and cut expenses.",
    benefits: [
      "Manage tyre stock & replacement",
      "Track tyre history by truck",
      "Reduce wastage and early wear",
      "Lower maintenance costs",
    ],
  },
];

const LandingFeatures = () => {
  const sliderRef = useRef(null);
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

  // Manual width logic (instead of responsive prop)
  const applyWidthLogic = useCallback((width) => {
    if (width >= 1024) {
      setSlidesToShow(3);
      setCenterMode(false);
    } else if (width >= 768) {
      setSlidesToShow(2);
      setCenterMode(false);
    } else {
      setSlidesToShow(1);
      setCenterMode(true);
    }
  }, []);

  // Attach resize listener
  useEffect(() => {
    if (typeof window === "undefined") return;
    applyWidthLogic(window.innerWidth);

    const handleResize = debounce(() => {
      applyWidthLogic(window.innerWidth);
      // force slick re-render
      setTimeout(() => {
        if (sliderRef.current && sliderRef.current.innerSlider) {
          try {
            sliderRef.current.innerSlider.onWindowResized();
          } catch {
            sliderRef.current.slickGoTo(
              sliderRef.current.innerSlider.state.currentSlide || 0
            );
          }
        }
      }, 80);
    }, 150);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [applyWidthLogic]);

  // Force recalculation after mount
  useEffect(() => {
    setTimeout(() => {
      if (sliderRef.current && sliderRef.current.innerSlider) {
        try {
          sliderRef.current.innerSlider.onWindowResized();
        } catch {
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
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
    centerMode,
    centerPadding: centerMode ? "0px" : "0px",
    swipeToSlide: true,
    touchThreshold: 10,
    cssEase: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  };

  return (
    <section id="features" className="py-2 bg-gray-50 overflow-hidden">
      <div className="container mx-auto py-5 pb-0 px-4">
        <div className="text-center mb-2">
          <h2 className="text-2xl md:text-4xl font-bold mb-2 text-gray-800">
            Benefits of <span className="text-orange">Lorio</span>
          </h2>
          <p className="text-gray-500 text-[12px] md:text-base">
            Everything you need to manage your fleet efficiently
          </p>
        </div>

        <div className="features-slider-container max-w-[95%] mx-auto">
          <Slider ref={sliderRef} {...sliderSettings}>
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.id} className="px-0 py-4" >
                  <div className="rounded-2xl shadow bg-white overflow-hidden border border-gray-100 h-full flex flex-col">
                    {/* Header */}
                    <div
                      className={`relative p-4 pb-2 text-center fleet-bg-gradient`}
                      
                    >
                      <div
                        className="absolute inset-0 opacity-10 pointer-events-none"
                        style={{
                          background:
                            "radial-gradient(circle at top right, rgba(255,255,255,0.3), transparent)",
                        }}
                      />
                      <div className="relative flex items-center  gap-2">
                        <div
                          className="bg-white rounded-full flex items-center justify-center mb-2 mt-2"
                          style={{ width: 26, height: 26 }}
                        >
                          <Icon size={15} className="text-orange"/>
                        </div>
                        <h5 className="text-white font-bold text-sm">
                          {feature.title}
                        </h5>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-4 bg-white flex flex-col grow gap-2">
                      <p
                        className="text-gray-500 text-[12px] mb-1"
                        style={{ lineHeight: "1.4" }}
                      >
                        {feature.description}
                      </p>
                      <div>
                        <h6 className="font-bold mb-2 text-lorio text-xs uppercase">
                          Key Benefits :
                        </h6>
                        <ul className="mb-0">
                          {feature.benefits.map((benefit, index) => (
                            <li
                              key={index}
                              className="mb-1 flex items-start text-gray-500 text-xs"
                            >
                              <div
                                className=" flex items-center justify-center mr-2 flex-shrink-0"
                                style={{
                                  width: 18,
                                  height: 18,
                                  minWidth: 18,
                                }}
                              >
                                <img src="/assets/images/gif/check.gif"
                                  strokeWidth={3}
                                />
                              </div>
                              <span >{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
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

export default LandingFeatures;
