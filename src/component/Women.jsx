import React from 'react'

const Women = () => {
  return (
    <>
    <section>
      {/* <!-- images --> */}
        <div class="lg:flex lg:justify-center pt-15 lg:space-x-5 lg:gap-0 grid md:grid-cols-2 gap-5 md:px-10 grid-cols-1 px-10">
            {/* <!-- image 1 --> */}
            <div class="bg-white border-1 border-gray-200">
                 <p class="font-bold text-3xl">WOMEN</p>
                <p>Spring 2018</p>
                <img src="https://preview.colorlib.com/theme/cozastore/images/banner-01.jpg" class="w-90"></img>               
                </div>
            
            
            {/* <!-- image 2 --> */}
            <div class="bg-white border-1 border-gray-200">
                 <p class="font-bold text-3xl">MEN</p>
                <p>Spring 2018</p>
                <img src="https://preview.colorlib.com/theme/cozastore/images/banner-02.jpg" class="w-90"></img>               
            </div>
            {/* <!-- image 3 --> */}
            <div class="border-1 border-gray-200 md:col-span-2 lg:col-span-1 md:mx-50 lg:mx-0">
                <p class="font-bold text-3xl">Accessories</p>
                <p>New Trend</p>
                <img src="https://preview.colorlib.com/theme/cozastore/images/banner-03.jpg" class="w-90"></img>                
            </div>

        </div>
      </section>
    </>
  )
}

export default Women