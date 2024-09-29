import React from 'react';
import { FaTools, FaMotorcycle, FaUsers, FaTrophy, FaSmile } from 'react-icons/fa';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const StatsFeature = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1, 
  });

  const items = [
    { icon: <FaMotorcycle size={30} />, title: 1500, description: 'Motorbikes Serviced' },
    { icon: <FaSmile size={30} />, title: 1200, description: 'Happy Customers' },
    { icon: <FaUsers size={30} />, title: 25, description: 'Expert Technicians' },
    { icon: <FaTrophy size={30} />, title: 10, description: 'Awards Won' },
  ];

  return (
    <div className="bg-[#C32735] w-[80%] mx-auto p-8 mt-6 rounded-lg" ref={ref}>
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-white">
            <div className="w-24 h-24 mb-4 flex items-center justify-center bg-white text-[#C32735] rounded-full">
              {item.icon}
            </div>
            <h2 className="text-4xl font-bold mb-2">
              {/* CountUp only starts when the component is in view */}
              {inView && <CountUp start={0} end={item.title} duration={3.5} />}
            </h2>
            <p className="text-lg">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsFeature;
