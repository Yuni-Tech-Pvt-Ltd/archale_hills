import React from "react";

export default function main() {
  return (
    <div className="w-full font-serif">
      <div className="relative w-full h-[600px]">
        <img
          src="https://i.guim.co.uk/img/media/bb9e4ed57f3325c252592f9f37add283ebc862eb/0_2846_8260_4956/master/8260.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=520e2f5f4efa8e49e57d96914af9ab8a"
          alt="Luxury Hotel Room"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />

        <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-10">
          <h1 className="text-white text-5xl font-bold leading-snug max-w-3xl">
            Book Your Dream Luxurious<br /> Hotel With Luxcorio
          </h1>

          <p className="text-gray-200 mt-6 max-w-xl  text-lg">
            At our hotel, luxury is more than just a word—it's a tradition. From exquisite design to personalized service,
            every detail is thoughtfully curated to create unforgettable experiences.
          </p>

          
            <button className="bg-gray-500 text-white border border-white px-6 py-3 my-10 rounded-full font-semibold hover:bg-gray-800">
              Book Now
            </button>c
        </div>
        
        </div>
        
      </div>
  
  );
}
