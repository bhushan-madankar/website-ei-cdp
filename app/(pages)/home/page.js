"use client";
import React,{useState} from "react";
// import Confetti from "js-confetti";
import "@/app/style.css";
import EiNavbar from "@/app/components/ui/einavbar";
import 'flowbite' 
// const confetti = new Confetti();
import { useRouter } from 'next/navigation'


import { useSession , signIn, signOut} from "next-auth/react"
import Link from "next/link";


const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { data: session } = useSession();
  const [drawerOpen] = React.useState(false);
const router = useRouter();
  return (
    <div className="container" style={{ backgroundColor: '#ffffff', transition: 'background-color 0.5s ease' }}>
      <EiNavbar></EiNavbar>

      <nav className="nav">
        <ul>
          <li><a href="#">About Engineering India</a></li>
          <li><a href="#">For 3rd Year</a></li>
          <li><a href="#">For 2nd Year</a></li>
          <li><a href="#">Brain-Storming</a></li>
          <li><a href="#">Spiritual Heritage</a></li>
          <li><a href="#">Social Heritage</a></li>
          <li className="relative">
              <img
                src="https://www.freeiconspng.com/uploads/settings-icon-29.png"
                alt="Settings"
                className="settings-icon cursor-pointer"
                onClick={() => setMenuOpen(!menuOpen)}
              />
               {menuOpen && (
        <div id="dropdown" className="z-20 absolute right-0 bg-white flex flex-col rounded-lg text-center shadow-lg w-44 animate-fade-in">
          <div className="py-2 text-sm text-gray " aria-labelledby="dropdownDefaultButton">
            <div
            onClick={() => router.push("/dashboard")}
            >
              <div className="block cursor-pointer px-4 py-2 hover:font-extrabold border-0 border-white ">Resources</div>
            </div>
            <div>
              <div className="block cursor-pointer px-4 py-2 hover:font-extrabold border-0 border-white ">About</div>
            </div>
            
            <div
            onClick={() => session? signOut(): router.push("/auth")}
            >
              <div className="block cursor-pointer px-4 py-2 hover:font-extrabold border-0 border-white ">{
              session? "Sign Out": "Sign In" }</div>
            </div>
            <div
            onClick={()=>setMenuOpen(!menuOpen)}
            >
              <div className="block cursor-pointer px-4 py-2 hover:font-extrabold border-0 border-white ">Close</div>
            </div>
          </div>
        </div>
      )}

          </li>
        </ul>
      </nav>

      <div className="content">
        <div className="flex">
          <div className="text-content">
            <div className="title">

            {session && (
                <div className="animated-text">
                  <h2 className="typing-animation ">Welcome {session?.user?.name}!</h2>
                  
                </div>
              )}

              <h1 className="typing-animation">Engineering India</h1>
              <p>Initiative</p>
              <h2>Co-ordinator Development Plan</h2>
              
            </div>
            {!session?  <button className="join-us" onClick={()=>router.push("./auth")}>JOIN US</button> : <button className="lets-go join-us" onClick={()=>router.push("./dashboard")}>Let's GO</button>}
          </div>
          <div className="image">
            <img
              src="https://decoderashish.com/images.png"
              alt="Engineering India Illustration"
            />
          </div>
        </div>

        <div className="think-nationally">
          <p>THINK NATIONALLY, ACT LOCALLY</p>
        </div>
      </div>

            

    </div>
  );
}
export default HomePage;

