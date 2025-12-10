import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
      <div className='flex text-xl justify-between bg-yellow-400 '>
        
       <div>
        <h1 className='font-bold text-2xl'>LOGO</h1>
       </div>
       <>
        <NavLink to="/"><h3 className='text-right font-bold'>Home</h3></NavLink>
        <NavLink to="/Details"><h3 className='text-right'>Details</h3></NavLink>
        <NavLink to="/About"><h3 className='text-right'>About</h3></NavLink>
        <NavLink to="/Shopping"><h3 className='text-right'>Shopping</h3></NavLink>
        <NavLink to="/Items"><h3 className='text-right'>Items</h3></NavLink>
       </>
    </div>
)
}

export default NavBar