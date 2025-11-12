import React from 'react'

const Contact = () => {
  return (
    <>
    <section className="bg-gray-200 pt-19 pb-15 relative" id="contact">
          <div className="absolute top-0 left-0 w-full h-[48px] overflow-hidden">
                <svg className="relative block w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113.64,31.08,1200,56.86V0Z" fill="#ffffff"></path>
                </svg>
            </div>
        <div className="text-center">
            <p className="text-4xl font-bold">Get in Touch</p>
            <p className="pt-4 text-gray-700">A small river named Duden flows by, creating a serene setting for your inquiries.</p>
        </div>

        <div className="lg:flex md:flex lg:justify-center md:justify-center lg:space-x-10 md:space-x-10 mx-5 mt-10 space-y-3"> 

        <div className="border-t-4 border-blue-600 rounded-xl shadow-lg transform hover:-translate-y-1 bg-white duration-300 lg:w-110 md:w-110 h-115 p-3">
            <form className="space-y-4">
                <select name="dental" placeholder="Appointment" className="w-full bg-gray-100 rounded-lg p-3 mt-4 outline-2 outline-blue-500 outline-offset-0">
                <option>Select Inquiry Type</option>
                <option>Appointment</option>
                <option>Billing</option>
                <option>General Inquiry</option>
                </select>

                <input name="name" type="text" placeholder="Name" className="w-full bg-gray-100 rounded-lg p-3 outline-2 outline-blue-500 outline-offset-0"></input>
                <input type="email" name="name" placeholder="email" className="w-full bg-gray-100 rounded-lg p-3 outline-2 outline-blue-500 outline-offset-0"></input>
                <input type="text"  name="text" placeholder="message" className="w-full pl-2 bg-gray-100 rounded-lg h-33 outline-2 outline-blue-500 outline-offset-0"></input>

            </form>

            <button className="mt-5 text-white rounded-lg p-3 bg-blue-600 w-full hover:bg-blue-700">Send Message</button>
        </div>
        
        <div className="border-t-4 border-blue-600 bg-blue-900 text-white p-8 rounded-xl space-y-4 shadow-lg transform hover:-translate-y-1 duration-300 lg:w-120 md:w-120 p-3 h-70">
            <p className="text-xl font-bold tracking-tighter">Contact Information</p>
            <p className=""><i className="fas fa-map-marker-alt text-blue-300 pr-3"></i>123 Duden Road, Dental City, DC 12345</p>
            <p><i className="fas fa-phone text-blue-300 pr-3"></i>+ (123) 456 7890</p>
            <p><i className="fas fa-envelope text-blue-300 pr-3"></i>info@dentacare.com</p>
            <p><i className="fas fa-clock text-blue-300 pr-3"></i>Mon-Fri 9 AM - 5 PM</p>
            
        </div>
        </div>
    </section>
    </>
  )
}

export default Contact