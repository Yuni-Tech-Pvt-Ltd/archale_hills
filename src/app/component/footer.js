import React from "react";

export default function FooterSection() {
  return (
    <footer className="relative bg-[#1B2A49] text-white pt-16 mt-90 overflow-hidden">
      {/* Decorative wave top */}
      <div className="absolute -top-10 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          className="relative block w-full h-12"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C600,120 600,0 1200,0 L1200,120 L0,120 Z"
            className="fill-white/10"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section: Flex layout */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-stretch gap-12">
          {/* About */}
          <div className="flex-1">
           <h3 className="text-2xl font-bold mb-4">Luxury Resort Experience</h3>
            <p className="text-gray-300 mb-4 ">
                Enjoy a serene escape at our resort. Indulge in world-class amenities, breathtaking views.
            </p>

            <div className="flex gap-4">
              <a href="#" className="bg-[#FFD700] text-[#1B2A49] rounded-full p-3 hover:scale-110 transition-transform shadow-lg">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="bg-[#FF4500] text-white rounded-full p-3 hover:scale-110 transition-transform shadow-lg">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="bg-[#1DA1F2] text-white rounded-full p-3 hover:scale-110 transition-transform shadow-lg">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-[#FFD700] transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-[#FFD700] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#FFD700] transition-colors">Romm</a></li>
              <li><a href="#" className="hover:text-[#FFD700] transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-[#FFD700] transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-[#FFD700] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-4">Contact</h3>
            <p className="text-gray-300">123 Travel Street, Kathmandu, Nepal</p>
            <p className="text-gray-300">Email: info@traveltour.com</p>
            <p className="text-gray-300">Phone: +977 9812345678</p>
          </div>

          {/* Newsletter */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">Subscribe to get latest travel updates</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="p-3 rounded-md text-gray-900 flex-1 focus:outline-none placeholder-gray-600"
              />
              <button className="bg-[#FFD700] hover:bg-yellow-500  px-6  text-sm rounded-full text-[#1B2A49] font-semibold transition-transform transform hover:-translate-y-1">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/20 mt-12 pt-6 text-center text-gray-300 text-sm">
          © 2025 Resort. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
