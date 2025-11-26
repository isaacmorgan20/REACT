import React from 'react'

const Header = () => {
  return (
    <>
    <header>
        <nav class="bg-gray-800 text-white ">
            <div class="flex justify-between items-center">
                {/* <!-- colorib --> */}
                <div class="p-3 flex items-center">
                    <p class="text-4xl"><a href="colorib.html">Colorlib<span class="text-green-400">.</span></a></p>                    
                    <p class="lg:pl-5 lg:text-md hidden md:flex bg-green-900 lg:text-gray-400">+ COSA STORE</p>
                    </div>
                      {/* <!-- icons --> */}
                    <div class="flex space-x-5 mr-10 text-gray-400">
                    <p class="hidden md:flex border-r-1 border-l-1"><i class="fa-solid fa-desktop text-3xl  p-2 hover:text-white"></i></p>
                    <p class="hidden md:flex border-r-1"><i class="fa-solid fa-tablet-screen-button text-3xl p-2 hover:text-white"></i></p>
                    <p class="hidden md:flex border-r-1 "><i class="fa-solid fa-mobile-screen text-3xl p-2 hover:text-white"></i></p>                    
                    <p><i class="fa-solid fa-cart-shopping text-3xl bg-green-900 p-2 hover:text-white"></i></p>
                    <p><i class="fa-solid fa-xmark text-3xl p-2 hover:text-white"></i></p>
                    
                    </div>            
                </div>
        </nav>
    </header>
    </>
  )
}

export default Header