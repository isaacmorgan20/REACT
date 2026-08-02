import React from 'react'
import { useNavigate } from 'react-router-dom'

const Women = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/shop?category=${category}`);
  };

  return (
    <>
    <section>
      {/* <!-- images --> */}
        <div className="lg:flex lg:justify-center pt-15 lg:space-x-5 lg:gap-0 grid md:grid-cols-2 gap-5 md:px-10 grid-cols-1 px-10">
            {/* <!-- image 1 --> */}
            <div
              className="bg-white border-1 border-gray-200 cursor-pointer group hover:shadow-lg transition-shadow duration-300"
              onClick={() => handleCategoryClick('women')}
            >
                 <p className="font-bold text-3xl">WOMEN</p>
                <p>Spring 2018</p>
                <img src="https://preview.colorlib.com/theme/cozastore/images/banner-01.jpg" className="w-90 group-hover:scale-105 transition-transform duration-500" alt="Women collection"></img>               
                </div>
            
            
            {/* <!-- image 2 --> */}
            <div
              className="bg-white border-1 border-gray-200 cursor-pointer group hover:shadow-lg transition-shadow duration-300"
              onClick={() => handleCategoryClick('men')}
            >
                 <p className="font-bold text-3xl">MEN</p>
                <p>Spring 2018</p>
                <img src="https://preview.colorlib.com/theme/cozastore/images/banner-02.jpg" className="w-90 group-hover:scale-105 transition-transform duration-500" alt="Men collection"></img>               
            </div>
            {/* <!-- image 3 --> */}
            <div
              className="border-1 border-gray-200 md:col-span-2 lg:col-span-1 md:mx-50 lg:mx-0 cursor-pointer group hover:shadow-lg transition-shadow duration-300"
              onClick={() => handleCategoryClick('bag')}
            >
                <p className="font-bold text-3xl">Accessories</p>
                <p>New Trend</p>
                <img src="https://preview.colorlib.com/theme/cozastore/images/banner-03.jpg" className="w-90 group-hover:scale-105 transition-transform duration-500" alt="Accessories collection"></img>                
            </div>

        </div>
      </section>
    </>
  )
}

export default Women