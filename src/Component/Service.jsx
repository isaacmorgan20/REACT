import React from 'react'


const Service = () => {
  return (
    <>
         <section class="bg-gradient-to-b from-white to-blue-50 py-20" id="service">
    <div class="text-center mt-2">
        <h1 class="lg:text-5xl md:text-5xl text-2xl font-bold font-black leading-tighter tracking-tighter">Our Services Keep You Smiling</h1>
        <p class="mt-5 text-gray-700">Discover professional dental services crafted to enhance your smile’s health and beauty.</p>
    </div>

    <div class="lg:flex mt-10 lg:space-x-8 lg:justify-center md:flex md:justify-center md:space-x-8 space-y-3 ">
                      {/* <!-- item one --> */}
        <div class="border-t-4 lg:ml-10 lg:h-120  lg:w-75  md:ml-10 md:h-120 md:w-75 md:mx-0 mx-10 rounded-xl border-indigo-600 shadow-lg hover:shadow-xl p-2 transform hover:-translate-y-1 duration-300 bg-white">
           <div class="text-blue-500 text-5xl mb-4 p-3">
            <i class="fa fa-ambulance" aria-hidden="true"></i>
            </div>
            <h1 class="text-xl font-bold p-3">Emergency Cases</h1>
            <p class="text-gray-700 pl-2 pb-3">Swift, compassionate care for dental emergencies.</p>

            <a href="#" class="text-blue-500 pl-2 tracking-tighter font-bold">+ (123) 456 7890</a>
        
        </div>
                        {/* <!-- item two --> */}
        <div class="lg:w-75 md:w-75 border-indigo-600 mx-10 shadow-lg hover:shadow-xl lg:h-120 md:h-120 rounded-lg border-t-4 transform hover:-translate-y-1 duration-300 bg-white">
             <div class="text-blue-500 text-5xl mb-4 p-3">
                <i class="fas fa-clock"></i>
             </div>
              <div class="p-3 space-y-2">
                <h1 class="text-xl font-bold">Opening Hours</h1>
                <p class="text-gray-700">Mon - Fri: 8:00-19:00</p>
                <p class="text-gray-700">Saturday: 10:00-17:00 </p>
                <p class="text-gray-700">Sunday: 10:00-16:00</p>
              </div>
        </div>
                       {/* <!-- item three --> */}
        
        <div class="border-t-4 lg:w-80 md:w-80 p-2 border-indigo-600 mx-10 md:mx-0 lg:h-120 md:h-120 md:mr-10 shadow-lg hover:shadow-xl  rounded-lg transform hover:-translate-y-1 duration-300 bg-white">
            <div class="text-blue-500 text-5xl p-3">
                <i class="fas fa-calendar-check"></i>
            </div>
              <div class="p-3">
                <h1 class="text-xl font-bold">Book Appointment</h1>

                <form>
                <select  name="dental" placeholder="Select Department" class="border-1 rounded-lg bg-gray-50 w-full p-2 mt-4">
                    <option>select Department</option>
                    </select>
                    
                <input type="text" name="text" placeholder="Your name" class="bg-white opacity-60 border-1 w-full rounded-lg p-2 mt-2"></input>                
                <input type="email" name="email" placeholder="Email" class="border-1 rounded-lg lg:w-70 md:w-70 w-full p-3 mt-2"></input>                
               <input type="tel" name="tel" placeholder="Phone" class="border-1 rounded-lg lg:w-70 md:w-70 w-full p-3 mt-2"></input>               
                <input type="date" name="date" class="border-1 rounded-lg lg:w-40 md:w-40 mt-2 w-full p-2"></input>
                <input type="time" name="time" class="border-1 rounded-lg lg:w-27 md:w-27 w-full mt-2 p-2"></input>

                <button class="border-1 lg:w-70 md:w-70 w-full border-blue-600 bg-blue-600 mt-3 rounded-lg text-white hover:bg-blue-700 p-2">Book Now</button>  
            </form>
            </div>
        </div> 
    </div>
    </section> 
    </>
  )
}

export default Service