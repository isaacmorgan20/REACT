import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { cartCount } = useCart();
  const [cartSidebarOpen, setCartSidebarOpen] = useState(false);

  return (
    <>
    <header>
        <nav className="bg-gray-800 text-white ">
            <div className="flex justify-between items-center">
                {/* <!-- colorib --> */}
                <div className="p-3 flex items-center">
                    <p className="text-4xl"><Link to="/">Colorlib<span className="text-green-400">.</span></Link></p>                    
                    <p className="lg:pl-5 lg:text-md hidden md:flex bg-green-900 lg:text-gray-400">+ COSA STORE</p>
                    </div>
                      {/* <!-- icons --> */}
                    <div className="flex space-x-5 mr-10 text-gray-400">
                    <p className="hidden md:flex border-r-1 border-l-1"><i className="fa-solid fa-desktop text-3xl  p-2 hover:text-white"></i></p>
                    <p className="hidden md:flex border-r-1"><i className="fa-solid fa-tablet-screen-button text-3xl p-2 hover:text-white"></i></p>
                    <p className="hidden md:flex border-r-1 "><i className="fa-solid fa-mobile-screen text-3xl p-2 hover:text-white"></i></p>                    
                    <Link to="/cart" className="relative">
                      <i className="fa-solid fa-cart-shopping text-3xl bg-green-900 p-2 hover:text-white"></i>
                      {cartCount > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                          {cartCount}
                        </span>
                      )}
                    </Link>
                    <p><i className="fa-solid fa-xmark text-3xl p-2 hover:text-white"></i></p>
                    
                    </div>            
                </div>
        </nav>
    </header>
    </>
  )
}

export default Header