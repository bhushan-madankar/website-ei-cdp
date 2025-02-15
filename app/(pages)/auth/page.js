"use client"
import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import Navbar from "@/app/components/ui/navbar";
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'
import React,{useEffect} from "react";
import { FcGoogle } from "react-icons/fc";


export default function AuthPage() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${isFlipped ? "Sign Up" : "Login"} submitted:`, formData);
  };

  const { data: session } = useSession()
    console.log(session)
    const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push('/dashboard');
    }
  }, [session, router])
  

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 to-blue-500">
        {/* Flag Opening Animation */}
        <motion.div
          className="relative w-full max-w-md px-6 py-8 bg-white rounded-xl shadow-lg overflow-hidden"
          animate={{ height: isFlipped ? "500px" : "500px" }}
          initial={{ height: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          style={{ borderRadius: "20px" }}
        >
          {/* Login/Signup Cards with Flip */}
          <motion.div
            className="relative w-full h-full"
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.8 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Login Card */}
            <div
              className="absolute w-full bg-white p-8 shadow-xl rounded-xl transition-all"
              style={{ backfaceVisibility: "hidden" }}
            >
              <h2 className="text-3xl font-extrabold text-center text-blue-600 mb-6">Login</h2>
              {/* <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all"
                  required
                />
                
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all"
                  required
                />
                <motion.button
                  type="submit"
                  className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  
                >
                  Login
                </motion.button>
              </form> */}
              <div className="text-center mt-4 ">
                <p className="text-gray-600"></p>
                <motion.button
                  className="w-full flex items-center justify-center bg-gray-900 text-white p-3 rounded-lg mt-3 hover:bg-gray-800 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => signIn("google")}
                >
                  <FcGoogle  className="mr-2" /> Sign In with Google
                </motion.button>
              </div>

              <div className="text-center mt-4">
                <p className="text-gray-600">or</p>
                <motion.button
                  className="w-full flex items-center justify-center bg-gray-900 text-white p-3 rounded-lg mt-3 hover:bg-gray-800 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => signIn("github").then((res) => router.push('/dashboard'))}
                >
                  <FaGithub className="mr-2" /> Sign In with GitHub
                </motion.button>
              </div>
              {/* <p className="mt-4 text-center text-gray-600">
                Don't have an account?{" "}
                <span
                  className="text-blue-500 cursor-pointer font-semibold"
                  onClick={() => setIsFlipped(true)}
                >
                  Sign Up
                </span>
              </p> */}
            </div>

            {/* Signup Card */}
            <div
              className="absolute w-full bg-white p-8 shadow-xl rounded-xl transition-all"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              <h2 className="text-3xl font-extrabold text-center text-blue-600 mb-6">Sign Up</h2>
              {/* <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all"
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all"
                  required
                />
                <motion.button
                  type="submit"
                  className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Sign Up
                </motion.button>
              </form> */}
              <div className="text-center mt-4">
                <p className="text-gray-600">or</p>
                <motion.button
                  className="w-full flex items-center justify-center bg-gray-900 text-white p-3 rounded-lg mt-3 hover:bg-gray-800 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub className="mr-2" /> Sign Up with GitHub
                </motion.button>
              </div>
              <p className="mt-4 text-center text-gray-600">
                Already have an account?{" "}
                <span
                  className="text-blue-500 cursor-pointer font-semibold"
                  onClick={() => setIsFlipped(false)}
                >
                  Login
                </span>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

