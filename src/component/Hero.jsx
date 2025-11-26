import React from 'react'

const Hero = () => {
  return (
    <>
     <section class="bg-gray-900 hidden lg:flex">
        <div class="lg:flex lg:space-x-120 text-gray-200 p-3">
            {/* <!-- items --> */}
        <div class="flex pl-20">
            <p>Free shipping for standard order over $100</p>
        </div>
        {/* <!-- links --> */}
        <div class="flex space-x-10 ">
            <a href="#" class="text-sm hover:text-blue-400 duration-300">Help & FAQs</a>
            <a href="#" class="text-sm hover:text-blue-400 duration-300">My Account</a>
            <a href="#" class="text-sm hover:text-blue-400 duration-300">EN</a>
            <a href="#" class="text-sm hover:text-blue-400 duration-300">USD</a>

        </div>
        </div>
     </section>
    </>
  )
}

export default Hero