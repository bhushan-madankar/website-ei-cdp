import React from "react";

const Page2 = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-pink-100 p-4">
      <div className="flex gap-16 items-start">
        <div className="relative w-[300px] h-[420px] flex-shrink-0">

          <div className="absolute top-0 left-0">
            <TopSkillShape />
            <div className="absolute inset-0 flex items-center justify-center text-2xl font-semibold text-center">
              Technical Skills
            </div>
          </div>

          <div className="absolute bottom-0 left-0">
            <BottomSkillShape />
            <div className="absolute inset-0 flex items-center justify-center text-2xl font-semibold text-center">
              Social Skills
            </div>
          </div>

          <div className="absolute left-[-105px] top-1/2 -translate-y-1/2 flex items-center">
            <CurvedBracket />
            <span className="ml-4 text-gray-600 font-semibold whitespace-nowrap text-2xl font-bold">
              Coordinator Development Plan
            </span>
          </div>
        </div>

        <div>
        
          <h2 className="text-2xl font-semibold mb-4">Reviews and Tips:-</h2>
          <div className="bg-gray-200 p-6 rounded-lg shadow-md w-96">
            <ul className="divide-y divide-gray-300">
              <li className="py-2 font-medium">1. Be Active and Engaged</li>
              <li className="py-2 font-medium">2. Apply What You Learn</li>
              <li className="py-2 font-medium">3. Build a Network</li>
              <li className="py-2 font-medium">4. Stay Consistent</li>
              <li className="py-2 font-medium">5. Focus on Holistic Growth</li>
              <li className="py-2 font-medium">6. ....</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
const TopSkillShape = () => (
  <svg
    width="300"
    height="210"
    viewBox="0 0 300 210"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
   
    <path d="M0,0 H300 V120 C240,180 60,180 0,120 Z" fill="#FACC15" />
  </svg>
);

const BottomSkillShape = () => (
  <svg
    width="300"
    height="210"
    viewBox="0 0 300 210"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0,90 C60,30 240,30 300,90 V210 H0 Z" fill="#FACC15" />
  </svg>
);
const CurvedBracket = () => {
  return (
    <svg
      width="75"
      height="150"
      viewBox="0 0 75 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-gray-600"
    >
      <defs>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow
            dx="2"
            dy="2"
            stdDeviation="2"
            floodColor="rgba(0, 0, 0, 0.3)"
          />
        </filter>
      </defs>
      <path
        d="
          M45,0
          L60,15
          L45,30
          M60,15
          C0,52.5 0,97.5 60,135
          M45,120
          L60,135
          L45,150
        "
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        filter="url(#shadow)"
      />
    </svg>
  );
};

export default Page2;
