import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaCheckCircle, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import logo from '../../assets/.images/ahs.png';
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">

        {/* Header Section within Footer */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8 space-y-6 lg:space-y-0">

          {/* Company Logo */}
          <div className="flex justify-center lg:justify-start">
            <img src='./images/ahs.png' alt="Company Logo" className="w-20 h-20 object-contain   cursor-pointer transition-transform transform hover:scale-105" />
          </div>

          {/* Call Option */}
          <div className="flex justify-center  cursor-pointer lg:justify-start items-center space-x-4">
            <div className="bg-blue-600 p-3 rounded-full">
              <FaPhoneAlt />
            </div>
            <div>
              <h4 className="text-lg font-semibold">Call Us</h4>
              <p className="text-sm">+92 300-0646444</p>
            </div>
          </div>

          {/* Email Option */}
          <div className="flex justify-center cursor-pointer lg:justify-start items-center space-x-4">
            <div className="bg-green-600 p-3 rounded-full">
              <FaEnvelope />
            </div>
            <div>
              <h4 className="text-lg font-semibold">Email Us</h4>
              <p className="text-sm">alshamashonda@hotmail.com</p>
            </div>
          </div>

          {/* Location Option */}
          <div className="flex justify-center cursor-pointer lg:justify-start items-center space-x-4">
            <div className="bg-[#C32735] p-3 rounded-full">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h4 className="text-lg font-semibold">Our Location</h4>
              <p className="text-sm">2-A Muhammadi Road, Arifwala, Pakistan, 57450</p>
            </div>
          </div>
        </div>
        {/* Footer Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
          {/* About Company */}
          <div>
          <h4 className="text-xl font-semibold mb-4">ABOUT AL SHAMS HONDA CENTER</h4>
<p className="mb-4">
  At Al Shams Honda Center, we are dedicated to providing expert motorbike services to ensure your bike runs smoothly and efficiently. Our skilled technicians specialize in maintenance, repairs, and a comprehensive selection of motorbike parts for all makes and models. Trust us to keep your bike in top condition while delivering the best parts and services in Arifwala.
</p>

            <div className="flex space-x-4">
              <Link to="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="bg-blue-600 p-2 rounded-full">
                <FaFacebookF />
              </Link>
              <Link to="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="bg-blue-400 p-2 rounded-full">
                <FaTwitter />
              </Link>
              <Link to="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="bg-pink-600 p-2 rounded-full">
                <FaInstagram />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">QUICK LINKS</h4>
            <ul className="space-y-2">
              <li><Link to="/home" className="hover:text-[#C32735]">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#C32735]">About</Link></li>
              <li><Link to="/services" className="hover:text-[#C32735]">Services</Link></li>
              {/* <li><Link to="/blogs" className="hover:text-[#C32735]">Blogs</Link></li> */}
              <li><Link to="/projects" className="hover:text-[#C32735]">Projects</Link></li>
              <li><Link to="/contact" className="hover:text-[#C32735]">Contact</Link></li>
            </ul>
          </div>

        {/* Motorbike Services */}
<div>
  <h4 className="text-xl font-semibold mb-4">MOTORBIKE SERVICES</h4>
  <ul className="">
    <Link to="/services"> 
      <li className="flex items-center cursor-pointer">
        <FaCheckCircle className="text-[#C32735] mr-2 cursor-pointer" /> Routine Maintenance
      </li>
    </Link>
    <Link to="/services"> 
      <li className="flex items-center cursor-pointer">
        <FaCheckCircle className="text-[#C32735] mr-2 cursor-pointer" /> Major Repairs
      </li>
    </Link>
    <Link to="/services"> 
      <li className="flex items-center cursor-pointer">
        <FaCheckCircle className="text-[#C32735] mr-2 cursor-pointer" /> Motorbike Parts
      </li>
    </Link>
    <Link to="/services"> 
      <li className="flex items-center cursor-pointer">
        <FaCheckCircle className="text-[#C32735] mr-2 cursor-pointer" /> Expert Repairs
      </li>
    </Link>
    <Link to="/services"> 
      <li className="flex items-center cursor-pointer">
        <FaCheckCircle className="text-[#C32735] mr-2 cursor-pointer" /> Comprehensive Services
      </li>
    </Link>
  </ul>
</div>

{/* Recent Posts */}
<div>
  <h4 className="text-xl font-semibold mb-4">RECENT POSTS</h4>
  <ul className="space-y-4">
    <li>
      <Link to="/post1" className="hover:text-[#C32735]">
        How to Maintain Your Motorbike
      </Link>
      <p className="text-sm text-[#C32735]">August 15, 2024</p>
    </li>
    <li>
      <Link to="/post2" className="hover:text-[#C32735]">
        The Importance of Regular Bike Maintenance
      </Link>
      <p className="text-sm text-[#C32735]">August 10, 2024</p>
    </li>
    <li>
      <Link to="/post3" className="hover:text-[#C32735]">
        Choosing the Right Parts for Your Motorbike
      </Link>
      <p className="text-sm text-[#C32735]">August 5, 2024</p>
    </li>
  </ul>
</div>

        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-white">
          <p>Copyright &copy; 2024 MoterBike. All Rights Reserved by Muhammad Rizwan</p>
          <div className="flex justify-center space-x-4 mt-2">
            <Link to="/terms" className="hover:text-white">Terms & Conditions</Link>
            <Link to="/careers" className="hover:text-white">Careers</Link>
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
