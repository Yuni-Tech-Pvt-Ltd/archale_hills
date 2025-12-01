"use client";
import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full bg-gray-300  text-black ">
      <div className="flex justify-between items-center px-6 ">
        <div className="flex flex-col items-start cursor-pointer">
          <div className="flex items-center space-x-3">
            <img
              src="/logo.png"
              alt="Archale Hills Logo"
              className="h-16 w-auto"
            />
            <div>
              <h1 className="text-xl font-semibold text-black leading-tight">
                Archale Hills
              </h1>
              <p className="text-xs text-blue-500 leading-tight">
                Garden Cafe & Restaurant
              </p>
            </div>
          </div>
        </div>

        <div className="hidden md:flex space-x-10 text-lg">
          <a href="/" className="hover:text-yellow-400">
            Home
          </a>
          <a href="#about" className="hover:text-yellow-400">
            About Us
          </a>
          <a href="#room" className="hover:text-yellow-400">
            Room
          </a>
          <a href="#services" className="hover:text-yellow-400">
            Services
          </a>
          <a href="#blog" className="hover:text-yellow-400">
            Blog
          </a>
          <a href="#contact" className="hover:text-yellow-400">
            Contact Us
          </a>
        </div>

        <div
          className="text-3xl md:hidden cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          ☰
        </div>
      </div>

      {open && (
        <div className="md:hidden flex flex-col space-y-6 py-6 px-6 bg-[#004240]">
          <a href="/" className="hover:text-yellow-400">
            Home
          </a>
          <a href="/about" className="hover:text-yellow-400">
            About Us
          </a>
          <a href="/room" className="hover:text-yellow-400">
            Room
          </a>
          <a href="/services" className="hover:text-yellow-400">
            Services
          </a>
          <a href="/blog" className="hover:text-yellow-400">
            Blog
          </a>
          <a href="/contact" className="hover:text-yellow-400">
            Contact Us
          </a>
        </div>
      )}
    </div>
  );
}
