import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function EngineeringIndia() {
  // Array of positions for the 7 logos
  const logoPositions = [
    { top: "20%", left: "50%", zIndex: 3 },
    { top: "35%", left: "70%", zIndex: 2 },
    { top: "60%", left: "80%", zIndex: 2 },
    { top: "75%", left: "50%", zIndex: 3 },
    { top: "60%", left: "20%", zIndex: 2 },
    { top: "35%", left: "30%", zIndex: 2 },
    { top: "50%", left: "50%", zIndex: 4 },
  ]

  return (
    <div className="relative w-full min-h-[600px] bg-[#b3e6eb] overflow-hidden flex flex-col md:flex-row">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute border border-[#0a4b6e] rounded-full"
            style={{
              width: `${Math.random() * 60 + 40}%`,
              height: `${Math.random() * 60 + 40}%`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </div>

      {/* Left side with connected logos */}
      <div className="relative w-full md:w-1/2 h-[400px] md:h-auto">
        {/* Dotted connection lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path
            d="M50,20 L70,35 L80,60 L50,75 L20,60 L30,35 Z"
            fill="none"
            stroke="#0a4b6e"
            strokeWidth="0.5"
            strokeDasharray="5,5"
            className="opacity-70"
          />
          <path
            d="M50,20 L50,50"
            fill="none"
            stroke="#0a4b6e"
            strokeWidth="0.5"
            strokeDasharray="5,5"
            className="opacity-70"
          />
          <path
            d="M70,35 L50,50"
            fill="none"
            stroke="#0a4b6e"
            strokeWidth="0.5"
            strokeDasharray="5,5"
            className="opacity-70"
          />
          <path
            d="M80,60 L50,50"
            fill="none"
            stroke="#0a4b6e"
            strokeWidth="0.5"
            strokeDasharray="5,5"
            className="opacity-70"
          />
          <path
            d="M50,75 L50,50"
            fill="none"
            stroke="#0a4b6e"
            strokeWidth="0.5"
            strokeDasharray="5,5"
            className="opacity-70"
          />
          <path
            d="M20,60 L50,50"
            fill="none"
            stroke="#0a4b6e"
            strokeWidth="0.5"
            strokeDasharray="5,5"
            className="opacity-70"
          />
          <path
            d="M30,35 L50,50"
            fill="none"
            stroke="#0a4b6e"
            strokeWidth="0.5"
            strokeDasharray="5,5"
            className="opacity-70"
          />
        </svg>

        {/* Logos */}
        {logoPositions.map((position, index) => (
          <div
            key={index}
            className="absolute w-16 h-16 md:w-20 md:h-20 transform -translate-x-1/2 -translate-y-1/2"
            style={{
              top: position.top,
              left: position.left,
              zIndex: position.zIndex,
            }}
          >
            <div className="w-full h-full rounded-full border-2 border-white shadow-lg overflow-hidden bg-white">
              <div className="relative w-full h-full">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="Engineering India Logo"
                  width={80}
                  height={80}
                  className="object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="text-[#3a0ca3] font-bold text-[6px] md:text-[8px]">ENGINEERING</span>
                  <span className="text-[#e63946] font-bold text-[8px] md:text-[10px]">INDIA</span>
                  <div className="w-full h-1/3 bg-gradient-to-b from-[#FF9933] via-white to-[#138808] mt-1" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right side with content */}
      <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a4b6e] mb-6">Engineering India</h1>
        <p className="text-[#0a4b6e] mb-8 text-base md:text-lg">
          At Engineering India, unity is our strength. With teams across various engineering colleges, we collaborate,
          share knowledge, and work on groundbreaking projects as one unified force. Despite being in different
          locations, our teamwork drives innovation, fosters growth, and creates real-world impact. Together, we learn,
          build, and shape the future of engineering! 🚀
        </p>
        <Link
          href="#"
          className="inline-flex items-center justify-center gap-2 bg-[#0a4b6e] text-white px-6 py-3 rounded-md w-fit hover:bg-[#083a57] transition-colors"
        >
          Read more <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  )
}

