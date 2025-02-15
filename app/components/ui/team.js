"use client"
import React, { useRef, useState } from 'react'
// import Confetti from 'js-confetti'
// import './team.css'



const testimonials = [
  {
    text: "Engineering Idea has been a game-changer for me. As a Project Coordinator, I've had the opportunity to lead groundbreaking projects in robotics and automation. The best part is the collaborative environment—everyone is eager to share knowledge and push the boundaries of innovation. If you're passionate about engineering and want to work on real-world solutions, this is the place to be!",
    name: "Bhushan Madankar",
    title: "Project Coordinator",
    image: "https://storage.googleapis.com/a1aa/image/csoT_oIC334d-ZXTMHkQjT082ukJEnUQSXsot-W_ocY.jpg",
    bgColor: "white",
    textColor: "black"
  },
  {
    text: "Being part of Engineering Idea has been an incredibly fulfilling experience. Organizing workshops, hackathons, and training sessions has allowed me to connect with industry experts and inspire budding engineers. This organization is not just about learning, it's about creating, innovating, and making a real impact. I highly recommend it to anyone who wants to grow in the field of engineering!", 
    name: "Aditi Pande",
    title: "Database Developer",
    image: "https://storage.googleapis.com/a1aa/image/tlpSiOnCf27lEFFsQ3jebZqEVPM9IyfAGHHJBjq3ewU.jpg",
    bgColor: "#3B82F6",
    textColor: "white"
  },
  {
    text: "Engineering Idea is more than just a club—it's a movement. As the Community Outreach Coordinator, I've seen firsthand how engineering can transform lives. From sustainable energy solutions to smart city initiatives, our projects are making a difference. This organization gives you a platform to use your engineering skills for social good while growing professionally and personally.",
    name: "Prachiti Kothekar",
    title: "Backend Project Developer",
    image: "https://storage.googleapis.com/a1aa/image/bZcMFsK5scVvrlM_dsrC3UEIaUEmq1UjIP00yIBx6Bo.jpg",
    bgColor: "#3B82F6",
    textColor: "white"
  },
  
];

const team = () => {
    // const confetti =  Confetti;
return (
    <div className="container w-full md:max-w-[80vw] mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">What Our Coordinators Say</h1>
        <div className="overflow-x-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-lg shadow-lg"
                        style={{ backgroundColor: testimonial.bgColor, color: testimonial.textColor }}
                    >
                        <div className="text-4xl mb-4">
                            <i className="fas fa-quote-left"></i>
                        </div>
                        <p className="text-lg mb-4">{testimonial.text}</p>
                        <hr className="border-t-2 mb-4"/>
                        <div className="flex items-center">
                            <img src={testimonial.image} alt={`Portrait of ${testimonial.name}`} className="w-16 h-16 rounded-full mr-4" />
                            <div>
                                <p className="text-xl font-semibold">{testimonial.name}</p>
                                <p className="text-sm">{testimonial.title}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);
};

export default team;
  
