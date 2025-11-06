import React from 'react'
import dentistry from '../assets/Images/dentistry.jpg'

const Hero = () => {
  return (
    <>
    <section class="bg-[url(dentistry.jpg)] bg-cover bg-center pt-20 relative lg:w-full md:w-full w-full lg:pb-20 md:pb-20 pb-20 lg:text-left md:text-left text-center">
        <div class="bg-gradient-to-b from-blue-900/60 to to-black/50 inset-0 absolute"></div>
        <div class="relative lg:w-[1000px] md:w-[1000px] lg:px-6 md:px-20 mx-auto z-10">
           <div class="text-white lg:w-[700px] md:w-[700px]"> 
        <h1 class="lg:text-5xl md:text-5xl text-xl  font-extrabold font-black tracking-tight leading-tight ">Modern Dentistry in a Calm Environment</h1>
        <p class="lg:text-lg md:text-lg text-md pt-4 text-gray-200">A small river named Duden flows by their place, providing a serene backdrop for your dental care.</p>
        
            <button class="text-white bg-blue-600 p-3 mt-6 px-6 rounded-full hover:shadow-md hover:scale-105 duration-300">Make an Appointment</button>
        </div>
       
    </div>
</section>
    </>
  )
}

export default Hero