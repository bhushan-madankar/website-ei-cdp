"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getCourses } from "@/_action/getcourses";
import { X } from "lucide-react"; // Assuming you're using Lucide icons for the close button

const Page3 = () => {
    const router = useRouter();
    const [courses, setCourses] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [sortBy, setSortBy] = useState("default");
    const [ref, setRef] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedCourse, setSelectedCourse] = useState(null);

    useEffect(() => {
        getCoursesData();
    }, [router, ref]);

    const getCoursesData = async () => {
        setIsLoading(true);
        try {
            const res = await getCourses();
            const courseData = await JSON.parse(res);
            setCourses(courseData.reverse());
        } catch (error) {
            console.error("Error fetching courses:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const categories = [
        "All",
        "Web Development",
        "Cyber Security",
        "Data Science",
        "Programming",
        "Mobile Development"
    ];

    const processedCourses = courses
        .filter(course => 
            (selectedCategory === "All" || course.category === selectedCategory) &&
            (course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
             course.description.toLowerCase().includes(searchTerm.toLowerCase()))||
             (course.title.toLowerCase().includes(selectedCategory.toLowerCase()) ||
             course.description.toLowerCase().includes(selectedCategory.toLowerCase()))
        )
        .sort((a, b) => {
            if (sortBy === "title") return a.title.localeCompare(b.title);
            if (sortBy === "title-desc") return b.title.localeCompare(a.title);
            return 0;
        });

    const displayedCourses = showAll ? processedCourses : processedCourses.slice(0, 4);

    const openPopup = (course) => {
        setSelectedCourse(course);
    };

    const closePopup = () => {
        setSelectedCourse(null);
    };

    return (
        <div className="bg-gradient-to-b from-sky-100 to-sky-200 min-h-screen p-4 sm:p-6 lg:p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-gray-900 mb-3 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-blue-600">
                    Master Skills with Ease
                </h1>
                <p className="text-base sm:text-lg text-center text-gray-700 mb-8 max-w-2xl mx-auto">
                    Explore a world of knowledge with Engineering India – your ultimate learning hub!
                </p>

                {/* Controls */}
                <div className="flex flex-col gap-6 mb-10">
                    <div className="flex justify-center">
                        <input
                            type="text"
                            placeholder="Search courses..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full max-w-lg p-3 rounded-md border-2 border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-md bg-white"
                        />
                    </div>

                    <div className="flex flex-col justify-between items-center gap-4">
                        <div className="flex flex-wrap md:flex-row  justify-center gap-3">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() =>{setSelectedCategory(category)} }
                                    className={`px-4 py-2 rounded-full text-sm sm:text-base font-medium transition-all shadow-md ${
                                        selectedCategory === category
                                            ? "bg-teal-600 text-white shadow-lg"
                                            : "bg-white text-gray-700 hover:bg-teal-100"
                                    }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="p-3 rounded-lg border-2 border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white shadow-md w-full sm:w-auto"
                        >
                            <option value="default">Sort: Default</option>
                            <option value="title">Sort: Title (A-Z)</option>
                            <option value="title-desc">Sort: Title (Z-A)</option>
                        </select>
                    </div>
                </div>

                {/* Courses Grid */}
                {isLoading ? (
                    <div className="text-center text-gray-600 text-lg animate-pulse">
                        Loading courses...
                    </div>
                ) : processedCourses.length === 0 ? (
                    <div className="text-center text-gray-600 text-lg">
                        No courses found
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {displayedCourses.map((course, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl hover:-translate-y-2"
                            >
                                <img
                                    src={course.imgSrc}
                                    alt={course.altText}
                                    className="w-full h-52 object-cover"
                                    onError={(e) => (e.target.src = "/placeholder-image.jpg")}
                                />
                                <div className="p-5 flex flex-col">
                                    <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2">
                                        {course.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                                        {course.description}
                                    </p>
                                    <p className="font-semibold text-teal-600 mb-4">
                                        {course.note}
                                    </p>
                                    <button
                                        onClick={() => openPopup(course)}
                                        className="w-full px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors shadow-md hover:shadow-lg"
                                    >
                                        View Course
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Show More/Less Button */}
                {processedCourses.length > 4 && (
                    <div className="text-center mt-10">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="px-8 py-3 border-2 border-teal-600 text-teal-700 rounded-full bg-white hover:bg-teal-50 transition-all shadow-md hover:shadow-lg font-semibold"
                        >
                            {showAll ? "Show Less" : `Show All (${processedCourses.length})`}
                        </button>
                    </div>
                )}

                {/* Popup Iframe */}
                {selectedCourse && (
                    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 sm:p-6">
                        <div className="bg-white rounded-2xl w-full max-w-5xl max-h-[90vh] flex flex-col relative shadow-2xl animate-fade-in">
                            {/* Close Icon */}
                            <button
                                onClick={closePopup}
                                className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors z-10"
                            >
                                <X className="w-6 h-6 text-gray-700" />
                            </button>

                            {/* Iframe Content */}
                            <div className="flex-grow h-[100vh] w-full overflow-hidden rounded-b-2xl">
                                <iframe
                                    src={selectedCourse.link}
                                    className="w-full h-full border-0"
                                    title={selectedCourse.title}
                                    sandbox="allow-same-origin allow-scripts"
                                    onLoad={() => console.log("Course content loaded")}
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Custom Animation */}
            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: scale(0.95); }
                    to { opacity: 1; transform: scale(1); }
                }
                .animate-fade-in {
                    animation: fadeIn 0.3s ease-out;
                }
            `}</style>
        </div>
    );
};

