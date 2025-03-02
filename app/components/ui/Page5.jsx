import React from 'react';

// Replace with the actual image URL or import from assets
const image = 'path_to_your_image.png';

const Page5 = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-blue-100">
      {/* Floating Images Section */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="flex justify-center items-center">
           <img
  src="data:image/jpeg;base64,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"
  alt="Engineering India"
  className="w-28 h-28 rounded-full border-2 border-blue-500 shadow-lg"
/>

          </div>
        ))}
      </div>

      {/* SVG Background Wave */}
      <svg className="absolute inset-0 w-full h-full -z-10" viewBox="0 0 1440 320">
        <path
          fill="rgba(255, 255, 255, 0.1)"
          d="M0,256L30,245.3C60,235,120,213,180,202.7C240,192,300,192,360,202.7C420,213,480,235,540,240C600,245,660,235,720,229.3C780,224,840,224,900,218.7C960,213,1020,203,1080,192C1140,181,1200,171,1260,162.7C1320,154,1380,148,1410,145.3L1440,144L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320H0Z"
        ></path>
      </svg>

      {/* Text and Button Section */}
      <div className="text-center mt-8 px-6">
        <h1 className="text-5xl font-bold text-gray-800">Engineering India</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          At Engineering India, unity is our strength. With teams across various engineering colleges, 
          we collaborate, share knowledge, and work on groundbreaking projects as one unified force. 
          Despite being in different locations, our teamwork drives innovation, fosters growth, and creates real-world impact. 
          Together, we learn, build, and shape the future of engineering! 🚀
        </p>
        <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Read more ➔
        </button>
      </div>
    </div>
  );
};

export default Page5;
