"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaInfoCircle, FaRocket, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Link from 'next/link';

const ReviewTips = () => {
  const [hoveredTip, setHoveredTip] = useState(null);
  const [progress, setProgress] = useState({ technical: 0, social: 0 });
  const [isTipsExpanded, setIsTipsExpanded] = useState(true);
  const [quoteIndex, setQuoteIndex] = useState(0);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const skillBoxVariants = {
    hover: { scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.15)" },
    tap: { scale: 0.95 },
  };

  const tips = [
    { text: "Be Active and Engaged", detail: "Join discussions and events." },
    { text: "Apply What You Learn", detail: "Build real projects." },
    { text: "Build a Network", detail: "Connect with peers." },
    { text: "Stay Consistent", detail: "Practice daily." },
    { text: "Focus on Holistic Growth", detail: "Balance skills." },
    { text: "Keep Exploring More", detail: "Stay curious." },
  ];

  const quotes = [
    "Arise, awake, and stop not till the goal is reached. - Swami Vivekananda",

    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not final, failure is not fatal. - Winston Churchill",
    "All power is within you; you can do anything and everything. - Swami Vivekananda",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",   
    "Learn as if you will live forever. - Mahatma Gandhi",
  ];

  // Update progress (demo)
//   const updateProgress = (type) => {
//     setProgress((prev) => ({
//       ...prev,
//       [type]: prev[type] < 100 ? prev[type] + 20 : 100,
//     }));
//   };

  // Cycle quotes every 5 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <div>
    <div className="min-h-screen bg-sky-50 flex flex-col items-center p-4 md:p-6 lg:p-8 ">
      <motion.div
        className="w-full max-w-6xl flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-20 justify-center items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Skill Boxes with Circular Progress */}
        <motion.div
          className="flex flex-col items-center gap-6 md:gap-10"
          variants={containerVariants}
        >
          <motion.div
            className="bg-teal-500 p-6 md:p-8 rounded-2xl text-center font-bold text-lg md:text-2xl w-60 sm:w-64 md:w-72 text-white shadow-lg relative"
            variants={skillBoxVariants}
            whileHover="hover"
            whileTap="tap"
            // onClick={() => updateProgress("technical")}
          >
            Technical Skills
            {/* <svg className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-20">
              <circle
                cx="40"
                cy="40"
                r="36"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="4"
                fill="none"
              />
              <motion.circle
                cx="40"
                cy="40"
                r="36"
                stroke="white"
                strokeWidth="4"
                fill="none"
                strokeDasharray="226"
                strokeDashoffset={226 - (226 * progress.technical) / 100}
                initial={{ strokeDashoffset: 226 }}
                animate={{ strokeDashoffset: 226 - (226 * progress.technical) / 100 }}
                transition={{ duration: 0.5 }}
              />
            </svg> */}
            {/* <span className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm">
              {progress.technical}%
            </span> */}
          </motion.div>
          <div className="w-2 h-12 sm:h-16 md:h-20 bg-teal-300 rounded-full"></div>
          <motion.div
            className="bg-teal-500 p-6 md:p-8 rounded-2xl text-center font-bold text-lg md:text-2xl w-60 sm:w-64 md:w-72 text-white shadow-lg relative"
            variants={skillBoxVariants}
            whileHover="hover"
            whileTap="tap"
            // onClick={() => updateProgress("social")}
          >
            Social Skills
            {/* <svg className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-20">
              <circle
                cx="40"
                cy="40"
                r="36"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="4"
                fill="none"
              />
              <motion.circle
                cx="40"
                cy="40"
                r="36"
                stroke="white"
                strokeWidth="4"
                fill="none"
                strokeDasharray="226"
                strokeDashoffset={226 - (226 * progress.social) / 100}
                initial={{ strokeDashoffset: 226 }}
                animate={{ strokeDashoffset: 226 - (226 * progress.social) / 100 }}
                transition={{ duration: 0.5 }}
              />
            </svg>
            <span className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm">
              {progress.social}%
            </span> */}
          </motion.div>
        </motion.div>

        {/* Tips Section with Collapsible Feature */}
        <motion.div
          className="bg-pink-100 p-6 md:p-8 rounded-2xl w-full max-w-lg sm:max-w-md md:max-w-lg lg:w-96 text-base md:text-lg shadow-xl"
          variants={itemVariants}
        >
          <div
            className="flex items-center justify-between cursor-pointer"
            // onClick={() => setIsTipsExpanded(!isTipsExpanded)}
          >
            <h3 className="font-bold mb-5 text-2xl md:text-3xl text-teal-500 border-b-2 border-teal-300 pb-2">
              Reviews and Tips
            </h3>
            {/* {isTipsExpanded ? (
              <FaChevronUp className="text-teal-500" size={24} />
            ) : (
              <FaChevronDown className="text-teal-500" size={24} />
            )} */}
          </div>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: isTipsExpanded ? "auto" : 0,
              opacity: isTipsExpanded ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <ul className="list-none space-y-4 mt-4">
              {tips.map((tip, index) => (
                <motion.li
                  key={index}
                  className="font-semibold text-gray-800 flex items-center gap-3 relative"
                  variants={itemVariants}
                  onHoverStart={() => setHoveredTip(index)}
                  onHoverEnd={() => setHoveredTip(null)}
                >
                  <span className="text-teal-500 text-xl md:text-2xl">✔</span>
                  {tip.text}
                  {hoveredTip === index && (
                    <motion.div
                      className="absolute left-full ml-2 p-2 bg-teal-500 text-white text-sm rounded-lg shadow-md w-40 z-10"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {tip.detail}
                    </motion.div>
                  )}
                </motion.li>
              ))}
            </ul>
            <Link href="/dashboard">
            <motion.button
              className="mt-6 w-full py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition-colors flex items-center justify-center gap-2"
              variants={skillBoxVariants}
              whileHover="hover"
              whileTap="tap"
              
            >
              <FaRocket /> Start Your Journey
            </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Motivational Quote Carousel */}
      <motion.div
        className="mt-8 w-full max-w-2xl text-center"
        variants={itemVariants}
        key={quoteIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-teal-500 text-lg md:text-xl italic bg-pink-100 p-4 rounded-lg shadow-md">
          "{quotes[quoteIndex]}"
        </p>
      </motion.div>
    </div>
    <hr />
    </div>
  );
};

export default ReviewTips;