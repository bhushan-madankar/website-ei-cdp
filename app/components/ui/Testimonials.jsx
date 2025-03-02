import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Bhushan Madankar",
    role: "Project Coordinator",
    text: "Engineering Idea has been a game-changer for me. As a Project Coordinator, I've had the opportunity to lead groundbreaking projects in robotics and automation. The best part is the collaborative environment—everyone is eager to share knowledge and push the boundaries of innovation. If you're passionate about engineering and want to work on real-world solutions, this is the place to be!",
    image: "https://storage.googleapis.com/a1aa/image/csoT_oIC334d-ZXTMHkQjT082ukJEnUQSXsot-W_ocY.jpg",
  },
  {
    name: "Prathamesh Korde",
    role: "Project Coordinator",
    text: "Engineering Idea has been a game-changer for me. As a Project Coordinator, I've had the opportunity to lead groundbreaking projects in robotics and automation. The best part is the collaborative environment—everyone is eager to share knowledge and push the boundaries of innovation. If you're passionate about engineering and want to work on real-world solutions, this is the place to be!",
    image: "https://storage.googleapis.com/a1aa/image/csoT_oIC334d-ZXTMHkQjT082ukJEnUQSXsot-W_ocY.jpg",
  },
  {
    name: "karan yede",
    role: "Project Coordinator",
    text: "Engineering Idea has been a game-changer for me. As a Project Coordinator, I've had the opportunity to lead groundbreaking projects in robotics and automation. The best part is the collaborative environment—everyone is eager to share knowledge and push the boundaries of innovation. If you're passionate about engineering and want to work on real-world solutions, this is the place to be!",
    image: "https://storage.googleapis.com/a1aa/image/csoT_oIC334d-ZXTMHkQjT082ukJEnUQSXsot-W_ocY.jpg",
  },
  {
    name: "Aditi Pande",
    role: "Database Developer",
    text: "Being part of Engineering Idea has been an incredibly fulfilling experience. Organizing workshops, hackathons, and training sessions has allowed me to connect with industry experts and inspire budding engineers. This organization is not just about learning, it's about creating, innovating, and making a real impact. I highly recommend it to anyone who wants to grow in the field of engineering!",
    image: "https://storage.googleapis.com/a1aa/image/tlpSiOnCf27lEFFsQ3jebZqEVPM9IyfAGHHJBjq3ewU.jpg",
  },
  {
    name: "Prachiti Kothekar",
    role: "Backend Project Developer",
    text: "Engineering Idea is more than just a club—it's a movement. As the Community Outreach Coordinator, I've seen firsthand how engineering can transform lives. From sustainable energy solutions to smart city initiatives, our projects are making a difference. This organization gives you a platform to use your engineering skills for social good while growing professionally and personally",
    image: "https://storage.googleapis.com/a1aa/image/tlpSiOnCf27lEFFsQ3jebZqEVPM9IyfAGHHJBjq3ewU.jpg",
  },
  {
    name: "Yashpal Chandewar",
    role: "Project Coordinator",
    text: "Engineering Idea has been a game-changer for me. As a Project Coordinator, I've had the opportunity to lead groundbreaking projects in robotics and automation. The best part is the collaborative environment—everyone is eager to share knowledge and push the boundaries of innovation. If you're passionate about engineering and want to work on real-world solutions, this is the place to be!",
    image: "https://storage.googleapis.com/a1aa/image/csoT_oIC334d-ZXTMHkQjT082ukJEnUQSXsot-W_ocY.jpg",
  },
  {
    name: "onkar anantulwar",
    role: "Project Coordinator",
    text: "Engineering Idea has been a game-changer for me. As a Project Coordinator, I've had the opportunity to lead groundbreaking projects in robotics and automation. The best part is the collaborative environment—everyone is eager to share knowledge and push the boundaries of innovation. If you're passionate about engineering and want to work on real-world solutions, this is the place to be!",
    image: "https://storage.googleapis.com/a1aa/image/csoT_oIC334d-ZXTMHkQjT082ukJEnUQSXsot-W_ocY.jpg",
  },
];

const TestimonialCard = ({ testimonial }) => (
  <div className={`p-6 rounded-2xl shadow-md w-[500px] h-[300px] mx-auto relative ${testimonial.name === "Bhushan Madankar" ? "bg-white text-black" : "bg-blue-600 text-white"}`}>
    <p className="mb-4 text-sm">{testimonial.text}</p>
    <div className="absolute bottom-4 left-4 flex items-center">
      <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
      <div>
        <h3 className="font-bold text-lg">{testimonial.name}</h3>
        <p className="text-sm">{testimonial.role}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => (
  <div className="max-w-5xl mx-auto p-8 overflow-hidden relative">
    <h2 className="text-3xl font-bold text-center mb-6">What Our Coordinators Say</h2>
    <div className="overflow-hidden h-[500px] flex flex-col items-center">
      <motion.div 
        className="flex flex-col space-y-6"
        animate={{ y: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
      >
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </motion.div>
    </div>
  </div>
);

export default Testimonials;
