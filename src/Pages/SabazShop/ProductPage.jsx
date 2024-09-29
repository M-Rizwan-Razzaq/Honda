import { useState } from 'react';
import { FaThList, FaRegEye } from 'react-icons/fa';
import { FaGripLinesVertical } from 'react-icons/fa6';
import { VscThreeBars } from 'react-icons/vsc';
import { IoReorderFour } from 'react-icons/io5';
import { CiHeart } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import Allproduct from '../AllProducts/AllProducts'; // Import the product data

const ProductPage = () => {
  const [viewMode, setViewMode] = useState('grid4'); // Default to grid4
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [sortOption, setSortOption] = useState('featured');
  const [hoveredItem, setHoveredItem] = useState(null);

  const getGridColumns = () => {
    switch (viewMode) {
      case 'grid1':
        return 'grid-cols-1';
      case 'grid2':
        return 'grid-cols-1 sm:grid-cols-2';
      case 'grid3':
        return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3';
      case 'grid4':
        return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-4';
      default:
        return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-4';
    }
  };

  const handleMouseEnter = (id) => {
    setHoveredItem(id);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const handleAddToCart = (product) => {
    console.log('Add to cart:', product);
  };

  const handleAddToWishlist = (product) => {
    console.log('Add to wishlist:', product);
  };

  return (
    <div className="container mx-auto px-2 sm:px-4 md:px-8 lg:px-16"> {/* Responsive padding */}
      <div className="flex justify-between items-center mb-4 flex-wrap">
        {/* View Options */}
        <div className="flex space-x-2 mb-2 sm:mb-0">
          <button
            onClick={() => setViewMode('grid1')}
            className={`p-2 border ${viewMode === 'grid1' ? 'bg-gray-200' : ''}`}
          >
            <FaThList size={20} />
          </button>
          <button
            onClick={() => setViewMode('grid2')}
            className={`p-2 border ${viewMode === 'grid2' ? 'bg-gray-200' : ''}`}
          >
            <FaGripLinesVertical size={20} />
          </button>
          <button
            onClick={() => setViewMode('grid3')}
            className={`p-2 border ${viewMode === 'grid3' ? 'bg-gray-200' : ''}`}
          >
            <VscThreeBars className='rotate-90' size={20} />
          </button>
          <button
            onClick={() => setViewMode('grid4')}
            className={`p-2 border ${viewMode === 'grid4' ? 'bg-gray-200' : ''}`}
          >
            <IoReorderFour className='rotate-90' size={20} />
          </button>
        </div>

        {/* Items Per Page */}
        <div className="mb-2 sm:mb-0">
          <label className="mr-2">Items per page</label>
          <select
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(parseInt(e.target.value))}
            className="border rounded p-2"
          >
            <option value={20}>20</option>
            <option value={40}>40</option>
            <option value={60}>60</option>
          </select>
        </div>

        {/* Sort Options */}
        <div>
          <label className="mr-2">Sort by</label>
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="border rounded p-2"
          >
            <option value="featured">Featured</option>
            <option value="price_low_high">Price: Low to High</option>
            <option value="price_high_low">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Product Grid/List */}
      <div className={`grid gap-4 ${getGridColumns()}`}>
        {Allproduct.slice(0, itemsPerPage).map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className='relative border p-4 rounded-lg transition-all hover:shadow-lg'
            onMouseEnter={() => handleMouseEnter(product.id)}
            onMouseLeave={handleMouseLeave}
          >
            {/* Image */}
            <div>
              <img
                src={hoveredItem === product.id && product.image2 ? product.image2 : product.image}
                alt={product.name}
                className='w-full h-60 object-cover mb-2 sm:h-80 md:h-96' // Responsive image height
                style={{ transition: '0.3s' }}
              />
            </div>

            {/* Hovered Content */}
            {hoveredItem === product.id && (
              <div className='absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white p-4 bg-opacity-75 bg-black'>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleAddToCart(product);
                  }}
                  className='bg-white text-black px-8 py-2 rounded-lg mb-2 flex items-center justify-center'
                >
                  <FaRegEye size={25} className='inline-block mr-2' /> View
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleAddToWishlist(product);
                  }}
                  className='bg-white text-black px-8 py-2 rounded-lg flex items-center justify-center'
                >
                  <CiHeart size={30} className='inline-block mr-2' /> Wishlist
                </button>
                <button
                  className='bg-white border-2 border-black text-black w-full font-bold text-lg py-3 rounded-lg mt-12 shadow-lg hover:bg-black hover:text-white transition-colors'
                  onClick={(e) => {
                    e.preventDefault();
                    handleAddToCart(product);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            )}

            {/* Product Details */}
            <div className='text-center mt-2'>
              <h1 className="text-base md:text-lg">{product.title}</h1>
              <h2 className='text-lg font-semibold md:text-xl'>{product.name}</h2>
              <div className='flex space-x-2 justify-center'>
                <p className='text-lg text-gray-700'>${product.new_price}</p>
                <p className='text-lg text-red-700 line-through'>${product.old_price}</p>
              </div>
              <h2>{product.size}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
