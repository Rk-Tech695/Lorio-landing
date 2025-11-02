import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Briefcase, Zap, Mail, DollarSign, IndianRupee, LogInIcon, Truck, MapPin, Receipt, TrendingUp, Package, Navigation } from 'lucide-react';

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
    { label: 'Services', id: 'services', icon: Briefcase },
    { label: 'Features', id: 'keyfeatures', icon: Zap },
    { label: 'Pricing', id: 'pricing', icon: IndianRupee },
    { label: 'Contact Us', id: 'contact', icon: Mail }
  ];

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
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
          
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
            className="absolute top-5 right-1/4 w-16 h-16 rounded-xl flex items-center justify-center shadow-lg"
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
            className="absolute top-8 left-1/3 w-16 h-16 rounded-xl flex items-center justify-center shadow-lg"
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
            className="absolute top-7 right-1/3 w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
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

        <nav className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-between h-20">
            {/* Logo - Extreme Left */}
            <motion.div 
              className="shrink-0 cursor-pointer"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <img 
                src="/assets/images/logo/login.png" 
                alt="Lorio Logo" 
                className="h-12 w-auto"
              />
            </motion.div>

            {/* Desktop Menu - Middle */}
            <div className="hidden lg:flex items-center space-x-1">
              {menuItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.button
                        key={index}
                        style={{cursor : "pointer"}}
                    onClick={() => scrollToSection(item.id)}
                    className="relative px-6 py-2.5 text-gray-700 hover:text-white font-semibold text-base transition-all duration-300 rounded-lg group overflow-hidden"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Background gradient on hover */}
                    <span 
                      className="absolute inset-0 bg-gradient-to-rb from-purple-600 to-purple-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: 'linear-gradient(135deg, rgb(87, 8, 133) 0%, #6d28d9 100%)' }}
                    />
                    
                    {/* Border animation */}
                    <span 
                      className="absolute inset-0 border-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ borderColor: 'rgb(87, 8, 133)' }}
                    />
                    
                    {/* Content */}
                    <span className="relative flex items-center gap-2">
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
              className="hidden lg:flex items-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.button
                onClick={() => window.location.href = 'https://lorio.prfa.in'}
                className="relative px-8 py-3 rounded-xl font-bold text-white shadow-lg overflow-hidden group"
                style={{ background: 'linear-gradient(135deg, rgb(87, 8, 133) 0%, #6d28d9 100%)' , cursor : "pointer"}}
                whileHover={{ scale: 1.08, y: -3, boxShadow: '0 20px 40px rgba(87, 8, 133, 0.4)' }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-rb from-transparent via-white/30 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '200%' }}
                  transition={{ duration: 0.6 }}
                />
                
                {/* Content */}
                <span className="relative flex items-center gap-2">
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
              className="lg:hidden p-2 rounded-lg hover:bg-purple-50 transition-colors"
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
                  <X size={28} style={{ color: 'rgb(87, 8, 133)' }} />
                ) : (
                  <Menu size={28} style={{ color: 'rgb(87, 8, 133)' }} />
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
              className="lg:hidden bg-gradient-to-b from-purple-50 to-white border-t border-purple-100 shadow-xl"
            >
              <div className="container mx-auto px-4 py-6 space-y-2">
                {menuItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.button
                      key={index}
                      onClick={() => scrollToSection(item.id)}
                      className="flex items-center gap-3 w-full text-left py-3 px-4 text-gray-700 font-semibold hover:bg-white hover:text-purple-700 rounded-xl transition-all shadow-sm hover:shadow-md"
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
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: 'rgb(87, 8, 133)' }}
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
                  className="w-full py-4 px-4 rounded-xl font-bold text-white shadow-lg flex items-center justify-center gap-2 mt-4"
                  style={{ background: 'linear-gradient(135deg, rgb(87, 8, 133) 0%, #6d28d9 100%)' }}
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