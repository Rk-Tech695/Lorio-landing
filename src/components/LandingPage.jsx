import React, { useEffect } from "react";
import LandingHero from "./LandingPage/LandingHero";
import LandingFeatures from "./LandingPage/LandingFeatures";
import LandingBenefits from "./LandingPage/LandingBenefits";
import LandingContactForm from "./LandingPage/LandingContactForm";
import LandingLorioFeatures from "./LandingPage/LandingLorioFeatures";
import LandingOptimizedIndia from "./LandingPage/LandingOptimizedIndia";
import LandingTestimonials from "./LandingPage/LandingTestimonials";
import LandingFooter from "./LandingPage/LandingFooter";
import "../landingCss.css";

const LandingPage = () => {
  useEffect(() => {
    // ✅ Add Meta Pixel Script dynamically
    const script = document.createElement("script");
    script.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '851928613953186');
      fbq('track', 'PageView');
    `;
    document.head.appendChild(script);

    // ✅ Add <noscript> fallback (for browsers with JS disabled)
    const noscript = document.createElement("noscript");
    noscript.innerHTML = `
      <img height="1" width="1" style="display:none"
        src="https://www.facebook.com/tr?id=851928613953186&ev=PageView&noscript=1"
      />
    `;
    document.body.appendChild(noscript);

    // 🧹 Cleanup when component unmounts (optional)
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
      if (document.body.contains(noscript)) {
        document.body.removeChild(noscript);
      }
    };
  }, []);

  return (
    <main className="bg-white min-h-screen">
      <LandingHero />
      <LandingFeatures />
      <LandingBenefits />
      <LandingContactForm />
      <LandingLorioFeatures />
      <LandingOptimizedIndia />
      <LandingTestimonials />
      <LandingFooter />
    </main>
  );
};

export default LandingPage;
