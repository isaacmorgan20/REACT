import React from 'react'

const Feed = () => {
  return (
    <>
    <section class="bg-gray-100 py-20" id="faq">
    <div class="mt-20 text-center">
        <h1 class="text-3xl font-bold">What our patients say</h1>
        <p class="pt-4">A small river named Duden flows by their place, offering a serene dental experience.</p>
        </div>

        <div class="lg:flex lg:justify-center lg:space-x-5 md:flex md:justify-center md:space-x-5 mt-10 mx-10 space-y-10">
                                   {/* <!-- box one --> */}
            <div class="bg-white shadow-lg border-l-4 border-indigo-600 rounded-xl w-70 h-40 p-5 hover:shadow-xl p-2 transform hover:-translate-y-1 duration-300">
                <p class="text-gray-700">"The best dental experience! The staff is friendly and the environment is so calming." </p>
                <p class="pt-5 font-bold text-gray-700">John Doe</p>

            </div>
                                           {/* <!-- box two --> */}
            <div class="bg-white shadow-lg border-l-4 border-indigo-600 rounded-xl w-70 h-40 p-5 hover:shadow-xl p-2 transform hover:-translate-y-1 duration-300">
                <p class="text-gray-700">"I was nervous, but the team made me feel so comfortable. Highly recommend!"" </p>
                <p class="pt-5 font-bold text-gray-700">Jane Smith</p>
           
           
            </div>
                                         {/* <!-- box three --> */}
            <div class="bg-white shadow-lg border-l-4 border-indigo-600 rounded-xl w-70 h-40 p-5 hover:shadow-xl p-2 transform hover:-translate-y-1 duration-300">
                <p class="text-gray-700">"Professional and efficient. My teeth have never looked better!" </p>
                <p class="pt-5 font-bold text-gray-700">Emily Johnson</p>
                  
             </div>    
    </div>
    </section>
    </>
  )
}

export default Feed