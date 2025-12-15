import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Briefcase, Zap, Mail,Home , DollarSign, IndianRupee, LogInIcon, Truck, MapPin, Receipt, TrendingUp, Package, Navigation } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    if(sectionId === "home"){
      window.scrollTo({top: 0 , behavior:"smooth"});
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      // Use a larger offset for mobile to account for sticky header
      const isMobile = window.innerWidth < 1024;
      const offset = isMobile ? 110 : 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 10;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      // Delay closing mobile menu to allow scroll to start
      if (isMobileMenuOpen) {
        setTimeout(() => setIsMobileMenuOpen(false), 400);
      }
    }
  };

  const menuItems = [
    { label: 'Home', id: 'home', icon: Home  },
    { label: 'Services', id: 'services', icon: Briefcase },
    { label: 'Features', id: 'keyfeatures', icon: Zap },
    { label: 'About', id: 'about', icon: Truck  },
    { label: 'Contact Us', id: 'contact', icon: Mail }
  ];

  const handleClick = (item) =>{
    if(item.id === 'about'){
      window.open("https://rkinnovation.netlify.app/", "_black")
      return
    }
    scrollToSection(item.id);
  }

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 lg:px-10 overflow-hidden ${
          isScrolled 
            ? 'bg-white shadow-lg' 
            : 'bg-white'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Logistics-Themed Animated Background Widgets */}
        <div className="overflow-hidden absolute inset-0 opacity-10 pointer-events-none">
          
          {/* Moving Truck Animation */}
          <motion.div
            className="absolute top-4 left-[150px] w-20 h-20 rounded-xl flex items-center justify-center shadow-lg"
            style={{ 
              backgroundColor: 'rgba(87, 8, 133, 0.15)',
                border: '2px solid rgba(87, 8, 133, 0.3)',
              opacity:"0.5"
            }}
            animate={{
             transform: 'translateX(-200px)'
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear",
              repeatDelay: 5
            }}
          >
            <Truck size={32} style={{ color: 'rgb(87, 8, 133)' }} strokeWidth={2.5} />
          </motion.div>

          {/* Location Pin Widget */}
          <motion.div
            className="flex absolute top-5 right-1/4 justify-center items-center w-16 h-16 rounded-xl shadow-lg"
            style={{ 
              backgroundColor: 'rgba(239, 68, 68, 0.15)',
              border: '2px solid rgba(239, 68, 68, 0.3)'
            }}
            animate={{ 
              y: [0, -12, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <MapPin size={28} style={{ color: '#EF4444' }} strokeWidth={2.5} fill="rgba(239, 68, 68, 0.2)" />
          </motion.div>

          {/* Indian Rupee Symbol */}
          <motion.div
            className="flex absolute top-8 left-1/3 justify-center items-center w-16 h-16 rounded-xl shadow-lg"
            style={{ 
              backgroundColor: 'rgba(87, 8, 133, 0.15)',
              border: '2px solid rgba(87, 8, 133, 0.3)'
            }}
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <IndianRupee size={30} style={{ color: 'rgb(87, 8, 133)' }} strokeWidth={3} />
          </motion.div>

          {/* Package/Delivery Icon */}
          <motion.div
            className="flex absolute top-7 right-1/3 justify-center items-center w-14 h-14 rounded-full shadow-lg"
            style={{ 
              backgroundColor: 'rgba(34, 197, 94, 0.15)',
              border: '2px solid rgba(34, 197, 94, 0.3)'
            }}
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          >
            <Package size={24} style={{ color: '#22C55E' }} strokeWidth={2.5} />
          </motion.div>
        </div>

        <nav className="container relative z-10 px-4 mx-auto">
          <div className="flex justify-between items-center h-20">
            {/* Logo - Extreme Left */}
            <motion.div 
              className="cursor-pointer shrink-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              style={{width: "210px"}}
            >
              <img 
                src="/assets/images/logo/logo-png-02.png" 
                alt="Lorio Logo" 
               
              />
            </motion.div>

            {/* Desktop Menu - Middle */}
            <div className="hidden items-center space-x-1 lg:flex">
              {menuItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.button
                        key={index}
                    onClick={() => handleClick(item)}
                    className="relative whitespace-nowrap px-6 py-2.5 text-gray-700 cp hover:text-white font-semibold text-base transition-all duration-300 rounded-lg group overflow-hidden"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Background gradient on hover */}
                    <span 
                      className="absolute inset-0 from-blue-600 to-blue-800 opacity-0 transition-opacity duration-300 bg-gradient-to-rb group-hover:opacity-100"
                      style={{ background: 'linear-gradient(135deg, #1F6FBF 0%, #1E40AF 100%)' }}
                    />
                    
                    {/* Border animation */}
                    <span 
                      className="absolute inset-0 rounded-lg border-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{ borderColor: '#1f6fbf' }}
                    />
                    
                    {/* Content */}
                    <span className="flex relative gap-2 items-center">
                      <Icon size={18} className="transition-transform group-hover:rotate-12" />
                      {item.label}
                    </span>
                    
                    {/* Bottom line animation */}
                    <motion.span 
                      className="absolute bottom-0 left-0 h-0.5 bg-white"
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                );
              })}
            </div>

            {/* Pricing Button - Extreme Right */}
            <motion.div 
              className="hidden items-center lg:flex"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.button
                onClick={() => window.location.href = 'https://lorio.prfa.in'}
                className="overflow-hidden cp relative px-8 py-3 font-bold text-white rounded-xl shadow-lg group"
                style={{ background: 'linear-gradient(135deg, #1F6FBF 0%, #1E40AF 100%)' }}
                whileHover={{ scale: 1.08, boxShadow: '0 0px 15px rgba(31, 111, 191, 0.5)' }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 from-transparent to-transparent bg-gradient-to-rb via-white/30"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '200%' }}
                  transition={{ duration: 0.6 }}
                />
                
                {/* Content */}
                <span className="flex relative gap-2 items-center">
                  <LogInIcon size={20} />
                  Login
                </span>
                
                {/* Pulse effect */}
                <motion.div
                  className="absolute inset-0 rounded-xl"
                  style={{ border: '2px solid rgba(255, 255, 255, 0.5)' }}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.button>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              className="p-2 rounded-lg transition-colors lg:hidden hover:bg-purple-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9, rotate: 180 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMobileMenuOpen ? (
                  <X size={28} style={{ color: '#1F6FBF' }} />
                ) : (
                  <Menu size={28} style={{ color: '#1F6FBF' }} />
                )}
              </motion.div>
            </motion.button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-b from-blue-50 to-white border-t border-blue-100 shadow-xl lg:hidden"
            >
              <div className="container px-4 py-6 mx-auto space-y-2">
                {menuItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.button
                      key={index}
                      onClick={() => handleClick(item) }
                     
                      className="flex gap-3 items-center px-4 py-3 w-full font-semibold text-left text-gray-700 rounded-xl shadow-sm transition-all hover:bg-white hover:text-blue-700 hover:shadow-md"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileTap={{ scale: 0.98 }}
                      style={{ 
                        background: 'white',
                        border: '1px solid #e5e7eb'
                      }}
                    >
                      <div 
                        className="flex justify-center items-center w-10 h-10 rounded-lg"
                        style={{ backgroundColor: '#1F6FBF' }}
                      >
                        <Icon size={18} className="text-white" />
                      </div>
                      {item.label}
                    </motion.button>
                  );
                })}
                
                {/* Mobile Pricing Button */}
                <motion.button
                  onClick={() => window.location.href = 'https://lorio.prfa.in'}
                  className="flex gap-2 justify-center items-center px-4 py-4 mt-4 w-full font-bold text-white rounded-xl shadow-lg"
                  style={{ background: '#1F6FBF' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <LogInIcon size={20} />
                  Login
                </motion.button>
              </div>
            </motion.div> 
          )}
        </AnimatePresence>
      </motion.header>

      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-20"></div>
    </>
  );
};

export default Header;