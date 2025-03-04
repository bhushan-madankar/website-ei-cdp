"use client";
import React, { useState, useEffect, useRef } from 'react';
import Confetti from 'react-confetti';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { FaRocket } from 'react-icons/fa';

const testimonials = [
  {
    text: "Engineering Idea has been a game-changer for me. As a Project Coordinator, I've had the opportunity to lead groundbreaking projects in robotics and automation. The best part is the collaborative environment—everyone is eager to share knowledge and push the boundaries of innovation.",
    name: "Bhushan Madankar",
    title: "Project Coordinator",
    image: "https://storage.googleapis.com/a1aa/image/csoT_oIC334d-ZXTMHkQjT082ukJEnUQSXsot-W_ocY.jpg",
    bgColor: "bg-pink-100",
    textColor: "text-teal-700",
    specialty: "Robotics & Automation",
    stats: { projects: 15, hours: 300 },
  },
  {
    text: "Being part of Engineering Idea has been an incredibly fulfilling experience. Organizing workshops, hackathons, and training sessions has allowed me to connect with industry experts and inspire budding engineers. This organization is about creating and innovating!",
    name: "Aditi Pande",
    title: "Database Developer",
    image: "https://storage.googleapis.com/a1aa/image/tlpSiOnCf27lEFFsQ3jebZqEVPM9IyfAGHHJBjq3ewU.jpg",
    bgColor: "bg-pink-100",
    textColor: "text-teal-700",
    specialty: "Database Systems",
    stats: { projects: 10, hours: 250 },
  },
  {
    text: "Engineering Idea is more than just a club—it's a movement. As the Community Outreach Coordinator, I've seen how engineering can transform lives. From sustainable energy solutions to smart city initiatives, our projects make a difference.",
    name: "Prachiti Kothekar",
    title: "Backend Project Developer",
    image: "https://storage.googleapis.com/a1aa/image/bZcMFsK5scVvrlM_dsrC3UEIaUEmq1UjIP00yIBx6Bo.jpg",
    bgColor: "bg-pink-100",
    textColor: "text-teal-700",
    specialty: "Sustainable Tech",
    stats: { projects: 12, hours: 280 },
  },
  {
    text: "Engineering Idea has been a game-changer for me. As a Project Coordinator, I've had the opportunity to lead groundbreaking projects in robotics and automation. The best part is the collaborative environment—everyone is eager to share knowledge and push the boundaries of innovation.",
    name: "Bhushan Madankar",
    title: "Project Coordinator",
    image: "https://storage.googleapis.com/a1aa/image/csoT_oIC334d-ZXTMHkQjT082ukJEnUQSXsot-W_ocY.jpg",
    bgColor: "bg-pink-100",
    textColor: "text-teal-700",
    specialty: "Robotics & Automation",
    stats: { projects: 15, hours: 300 },
  },
];

