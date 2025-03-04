"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaGraduationCap, FaChartLine, FaLink, FaRocket } from 'react-icons/fa';

const LearningGoals = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const goals = [
    {
      title: "Hands-on Training",
      description:
        "Upskill effectively with AI-powered coding exercises, practice tests, and quizzes.",
      icon: <FaRobot size={24} />,
    },
    {
      title: "Certification Prep",
      description:
        "Prep for industry-recognized certifications by solving real-world challenges and earn badges along the way.",
      icon: <FaGraduationCap size={24} />,
    },
    {
      title: "Enterprise Plan",
      description:
        "Fast-track goals with advanced insights plus a dedicated customer success team to help drive effective learning.",
      icon: <FaChartLine size={24} />,
    },
    {
      title: "Learning Plan",
      description:
        "Create tailored learning paths for team and organization goals and even host your own content and resources.",
      icon: <FaLink size={24} />,
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.02, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" },
  };

  const buttonVariants = {
    hover: { scale: 1.05, boxShadow: "0px 5px 15px rgba(0,0,0,0.2)" },
    tap: { scale: 0.95 },
  };

  return (
    <motion.div
    id='goals'
      className="bg-sky-100 p-8 w-full mx-auto"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-teal-500 mb-4 sm:mb-6 text-center font-[Inter]"
          variants={itemVariants}
        >
          Learning Focused on Your Goals
        </motion.h2>
        <div className="space-y-4 font-[Inknut]">
          {goals.map((goal, index) => (
            <motion.div
              key={index}
              className="flex items-start bg-pink-100 hover:bg-pink-50 p-4 rounded-lg shadow-sm transition-all duration-300"
              variants={itemVariants}
              whileHover="hover"
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <span className="text-2xl sm:text-3xl mr-4 text-teal-500">{goal.icon}</span>
              <div className="flex-1">
                <h3 className="font-extrabold text-lg sm:text-xl text-teal-700 font-[Inknut]">
                  {goal.title}
                </h3>
                <p className="text-teal-600 text-sm sm:text-base md:text-lg leading-relaxed">
                  {goal.description}
                </p>
                {/* {hoveredIndex === index && (
                  <motion.button
                    className="mt-2 inline-flex items-center gap-2 bg-teal-500 text-white px-3 py-1 rounded-md hover:bg-teal-600 transition-all duration-300 text-sm sm:text-base"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    Explore More <FaRocket size={16} />
                  </motion.button>
                )} */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default LearningGoals;