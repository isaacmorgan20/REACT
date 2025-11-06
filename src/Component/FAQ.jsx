import React from 'react'

const FAQ = () => {
  return (
    <>
    <section class="bg-gradient-to-b from-gray-50 to-white py-20 mt-20" id="faq">
        <div class="mt-30 text-center ">
            <p class="text-4xl font-bold tracking-tight">Frequently Asked Questions</p>
            <p class="pt-6 text-gray-700 mx-10">Find answers to common questions about our dental services.</p>
        </div>

        <div class=" mt-8 space-y-3 pt-4">
                                                   {/* <!-- box one --> */}
            <div class="border-l-4 border-indigo-800 lg:ml-50 lg:mr-50 md:ml-50 md:mr-50 p-5 mx-3  rounded-lg shadow-lg transform hover:-translate-y-1 duration-300">
                <details>
                <summary class="lg:text-lg md:text-2xl text-md font-bold">How often should I visit the dentist?</summary>
                <p class="pt-3">We recommend a visit every six months for checkups and cleanings to maintain optimal oral health.</p>
                </details>
                
            </div>
                                                    {/* <!-- box two --> */}
            <div class="border-l-4 border-indigo-800 lg:ml-50 lg:mr-50 md:ml-50 md:mr-50 p-5 mx-3 rounded-lg shadow-lg transform hover:-translate-y-1 duration-300">
                <details>
                <summary class="lg:text-lg md:text-2xl text-md font-bold">Does teeth whitening hurt?</summary>
                <p class="pt-3">Our whitening procedures are safe and painless, with minimal sensitivity that subsides quickly.</p>
                </details>
            </div>
                                                   {/* <!-- box three --> */}
            <div class="border-l-4 border-indigo-800 lg:ml-50 lg:mr-50 md:ml-50 md:mr-50 p-5 mx-3 rounded-lg shadow-lg transform hover:-translate-y-1 duration-300">
                <details>
                <summary class="lg:text-lg md:text-2xl text-md  font-bold">What should I do in a dental emergency?</summary>
                <p class="pt-3">Contact us at + (123) 456 7890 for immediate emergency dental services.</p>
                </details>
            </div>
        </div>
    </section>
    </>
  )
}

export default FAQ