import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
   return (
      <section className='flex justify-between bg-blue-600 text-white p-2 items-center'>
         <div>
            <NavLink to="/">StoreFront</NavLink>
         </div>
         <div className='space-x-9'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/About">About</NavLink>
            <NavLink to="/ShoppingCart">ShoppingCart</NavLink>
            <NavLink to="/Product">Product</NavLink>
            <NavLink to="/ProductDetails">ProductDetails</NavLink>
         </div>
         <div>
            <NavLink>
               <input type="text" name="" id="" placeholder='Search product.......' className='rounded-lg p-2 bg-gray-400' />
            </NavLink>
         </div>
      </section>
   )
}

export default NavBar