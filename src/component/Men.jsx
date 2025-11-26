import React from 'react'



const Men = () => {
  return (
    <>
    {/* <!-- men collection --> */}
      <section className="bg-[url('/src/assets/Images/m.jpg')] bg-cover bg-center ">
        {/* <!-- items --> */}
        <div className="lg:pt-30 lg:px-30 md:pt-90 md:pl-5 pt-45 px-10">
            <p className="lg:font-bold md:font-bold lg:text-3xl md:text-3xl">MEN COLLECTION 2028</p>
            <p className="lg:font-bold md:font-bold lg:text-5xl md:text-5xl text-4xl font-bold">NEW ARRIVALS</p>
            {/* <!-- button --> */}
            <div class="pt-15 lg:pb-44 md:pb-89 pb-70">
                <button className="bg-blue-700 px-10 p-3 rounded-full text-white hover:bg-black duration-300">SHOP NOW</button>
            </div>
        </div>
      </section>
    </>
  )
}

export default Men