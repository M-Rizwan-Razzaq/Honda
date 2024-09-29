import React from 'react';
import { FaFacebookF,FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import teamMembers from '../TeamData';
import { Link } from 'react-router-dom';

const TeamSection = () => {
    // Function to stop propagation for social media icon clicks
    const handleIconClick = (event) => {
        event.stopPropagation();
    };

    return (
        <section className="bg-white py-24">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-8 gap-y-16">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="flex flex-col bg-gray-100 rounded-lg shadow-md overflow-hidden">
                            <Link to={`/teamdisplay/${member.id}`} className="relative flex-1">
                                <img
                                    src={member.imgSrc}
                                    alt={member.name}
                                    className="w-full h-72 object-cover"
                                />
                                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-1000 cursor-pointer">
                                    <div className='w-56 mt-72 h-56 rounded-full bg-white transform hover:scale-105 duration-300 transition-all'>
                                        <div className="flex justify-center space-x-4 mt-6 id-1">
                                            <Link 
                                                to={member.socialLinks.facebook} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                onClick={handleIconClick} // Prevent navigation
                                            >
                                                <FaFacebookF className='hover:text-[#C32735] h-5 w-5' />
                                            </Link>
                                            <Link 
                                                to={member.socialLinks.FaGithub} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                onClick={handleIconClick} // Prevent navigation
                                            >
                                                <FaGithub className='hover:text-[#C32735] w-5 h-5' />
                                            </Link>
                                            <Link 
                                                to={member.socialLinks.instagram} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                onClick={handleIconClick} // Prevent navigation
                                            >
                                                <FaInstagram className='hover:text-[#C32735] h-5 w-5' />
                                            </Link>
                                            <Link 
                                                to={member.socialLinks.linkedin} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                onClick={handleIconClick} // Prevent navigation
                                            >
                                                <FaLinkedinIn className='hover:text-[#C32735] h-5 w-5' />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <div className="cursor-pointer p-4 w-60 ml-6 bg-white absolute mt-60 shadow-xl rounded-md text-center group transition-all">
                                <div className="relative z-10">
                                    <h3 className="text-xl font-semibold mb-2 group-hover:text-white">
                                        <Link to={member.profileLink} className="text-black group-hover:text-white">
                                            {member.name}
                                        </Link>
                                    </h3>
                                    <p className="text-[#C32735] group-hover:text-white">{member.position}</p>
                                </div>
                                <span className="absolute inset-0 bg-[#C32735] transform scale-x-0 origin-center transition-transform duration-500 ease-in-out group-hover:scale-x-100 rounded-md"></span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
