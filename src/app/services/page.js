import React from "react";

export default function Services() {
  const services = [
    {
      title: "High-Speed Wifi",
      description: "Stay connected with fast and reliable internet throughout the resort.",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Luxury Car Service",
      description: "Travel around the city or resort in style with our premium car service.",
      img: "https://t3.ftcdn.net/jpg/06/11/55/84/360_F_611558437_CVV3pSZy2Ot9dQUdlk2xat83Lx5QqriH.jpg"
    },

    {
      title: "24/7 Café",
      description: "Enjoy fresh coffee and snacks anytime at our in-house café.",
      img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Private Beach",
      description: "Relax on our pristine private beach exclusive to resort guests.",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Entertainment",
      description: "Access to TV, movies, and games for your leisure and fun.",
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Spa & Wellness",
      description: "Rejuvenate with our luxury spa treatments and wellness programs.",
      img: "https://barinhealth.com/wp-content/uploads/Top-7-Factors-to-Consider-When-Choosing-a-Spa.jpg",
    },
  ];

  return (
    <section className="w-full py-20 bg-gray-50 mt-60">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-4 font-serif">
          Our Services
        </h1>
              <p className="text-center text-gray-500 max-w-3xl mx-auto mb-12">
                 Experience the ultimate in comfort and luxury at our resort. From relaxing spa treatments to 
                 private beach access and convenient airport shuttle services, we offer a variety of amenities 
                 designed to make your stay unforgettable.
              </p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center p-6">
                <h2 className="text-2xl font-bold text-white mb-2">
                  {service.title}
                </h2>
                <p className="text-white text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
