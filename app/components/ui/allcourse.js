"use client";
import React from "react";
import  { useState } from "react";
import { useRouter } from "next/navigation";


const Page3 = () => {
    const [showAll, setShowAll] = useState(false);
    const router = useRouter();

    const courses = [
        {
            imgSrc: "https://rankfame.com/wp-content/uploads/2022/07/Web-Development-Company-Names.webp",
            altText: "DSA Roadmap",
            title: "Become a Full-Stack Web Developer with just ONE course.",
            description: "HTML, CSS, JavaScript, Node, React, PostgreSQL, Web3",
            note: "Only For EI Coordinators",
            link:"https://drive.google.com/file/d/1oQui8cB8zYMOjRomWWFgsMSlQUIUCoSt/preview"
        },
        {
            imgSrc: "https://rankfame.com/wp-content/uploads/2022/07/Web-Development-Company-Names.webp",
            altText: "Java Roadmap",
            title: "Become a Full-Stack Web Developer with just ONE course.",
            description: "HTML, CSS, JavaScript, Node, React, PostgreSQL, Web3",
            note: "Only For EI Coordinators",
            link:"https://drive.google.com/file/d/1oQui8cB8zYMOjRomWWFgsMSlQUIUCoSt/preview"
        },
        {
            imgSrc: "https://rankfame.com/wp-content/uploads/2022/07/Web-Development-Company-Names.webp",
            altText: "DSA Roadmap 90 Days",
            title: "Become a Full-Stack Web Developer with just ONE course.",
            description: "HTML, CSS, JavaScript, Node, React, PostgreSQL, Web3",
            note: "Only For EI Coordinators",
            link:"https://drive.google.com/file/d/1oQui8cB8zYMOjRomWWFgsMSlQUIUCoSt/preview"
        },
        {
            imgSrc: "abc.png",
            altText: "DSA Roadmap",
            title: "Become a Full-Stack Web Developer with just ONE course.",
            description: "HTML, CSS, JavaScript, Node, React, PostgreSQL, Web3",
            note: "Only For EI Coordinators",
            link:"https://drive.google.com/file/d/1oQui8cB8zYMOjRomWWFgsMSlQUIUCoSt/preview"
        },
        {
            imgSrc: "abc.png",
            altText: "Java Roadmap",
            title: "Become a Full-Stack Web Developer with just ONE course.",
            description: "HTML, CSS, JavaScript, Node, React, PostgreSQL, Web3",
            note: "Only For EI Coordinators",
            link:"https://drive.google.com/file/d/1oQui8cB8zYMOjRomWWFgsMSlQUIUCoSt/preview"
        },
        {
            imgSrc: "abc.png",
            altText: "DSA Roadmap 90 Days",
            title: "Become a Full-Stack Web Developer with just ONE course.",
            description: "HTML, CSS, JavaScript, Node, React, PostgreSQL, Web3",
            note: "Only For EI Coordinators",
            link:"https://drive.google.com/file/d/1oQui8cB8zYMOjRomWWFgsMSlQUIUCoSt/preview"
        },
        {
            imgSrc: "abc.png",
            altText: "DSA Roadmap 90 Days",
            title: "Become a Full-Stack Web Developer with just ONE course.",
            description: "HTML, CSS, JavaScript, Node, React, PostgreSQL, Web3",
            note: "Only For EI Coordinators",
            link:"https://drive.google.com/file/d/1oQui8cB8zYMOjRomWWFgsMSlQUIUCoSt/preview"
        },
        // Add more courses as needed
    ];

    const displayedCourses = showAll ? courses : courses.slice(0, 6);

    return (
        <div className="bg-sky-100 p-8 text-center">
            <h1 className="text-4xl font-bold">All the skills you need in one place</h1>
            <p className="text-lg mt-2">
                From critical skills to technical topics, Engineering India is your one-stop solution
            </p>

            <div className="flex gap-2 flex-wrap justify-center space-x-4 my-6">
                <button className="px-6 py-2 border rounded-2xl bg-gray-200 hover:bg-gray-300">
                    Web Development
                </button>
                <button className="px-6 py-2 border rounded-2xl bg-gray-200 hover:bg-gray-300">
                    Cyber Security
                </button>
                <button className="px-6 py-2 border rounded-2xl bg-gray-200 hover:bg-gray-300">
                    Data Science
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedCourses.map((course, index) => (
                    <div key={index} className="bg-pink-100 shadow-md p-4 rounded-lg">
                        <img
                            src={course.imgSrc}
                            alt={course.altText}
                            className="w-full h-40 object-cover rounded-lg" 
                        />
                        <h3 className="font-bold mt-3">{course.title}</h3>
                        <p className="text-sm mt-1">{course.description}</p>
                        <p className="font-bold mt-2">{course.note}</p>
                        <div className="text-left">
                            
                            <button onClick={()=>router.push(course.link)} className="mt-3 px-4 py-2 bg-teal-500 text-white rounded-lg">
                                View
                            </button>
                        </div>  
                    </div>
                ))}
            </div>

            <div className="text-left">
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="mt-3 px-6 py-2 border-2 border-gray-500 rounded-2xl text-teal-700 bg-sky-100 shadow-md hover:shadow-lg hover:bg-sky-200 transition"
                >
                    {showAll ? "Show Less" : "Show All"}
                </button>
            </div>
        </div>
    );
};

export default Page3;
