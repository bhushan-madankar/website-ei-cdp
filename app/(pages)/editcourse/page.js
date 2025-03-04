"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { getinfodata } from "@/_action/getinfo";
import { adminOverdata } from "@/_action/adminOverdata";
import { addcourse } from "@/_action/addcourse";
import { getCourses } from "@/_action/getcourses";
import { deleteCourse } from "@/_action/deleteCourse";  
import { ToastContainer, toast } from 'react-toastify';
import Einavbar from "@/app/components/ui/einavbar";

const Editcourse = () => {
    const router = useRouter();
    const { data: session, status } = useSession();
    const [infodata, setInfodata] = useState(null);
    const [overdata, setOverdata] = useState([]);
    const [courses, setCourses] = useState([]);
    const [ref, setRef] = useState(0);
    const [searchTerm, setSearchTerm] = useState("");
    const [showForm, setShowForm] = useState(false);

    const [userdata, setUserdata] = useState({
        imgSrc: "",
        altText: "",
        title: "",
        description: "",
        note: "",
        link: ""
    });

    useEffect(() => {
        if (status === "unauthenticated") router.push("/auth");
        else getinfo(session?.user?.email);
    }, [status, router]);

    useEffect(() => {
        if (infodata && Object.keys(infodata).length !== 0) {
            validateAccess();
        }
    }, [infodata, router]);

    useEffect(() => {
        getcoursesdata();
    }, [router, ref]);

    const getcoursesdata = async () => {
        const res = await getCourses();
        const courseData = await JSON.parse(res);
        // Reverse the array to show latest courses at the bottom
        setCourses(courseData.reverse());
    };

    const validateAccess = async () => {
        if (!infodata?.approved || !infodata?.admin) router.push("/");
        else getOverdata();
    };

    const getinfo = async (email) => {
        const res = await getinfodata(email);
        setInfodata(JSON.parse(res));
    };

    const getOverdata = async () => {
        const res = await adminOverdata();
        setOverdata(JSON.parse(res));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserdata({ ...userdata, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await addcourse(userdata);
        if (res === "success") {
            toast.success('Course Successfully Added!');
            setShowForm(false);
            setRef(ref + 1);
            setUserdata({ imgSrc: "", altText: "", title: "", description: "", note: "", link: "" });
        } else {
            toast.error('Something went wrong!');
        }
    };

    // Filter courses based on search term
    const filteredCourses = courses.filter(course => 
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <Einavbar />
        <div className="p-4 sm:p-6 bg-gray-100 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
                    Edit Courses
                </h1>

                {/* Admin Controls */}
                <div className="flex flex-col sm:flex-row justify-center items-center mb-6 gap-4">
                    
                    <input
                        type="text"
                        placeholder="Search courses..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full sm:w-64 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button 
                        className="w-full sm:w-auto px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition"
                        onClick={() => setShowForm(true)}
                    >
                        Add New Course
                    </button>
                </div>

                {/* Add Course Form */}
                {showForm && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
                        <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md max-h-[95vh] overflow-y-auto">
                            <h2 className="text-xl font-bold mb-4">Add New Course</h2>
                            <form onSubmit={handleSubmit}>
                                {[
                                    { label: "Image Source", name: "imgSrc", type: "text" },
                                    { label: "Alt Text", name: "altText", type: "text" },
                                    { label: "Title", name: "title", type: "text" },
                                    { label: "Description", name: "description", type: "textarea" },
                                    { label: "Note", name: "note", type: "text" },
                                    { label: "Link", name: "link", type: "text" }
                                ].map((field) => (
                                    <div key={field.name} className="mb-4">
                                        <label className="block text-gray-700 text-sm font-semibold mb-1">
                                            {field.label}
                                        </label>
                                        {field.type === "textarea" ? (
                                            <textarea
                                                name={field.name}
                                                value={userdata[field.name]}
                                                onChange={handleChange}
                                                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                rows="3"
                                            />
                                        ) : (
                                            <input
                                                type={field.type}
                                                name={field.name}
                                                value={userdata[field.name]}
                                                onChange={handleChange}
                                                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        )}
                                    </div>
                                ))}
                                <div className="flex justify-end gap-2">
                                    <button
                                        type="button"
                                        className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
                                        onClick={() => setShowForm(false)}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition"
                                    >
                                        Add Course
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                {/* Courses List */}
                <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-6">
                    Courses
                </h2>
                {filteredCourses.length === 0 ? (
                    <p className="text-center text-gray-600">No courses found</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredCourses.map((course, index) => (
                            <div 
                                key={index} 
                                className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col transition-transform hover:scale-105"
                            >
                                <img
                                    src={course.imgSrc}
                                    alt={course.altText}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4 flex flex-col flex-grow">
                                    <h3 className="font-bold text-lg text-gray-800 mb-2">
                                        {course.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 flex-grow">
                                        {course.description}
                                    </p>
                                    <p className="font-semibold text-gray-700 mt-2">
                                        {course.note}
                                    </p>
                                    <div className="mt-4 flex justify-end gap-4">
                                        <button 
                                            onClick={() => router.push(course.link)}
                                            className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition"
                                        >
                                            View
                                        </button>
                                        <button 
                                            onClick={() => deleteCourse(course.title, course.link).then((res) => {
                                                if (res === "success") {
                                                    toast.success('Course Successfully Deleted!');
                                                    setRef(ref + 1);
                                                } else {
                                                    toast.error('Something went wrong!');
                                                }
                                            })}
                                            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <ToastContainer position="top-right" autoClose={3000} />
        </div>
        </div>
    );
};

export default Editcourse;

// "use client";
// import React, { useEffect, useState, useMemo } from "react";
// import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import { getinfodata } from "@/_action/getinfo";
// import { adminOverdata } from "@/_action/adminOverdata";
// import {updateapproval} from "@/_action/updateapproval";
// import { ToastContainer, toast } from 'react-toastify';
// import {addcourse} from "@/_action/addcourse";
// import { getCourses } from "@/_action/getcourses";
// import {deleteCourse} from "@/_action/deleteCourse";  


// const Editcourse = () => {
//     const router = useRouter();
//     const { data: session, status } = useSession();
//     // const [user, setUser] = useState({});
//     const [infodata, setInfodata] = useState(null);
//     const [overdata, setOverdata] = useState([]);
//     const[courses, setCourses] = useState([]);
//     const [ref, setRef] = useState(0);


//     useEffect(() => {
//         if (status === "unauthenticated") router.push("/auth");
//         else {
//             // setUser(session?.user);
//             getinfo(session?.user?.email);
//         }
//     }, [status, router]);

//     useEffect(() => {
//         if (infodata && Object.keys(infodata).length !== 0) {
//             validateAccess();
//         }
//     }, [infodata, router]);

//     useEffect(() => {
//       getcoursesdata();
//     },[router,ref]);

// const getcoursesdata = async () => {

//     const res = await getCourses();
//     setCourses(await JSON.parse(res));
//     console.log(courses);
// };


//     const validateAccess = async () => {
//         if (!infodata?.approved || !infodata?.admin) router.push("/");
//         else getOverdata();
//     };

//     const getinfo = async (email) => {
//         const res = await getinfodata(email);
//         setInfodata(JSON.parse(res));
//     };

//     const getOverdata = async () => {
//         const res = await adminOverdata();
//         setOverdata(JSON.parse(res));
//     };

    
    

//     const [showForm, setShowForm] = useState(false);
//     const [userdata, setUserdata] = useState({
//       imgSrc: "",
//       altText: "",
//       title: "",
//       description: "",
//       note: "",
//       link: ""
//     });

//     const handleChange = (e) => {
//       const { name, value } = e.target;
//       setUserdata({ ...userdata, [name]: value });
//     };

//     const handleSubmit = (e) => {
//       e.preventDefault();
//       // Add your form submission logic here
//       console.log(userdata);
      
//       setShowForm(false);
//     };

    


//     return (
//       <div className="p-6 bg-gray-100 min-h-screen">
//         <h1 className="text-3xl font-bold text-center text-gray-800">Edit course</h1>
//         <button 
//           className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
//           onClick={() => setShowForm(true)}
//         >
//           Add Course
//         </button>

//         {showForm && (
//           <div className="fixed inset-0 flex items-center  justify-center bg-black bg-opacity-50">
//             <div className="bg-white p-6 rounded shadow-lg w-full md:w-1/2 ">
//               <h2 className="text-2xl font-bold mb-4">Add Course</h2>
//               <form onSubmit={handleSubmit}>
//                 <div className="mb-4">
//                   <label className="block text-gray-700">Image Source</label>
//                   <input 
//                     type="text" 
//                     name="imgSrc" 
//                     value={userdata.imgSrc} 
//                     onChange={handleChange} 
//                     className="w-full p-2 border border-gray-300 rounded mt-1"
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label className="block text-gray-700">Alt Text</label>
//                   <input 
//                     type="text" 
//                     name="altText" 
//                     value={userdata.altText} 
//                     onChange={handleChange} 
//                     className="w-full p-2 border border-gray-300 rounded mt-1"
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label className="block text-gray-700">Title</label>
//                   <input 
//                     type="text" 
//                     name="title" 
//                     value={userdata.title} 
//                     onChange={handleChange} 
//                     className="w-full p-2 border border-gray-300 rounded mt-1"
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label className="block text-gray-700">Description</label>
//                   <textarea 
//                     name="description" 
//                     value={userdata.description} 
//                     onChange={handleChange} 
//                     className="w-full p-2 border border-gray-300 rounded mt-1"
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label className="block text-gray-700">Note</label>
//                   <input 
//                     type="text" 
//                     name="note" 
//                     value={userdata.note} 
//                     onChange={handleChange} 
//                     className="w-full p-2 border border-gray-300 rounded mt-1"
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label className="block text-gray-700">Link</label>
//                   <input 
//                     type="text" 
//                     name="link" 
//                     value={userdata.link} 
//                     onChange={handleChange} 
//                     className="w-full p-2 border border-gray-300 rounded mt-1"
//                   />
//                 </div>
//                 <div className="flex justify-end">
//                   <button 
//                     type="button" 
//                     className="mr-4 px-4 py-2 bg-gray-500 text-white rounded"
//                     onClick={() => setShowForm(false)}
//                   >
//                     Cancel
//                   </button>
//                   <button 
//                   onClick={()=>addcourse(userdata).then((res)=>{
//                     if(res === "success"){
//                         toast('Successfully Added!');
//                         console.log("success");
//                         setShowForm(false);
//                         setRef(ref+1);
//                     }
//                     else{
//                         toast('Something went wrong!');
//                         console.log("error", res);
//                     }})}
//                     type="submit" 
//                     className="px-4 py-2 bg-blue-500 text-white rounded"
//                   >
//                     Add course
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         )}

// <h2 className="text-3xl font-bold text-center text-gray-800"> Courses</h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {courses.map((course, index) => (
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
//                             <button onClick={()=>deleteCourse(course.title, course.link).then
//                               ((res)=>{
//                                 if(res === "success"){
//                                   toast('Successfully Deleted!');
//                                   console.log("success");
//                                   setRef(ref+1);
//                                 }
//                                 else{
//                                   toast('Something went wrong!');
//                                   console.log("error", res);
//                                 }
//                               }
//                               )
//                             } className="mt-3 ml-2 px-4 py-2 bg-red-600  text-white rounded-lg">
//                               Delete
//                             </button>
//                         </div>  
//                     </div>
//                 ))}
//             </div>

       

//         <ToastContainer />
//       </div>
//     );
// };

// export default Editcourse;


