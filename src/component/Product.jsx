import React from 'react'

const Product = () => {
  return (
    <>
      <section>
        {/* <!-- item --> */}
        <div class="py-30 lg:mx-20 md:mx-5 mx-5">
            {/* <!-- product --> */}
            <div>
                <p class="font-bold lg:text-5xl md:text-5xl text-6xl">Product Overview</p>
            </div>
             {/* <!-- flex --> */}
            <div class="lg:flex lg:justify-between md:flex md:justify-between items-center pt-10">
                {/* <!-- section --> */}
                <div class="flex lg:space-x-10 md:space-x-7 space-x-3 md:text-lg text-sm">
                    <p class="hover:underline">All Products</p>
                    <p class="hover:underline">Women</p>
                    <p class="hover:underline">Men</p>
                    <p class="hover:underline">Bag</p>
                    <p class="hover:underline">Shoes</p>
                    <p class="hover:underline">Watches</p>
                </div>
                {/* <!-- button --> */}
                <div class="flex space-x-7 pt-4 md:pt-0 lg:pt-0">
                    <button class="border-1 border-gray-300 p-2 px-9 rounded-md hover:bg-blue-300 duration-800">Filter</button>
                    <button class="border-1 border-gray-300 p-2 px-9 rounded-md hover:bg-blue-300 duration-800"><i class="fa-solid fa-magnifying-glass"></i>Search</button>
                </div>
            </div>
            {/* <!-- images --> */}
            <div class="grid lg:grid-cols-4 lg:gap-8 md:grid-cols-3 md:gap-5 gap-5 pt-10">
                {/* <!-- image 1 --> */}
                <div>                            
                    <img src="//preview.colorlib.com/theme/cozastore/images/product-01.jpg"></img>                   
                    <div class="flex justify-between items-center pt-3">
                    <p>Esprit Ruffle Shirt</p>
                    <i class="fa-regular fa-heart"></i>
                    </div>
                    <p class="pt-2">$16.64</p>
                </div>
                {/* <!-- image 2 --> */}
                <div>
                    <img src="//preview.colorlib.com/theme/cozastore/images/product-02.jpg"></img>
                    <div class="flex justify-between items-center pt-3">
                    <p>Herschel supply</p>
                    <i class="fa-regular fa-heart"></i>
                    </div>
                    <p class="pt-2">$35.31</p>
                </div>
                {/* <!-- image 3 --> */}
                <div>
                    <img src="//preview.colorlib.com/theme/cozastore/images/product-03.jpg"></img>
                    <div class="flex justify-between items-center pt-3">
                    <p>Only Check Trouser</p>
                    <i class="fa-regular fa-heart"></i>
                    </div>
                    <p class="pt-2">$25.50</p>
                </div>
                {/* <!-- image 4 --> */}
                <div>
                    <img src="//preview.colorlib.com/theme/cozastore/images/product-04.jpg"></img>
                    <div class="flex justify-between items-center pt-3">
                    <p>Classic Trench Coat</p>
                    <i class="fa-regular fa-heart"></i>
                    </div>
                    <p class="pt-2">$75.00</p>
                </div>
                {/* <!-- image 5 --> */}
                <div>
                    <img src="//preview.colorlib.com/theme/cozastore/images/product-05.jpg"></img>
                    <div class="flex justify-between items-center pt-3">
                    <p>Front Pocket Jumper</p>
                    <i class="fa-regular fa-heart"></i>
                    </div>
                    <p class="pt-2">$34.75</p>
                </div>
                {/* <!-- image 6 --> */}
                <div>
                    <img src="//preview.colorlib.com/theme/cozastore/images/product-06.jpg"></img>
                    <div class="flex justify-between items-center pt-3">
                    <p>Vintage Inspired Classic</p>
                    <i class="fa-regular fa-heart"></i>
                    </div>
                    <p class="pt-2">$93.20</p>
                </div>
                {/* <!-- image 7 --> */}
                <div>
                    <img src="//preview.colorlib.com/theme/cozastore/images/product-07.jpg"></img>
                    <div class="flex justify-between items-center pt-3">
                    <p>Shirt in Stretch Cotton</p>
                    <i class="fa-regular fa-heart"></i>
                    </div>
                    <p class="pt-2">$52.66</p>
                </div>
                {/* <!-- image 8 --> */}
                <div>
                    <img src="//preview.colorlib.com/theme/cozastore/images/product-08.jpg"></img>
                    <div class="flex justify-between items-center pt-3">
                    <p>Pieces Metallic Printed</p>
                    <i class="fa-regular fa-heart"></i>
                    </div>
                    <p class="pt-2">$18.96</p>
                </div>
                {/* <!-- image 9 --> */}
                <div>
                    <img src="//preview.colorlib.com/theme/cozastore/images/product-09.jpg"></img>
                    <div class="flex justify-between items-center pt-3">
                    <p>Converse All Star Hi Plimsolls</p>
                    <i class="fa-regular fa-heart"></i>
                    </div>
                    <p class="pt-2">$75.00</p>
                </div>
                {/* <!-- image 10 --> */}
                <div>
                    <img src="//preview.colorlib.com/theme/cozastore/images/product-10.jpg"></img>
                    <div class="flex justify-between items-center pt-3">
                    <p>Femme T-Shirt In Stripe</p>
                    <i class="fa-regular fa-heart"></i>
                    </div>
                    <p class="pt-2">$25.85</p>
                </div>
                {/* <!-- image 11 --> */}
                <div>
                    <img src="//preview.colorlib.com/theme/cozastore/images/product-11.jpg"></img>
                    <div class="flex justify-between items-center pt-3">
                    <p>Herschel supply</p>
                    <i class="fa-regular fa-heart"></i>
                    </div>
                    <p class="pt-2">$63.16</p>
                </div>
                {/* <!-- image 12 --> */}
                <div>
                    <img src="//preview.colorlib.com/theme/cozastore/images/product-12.jpg"></img>
                    <div class="flex justify-between items-center pt-3">
                    <p>Herschel supply</p>
                    <i class="fa-regular fa-heart"></i>
                    </div>
                    <p class="pt-2">$63.15</p>
                </div>
                {/* <!-- image 13 --> */}
                <div>
                    <img src="//preview.colorlib.com/theme/cozastore/images/product-13.jpg"></img>
                    <div class="flex justify-between items-center pt-3">
                    <p>T-Shirt with Sleeve</p>
                    <i class="fa-regular fa-heart"></i>
                    </div>
                    <p class="pt-2">$18.49</p>
                </div>
                {/* <!-- image 14 --> */}
                <div>
                    <img src="//preview.colorlib.com/theme/cozastore/images/product-14.jpg"></img>
                    <div class="flex justify-between items-center pt-3">
                    <p>Pretty Little Thing</p>
                    <i class="fa-regular fa-heart"></i>
                    </div>
                    <p class="pt-2">$54.79</p>
                </div>
                {/* <!-- image 15 --> */}
                <div>
                    <img src="//preview.colorlib.com/theme/cozastore/images/product-15.jpg"></img>
                    <div class="flex justify-between items-center pt-3">
                    <p>Mini Silver Mesh Watch</p>
                    <i class="fa-regular fa-heart"></i>
                    </div>
                    <p class="pt-2">$86.85</p>
                </div>
                {/* <!-- image 16 --> */}
                <div>
                    <img src="//preview.colorlib.com/theme/cozastore/images/product-16.jpg"></img>
                    <div class="flex justify-between items-center pt-3">
                    <p>Square Neck Back</p>
                    <i class="fa-regular fa-heart"></i>
                    </div>
                    <p class="pt-2">$29.64</p>
                </div>
            </div>

            <div class="text-center pt-20">
                <button class="bg-gray-300 px-15 p-3 rounded-full hover:bg-black duration-300 hover:text-white">Load More</button>
            </div>
        </div>
       </section>
    </>
  )
}

export default Product