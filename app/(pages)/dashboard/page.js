"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import { saveuserdata } from "@/_action/postuserdata";
import { getinfodata } from "@/_action/getinfo";
import { GrUserAdmin } from "react-icons/gr";
import Einavbar from "@/app/components/ui/einavbar";
import Allcourse from "@/app/components/ui/allcourse";
import Footer from "@/app/components/ui/footer";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { ToastContainer, toast } from 'react-toastify';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Loading Component
const LoadingSpinner = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-75 z-50">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
  </div>
);

// Main Dashboard Component
function Dashboard() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [infodata, setInfodata] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [isApproved, setIsApproved] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    college: "",
    degree: "",
    year: "",
    bio: "",
    branch: "",
    phoneNumber: "",
    address: "",
    properAddress: "",
  });

  // Input validation
  const validateForm = useCallback(() => {
    if (!formData.name.trim()) return "Name is required";
    if (!formData.college.trim()) return "College is required";
    if (!formData.degree.trim()) return "Degree is required";
    if (!/^\d{1}$/.test(formData.year.trim())) return "Year must be a digit number";
    if (!formData.branch.trim()) return "Branch is required";
    if (!/^\d{10}$/.test(formData.phoneNumber)) return "Phone number must be 10 digits";
    if (!formData.address.trim()) return "Address is required";
    if (!formData.properAddress.trim()) return "Proper address is required";
    return null;
  }, [formData]);

  // Authentication check
  useEffect(() => {
    if (status === "loading") return;
    if (status === "unauthenticated") {
      router.push("/auth");
      return;
    }
    setUser(session?.user);
    fetchUserInfo(session?.user?.email);
  }, [status, session, router]);

  // Fetch user info
  const fetchUserInfo = async (email) => {
    try {
      setIsLoading(true);
      const res = await getinfodata(email);
      const data = JSON.parse(res);
      setInfodata(data);
      verifyUserStatus(data);
    } catch (err) {
      setError("Failed to load user data");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  // Verify user status
  const verifyUserStatus = useCallback((data) => {
    // const requiredFields = ['address', 'college', 'degree', 'year', 'branch', 'phoneNumber', 'properAddress'];
    // const hasAllFields = requiredFields.every(field => data?.[field]);
      
        if  ( data?.address  && data?.collage && data?.degree && data?.year && data?.branch && data?.phoneNUmber && data?.properAddress) {
                  setShowForm(false);
                  
             }
              else {
                setShowForm(true);
              }

      setIsApproved(data?.approved || false);
      setIsAdmin(data?.admin || false);
      // setShowForm(!hasAllFields);
      // console.log("hasAllFields", hasAllFields);
      console.log("showForm", showForm);
    // if (hasAllFields) {
    //   setShowForm(false);
      
    // } else {
    //   setShowForm(true);
    // }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      setIsLoading(true);
      const res = await saveuserdata(session?.user?.email, {
        ...formData,
        // name: formData.name.replace(/[^\w\s]/gi, ''),
        phoneNumber: formData.phoneNumber.replace(/\D/g, ''),
      });

      if (res === "done") {
        await fetchUserInfo(session?.user?.email);
        toast.success("Data saved successfully! 🎉 Please wait up to 24 hours for approval.");
        setShowForm(false);
        
      }
    } catch (err) {
      setError("Failed to save data");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  if (status === "loading" || isLoading) return <LoadingSpinner />;

  return (
    <div className="relative min-h-screen">
       <ToastContainer />
      <Einavbar />
      <main className="">
        {isApproved  && !showForm && <Allcourse />}
        
        {showForm && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-40 overflow-auto p-4">
            <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
              <h2 className="text-2xl font-bold mb-4">User Information</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                {Object.entries(formData).map(([key, value]) => (
                  <div key={key}>
                    <label className="block text-gray-700 capitalize">{key.replace(/([A-Z])/g, ' $1')}</label>
                    <input
                      type={key === "phoneNumber" ? "tel" : "text"}
                      name={key}
                      value={value}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                      disabled={isLoading}
                      // maxLength={key === "phoneNumber" ? 10 : 300}
                    />
                  </div>
                ))}
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
                  disabled={isLoading}
                >
                  {isLoading ? "Submitting..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
        )}

        {!isApproved && !showForm && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-40">
            <div className="bg-white p-6 rounded-lg shadow-xl text-center">
              <h2 className="text-xl font-bold mb-4">Pending Approval</h2>
              <p className="mb-4">Your account is awaiting approval</p>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={() => router.push("/")}
              >
                OK
              </button>
            </div>
          </div>
        )}

        {isAdmin && (
          <button
            className="fixed right-4 top-20 bg-red-900 text-white p-3 rounded-full z-50 hover:bg-red-800"
            onClick={() => router.push("/admin")}
            title="Admin Panel"
          >
            <GrUserAdmin size={20} />
          </button>
        )}
      </main>
      {!showForm && isApproved  && <Footer />}
    </div>
  );
}

// Ensure proper default export
export default Dashboard;

