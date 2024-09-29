import React, { useEffect, useRef } from "react";
// import bgimg from "../../assets/./images/download (1).jpeg"; // Update with a relevant background image if needed
// import partImage from "../../assets/./images/download (1).jpeg"; // Placeholder for part ../../assets/images
// import { FaMotorcycle } from "react-icons/fa6"; // Example icon, replace if needed

const partsCategories = [
    { id: 1, name: "Engine Parts", description: "High-quality engine parts for all bike models", img: './images/download (1).jpeg' },
    { id: 2, name: "Brakes", description: "Durable and reliable brake systems", img: './images/download (1).jpeg' },
    { id: 3, name: "Tires", description: "Premium tires for smooth and safe rides", img: './images/download (1).jpeg' },
    { id: 4, name: "Suspension", description: "Top-notch suspension systems", img: './images/download (1).jpeg' },
    { id: 5, name: "Electrical Parts", description: "High-performance electrical components", img: './images/download (1).jpeg' },
    { id: 6, name: "Exhausts", description: "Enhanced exhaust systems for improved performance", img: './images/download (1).jpeg' },
    { id: 7, name: "Chains & Sprockets", description: "Durable chains and sprockets for bikes", img: './images/download (1).jpeg' },
    { id: 8, name: "Body Parts", description: "Stylish and sturdy bike body parts", img: './images/download (1).jpeg' },
];

const TopCategories = () => {
    const scrollRef = useRef(null);

    useEffect(() => {
        const scrollInterval = setInterval(() => {
            if (scrollRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
                const maxScrollLeft = scrollWidth - clientWidth;

                if (scrollLeft < maxScrollLeft) {
                    scrollRef.current.scrollBy({ left: clientWidth / 3, behavior: 'smooth' });
                } else {
                    scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                }
            }
        }, 3000);

        return () => clearInterval(scrollInterval);
    }, []);

    return (
        <div
            className="flex flex-col items-center w-full p-4"
            style={{
                backgroundImage: `url(${`./images/tit.png`})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <h3 className="text-lg font-bold mb-4 text-[#C32735]">Top Spare Parts Categories</h3>
            <h1 className="font-bold mb-4 text-white text-3xl">Bike Spare Parts</h1>
            <h1 className="font-bold mb-4 text-[#C32735] text-3xl">Available at Al Shams Honda Center</h1>
            <div className="flex overflow-x-auto space-x-4 w-full scrollbar-hide" ref={scrollRef}>
                {partsCategories.map((part, index) => (
                    <div
                        key={part.id}
                        className={`min-w-full sm:min-w-[300px] md:min-w-[350px] lg:min-w-[400px] p-4 bg-white rounded-lg shadow-md flex-shrink-0 opacity-0 animate-fadeInUp`}
                        style={{
                            animationDelay: `${index * 0.2}s`,
                        }}
                    >
                        <div className="flex justify-center">
                            <div className="bg-[#101A33] flex justify-center  w-[30%] h-28 mt-[-30px]">
                                <img
                                    src={part.img}
                                    alt={part.name}
                                    className=" object-cover rounded-md h-full"
                                />
                            </div>
                            {/* <div className="flex space-x-1 justify-end text-[#C32735]">
                                <FaMotorcycle size={24} />
                            </div> */}
                        </div>
                        <div className="text-center">
                            <h3 className="text-xl font-semibold text-[#C32735]">{part.name}</h3>
                            <p className="text-gray-600 px-4 max-w-[200px] sm:max-w-[250px] mx-auto">
                                {part.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopCategories;
