import React from 'react'
import { useRouter } from 'next/navigation'
import "@/app/style.css"



const Einavbar = () => {

 const router = useRouter();

  return (
    <div>
      <div className="header1">
        <div className="logo cursor-pointer"
         onClick={() => router.push("/")}
        >
          <h1>
            ENGINEERING <br />
            <span>INDIA</span>
          </h1>
        </div>
        <div className="vidarbha-vaibhav cursor-pointer"
        onClick={() => router.push("/")}
        >
          <img
            src="https://th.bing.com/th/id/OIP.8KVB8w-ZihXjOg3jdKTe7gAAAA?rs=1&pid=ImgDetMain" width="150"
            alt="Vidarbha Vaibhav"
          />
        </div>
      </div>
    </div>
  )
}

export default Einavbar
