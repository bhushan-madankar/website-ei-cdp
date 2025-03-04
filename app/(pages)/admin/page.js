"use client";
import React, { useEffect, useState, useMemo } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { getinfodata } from "@/_action/getinfo";
import { adminOverdata } from "@/_action/adminOverdata";
import {updateapproval} from "@/_action/updateapproval";
import { ToastContainer, toast } from 'react-toastify';
import Einavbar from "@/app/components/ui/einavbar";


const AdminPage = () => {
    const router = useRouter();
    const { data: session, status } = useSession();
    // const [user, setUser] = useState({});
    const [infodata, setInfodata] = useState(null);
    const [overdata, setOverdata] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [showDetails, setShowDetails] = useState(null);

    useEffect(() => {
        if (status === "unauthenticated") router.push("/auth");
        else {
            // setUser(session?.user);
            getinfo(session?.user?.email);
        }
    }, [status, router]);

    useEffect(() => {
        if (infodata && Object.keys(infodata).length !== 0) {
            validateAccess();
        }
    }, [infodata, router]);

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

    const handleSearch = (e) => setSearchTerm(e.target.value);

    const filteredData = useMemo(() => {
        return overdata.filter(
            (item) =>
                item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.collage?.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm, overdata]);

    const toggleDetails = (id) => setShowDetails(showDetails === id ? null : id);

    const [changes, setChanges] = useState([]);

    const handleApproval = async (id, approved) => {
        // Add logic to handle approval/disapproval
        console.log(`User ${id} approval status: ${approved}`);
        const updatedOverdata = overdata.map(item => 
            item._id === id ? { ...item, approved } : item
        );
        setOverdata(updatedOverdata);

        const updatedItem = updatedOverdata.find(item => item._id === id);
        setChanges(prevChanges => [
            ...prevChanges,
            { email: updatedItem.email, approved }
        ]);
    };
    const update =()=>{
        updateapproval(changes).then((res)=>{
            if(res === "success"){
                toast('Successfully Update!');
                console.log("success");
                setChanges([]);
            }
            else{
                toast('Something went wrong!');
                console.log("error");
            }
    });

    } 

    return (
        <div>
            <Einavbar />
            <div className="p-6 bg-gray-100 min-h-screen">
                <h1 className="text-3xl font-bold text-center text-gray-800">Admin Dashboard</h1>
                <div className="flex justify-center items-center ">
                    <div>
                        <input
                            type="text"
                            placeholder="Search by name or college"
                            value={searchTerm}
                            onChange={handleSearch}
                            className="block w-full max-w-md mx-auto p-3 mt-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button 
                        onClick={update}
                        className="px-4 py-2 ml-4 p-3 mt-4 bg-teal-500 text-white hover:bg-teal-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                        Update
                    </button>
                    <button 
                        onClick={()=>router.push("/editcourse")}
                        className="px-4 py-2 ml-4 p-3 mt-4 bg-teal-500 text-white hover:bg-teal-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                        ADD COURSE
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div className="col-span-1 md:col-span-2 flex flex-col items-center space-y-4">
                        <h2 className="text-2xl font-bold text-center text-gray-800">User Data</h2>
                        {overdata.length === 0 ? (
                            <div className="flex justify-center items-center">
                                <div className="loader"></div>
                            </div>
                        ) : (
                            filteredData.map((item) => (
                                <div
                                    key={item._id}
                                    className="w-full bg-white p-6 shadow-md rounded-lg cursor-pointer hover:bg-gray-50"
                                >
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h2 className="text-lg font-semibold text-gray-700">{item.name}</h2>
                                            <p className="text-sm text-gray-600">College: {item.collage}</p>
                                            <p className="text-sm text-gray-600">Approved: {item.approved ? "Yes" : "No"}</p>
                                        </div>
                                        <div className="flex space-x-4">
                                            <button
                                                onClick={() => toggleDetails(item._id)}
                                                className="text-blue-500 hover:underline"
                                            >
                                                {showDetails === item._id ? "Hide Details" : "Show Details"}
                                            </button>
                                            <select
                                                className={`px-3 py-2 rounded-lg ${item.approved ? 'bg-teal-500 text-white' : 'bg-red-500 text-white'}`}
                                                onChange={(e) => handleApproval(item._id, e.target.value === 'approve')}
                                                value={item.approved ? 'approve' : 'disapprove'}
                                            >
                                                <option value="approve">Approve</option>
                                                <option value="disapprove">Disapprove</option>
                                            </select>
                                        </div>
                                    </div>
                                    {showDetails === item._id && (
                                        <div className="mt-4 space-y-2">
                                            <p><strong>Email:</strong> {item.email}</p>
                                            <p><strong>Username:</strong> {item.username}</p>
                                            <p><strong>Branch:</strong> {item.branch}</p>
                                            <p><strong>Degree:</strong> {item.degree}</p>
                                            <p><strong>Phone:</strong> {item.phoneNUmber}</p>
                                            <p><strong>Address:</strong> {item.address}</p>
                                            <p><strong>Proper Address:</strong> {item.properAddress}</p>
                                            <p><strong>Year:</strong> {item.year}</p>
                                            <p><strong>Admin:</strong> {item.admin ? "Yes" : "No"}</p>
                                            <p><strong>Created At:</strong> {new Date(item.createdAt).toLocaleString()}</p>
                                            <p><strong>Updated At:</strong> {new Date(item.updatedAt).toLocaleString()}</p>
                                        </div>
                                    )}
                                </div>
                            ))
                        )}
                    </div>
                    <div className="col-span-1 min-h-[10vh]">
                        <h2 className="text-2xl font-bold text-center text-gray-800">Changes</h2>
                        <div className="flex flex-col items-center mt-4 space-y-2 h-[100%] bg-white p-4 shadow-md rounded-lg">
                            {changes.map((change, index) => (
                                <div key={index} className="w-full max-w-md bg-white p-4 shadow-md rounded-lg">
                                    <p><strong>Email:</strong> {change.email}</p>
                                    <p><strong>Approved:</strong> {change.approved ? "Yes" : "No"}</p>
                                </div>
                            ))}
                            {changes.length === 0 && (
                                <p className="text-gray-500 flex justify-center items-center">No changes made yet</p>
                            )}
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default AdminPage;


