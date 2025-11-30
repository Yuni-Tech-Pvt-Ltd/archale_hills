"use client";
import React from "react";
import { useEffect, useRef } from "react";

export default function Room() {
  const rooms = [
    {
      title: "Deluxe Ocean View Room",
      price: "Rs 199 / Night",
      img: "https://images.unsplash.com/photo-1501117716987-c8e1ecb21015?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Premium Suite Room",
      price: "Rs 299 / Night",
      img: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Couple Luxury Room",
      price: "Rs 249 / Night",
      img: "https://images.unsplash.com/photo-1559599238-3c63f3d13a16?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Family Resort Room",
      price: "Rs 349 / Night",
      img: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Honeymoon Spa Room",
      price: "Rs 399 / Night",
      img: "https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Garden Side Room",
      price: "Rs 159 / Night",
      img: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    let scrollAmount = 0;

    const scrollStep = () => {
      if (container) {
        scrollAmount += 1; 
        container.scrollLeft = scrollAmount;

        if (scrollAmount >= container.scrollWidth - container.clientWidth) {
          scrollAmount = 0;
        }

        requestAnimationFrame(scrollStep);
      }
    };

    requestAnimationFrame(scrollStep);
  }, []);

  return (
    <section className="w-full py-20 bg-gray-50 mt-60">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-10 font-serif">
          Our Luxury Rooms
        </h1>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto"
          style={{
            scrollbarWidth: "none", 
            msOverflowStyle: "none", 
          }}
        >
          <style>
            {`
              div::-webkit-scrollbar {
                display: none;
              }
            `}
          </style>

          {rooms.concat(rooms).map((room, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={room.img}
                alt={room.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold">{room.title}</h2>
                <p className="text-gray-600 mt-2">{room.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}