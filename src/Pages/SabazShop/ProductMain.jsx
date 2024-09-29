import React from 'react'
import FiltersSidebar from './FiltersSidebar'
import ProductPage from './ProductPage'

const ProductMain = () => {
  return (
    <div className='flex mt-10'>
      <FiltersSidebar/>
      <ProductPage/>
    </div>
  )
}

export default ProductMain
