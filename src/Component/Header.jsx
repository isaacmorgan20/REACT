import React from 'react'

const Header = () => {
  return (
    <>
                                     {/* heading */}
    <header className="fixed lg:w-full md:w-full w-full top-0 left-0 bg-blue-900/90 shadow-md hover:bg-blue-900/30 hover:backdrop-blur-md z-50 transition-all duration-300">
    <nav className="py-4 lg:px-4 md:px-20 px-10 lg:w-[1000px] mx-auto justify-between flex">
        {/* all  */}
            <div className="flex text-white items-center">
             {/* h1  */}
            <h1 className="font-bold lg:text-3xl md:text-3xl text-md text-white tracking-tight leading-tight">DENTACARE</h1>
             {/* links for large screen */}
            <div class="flex lg:space-x-5 md:space-x-10 hidden lg:flex lg:ml-30 md:ml-5">
                <a href="index.html" className="hover:text-blue-300">Home</a>
                <a href="#about" className="hover:text-blue-300">About</a>
                <a href="#service" className="hover:text-blue-300">Service</a>
                <a href="#doctors" className="hover:text-blue-300">Doctors</a>
                <a href="#blog" className="hover:text-blue-300">Blog</a>
                <a href="#contact" className="hover:text-blue-300">Contact</a>
                <a href="#faq" className="hover:text-blue-300">FAQ</a>                            
            </div>
             {/* button  */}
            <div className="md:ml-100 lg:ml-0">
            <button className="border-1 border-blue-600 bg-blue-600 rounded-full lg:px-6 md:px-3 lg:p-2 md:p-2 p-1 lg:ml-7 md:ml-3 ml-5 px-3 hover:shadow-md hover:scale-105 duration-300">
                Book Appointment
            </button>
            </div>
              {/* mobile menu  */}
                 <div className="lg:hidden md:pl-9 pl-4">
                    <button id="btn" className="lg:text-3xl md:text-3xl text-2xl">☰</button>
                 </div>
            </div>
            </nav>
              {/* links for small screen  */}
            <div className="block lg:hidden hidden absolute w-full" id="menu">
                <a href="index.html" className="hover:text-black p-3 block bg-blue-600 hover:bg-yellow-300 hover:font-bold">Home</a>
                <a href="#about" className="hover:text-black block p-3 bg-blue-600 hover:bg-yellow-300 hover:font-bold">About</a>
                <a href="#service" className="hover:text-black block p-3 bg-blue-600 hover:bg-yellow-300 hover:font-bold">Service</a>
                <a href="#doctors" className="hover:text-black block p-3 bg-blue-600 hover:bg-yellow-300 hover:font-bold">Doctors</a>
                <a href="#blog" className="hover:text-black block p-3 bg-blue-600 hover:bg-yellow-300 hover:font-bold">Blog</a>
                <a href="#contact" className="hover:text-black block p-3 bg-blue-600 hover:bg-yellow-300 hover:font-bold">Contact</a>
                <a href="#faq" className="hover:text-black block p-3 bg-blue-600 hover:bg-yellow-300 hover:font-bold">FAQ</a>                            
            </div>    
    </header> 
    </>
  )
}

export default Header