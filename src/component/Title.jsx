import React from 'react'

const Title = () => {
  return (
    <>
      <section>
        
        <div class="flex items-center justify-between p-2">
            {/* <!-- store --> */}
            <div class="lg:pl-20 md:pl-5 pl-0">
                <p class="text-2xl"><strong>COZA</strong> STORE</p>
            </div>
             
            {/* <!-- links --> */}
            <div class="space-x-10 pr-30 hidden lg:flex">
                <div class="group relative">
                <a href="colorib.html" class="text-blue-500">Home</a>
                <div class="hidden group-hover:block absolute bg-white w-50 space-y-3 mt-3 shadow-6xl p-2">
                    <a href="colorib.html" class="block duration-300 text-blue-500">HOMEPAGE 1</a>
                    <a href="HomeP2.html" class="block hover:text-blue-400 duration-300">HOMEPAGE 2</a>
                    <a href="homepge 3.html" class="block hover:text-blue-400 duration-300">HOMEPAGE 3</a>
                </div>
                </div>
                <a href="shop.html" class="hover:text-blue-400 duration-300">Shop</a>
                <a href="feature.html" class="hover:text-blue-400 duration-300">Features</a>
                <a href="Blog.html" class="hover:text-blue-400 duration-300">Blog</a>
                <a href="About.html" class="hover:text-blue-400 duration-300">About</a>
                <a href="" class="hover:text-blue-400 duration-300">contact</a>
            </div>

            {/* <!-- icons --> */}
             <div class="">
            <div class="lg:space-x-10 md:space-x-6 space-x-3 lg:mr-50 md:mr-20 flex items-center">
                <i class="fa-solid fa-magnifying-glass text-sm hover:text-blue-400 duration-300"></i>
                <i class="fa-solid fa-cart-shopping text-xl p-2 text-sm hover:text-blue-400 duration-300"></i>
                <i class="fa-regular fa-heart text-sm hover:text-blue-400 duration-300"></i>
            </div>
             </div>

               {/* <!-- links for sm--> */}
            
                 <button class="md:hidden lg:hidden flex" id="btn">Menu</button>
                <div class="absolute p-3 w-full block border-1 hidden mt-55 bg-blue-500 text-white" id="view">
                <details class="relative ">
                <summary class="text-blue-500 text-white" id="btn">Home</summary>
                <div class="absolute bg-white space-y-3 p-2 text-black w-full">
                    <a href="colorib.html" class="block duration-300 text-yellow-400">HOMEPAGE 1</a>
                    <a href="homepge 2.html" class="block hover:text-yellow-400 duration-300">HOMEPAGE 2</a>
                    <a href="homepge 3.html" class="block hover:text-yellow-400 duration-300">HOMEPAGE 3</a>
                </div>
                </details>
                <a href="shop.html" class="hover:text-yellow-400 duration-300 block ">Shop</a>
                <a href="feature.html" class="hover:text-yellow-400 duration-300 block">Features</a>
                <a href="Blog.html" class="hover:text-yellow-400 duration-300 block">Blog</a>
                <a href="About.html" class="hover:text-yellow-400 duration-300 block">About</a>
                <a href="" class="hover:text-yellow-400 duration-300 block">contact</a>
                </div>
                </div>
      </section>
    </>
  )
}

export default Title