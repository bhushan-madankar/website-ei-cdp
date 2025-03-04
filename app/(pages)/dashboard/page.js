

"use client";

import Navbar from "@/app/components/ui/navbar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState , useMemo} from "react";
import { saveuserdata } from "@/_action/postuserdata";
import { getinfodata } from "@/_action/getinfo";
import { GrUserAdmin } from "react-icons/gr";
import Einavbar from "@/app/components/ui/einavbar";
import Allcourse from "@/app/components/ui/allcourse";
import Footer from "@/app/components/ui/footer";

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { v4 as uuidv4 } from 'uuid';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
    const router = useRouter();
    const { data: session, status } = useSession();
    const [user, setUser] = useState({});
    const [infodata, setInfodata] = useState({});
    const [showForm, setShowForm] = useState(false);
    

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/auth");
        } else {
            setUser(session?.user);
            getinfo(session?.user?.email).then(() => {
              // console.log("hello "+res);
                // if (res) {
                    // varifi();
                // }
            });
            
        }
    }, [status, router]);
    useEffect(() => {
        varifi();
       
    }, [infodata, router]);

    const varifi = async () => {
      if  (await infodata?.address  && infodata?.collage && infodata?.degree && infodata?.year && infodata?.branch && infodata?.phoneNUmber && infodata?.properAddress) {
            setShowForm(false);
            if (infodata?.approved === false) {
              setAppove(true);
                // router.push("/");
            }
            if(infodata?.admin === true){
              setAdmin(true);
            }
            
        } else if (infodata?.approved === false) {
            // Show form to fill up as per given schema
            // setShowForm(true);
            
            
              setShowForm(true);
             }
             else {
              setShowForm(false);
             }

    };

    const getinfo = async (email) => {
        const res = await getinfodata(email);
        const data = JSON.parse(res);
        setInfodata(data);
        
        
        // console.log("sdfv ===="+res);
    };

       
    const [formData, setFormData] = useState({
        name: "",
        college: "",
        degree: "",
        year: "",
        bio: "",
        branch: "",
        phoneNumber: "",
        address: "",
        properAddress: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        saveuserdata(session?.user?.email, formData).then((res) => {
            if (res === "done") {
                setShowForm(false);
                window.location.reload();
            }
    });
        console.log(formData);
        // Add your form submission logic here
    };

    const [appove, setAppove] = useState(false);
    const [admin , setAdmin] = useState(false);

    return (
      <div className="relative">
        <Einavbar />
        <div className="">
        {!appove && <Allcourse></Allcourse>}
        </div>

  <div>
      
        {showForm && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 overflow-auto">
            <div className="bg-white mt-96 mb-4 p-6 rounded shadow-md w-full max-w-lg">
              <h2 className="text-2xl font-bold mb-4">User Information</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700">Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">College</label>
                  <input type="text" name="college" value={formData.college} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Degree</label>
                  <input type="text" name="degree" value={formData.degree} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Year</label>
                  <input type="text" name="year" value={formData.year} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Bio</label>
                  <textarea name="bio" value={formData.bio} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded"></textarea>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Branch</label>
                  <input type="text" name="branch" value={formData.branch} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Phone Number</label>
                  <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Address</label>
                  <input type="text" name="address" value={formData.address} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Proper Address</label>
                  <input type="text" name="properAddress" value={formData.properAddress} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Submit</button>
              </form>
            </div>
          </div>
        )}

    {appove && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-md text-center">
            <h2 className="text-xl font-bold mb-4">You are not an approved student</h2>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={() => router.push("/")}
            >
              OK
            </button>
          </div>
        </div>
      )}


{admin && (
  <div className=" z-50 right-3 fixed top-[15%] bg-red-900 text-white px-4 py-2 rounded cursor-pointer"
  onClick={
    () => router.push("/admin")
  }
  >
     <GrUserAdmin />
  </div>
)
 
}
</div>    
<Footer />
      </div>
    );
};

export default Dashboard;

