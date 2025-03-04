"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useState } from "react";
import { getCourses } from "@/_action/getcourses";
import { motion } from "framer-motion";

const Page3 = () => {
    const router = useRouter();
    const [showAll, setShowAll] = useState(false);
    const [courses, setCourses] = useState([]);

    React.useEffect(() => {
        getCoursesData();
    }, [router]);

    const getCoursesData = async () => {
        try {
            const res = await getCourses();
            const courseData = await JSON.parse(res);
            setCourses(courseData.reverse());
        } catch (error) {
            console.error("Error fetching courses:", error);
        }
    };

    const displayedCourses = showAll ? courses : courses.slice(0, 3);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const buttonVariants = {
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.2
            }
        },
        tap: {
            scale: 0.95
        }
    };

    return (
        <motion.div 
            className="bg-sky-100 p-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <motion.h1 
                className="text-4xl font-bold"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                All the skills you need in one place
            </motion.h1>
            <motion.p 
                className="text-lg mt-2"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
            >
                From critical skills to technical topics, Engineering India is your one-stop solution
            </motion.p>

            <motion.div 
                className="flex gap-2 flex-wrap justify-center space-x-4 my-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {["Web Development", "Cyber Security", "Data Science"].map((text) => (
                    <motion.button
                        key={text}
                        className="px-6 py-2 border rounded-2xl bg-gray-200 hover:bg-gray-300"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                    >
                        {text}
                    </motion.button>
                ))}
            </motion.div>

            <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {displayedCourses.map((course, index) => (
                    <motion.div
                        key={index}
                        className="bg-pink-100 shadow-md p-4 rounded-lg"
                        variants={itemVariants}
                        whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                    >
                        <motion.img
                            src={course.imgSrc}
                            alt={course.altText}
                            className="w-full h-40 object-cover rounded-lg"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        />
                        <motion.h3 
                            className="font-bold mt-3"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            {course.title}
                        </motion.h3>
                        <motion.p 
                            className="text-sm mt-1"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            {course.description}
                        </motion.p>
                        <motion.p 
                            className="font-bold mt-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            {course.note}
                        </motion.p>
                        <motion.button
                            onClick={() => router.push("/dashboard")}
                            className="mt-3 px-4 py-2 bg-teal-500 text-white rounded-lg"
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            Join Us
                        </motion.button>
                    </motion.div>
                ))}
            </motion.div>

            <motion.div 
                className="text-left"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
            >
                <motion.button
                    onClick={() => setShowAll(!showAll)}
                    className="mt-3 px-6 py-2 border-2 border-gray-500 rounded-2xl text-teal-700 bg-sky-100 shadow-md hover:shadow-lg hover:bg-sky-200 transition"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                >
                    {showAll ? "Show Less" : "Show All"}
                </motion.button>
            </motion.div>
        </motion.div>
    );
};

export default Page3;