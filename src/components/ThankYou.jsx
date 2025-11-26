import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, MapPin, Phone, Mail, ArrowLeft, Linkedin, Facebook, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const ThankYou = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-indigo-600 to-purple-600 flex items-center justify-center px-2 py-2">
            <motion.div 
                className="max-w-2xl w-full"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                {/* Success Card */}
                <motion.div 
                    className="bg-white rounded-2xl shadow-2xl p-2 md:p-12 text-center"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {/* Success Icon */}
                    <motion.div 
                        className="flex justify-center mb-2"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ 
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                            delay: 0.4 
                        }}
                    >
                        <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-full p-2 relative">
                            <CheckCircle size={20} className="text-white" />
                            {/* Pulse Animation */}
                            <motion.div
                                className="absolute inset-0 bg-green-400 rounded-full -z-10"
                                animate={{
                                    scale: [1, 1.5, 1],
                                    opacity: [0.5, 0, 0.5]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                        </div>
                    </motion.div>

                    {/* Thank You Message */}
                    <motion.h1 
                        className="text-xl md:text-4xl font-bold text-gray-800 mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        Thank You!
                    </motion.h1>
                    <motion.p 
                        className="text-[12px] text-gray-600 mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                    >
                        We've received your request for a demo. Our team will get in touch with you shortly to schedule your personalized demonstration of Lorio Fleet Management.
                    </motion.p>

                    {/* What's Next Section */}
                    <motion.div 
                        className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                    >
                        <h2 className="text-lg font-semibold text-gray-800 mb-4">What Happens Next?</h2>
                        <div className="text-left space-y-3">
                            <motion.div 
                                className="flex items-start gap-3"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.9 }}
                            >
                                <div className="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-[12px] font-semibold">1</div>
                                <p className="text-gray-700 text-[12px]">Our team will review your request within 24 hours</p>
                            </motion.div>
                            <motion.div 
                                className="flex items-start gap-3"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.0 }}
                            >
                                <div className="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-[12px] font-semibold">2</div>
                                <p className="text-gray-700 text-[12px]">We'll contact you to schedule a convenient demo time</p>
                            </motion.div>
                            <motion.div 
                                className="flex items-start gap-3"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.1 }}
                            >
                                <div className="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-[12px] font-semibold">3</div>
                                <p className="text-gray-700 text-[12px]">Experience live how Lorio can transform your fleet management</p>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div 
                        className="border-t border-gray-200 pt-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                    >
                        <h3 className="text-sm font-semibold text-gray-800 mb-4">Need Immediate Assistance?</h3>
                        <motion.div 
                            className="space-y-3 text-gray-700"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.3 }}
                        >
                            <div className='flex justify-center gap-6'>
                                <motion.div 
                                    className="flex items-center justify-center gap-2"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    <Phone size={20} className="text-indigo-600" />
                                    <a href="tel:+918518041111" className="hover:text-indigo-600 transition-colors text-[12px]">
                                        +91 8518041111
                                    </a>
                                </motion.div>
                                <motion.div 
                                    className="flex items-center justify-center gap-2"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    <Mail size={20} className="text-indigo-600" />
                                    <a href="mailto:support@lorio.in" className="hover:text-indigo-600 transition-colors text-[12px]">
                                        support@lorio.in
                                    </a>
                                </motion.div>
                            </div>
                            <motion.div 
                                className="flex justify-center items-center"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 400 }}
                            >
                                <MapPin size={20} className="text-indigo-600" />
                                <span className="text-[12px]">5th Floor, Currency Tower, Raipur (C.G.)</span>
                            </motion.div>
                        </motion.div>

                        {/* Social Media Links */}
                        <motion.div 
                            className="flex justify-center gap-4 mt-2"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.4 }}
                        >
                            <motion.a
                                href="https://share.google/OPUPSbEAra0DzkTYR"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gradient-to-br from-indigo-500 to-indigo-600 p-2 rounded-full hover:scale-110 transition-transform duration-300"
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Linkedin size={15} className="text-white" />
                            </motion.a>
                            <motion.a
                                href="https://share.google/Z7JsL9kpzSaX3tnvJ"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gradient-to-br from-blue-500 to-blue-600 p-2 rounded-full hover:scale-110 transition-transform duration-300"
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Facebook size={15} className="text-white" />
                            </motion.a>
                            <motion.a
                                href="https://www.instagram.com/lorio.__?igsh=ZXY2eGc1Z2w5NXpw"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gradient-to-br from-pink-500 to-purple-600 p-2 rounded-full hover:scale-110 transition-transform duration-300"
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Instagram size={15} className="text-white" />
                            </motion.a>
                        </motion.div>
                    </motion.div>

                   
                </motion.div>
            </motion.div>
        </div>
    );
};

export default ThankYou;
