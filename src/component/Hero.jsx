import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
     <section className="bg-gray-900 hidden lg:flex">
        <div className="lg:flex lg:space-x-120 text-gray-200 p-3">
            {/* <!-- items --> */}
        <div className="flex pl-20">
            <p>Free shipping for standard order over $100</p>
        </div>
        {/* <!-- links --> */}
        <div className="flex space-x-10 ">
            <Link to="/" className="text-sm hover:text-blue-400 duration-300">Help & FAQs</Link>
            <Link to="/" className="text-sm hover:text-blue-400 duration-300">My Account</Link>
            <span className="text-sm hover:text-blue-400 duration-300 cursor-pointer">EN</span>
            <span className="text-sm hover:text-blue-400 duration-300 cursor-pointer">USD</span>

        </div>
        </div>
     </section>
    </>
  )
}

export default Hero