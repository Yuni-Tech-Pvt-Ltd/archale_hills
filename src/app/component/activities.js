
import React from "react";
import { Wifi, Car, Tv, Bath, Coffee, Waves } from "lucide-react";

export default function Activities() {
  const items = [
    {
      icon: <Wifi className="w-12 h-12 text-blue-900" />,
      title: "High Speed Wifi",
      text: "With our service you may enjoy the finest life in our resort.",
    },
    {
      icon: <Car className="w-12 h-12 text-blue-900" />,
      title: "Pick & Drop Facility",
      text: "With our service you may enjoy the finest life in our resort.",
    },
    {
      icon: <Tv className="w-12 h-12 text-blue-900" />,
      title: "Smart TV",
      text: "With our service you may enjoy the finest life in our resort.",
    },
    {
      icon: <Waves className="w-12 h-12 text-blue-900" />,
      title: "Swimming Pool",
      text: "With our service you may enjoy the finest life in our resort.",
    },
    {
      icon: <Coffee className="w-12 h-12 text-blue-900" />,
      title: "Breakfast Included",
      text: "With our service you may enjoy the finest life in our resort.",
    },
    {
      icon: <Bath className="w-12 h-12 text-blue-900" />,
      title: "Shower Bathtub",
      text: "With our service you may enjoy the finest life in our resort.",
    },
  ];

  return (
    <section className="w-full py-20 bg-white flex flex-col items-center">
      <div className="flex items-center mb-2">
        <div className="w-10 h-[2px] bg-red-600 mr-3"></div>
        <p className="text-red-600 font-bold tracking-[3px]">AMENITIES</p>
        <div className="w-10 h-[2px] bg-red-600 ml-3"></div>
      </div>

      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-blue-900 mt-7">
        Make Your Stay Memorable
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-14 max-w-6xl w-full px-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center 
            transition-all duration-300 transform 
            hover:scale-110 hover:-translate-y-2 hover:shadow-xl p-4 rounded-xl"
          >
            {item.icon}
            <h3 className="text-xl font-semibold mt-4 text-blue-900">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm max-w-xs mt-2">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