export default Page3;
// "use client";
// import React from "react";
// import  { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { getCourses } from "@/_action/getcourses";


// const Page3 = () => {
//     const [showAll, setShowAll] = useState(false);
//     const [courses, setCourses] = useState([]);
//     const router = useRouter();
//         useEffect(() => {
//       getcoursesdata();
//     },[router,ref]);

// const getcoursesdata = async () => {

//     const res = await getCourses();
//     setCourses(await JSON.parse(res));
//     console.log(courses);
// };


//     // const courses = [
//     //     {
//     //         imgSrc: "https://rankfame.com/wp-content/uploads/2022/07/Web-Development-Company-Names.webp",
//     //         altText: "DSA Roadmap",
//     //         title: "Become a Full-Stack Web Developer with just ONE course.",
//     //         description: "HTML, CSS, JavaScript, Node, React, PostgreSQL, Web3",
//     //         note: "Only For EI Coordinators",
//     //         link:"https://drive.google.com/file/d/1oQui8cB8zYMOjRomWWFgsMSlQUIUCoSt/preview"
//     //     },
//     //     {
//     //         imgSrc: "https://rankfame.com/wp-content/uploads/2022/07/Web-Development-Company-Names.webp",
//     //         altText: "Java Roadmap",
//     //         title: "Become a Full-Stack Web Developer with just ONE course.",
//     //         description: "HTML, CSS, JavaScript, Node, React, PostgreSQL, Web3",
//     //         note: "Only For EI Coordinators",
//     //         link:"https://drive.google.com/file/d/1oQui8cB8zYMOjRomWWFgsMSlQUIUCoSt/preview"
//     //     },
//     //     {
//     //         imgSrc: "https://rankfame.com/wp-content/uploads/2022/07/Web-Development-Company-Names.webp",
//     //         altText: "DSA Roadmap 90 Days",
//     //         title: "Become a Full-Stack Web Developer with just ONE course.",
//     //         description: "HTML, CSS, JavaScript, Node, React, PostgreSQL, Web3",
//     //         note: "Only For EI Coordinators",
//     //         link:"https://drive.google.com/file/d/1oQui8cB8zYMOjRomWWFgsMSlQUIUCoSt/preview"
//     //     },
//     //     {
//     //         imgSrc: "abc.png",
//     //         altText: "DSA Roadmap",
//     //         title: "Become a Full-Stack Web Developer with just ONE course.",
//     //         description: "HTML, CSS, JavaScript, Node, React, PostgreSQL, Web3",
//     //         note: "Only For EI Coordinators",
//     //         link:"https://drive.google.com/file/d/1oQui8cB8zYMOjRomWWFgsMSlQUIUCoSt/preview"
//     //     },
//     //     {
//     //         imgSrc: "abc.png",
//     //         altText: "Java Roadmap",
//     //         title: "Become a Full-Stack Web Developer with just ONE course.",
//     //         description: "HTML, CSS, JavaScript, Node, React, PostgreSQL, Web3",
//     //         note: "Only For EI Coordinators",
//     //         link:"https://drive.google.com/file/d/1oQui8cB8zYMOjRomWWFgsMSlQUIUCoSt/preview"
//     //     },
//     //     {
//     //         imgSrc: "abc.png",
//     //         altText: "DSA Roadmap 90 Days",
//     //         title: "Become a Full-Stack Web Developer with just ONE course.",
//     //         description: "HTML, CSS, JavaScript, Node, React, PostgreSQL, Web3",
//     //         note: "Only For EI Coordinators",
//     //         link:"https://drive.google.com/file/d/1oQui8cB8zYMOjRomWWFgsMSlQUIUCoSt/preview"
//     //     },
//     //     {
//     //         imgSrc: "abc.png",
//     //         altText: "DSA Roadmap 900 Days",
//     //         title: "Become a Full-Stack Web Developer with just ONE course.",
//     //         description: "HTML, CSS, JavaScript, Node, React, PostgreSQL, Web3",
//     //         note: "Only For EI Coordinators",
//     //         link:"https://drive.google.com/file/d/1oQui8cB8zYMOjRomWWFgsMSlQUIUCoSt/preview"
//     //     },
//     //     // Add more courses as needed
//     // ];

