import React from 'react'

const Blog = () => {
  return (
    <>
    <section id="blog">
    <div className="text-center">
        <p className="font-bold text-3xl mt-40">Latest Blog Posts</p>
        <p>Stay updated with our latest dental care tips and news.</p>
    </div>
          
    <div class="lg:flex lg:justify-center lg:space-x-5 md:flex md:justify-center md:space-x-5 mx-5 space-y-6 mt-20">
        <div className="bg-white shadow-lg h-110 w-80 hover:shadow-xl p-2 transform hover:-translate-y-1 duration-300 rounded-xl">
            <div className="bg-[url('/src/assets/Images/t1.jpg')] bg-center bg-cover h-50 m-3 rounded-lg"></div>
            <p className="text-2xl">Top 5 Tips for a Brighter Smile</p>
            <p className="pt-3 text-gray-600 w-62">Learn how to maintain a healthy and bright smile with these simple tips.</p>
            <p className="pt-4"><a href="#" class="text-blue-500 ">Read More</a></p>

        </div>

        <div className="bg-white shadow-lg h-110 w-80 hover:shadow-xl p-2 transform hover:-translate-y-1 duration-300 rounded-lg">
            <div className="bg-[url('/src/assets/Images/t2.jpg')] bg-cover bg-center h-50 m-3 rounded-lg"></div>
            <p className="text-2xl ">Benefits of Regular Checkups</p>
            <p className="pt-3 text-gray-600">Discover why regular dentist visits are crucial for oral health.</p>
            <p className="pt-4"><a href="#" class="pt-3 text-blue-500">Read More</a></p>
        </div>

        <div className="bg-white shadow-lg h-110 w-80 hover:shadow-xl p-2 transform hover:-translate-y-1 duration-300 rounded-lg">
            <div className="bg-[url('/src/assets/Images/t3.jpg')] bg-cover bg-center h-50 m-3 rounded-lg"></div>
            <p className="text-2xl">Understanding Dental Implants</p>
            <p className="pt-3 text-gray-600">Everything you need to know about dental implants.</p>
            <p className="pt-4"><a href="#" class="pt-3 text-blue-500 pt-10">Read More</a></p>
        </div>
    </div>
    </section>
    </>
  )
}

export default Blog