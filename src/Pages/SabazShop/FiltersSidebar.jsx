import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FiltersSidebar = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [showAvailability, setShowAvailability] = useState(false);
  const [showPrice, setShowPrice] = useState(false);

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(16.67);

  return (
    <div className="p-4 w-full sm:w-64 bg-gray-100 sticky top-4 self-start">
      {/* Categories */}
      <div className="mb-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setShowCategories(!showCategories)}
        >
          <h2 className="font-bold">Categories</h2>
          {showCategories ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {showCategories && (
          <div className="pl-4 mt-2">
            <p>Category 1</p>
            <p>Category 2</p>
          </div>
        )}
      </div>

      {/* Availability */}
      <div className="mb-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setShowAvailability(!showAvailability)}
        >
          <h2 className="font-bold">Availability</h2>
          {showAvailability ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {showAvailability && (
          <div className="pl-4 mt-2">
            <div className="flex items-center">
              <input type="checkbox" id="inStock" className="mr-2" />
              <label htmlFor="inStock">In Stock (55)</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="outStock" className="mr-2" />
              <label htmlFor="outStock">Out of Stock (2)</label>
            </div>
          </div>
        )}
      </div>

      {/* Price */}
      <div className="mb-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setShowPrice(!showPrice)}
        >
          <h2 className="font-bold">Price</h2>
          {showPrice ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {showPrice && (
          <div className="pl-4 mt-2">
            <div className="flex flex-col space-y-2 mb-2">
              <input
                type="range"
                min={0}
                max={16.67}
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="w-full"
              />
              <input
                type="range"
                min={0}
                max={16.67}
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="flex justify-between">
              <input
                type="text"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="border p-1 w-full mr-2"
              />
              <input
                type="text"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="border p-1 w-full"
              />
            </div>
            <button className="bg-black text-white p-2 mt-2 w-full">
              Apply
            </button>
          </div>
        )}
      </div>

      {/* Featured Products */}
      <div>
        <h2 className="font-bold">Featured Products</h2>
        <div className="mt-2">
          <div className="bg-gray-200 h-24 mb-2">Product 1</div>
          <div className="bg-gray-200 h-24">Product 2</div>
        </div>
      </div>
    </div>
  );
};

export default FiltersSidebar;
