import React from 'react'

const Team = () => {
  return (
   
    <>
    <section className="bg-gradient-to-b from-gray-50 to-white py-20" id="doctors">
        <div className="text-center">
        <h1 className="text-3xl font-bold">Meet Our Expext Team</h1>
        </div>

        <div className="lg:flex md:flex mt-15 lg:justify-center md:justify-center lg:gap-10 md:gap-5 space-y-3">
                                  {/* <!-- box one --> */}
            <div className="bg-white h-65 lg:ml-30 md:ml-30 mx-15 md:mx-0 shadow-lg rounded-lg hover:shadow-xl p-2 transform hover:-translate-y-1 duration-300 bg-white">
                <div className="bg-[url('/src/assets/Images/one.jpg')] bg-center bg-cover h-40 lg:w-50 md:w-50 w-57 rounded-t-lg"></div>
                <div className="p-2 font-bold text-xl">Patrick Jacobson</div>
                <p className="p-2">Daniel</p>
            </div>
                                   {/* <!-- box two --> */}
            <div className="bg-white h-65 shadow-lg rounded-lg mx-15 md:mx-0 hover:shadow-xl p-2 transform hover:-translate-y-1 duration-300 bg-white">
                <div className="bg-[url('/src/assets/Images/two.jpg')] bg-cover bg-center h-40 lg:w-50 md:w-50 w-57 rounded-t-lg"></div>
                <div className="p-2 font-bold text-xl">Patrick Jacobson</div>
                <p className="p-2">Daniel</p>
            </div>
                                      {/* <!-- box three --> */}
            <div className="bg-white h-65 shadow-lg rounded-lg mx-15 md:mx-0 hover:shadow-xl p-2 transform hover:-translate-y-1 duration-300 bg-white">
                  <div className="bg-[url('/src/assets/Images/three.jpg')] bg-center bg-cover h-40 lg:w-50 md:w-50 w-57 rounded-t-lg"></div>
                  <div className="p-2 font-bold text-xl">Patrick Jacobson</div>
                  <p className="p-2">Daniel</p>
            </div>
                                           {/* <!-- box four --> */}
            <div className="bg-white h-65 lg:mr-30 md:mr-30 shadow-lg mx-15 md:mx-0 rounded-lg hover:shadow-xl p-2 transform hover:-translate-y-1 duration-300 bg-white">
                <div className="bg-[url('/src/assets/Images/four.jpg')] bg-center bg-cover h-40 lg:w-50 md:w-50 w-57 rounded-t-lg"></div>
                <div className="p-2 font-bold text-xl">Joshua</div>
                <p className="p-2">Daniel</p>

            </div>

        </div>
    </section>
    </>
  )
}

export default Team