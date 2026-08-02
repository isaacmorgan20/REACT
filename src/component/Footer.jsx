import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useToast } from './Toast'

const Footer = () => {
  const [email, setEmail] = useState('');
  const { showToast } = useToast();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      showToast('Please enter your email address', 'error');
      return;
    }
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showToast('Please enter a valid email address', 'error');
      return;
    }
    showToast('Successfully subscribed to newsletter!', 'success');
    setEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
     <footer className="bg-black text-white">
            {/* <!-- whole item --> */}
            <div>
                {/* <!-- item --> */}
                <div className="lg:flex lg:justify-around grid md:grid-cols-2 gap-5 md:mx-2 pt-15">
                    {/* <!-- item one --> */}
                    <div className="space-y-7">
                        <p className="font-bold">CATEGORIES</p>
                        <Link to="/shop?category=women" className="text-sm text-gray-400 block hover:text-white transition-colors duration-200">Women</Link>
                        <Link to="/shop?category=men" className="text-sm text-gray-400 block hover:text-white transition-colors duration-200">Men</Link>
                        <Link to="/shop?category=shoes" className="text-sm text-gray-400 block hover:text-white transition-colors duration-200">Shoes</Link>
                        <Link to="/shop?category=watches" className="text-sm text-gray-400 block hover:text-white transition-colors duration-200">Watches</Link>
                    </div>
                    {/* <!-- item two --> */}
                    <div className="space-y-7">
                        <p className="font-bold">HELP</p>
                        <p className="text-sm text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer">Track Order</p>
                        <p className="text-sm text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer">Returns</p>
                        <p className="text-sm text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer">Shipping</p>
                        <p className="text-sm text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer">FAQs</p>
                    </div>
                    {/* <!-- item three --> */}
                    <div className="space-y-7">
                        <p className="font-bold">GET IN TOUCH</p>
                        <p className="text-sm text-gray-400">Any questions? Let us know in store at 8th</p>
                        <p className="text-sm text-gray-400"> floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</p>
                        <div className="space-x-5 text-gray-400">
                        <a href="#" className="hover:text-white transition-colors duration-200"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="#" className="hover:text-white transition-colors duration-200"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#" className="hover:text-white transition-colors duration-200"><i className="fa-solid fa-p"></i></a>
                        </div>
                    </div>
                    {/* <!-- item four --> */}
                    <div className="space-y-7">
                        <p className="font-bold">Newsletter</p>
                        <form onSubmit={handleSubscribe}>
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="email@example.com"
                            className="bg-transparent border-b border-gray-600 text-gray-400 outline-none w-50 pb-2 focus:border-blue-500 transition-colors"
                          />

                          <div className="pt-4">
                            <button
                              type="submit"
                              className="bg-blue-500 px-10 p-3 rounded-full hover:bg-white hover:text-blue-500 duration-300 cursor-pointer"
                            >
                              SUBSCRIBE
                            </button>
                          </div>
                        </form>
                    </div>
                </div> 

                <div className="flex justify-center space-x-1 pt-10">
                    <img src="https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-01.png" alt="Payment method"></img>
                    <img src="https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-02.png" alt="Payment method"></img>
                    <img src="https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-03.png" alt="Payment method"></img>
                    <img src="https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-04.png" alt="Payment method"></img>
                    <img src="https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-05.png" alt="Payment method"></img>
                </div>

                <div className="text-center py-10 text-gray-400">
                    <p>Copyright ©2025 All rights reserved | This template is made with <i className="fa-regular fa-heart"></i> by Colorlib</p>
                </div>
               
                <div className="fixed bottom-4 right-4">
                 <button
                   onClick={scrollToTop}
                   className="flex items-center justify-center bg-blue-500 text-white w-12 h-12 p-3 rounded-full hover:bg-black transition-colors duration-300 cursor-pointer shadow-lg"
                 >
                   <i className="fa-solid fa-chevron-up"></i>
                 </button>
                 </div>
            </div>
        </footer>
    </>
  )
}

export default Footer