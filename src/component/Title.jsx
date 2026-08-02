import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'
import SearchOverlay from './SearchOverlay'
import CartSidebar from './CartSidebar'

const Title = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartSidebarOpen, setCartSidebarOpen] = useState(false);
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  return (
    <>
      <section>
        
        <div className="flex items-center justify-between p-2">
            {/* <!-- store --> */}
            <div className="lg:pl-20 md:pl-5 pl-0">
                <p className="text-2xl"><Link to="/"><strong>COZA</strong> STORE</Link></p>
            </div>
             
            {/* <!-- links --> */}
            <div className="space-x-10 pr-30 hidden lg:flex">
                <div className="group relative">
                <Link to="/" className="text-blue-500">Home</Link>
                <div className="hidden group-hover:block absolute bg-white w-50 space-y-3 mt-3 shadow-lg p-2 z-50">
                    <Link to="/" className="block duration-300 text-blue-500">HOMEPAGE 1</Link>
                    <Link to="/" className="block hover:text-blue-400 duration-300">HOMEPAGE 2</Link>
                    <Link to="/" className="block hover:text-blue-400 duration-300">HOMEPAGE 3</Link>
                </div>
                </div>
                <Link to="/shop" className="hover:text-blue-400 duration-300">Shop</Link>
                <Link to="/shop" className="hover:text-blue-400 duration-300">Features</Link>
                <Link to="/" className="hover:text-blue-400 duration-300">Blog</Link>
                <Link to="/" className="hover:text-blue-400 duration-300">About</Link>
                <Link to="/" className="hover:text-blue-400 duration-300">Contact</Link>
            </div>

            {/* <!-- icons --> */}
             <div className="">
            <div className="lg:space-x-10 md:space-x-6 space-x-3 lg:mr-50 md:mr-20 flex items-center">
                <button onClick={() => setSearchOpen(true)} className="hover:text-blue-400 duration-300 cursor-pointer">
                  <i className="fa-solid fa-magnifying-glass text-sm"></i>
                </button>
                <button onClick={() => setCartSidebarOpen(true)} className="relative hover:text-blue-400 duration-300 cursor-pointer">
                  <i className="fa-solid fa-cart-shopping text-sm p-2"></i>
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold text-[10px]">
                      {cartCount}
                    </span>
                  )}
                </button>
                <Link to="/wishlist" className="relative hover:text-blue-400 duration-300">
                  <i className="fa-regular fa-heart text-sm"></i>
                  {wishlistCount > 0 && (
                    <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold text-[10px]">
                      {wishlistCount}
                    </span>
                  )}
                </Link>
            </div>
             </div>

               {/* <!-- mobile menu button --> */}
            
                 <button className="md:hidden lg:hidden flex cursor-pointer" onClick={toggleMobileMenu}>
                   {mobileMenuOpen ? (
                     <i className="fa-solid fa-xmark text-xl"></i>
                   ) : (
                     <span>Menu</span>
                   )}
                 </button>
                </div>

                {/* <!-- mobile menu --> */}
                {mobileMenuOpen && (
                <div className="absolute p-3 w-full block border-1 mt-0 bg-blue-500 text-white z-50" style={{ top: 'auto' }}>
                <details className="relative ">
                <summary className="text-white cursor-pointer">Home</summary>
                <div className="bg-white space-y-3 p-2 text-black">
                    <Link to="/" onClick={toggleMobileMenu} className="block duration-300 text-yellow-400">HOMEPAGE 1</Link>
                    <Link to="/" onClick={toggleMobileMenu} className="block hover:text-yellow-400 duration-300">HOMEPAGE 2</Link>
                    <Link to="/" onClick={toggleMobileMenu} className="block hover:text-yellow-400 duration-300">HOMEPAGE 3</Link>
                </div>
                </details>
                <Link to="/shop" onClick={toggleMobileMenu} className="hover:text-yellow-400 duration-300 block ">Shop</Link>
                <Link to="/shop" onClick={toggleMobileMenu} className="hover:text-yellow-400 duration-300 block">Features</Link>
                <Link to="/" onClick={toggleMobileMenu} className="hover:text-yellow-400 duration-300 block">Blog</Link>
                <Link to="/" onClick={toggleMobileMenu} className="hover:text-yellow-400 duration-300 block">About</Link>
                <Link to="/" onClick={toggleMobileMenu} className="hover:text-yellow-400 duration-300 block">Contact</Link>
                </div>
                )}

      </section>

      {/* Search Overlay */}
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

      {/* Cart Sidebar */}
      <CartSidebar isOpen={cartSidebarOpen} onClose={() => setCartSidebarOpen(false)} />
    </>
  )
}

export default Title