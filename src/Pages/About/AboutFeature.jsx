import React from 'react';
import { FaTools, FaCertificate } from 'react-icons/fa';
// import imgContact from '../../assets/.images/working.webp'; // Ensure this image represents motorbike services

const AboutFeature = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-8 bg-white">
      {/* Left side: Wave border image */}
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0 flex justify-center lg:justify-start">
        <div className="relative overflow-hidden rounded-lg shadow-md w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
          <img
            src='./images/working.webp' // Make sure this image is relevant to motorbike services
            alt="Motorbike Services"
            className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
          />
        </div>
      </div>

      {/* Right side: Content */}
      <div className="w-full lg:w-1/2">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6">
          Expert Motorbike Services for Your Needs
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          At Al Shams Honda Center, we are committed to providing exceptional motorbike maintenance and repair services. Our skilled technicians ensure your bike runs smoothly and efficiently, keeping you safe on the road.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="relative flex items-center border-2 justify-center px-6 py-3 text-white text-lg font-semibold rounded-lg shadow overflow-hidden group">
            <FaCertificate className="mr-2 relative z-10 text-black group-hover:text-white" />
            <span className="relative text-black z-10 group-hover:text-white">Certified Technicians</span>
            <span className="absolute inset-0 bg-[#C32735] transition-all duration-500 ease-in-out transform scale-x-0 origin-center group-hover:scale-x-100"></span>
          </button>

          <button className="relative flex items-center border-2 justify-center px-6 py-3 text-white text-lg font-semibold rounded-lg shadow overflow-hidden group">
            <FaTools className="mr-2 relative z-10 text-black group-hover:text-white" />
            <span className="relative text-black z-10 group-hover:text-white">Comprehensive Services</span>
            <span className="absolute inset-0 bg-[#C32735] transform scale-x-0 origin-center transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutFeature;
