"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import Navbar from "@/app/components/ui/einavbar";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from 'next/navigation';
import { FcGoogle } from "react-icons/fc";

export default function AuthPage() {
  const [isFlipped, setIsFlipped] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push('/dashboard');
    }
  }, [session, router]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: { 
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.95 }
  };

  const flipVariants = {
    front: { rotateY: 0 },
    back: { rotateY: 180 }
  };

  return (
    <div className="min-h-screen bg-teal-50">
      <Navbar />
      <motion.div 
        className="flex items-center justify-center min-h-[calc(90vh-64px)] px-4"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <motion.div
            className="relative w-full h-[500px]"
            variants={flipVariants}
            animate={isFlipped ? "back" : "front"}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Login Card */}
            <div
              className="absolute w-full h-full bg-white p-8"
              style={{ backfaceVisibility: "hidden" }}
            >
              <motion.h2 
                className="text-3xl font-extrabold text-center text-blue-600 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Login
              </motion.h2>

              <motion.div
                className="space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <motion.button
                  className="w-full flex items-center justify-center bg-white text-gray-800 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-all"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  onClick={() => signIn("google")}
                >
                  <FcGoogle className="mr-2 text-xl" /> Sign In with Google
                </motion.button>

                <motion.button
                  className="w-full flex items-center justify-center bg-gray-900 text-white p-3 rounded-lg hover:bg-gray-800 transition-all"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  onClick={() => signIn("github")}
                >
                  <FaGithub className="mr-2 text-xl" /> Sign In with GitHub
                </motion.button>
              </motion.div>

              {/* <motion.p 
                className="mt-6 text-center text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Don&apos;t have an account?{" "}
                <span
                  className="text-blue-500 cursor-pointer font-semibold hover:underline"
                  onClick={() => setIsFlipped(true)}
                >
                  Sign Up
                </span>
              </motion.p> */}
            </div>

            {/* Signup Card */}
            <div
              className="absolute w-full h-full bg-white p-8"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              <motion.h2 
                className="text-3xl font-extrabold text-center text-blue-600 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Sign Up
              </motion.h2>

              <motion.div
                className="space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <motion.button
                  className="w-full flex items-center justify-center bg-white text-gray-800 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-all"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  onClick={() => signIn("google")}
                >
                  <FcGoogle className="mr-2 text-xl" /> Sign Up with Google
                </motion.button>

                <motion.button
                  className="w-full flex items-center justify-center bg-gray-900 text-white p-3 rounded-lg hover:bg-gray-800 transition-all"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  onClick={() => signIn("github")}
                >
                  <FaGithub className="mr-2 text-xl" /> Sign Up with GitHub
                </motion.button>
              </motion.div>

              <motion.p 
                className="mt-6 text-center text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Already have an account?{" "}
                <span
                  className="text-blue-500 cursor-pointer font-semibold hover:underline"
                  onClick={() => setIsFlipped(false)}
                >
                  Login
                </span>
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}