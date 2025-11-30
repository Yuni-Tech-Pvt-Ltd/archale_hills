import React from "react";

export default function Navbar() {
  return (
    <div className="w-full bg-[#004240] text-white px-5 py-5 flex justify-between items-center relative">
      <div className="text-3xl cursor-pointer">☰</div>
        <div className="absolute left-1/2 transform -translate-x-1/2">
         <div className="flex space-x-10 text-lg items-center">
          <a href="/" className="hover:text-yellow-400 cursor-pointer">Home</a>
          <a  href="/about"  className="hover:text-yellow-400 cursor-pointer">About Us</a>
          <a  href="/room"  className="hover:text-yellow-400 cursor-pointer">Room</a>

          <div className="flex flex-col items-center">
            <div className="bg-yellow-500 px-6 py-3 rounded-t-3xl text-black font-bold text-xl shadow-lg">
              LUXCORIO
            </div>
          </div>

          <a  href="/services"  className="hover:text-yellow-400 cursor-pointer">Services</a>
          <a  href="/blog"  className="hover:text-yellow-400 cursor-pointer">Blog</a>
          <a  href="/contact"  className="hover:text-yellow-400 cursor-pointer">Contact Us</a>
        </div>
      </div>
    </div>

      
  );
}
