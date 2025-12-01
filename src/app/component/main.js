import React from "react";
import { MapPinIcon, CalendarIcon } from "@heroicons/react/24/solid";

export default function Main() {
  return (
    <div className="w-full">
      <div className="relative w-full h-[600px] md:h-[650px] sm:h-[500px]">
        <img
          src="https://i.guim.co.uk/img/media/bb9e4ed57f3325c252592f9f37add283ebc862eb/0_2846_8260_4956/master/8260.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=520e2f5f4efa8e49e57d96914af9ab8a"
          alt="Luxury Hotel Room"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />

        <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-6 sm:px-4">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-snug max-w-3xl">
            Book Your Dream Luxurious <br /> Hotel With Luxcorio
          </h1>

          <p className="text-gray-200 mt-4 sm:mt-6 max-w-xl text-sm sm:text-base md:text-lg px-2">
            At our hotel, luxury is more than just a word—it's a tradition. From
            exquisite design to personalized service, every detail is curated to
            create unforgettable experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6 sm:mt-10">
            <a href="/booking">
              <button className="flex items-center gap-2 bg-gray-500 text-white border border-white px-5 py-2 sm:px-6 sm:py-3 rounded-full font-semibold hover:bg-gray-800 text-sm sm:text-base">
                <CalendarIcon className="h-5 w-5" />
                Book Now
              </button>
            </a>

            <a
              href="https://www.google.com/maps/place/The+Garden+Cafe+And+Restaurant/@27.6548377,83.4659783,17.75z/data=!4m6!3m5!1s0x3996856be565e89f:0x253f97a938d1e7bf!8m2!3d27.6535553!4d83.4684756!16s%2Fg%2F11ghfsjcjl?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex items-center gap-2 bg-yellow-500 text-black px-5 py-2 sm:px-6 sm:py-3 rounded-full font-semibold hover:bg-yellow-600 text-sm sm:text-base">
                <MapPinIcon className="h-5 w-5" />
                Get Directions
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
