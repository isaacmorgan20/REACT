import React from 'react'

const Footer = () => {
  return (
    <>
    <footer class="bg-blue-900 pb-10 text-gray-300 relative ">
        <div class="absolute top-0 left-0 w-full h-[48px] overflow-hidden">
            <svg class="relative block w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113.64,31.08,1200,56.86V0Z" fill="#f3f4f6"></path>
            </svg>
        </div>
    <section>
        <div class="lg:flex md:flex lg:space-x-30 lg:justify-center md:justify-center mt-10 text-gray-300 pt-10 md:mx-30 md:space-x-15 mx-10">
        <div>
            <p class="text-lg font-bold text-blue-500">DentaCare</p>
            <p class="w-55 md:w-30 pt-4 text-sm">A small river named Duden flows by, offering a serene dental experience.</p>
        </div>
        <div>
            <p class="text-lg font-bold text-blue-500">Quick Links</p>
            <div class="pt-4 space-y-1 text-sm">
            <a href="#" class="hover:text-blue-500">Home</a>
            <a href="#" class="block hover:text-blue-500">About</a>
            <a href="#" class="block hover:text-blue-500">Services</a>
            <a href="#" class="block hover:text-blue-500">Doctors</a>
            <a href="#" class="block hover:text-blue-500">Blog</a>
            <a href="#" class="block hover:text-blue-500">Contact</a>
            </div>
        </div>
        <div>
            <p class="text-lg font-bold text-blue-500">Services</p>
            <div class="pt-4 space-y-1 text-sm">
            <a href="#" class="block hover:text-blue-500">Teeth Whitening</a>
            <a href="#" class="block hover:text-blue-500">Teeth Cleaning</a>
            <a href="#" class="block hover:text-blue-500">Quality Brackets</a>
            <a href="#" class="block hover:text-blue-500">Dental Implants</a>
            </div>
        </div>
        <div>
            <p class="text-lg font-bold text-blue-500">Contact Us</p>
            <div class="pt-4 text-sm">
            <p><i class="fas fa-map-marker-alt text-blue-300 pr-3"></i>123 Duden Road, Dental City,</p>
            <p class="ml-6">DC 12345</p>
            <a href="#" class="hover:text-blue-500 block"><i class="fas fa-phone text-blue-300 pr-3"></i>+ (123) 456 7890</a>
            <a href="#" class="hover:text-blue-500"><i class="fas fa-envelope text-blue-300 pr-3"></i>info@dentacare.com</a>
            </div>
            <div class="mt-3 space-x-3 text-xl">
                <i class="fab fa-facebook-f hover:text-blue-600 duration-300"></i>
                <i class="fab fa-twitter hover:text-blue-600 duration-300"></i>
                <i class="fab fa-instagram hover:text-indigo-600 duration-300"></i>
            </div>
        </div>
        </div>

    </section>

   
        <p class="text-center mt-5 text-sm">&copy;2025 DentaCare. All Rights Reserved.</p>
    </footer>
    </>
  )
}

export default Footer