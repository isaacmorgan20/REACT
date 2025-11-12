import React from 'react'

const Teeth = () => {
  return (
    <>
                                         
 <section className="bg-white py-20" id="about">
    <div className="lg:h-35 md:h-35 lg:flex md:flex lg:justify-center md:justify-center lg:space-x-6 md:space-x-6 space-y-10 mx-15">
        
                                 {/* <!-- box one --> */}
        <div className="h-30 p-3 w-55 shadow-md border-white rounded-lg hover:shadow-xl p-2 transform hover:-translate-y-1 duration-300 bg-white">
            <div className="text-blue-500 text-3xl text-center">
                <i className="fas fa-tooth"></i>
            </div>
          <p className="p-3 text-xl ">Teeth Whitening</p>
          
          
        </div>
                                  {/* <!-- box two --> */}
        <div className=" h-30 p-3 w-55 shadow-md border-white rounded-lg hover:shadow-xl p-2 transform hover:-translate-y-1 duration-300 bg-white">
            <div className="text-blue-500 text-3xl text-center">
                <i className="fas fa-teeth"></i>
            </div>
            <p className="p-3 text-xl ">Teeth Cleaning</p>
        </div>
                                    {/* <!-- box three --> */}
        <div className=" h-30 p-3 w-55 shadow-md border-white rounded-lg hover:shadow-xl p-2 transform hover:-translate-y-1 duration-300 bg-white">
            <div className="text-blue-500 text-3xl text-center">
                <i className="fas fa-ruler-combined"></i>
            </div>
            <p className="p-3 mt-2 text-xl ">Quality Brackets</p>
        </div>
                                     {/* <!-- box four --> */}
        <div className="border-1 h-30 w-55 p-3 shadow-md border-white rounded-lg hover:shadow-xl p-2 transform hover:-translate-y-1 duration-300 bg-white">
              <div className="text-blue-500 text-3xl text-center">
                <i className="fas fa-tooth"></i>
            </div>
            <p className="p-3 text-xl ">Dental Implants</p>
        </div>

    </div>
</section>
    </>
  )
}

export default Teeth