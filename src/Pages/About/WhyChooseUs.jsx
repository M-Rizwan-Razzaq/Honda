import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';


const WhyChooseUs = () => {
  const listItems = [
    "Expert Technicians",
    "Comprehensive Repairs",
    "Genuine Parts Supply",
    "24/7 Support",
    "Customer Satisfaction",
    "Affordable Services",
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-8 bg-white">
      {/* Left side: Content */}
      <div className="w-full lg:w-1/2 lg:pr-12">
        <h4 className="flex items-center text-lg font-semibold text-gray-700 mb-4">
          <FaCheckCircle className="text-[#C32735] mr-2" /> WHY CHOOSE AL SHAMS HONDA CENTER
        </h4>
        <h1 className="lg:text-6xl md:text-3xl font-bold mb-6">
          We Provide Reliable Motorbike Services
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          At Al Shams Honda Center, we are committed to delivering top-notch motorbike services that ensure your bike runs smoothly and efficiently.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {listItems.map((item, index) => (
            <li key={index} className="flex items-center text-lg text-gray-700">
              <FaCheckCircle className="text-[#C32735] mr-2" /> {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Right side: Responsive Image with fixed size */}
      <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
        <img
          src='./images/alshams onda.jpg' // Ensure this image represents motorbike services
          alt="Why Choose Al Shams Honda Center"
          className="w-full max-w-sm h-auto object-cover rounded-3xl shadow-lg shadow-gray-500"
        />
      </div>
    </div>
  );
};

export default WhyChooseUs;
