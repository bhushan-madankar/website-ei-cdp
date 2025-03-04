"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaRocket } from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');
  const currentYear = new Date().getFullYear();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, duration: 0.5 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const buttonVariants = {
    hover: { scale: 1.05, boxShadow: "0px 5px 15px rgba(0,0,0,0.2)" },
    tap: { scale: 0.95 },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for newsletter signup logic
    console.log('Subscribed with:', email);
    setEmail('');
  };

  return (
    <motion.footer
      className="w-full bg-sky-50 py-8 px-4 sm:px-6 lg:px-8 text-teal-700"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About Section */}
        <motion.div variants={itemVariants}>
          <h3 className="text-lg sm:text-xl font-bold text-teal-500 mb-4">Engineering India</h3>
          <p className="text-sm sm:text-base">
            Uniting innovators across colleges to collaborate, create, and shape the future of engineering.
          </p>
          <motion.div
            className="mt-4 flex gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.a href="#" className="text-teal-500 hover:text-teal-600" whileHover={{ scale: 1.2 }}>
              <FaFacebook size={24} />
            </motion.a>
            <motion.a href="#" className="text-teal-500 hover:text-teal-600" whileHover={{ scale: 1.2 }}>
              <FaTwitter size={24} />
            </motion.a>
            <motion.a href="#" className="text-teal-500 hover:text-teal-600" whileHover={{ scale: 1.2 }}>
              <FaInstagram size={24} />
            </motion.a>
            <motion.a href="#" className="text-teal-500 hover:text-teal-600" whileHover={{ scale: 1.2 }}>
              <FaLinkedin size={24} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={itemVariants}>
          <h3 className="text-lg sm:text-xl font-bold text-teal-500 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm sm:text-base">
            <li><Link href={`${process.env.NEXT_PUBLIC_BASE_URL}#`} className="hover:text-teal-500 transition-colors">Home</Link></li>
            <li><Link href={`${process.env.NEXT_PUBLIC_BASE_URL}#about`} className="hover:text-teal-500 transition-colors">About Us</Link></li>
            {/* <li><a href="#" className="hover:text-teal-500 transition-colors">Projects</a></li> */}
            <li><Link href={`${process.env.NEXT_PUBLIC_BASE_URL}#team`}className="hover:text-teal-500 transition-colors">Team</Link></li>
            <li><Link href="tel:+7821903083" className="hover:text-teal-500 transition-colors">Contact</Link></li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div variants={itemVariants}>
          <h3 className="text-lg sm:text-xl font-bold text-teal-500 mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm sm:text-base">
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-teal-500" />
              <a href="mailto:engineeringindia@gmail.com" className="hover:text-teal-500 transition-colors">
                engineeringindia@gmail.com
              </a>
            </li>
            <li>Engineering India </li>
            {/* <li>123 Innovation Street</li> */}
            <li>Nagpur, India</li>
          </ul>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div variants={itemVariants}>
          <h3 className="text-lg sm:text-xl font-bold text-teal-500 mb-4">Stay Updated</h3>
          <p className="text-sm sm:text-base mb-4">
            Join for the latest updates and projects!
          </p>
          {/* <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="p-2 rounded-md border border-teal-300 text-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            /> */}
            <Link
            href={`${process.env.NEXT_PUBLIC_BASE_URL}auth`}
            >
            <motion.button
              type="submit"
              className="flex items-center justify-center gap-2 bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition-colors"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              
            >
              Join us <FaRocket size={16} />
            </motion.button>
            </Link>
          {/* </form> */}
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        className="mt-8 pt-6 border-t border-teal-300 text-center text-sm sm:text-base"
        variants={itemVariants}
      >
        <p>
          &copy; {currentYear} Engineering India. All rights reserved. Built with{' '}
          <FaRocket className="inline text-teal-500" /> by our team.
        </p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