//     const displayedCourses = showAll ? courses : courses.slice(0, 6);

//     return (
//         <div className="bg-sky-100 p-8 text-center">
//             <h1 className="text-4xl font-bold">All the skills you need in one place</h1>
//             <p className="text-lg mt-2">
//                 From critical skills to technical topics, Engineering India is your one-stop solution
//             </p>

//             <div className="flex gap-2 flex-wrap justify-center space-x-4 my-6">
//                 <button className="px-6 py-2 border rounded-2xl bg-gray-200 hover:bg-gray-300">
//                     Web Development
//                 </button>
//                 <button className="px-6 py-2 border rounded-2xl bg-gray-200 hover:bg-gray-300">
//                     Cyber Security
//                 </button>
//                 <button className="px-6 py-2 border rounded-2xl bg-gray-200 hover:bg-gray-300">
//                     Data Science
//                 </button>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {displayedCourses.map((course, index) => (
//                     <div key={index} className="bg-pink-100 shadow-md p-4 rounded-lg">
//                         <img
//                             src={course.imgSrc}
//                             alt={course.altText}
//                             className="w-full h-40 object-cover rounded-lg" 
//                         />
//                         <h3 className="font-bold mt-3">{course.title}</h3>
//                         <p className="text-sm mt-1">{course.description}</p>
//                         <p className="font-bold mt-2">{course.note}</p>
//                         <div className="text-left">
                            
//                             <button onClick={()=>router.push(course.link)} className="mt-3 px-4 py-2 bg-teal-500 text-white rounded-lg">
//                                 View
//                             </button>
//                         </div>  
//                     </div>
//                 ))}
//             </div>

//             <div className="text-left">
//                 <button
//                     onClick={() => setShowAll(!showAll)}
//                     className="mt-3 px-6 py-2 border-2 border-gray-500 rounded-2xl text-teal-700 bg-sky-100 shadow-md hover:shadow-lg hover:bg-sky-200 transition"
//                 >
//                     {showAll ? "Show Less" : "Show All"}
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Page3;
