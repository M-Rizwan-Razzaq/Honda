import React from 'react';
// import hero3 from '../../assets/.images/banner-1000-500-4.png';

const Hero3 = () => {
  return (
    <>
      <div className='w-full min-h-screen relative font-serif'>
        {/* Background Image with Reduced Opacity */}
        <div
          className='absolute inset-0'
          style={{
            backgroundImage: `url(${`./images/banner-1000-500-4.png`})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.5, // Adjust this value to reduce the opacity of the background image
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>

        {/* Content */}
        <div className='relative flex items-center justify-center py-16 w-full h-full text-white font-bold'>
        <div className='flex flex-col px-4 sm:px-8 lg:px-16 space-y-4 sm:space-y-6 lg:space-y-8 max-w-[90%] md:max-w-[70%]'>
  <h3 className='text-lg sm:text-xl lg:text-2xl'>
    Premium Bike Maintenance & Parts
  </h3>
  <h1 className='text-4xl sm:text-5xl lg:text-7xl'>
    The Best Solutions for Your Bike's Needs
  </h1>
  <p className='text-sm sm:text-lg lg:text-xl'>
    At Al Shams Honda Center, we expertly maintain your motorbike and offer high-quality spare parts to ensure it performs at its best. Trust us for efficient, reliable service.
  </p>
  <button className="w-32 sm:w-40 py-2 text-black hover:text-white bg-white rounded-2xl relative overflow-hidden group">
    <span className="relative z-10">Explore Services</span>
    <span className="absolute inset-0 bg-[#C32735] transform scale-x-0 origin-center transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
  </button>
</div>

        </div>

        {/* Wave SVG at the bottom */}
        <div className="absolute bottom-0 w-full overflow-hidden">
          <svg
            viewBox="0 0 1440 180"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <path
              fill="#fff"
              d="M0,120L60,140C120,160,240,200,360,180C480,160,600,80,720,100C840,120,960,200,1080,200C1200,200,1320,120,1380,90L1440,60L1440,180L1380,180C1320,180,1200,180,1080,180C960,180,840,180,720,180C600,180,480,180,360,180C240,180,120,180,60,180L0,180Z"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Hero3;
