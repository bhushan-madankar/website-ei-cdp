import React from 'react';

const page2 = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-gradient-to-r from-pink-200 to-pink-100">
      <div className="flex gap-20 w-full h-full justify-center items-center">
        {/* Skill Boxes */}
        <div className="flex flex-col items-center gap-10">
          <div className="bg-yellow-400 p-10 rounded-2xl text-center font-bold text-2xl w-72 shadow-lg transition-transform transform hover:scale-105">
            Technical Skills
          </div>
          <div className="w-2 h-20 bg-gray-500 rounded-full"></div>
          <div className="bg-yellow-400 p-10 rounded-2xl text-center font-bold text-2xl w-72 shadow-lg transition-transform transform hover:scale-105">
            Social Skills
          </div>
        </div>

        {/* Tips Section */}
        <div className="bg-gray-300 p-10 rounded-2xl w-96 text-xl shadow-lg">
          <h3 className="font-bold mb-5 text-3xl text-gray-700 border-b-2 pb-2">Reviews and Tips</h3>
          <ul className="list-none space-y-3">
            <li className="font-semibold text-gray-800 flex items-center gap-2">
              <span className="text-yellow-500 text-xl">✔</span> Be Active and Engaged
            </li>
            <li className="font-semibold text-gray-800 flex items-center gap-2">
              <span className="text-yellow-500 text-xl">✔</span> Apply What You Learn
            </li>
            <li className="font-semibold text-gray-800 flex items-center gap-2">
              <span className="text-yellow-500 text-xl">✔</span> Build a Network
            </li>
            <li className="font-semibold text-gray-800 flex items-center gap-2">
              <span className="text-yellow-500 text-xl">✔</span> Stay Consistent
            </li>
            <li className="font-semibold text-gray-800 flex items-center gap-2">
              <span className="text-yellow-500 text-xl">✔</span> Focus on Holistic Growth
            </li>
            <li className="font-semibold text-gray-800 flex items-center gap-2">
              <span className="text-yellow-500 text-xl">✔</span> ....
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default page2;