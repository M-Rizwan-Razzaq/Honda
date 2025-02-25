import React from 'react';
// import bgimg from '../../assets/.images/cta_bg_png.jpg'; // Ensure this image is relevant to motorbikes
import { MdOutlineContactless } from "react-icons/md";
import { Link } from 'react-router-dom';

const ContactSec = () => {
  return (
    <div 
      className='w-full py-9 font-serif flex items-center justify-center'
      style={{ 
        backgroundImage: `url(${`./images/cta_bg_png.jpg`})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
      }} 
    >
      <div className='max-w-4xl w-full flex flex-col items-center text-center space-y-6 px-4'>
        <div className='flex items-center justify-center text-[#C32735] text-3xl gap-2'>
          <MdOutlineContactless size={25} className='mt-1' />
          <h3>Contact Us</h3>
        </div>
        <h1 className='text-3xl sm:text-4xl text-white font-bold'>Need Expert Motorbike Services?</h1>
        <h2 className='text-2xl sm:text-3xl text-[#C32735]'>We're Here to Help!</h2>
        <Link to='/contact' className="w-40 py-2 text-black hover:text-white bg-white rounded-2xl relative overflow-hidden group">
          <span className="relative z-10">Get in Touch</span>
          <span className="absolute inset-0 bg-[#C32735] transform scale-x-0 origin-center transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
        </Link>
      </div>
    </div>
  );
}

export default ContactSec;
