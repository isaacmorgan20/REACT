import React from 'react'

const Footer = () => {
  return (
    <>
     <footer class="bg-black text-white">
            {/* <!-- whole item --> */}
            <div>
                {/* <!-- item --> */}
                <div class="lg:flex lg:justify-around grid md:grid-cols-2 gap-5 md:mx-2 pt-15">
                    {/* <!-- item one --> */}
                    <div class="space-y-7">
                        <p class="font-bold">CATEGORIES</p>
                        <p class="text-sm text-gray-400">Women</p>
                        <p class="text-sm text-gray-400">Men</p>
                        <p class="text-sm text-gray-400">Shoes</p>
                        <p class="text-sm text-gray-400">Watches</p>
                    </div>
                    {/* <!-- item two --> */}
                    <div class="space-y-7">
                        <p class="font-bold">HELP</p>
                        <p class="text-sm text-gray-400">Track Order</p>
                        <p class="text-sm text-gray-400">Returns</p>
                        <p class="text-sm text-gray-400">Shipping</p>
                        <p class="text-sm text-gray-400">FAQs</p>
                    </div>
                    {/* <!-- item three --> */}
                    <div class="space-y-7">
                        <p class="font-bold">GET IN TOUCH</p>
                        <p class="text-sm text-gray-400">Any questions? Let us know in store at 8th</p>
                        <p class="text-sm text-gray-400"> floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</p>
                        <div class="space-x-5 text-gray-400">
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-solid fa-p"></i>
                        </div>
                    </div>
                    {/* <!-- item four --> */}
                    <div class="space-y-7">
                        <p class="font-bold">Newsletter</p>
                        <p class="text-sm text-gray-400">email@example.com</p>
                        <hr class="w-50"></hr>

                        <div>
                            <button class="bg-blue-500 px-10 p-3 rounded-full hover:bg-white hover:text-blue-500 duration-300">SUBSCRIBE</button>
                        </div>

                    </div>
                </div> 

                <div class="flex justify-center space-x-1 pt-10">
                    <img src="//preview.colorlib.com/theme/cozastore/images/icons/icon-pay-01.png"></img>
                    <img src="https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-02.png"></img>
                    <img src="https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-03.png"></img>
                    <img src="https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-04.png"></img>
                    <img src="https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-05.png"></img>
                </div>

                <div class="text-center py-10 text-gray-400">
                    <p>Copyright ©2025 All rights reserved | This template is made with<i class="fa-regular fa-heart"></i>by Colorlib</p>
                </div>
               
                <div class="fixed button-4 right-4">
                 <a href="#top" class="flex items-center justify-center bg-blue-500 text-blue-400 w-20 h-20 p-3 border-1"><i class="fa-solid fa-chevron-up"></i></a>
                 </div>
            </div>
        </footer>
    </>
  )
}

export default Footer