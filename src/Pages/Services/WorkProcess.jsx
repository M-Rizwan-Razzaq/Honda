import React, { useEffect } from 'react';
import { MdOutlineContactless } from "react-icons/md";
import { FaMotorcycle, FaTools, FaHeadset, FaCheckCircle } from "react-icons/fa"; // Added more icons
import AOS from 'aos';
import 'aos/dist/aos.css';

const Process = [
    {
        id: 1,
        no: "1",
        icon: <FaMotorcycle size={35} />,
        title: 'Client Needs Assessment',
        description: 'We prioritize understanding and addressing client requirements, ensuring their vision and goals are met with high-quality motorbike services.',
    },
    {
        id: 2,
        no: "2",
        icon: <FaTools size={35} />, // Different icon for innovation
        title: 'Innovative Techniques',
        description: 'We stay up-to-date with the latest motorbike technologies and industry trends, adopting innovative tools for top-notch service.',
    },
    {
        id: 3,
        no: "3",
        icon: <FaCheckCircle size={35} />, // Different icon for delivery
        title: 'Delivering Results',
        description: 'We invest in continuous training for our skilled technicians to enhance their expertise in motorbike maintenance and repairs.',
    },
    {
        id: 4,
        no: "4",
        icon: <FaHeadset size={35} />, // Different icon for customer support
        title: 'Customer Support & Maintenance',
        description: 'We provide excellent post-service support, addressing any issues promptly to ensure your motorbike remains functional and safe.',
    },
];

const WorkProcess = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <div className='w-full bg-[#F5F5F5] py-16'>
            <div className='container mx-auto px-4'>
                <div className='text-center mb-12'>
                    <div className='flex justify-center items-center font-bold text-[#C32735] text-xl gap-2 mb-4'>
                        <MdOutlineContactless size={25} />
                        <h3>Work Process</h3>
                    </div>
                    <h1 className='text-3xl font-bold'>
                        Transforming Service into <span className='text-[#C32735]'>"Service Excellence"</span>
                    </h1>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8' data-aos="fade-right">
                    {Process.map((item) => (
                        <div 
                            key={item.id} 
                            className='bg-[#FFFFFF] rounded-lg shadow-lg p-6 relative mb-8 group overflow-hidden'>
                            <div className='absolute top-[-23px] left-[-17px] bg-[#C32735] w-16 h-16 rounded-full text-white text-2xl font-semibold z-20 flex items-center justify-center shadow-lg group-hover:bg-white group-hover:text-black'>
                                {item.no}
                            </div>
                            
                            <div className='absolute inset-0 bg-[#202E4B] opacity-70 transition-transform duration-700 transform translate-y-full group-hover:translate-y-0 z-0'></div>
                            
                            <div className='flex flex-col items-center gap-4 pt-8 relative z-10 group-hover:text-white'>
                                <div className='text-[#C32735] group-hover:text-white'>
                                    {item.icon}
                                </div>
                                <h2 className='text-[17px] font-bold'>{item.title}</h2>
                                <p className='text-center'>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default WorkProcess;
