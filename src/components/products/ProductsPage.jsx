import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const ProductsPage = () => {
  return (
    <div>
      <h1 className='text-center text-3xl font-semibold mb-6 pt-30'>Product Page</h1>

      <nav className="list-style-none flex gap-8 justify-center m-auto">
        <Link to="/products/men" className="text-black text-xl font-medium hover:text-gray-700">Men Products</Link>

        <Link to="/products/women" className="text-black text-xl font-medium hover:text-gray-700">Women Products</Link>
      </nav>

      <Outlet /> 
    </div>
  )
}

export default ProductsPage
