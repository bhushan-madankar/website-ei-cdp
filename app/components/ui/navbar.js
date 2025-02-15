import React from 'react'
import { FaRocket, FaCode, FaMoneyBillWave } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Link from 'next/link';
import 'flowbite' 


import { useRouter } from 'next/navigation'
import { useSession, signIn, signOut } from "next-auth/react"

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { data: session } = useSession()
    console.log(session)
    const [img, setImg] = useState('xfv')

    const router = useRouter();

    React.useEffect(() => {
      if (session) {
        setImg(session?.user?.image)
      }
    }, [session, router])

  return (
    <div>
      

   
      {/* {session? <Link onClick={() => signOut()} href="/auth" className="py-2 text-gray-700
             hover:text-blue-500">Logout</Link> : <Link
              href="/auth" className="py-2 text-gray-700
              hover:text-blue-500">Signup</Link>} */}


      <nav className="bg-white shadow-md fixed w-full z-10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">API Hub</h1>
          <div className="hidden md:flex space-x-6">
          <Link href="/" className="py-2 text-gray-700 hover:text-blue-500">Home</Link>
            <Link href="#apis" className="py-2 text-gray-700 hover:text-blue-500">Features</Link>
            <Link href="#price" className="py-2 text-gray-700 hover:text-blue-500">Pricing</Link>
            {session? <div>
<button id="dropdownInformationButton" onClick={() => setMenuOpen(!menuOpen)}  type="button">
<img className='rounded-full border-2 border-violet-400' width={40} src={img} alt="" /> 
</button>

{/* dropdown */}
<div id="dropdownInformation" className={`z-10 ${menuOpen ? 'block' : 'hidden'} absolute right-2 text-white bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg shadow-sm w-44 `}>
    <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
      <div>{session?.user?.name}</div>
      <div className="font-medium truncate">{session?.user?.email}</div>
    </div>
    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformationButton">
      <li>
        <Link href="/dashboard" className="block px-2 py-1  hover:font-semibold text-white">Dashboard</Link>
      </li>
      {/* <li>
        <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</Link>
      </li>
      <li>
        <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</Link>
      </li> */}
    </ul>
    <div className="py-2">
      <Link href="#" onClick={() => signOut()} className="block px-2 py-1  hover:font-semibold text-white">Sign out</Link>
    </div>
</div>
</div>
 : <Link
              href="/auth" className="py-2 text-gray-700
              hover:text-blue-500">Signup</Link>}
            {/* <Link href="/auth" className="py-2 text-gray-700 hover:text-blue-500">Login</Link> */}
          </div>
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700 text-2xl">
              {!session ? (!menuOpen? <HiMenu /> : <HiX />): (menuOpen ? <HiX /> : <img className='rounded-full border-2 border-violet-400' width={40} src={session?.user?.image} alt="" />)}
              
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white shadow-md flex flex-col items-center py-4">
            <Link href="/" className="py-2 text-gray-700 hover:text-blue-500">Home</Link>
            <Link href="/dashboard" className="py-2 text-gray-700 hover:text-blue-500">Dashboard</Link>
            <Link href="#apis" className="py-2 text-gray-700 hover:text-blue-500">Features</Link>
            <Link href="#price" className="py-2 text-gray-700 hover:text-blue-500">Pricing</Link>
            {session? <Link onClick={() => signOut()} href="/auth" className="py-2 text-gray-700
             hover:text-blue-500">Logout</Link> : <Link
              href="/auth" className="py-2 text-gray-700
              hover:text-blue-500">Signup</Link>}
            {/* <Link href="/auth" className="py-2 text-gray-700 hover:text-blue-500">Login</Link> */}
          </div>
        )}
      </nav>


    </div>
  )
}

export default Navbar