const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);
  const timeoutRef = useRef(null);

  // Automatic card change every 5 seconds with progress
  useEffect(() => {
    if (!isHovered) {
      timeoutRef.current = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setProgress(0);
      }, 5000);

      const progressInterval = setInterval(() => {
        setProgress((prev) => Math.min(prev + 1, 100));
      }, 50);

      return () => {
        clearInterval(timeoutRef.current);
        clearInterval(progressInterval);
      };
    }
  }, [isHovered]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    triggerConfetti();
    setProgress(0);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    triggerConfetti();
    setProgress(0);
  };

  const triggerConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 2000);
  };

  // Animation variants
  const pageVariants = {
    initial: (direction) => ({
      opacity: 0,
      rotateY: direction > 0 ? 90 : -90,
      transformOrigin: direction > 0 ? "left" : "right",
    }),
    animate: {
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
    exit: (direction) => ({
      opacity: 0,
      rotateY: direction > 0 ? -90 : 90,
      transformOrigin: direction > 0 ? "right" : "left",
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    }),
  };

  const buttonVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.9 },
  };

  return (
    <div
    id='team'
      className="w-full min-h-screen bg-sky-100 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={200}
          colors={["#0d9488", "#f9a8d4", "#fff"]}
        />
      )}

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-96 h-96 bg-teal-500 rounded-full blur-3xl top-0 left-0"></div>
        <div className="absolute w-96 h-96 bg-pink-300 rounded-full blur-3xl bottom-0 right-0"></div>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-12 text-teal-500 relative z-10"
      >
        Our Coordinators Say's
      </motion.h1>

      <div className="max-w-3xl mx-auto relative">
        {/* Navigation Arrows */}
        <motion.button
          onClick={handlePrev}
          className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 p-3 rounded-full bg-teal-500/70 backdrop-blur-sm hover:bg-teal-500 transition-all duration-300 z-20"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <ChevronLeft size={28} className="text-white" />
        </motion.button>
        <motion.button
          onClick={handleNext}
          className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 p-3 rounded-full bg-teal-500/70 backdrop-blur-sm hover:bg-teal-500 transition-all duration-300 z-20"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <ChevronRight size={28} className="text-white" />
        </motion.button>

        {/* Card Container */}
        <div className="relative h-[500px] w-full perspective-1000">
          <AnimatePresence custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className={`absolute w-full h-full p-8 rounded-2xl shadow-2xl ${testimonials[currentIndex].bgColor} ${testimonials[currentIndex].textColor}`}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="flex flex-col h-full">
                <div className="flex-1">
                  <div className="text-5xl mb-6 opacity-30">
                    <FaRocket />
                  </div>
                  <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                    {testimonials[currentIndex].text}
                  </p>
                </div>
                <hr className="border-t-2 my-6 border-teal-300" />
                <div className="flex items-center gap-4">
                  <motion.img
                    src={testimonials[currentIndex].image}
                    alt={`Portrait of ${testimonials[currentIndex].name}`}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-4 border-teal-300/50"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div>
                    <p className="text-xl sm:text-2xl font-semibold">{testimonials[currentIndex].name}</p>
                    <p className="text-sm sm:text-base opacity-80">{testimonials[currentIndex].title}</p>
                    <p className="text-sm sm:text-base text-teal-500 flex items-center gap-1">
                      <Star size={16} /> {testimonials[currentIndex].specialty}
                    </p>
                  </div>
                </div>
                {/* Progress Ring */}
                {/* <div className="mt-4 relative w-16 h-16 mx-auto">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      stroke="rgba(13, 148, 136, 0.3)"
                      strokeWidth="10"
                      fill="none"
                    />
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="45"
                      stroke="#0d9488"
                      strokeWidth="10"
                      fill="none"
                      strokeDasharray="283"
                      strokeDashoffset={283 - (283 * progress) / 100}
                      initial={{ strokeDashoffset: 283 }}
                      animate={{ strokeDashoffset: 283 - (283 * progress) / 100 }}
                      transition={{ duration: 0.05 }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-teal-500 text-sm">
                    {Math.round(progress)}%
                  </div>
                </div> */}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <motion.div
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                currentIndex === index ? 'bg-teal-500 scale-125' : 'bg-teal-300/70'
              }`}
              whileHover={{ scale: 1.5 }}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
                setProgress(0);
              }}
            />
          ))}
        </div>

        {/* Spotlight Section */}
        {/* <motion.div
          className="mt-8 bg-pink-100 p-4 rounded-lg shadow-md text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-teal-700 text-sm sm:text-base font-semibold">
            Spotlight: {testimonials[currentIndex].name} - {testimonials[currentIndex].stats.projects} Projects, {testimonials[currentIndex].stats.hours} Hours
          </p>
          <motion.button
            className="mt-2 inline-flex items-center gap-2 bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Connect <FaRocket size={16} />
          </motion.button>
        </motion.div> */}
      </div>
    </div>
  );
};

export default Team;




