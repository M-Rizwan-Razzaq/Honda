import React from 'react';
// import TeamTop from '../../assets/images/teamTop.png';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom';


const ProjectsTitle = () => {
  return (
    <>
        <div
      className='flex items-center justify-center text-white h-[400px] md:h-[400px] lg:h-[400px]'
      style={{
        backgroundImage: `url(${T`./images/teamTop.png`})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center left', 
      }}
    >
      <div className='text-center px-4 md:px-8'>
        <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl mb-4'>Projects</h1>
        <div className='flex justify-center items-center text-lg md:text-xl lg:text-2xl'>
          <Link to="/home" >Home</Link>
          <MdKeyboardDoubleArrowRight className='h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 mx-2' />
          <h1 className='cursor-pointer'>Projects</h1>
        </div>
      </div>
    
    </div>
 
    </>

  );
}

export default ProjectsTitle;
