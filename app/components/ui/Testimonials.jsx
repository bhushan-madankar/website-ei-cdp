import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Bhushan Madankar",
    role: "Project Coordinator",
    text: "Engineering Idea has been a transformative experience. As a Project Coordinator, I've had the chance to innovate and develop automation solutions that push the boundaries of technology. The collaborative spirit here is unmatched!",
    image: "https://storage.googleapis.com/a1aa/image/csoT_oIC334d-ZXTMHkQjT082ukJEnUQSXsot-W_ocY.jpg",
  },
  {
    name: "Prathamesh Korde",
    role: "Front-End Developer",
    text: "At Engineering Idea, I’ve worked on cutting-edge web applications that enhance user experience. The learning curve is steep, but the environment is incredibly supportive, making it the perfect place for innovation.",
    image: "https://storage.googleapis.com/a1aa/image/csoT_oIC334d-ZXTMHkQjT082ukJEnUQSXsot-W_ocY.jpg",
  },
  {
    name: "Karan Yede",
    role: "Designer",
    text: "Designing user-friendly interfaces and visual elements at Engineering Idea has been an exhilarating experience. From creating UI/UX prototypes to branding, I’ve gained invaluable expertise in design principles.",
    image: "https://storage.googleapis.com/a1aa/image/csoT_oIC334d-ZXTMHkQjT082ukJEnUQSXsot-W_ocY.jpg",
  },
  {
    name: "Aditi Pande",
    role: "Database Developer",
    text: "The exposure to real-world data challenges at Engineering Idea has enhanced my analytical skills. Organizing data-centric workshops and working on predictive analytics projects has been a game-changer for me!",
    image: "https://storage.googleapis.com/a1aa/image/tlpSiOnCf27lEFFsQ3jebZqEVPM9IyfAGHHJBjq3ewU.jpg",
  },
  {
    name: "Prachiti Kothekar",
    role: "Back-End Developer",
    text: "Engineering Idea has been a game-changer for me. As a Backend Developer, I've had the opportunity to work on complex system architectures and optimize performance. The best part is the collaborative environment—everyone is eager to share knowledge and push the boundaries of innovation.",
    image: "https://storage.googleapis.com/a1aa/image/tlpSiOnCf27lEFFsQ3jebZqEVPM9IyfAGHHJBjq3ewU.jpg",
  },
  {
    name: "Yashpal Chandewar",
    role: "Project Coordinator",
    text: "Engineering Idea has provided me with opportunities to work on high-performance backend systems. The exposure to various technologies and frameworks has been instrumental in my growth as a developer.",
    image: "https://storage.googleapis.com/a1aa/image/csoT_oIC334d-ZXTMHkQjT082ukJEnUQSXsot-W_ocY.jpg",
  },
  {
    name: "Onkar Anantulwar",
    role: "Designer",
    text: "Being a part of Engineering Idea has given me hands-on experience in creative visual storytelling and branding. I’ve learned how to craft compelling design experiences that resonate with users.",
    image: "https://storage.googleapis.com/a1aa/image/csoT_oIC334d-ZXTMHkQjT082ukJEnUQSXsot-W_ocY.jpg",
  },
];

const TestimonialCard = ({ testimonial }) => (
  <div className="p-10 rounded-2xl shadow-xl w-[750px] h-[450px] mx-auto relative bg-gradient-to-r from-blue-500 to-purple-600 text-white transition-transform transform hover:scale-105 hover:shadow-2xl"> 
    <p className="mb-8 text-xl font-light italic">"{testimonial.text}"</p>
    <div className="absolute bottom-8 left-8 flex items-center">
      <img src={testimonial.image} alt={testimonial.name} className="w-20 h-20 rounded-full border-4 border-white shadow-lg mr-6" />
      <div>
        <h3 className="font-bold text-3xl">{testimonial.name}</h3>
        <p className="text-lg text-gray-200">{testimonial.role}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white p-16">
    <div className="max-w-6xl w-full text-center">
      <h2 className="text-6xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">What Our Coordinators Say</h2>
      <div className="overflow-hidden h-[750px] flex flex-col items-center">
        <motion.div 
          className="flex flex-col space-y-12"
          animate={{ y: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </motion.div>
      </div>
    </div>
  </div>
);

export default Testimonials;
