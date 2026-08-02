import React from 'react'
import { useSearchParams } from 'react-router-dom'
import Product from '../component/Product'

const ShopPage = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category') || 'all';

  return (
    <>
      <div className="bg-gray-100 py-12 text-center">
        <h1 className="text-4xl font-bold">Shop</h1>
        <p className="text-gray-500 mt-2">
          Home / <span className="capitalize">{category === 'all' ? 'Shop' : category}</span>
        </p>
      </div>
      <Product initialCategory={category} showSearch={true} />
    </>
  )
}

export default ShopPage
