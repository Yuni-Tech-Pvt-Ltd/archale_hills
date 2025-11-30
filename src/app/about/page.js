import React from "react";

export default function About() {
  const aboutCards = [
    {
      title: "Luxurious Rooms",
      description: "Experience the comfort of our elegantly designed rooms with stunning views.",
      img: "https://images.unsplash.com/photo-1501117716987-c8e1ecb21015?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Gourmet Dining",
      description: "Savor exquisite meals prepared by world-class chefs in our fine dining restaurants.",
      img: "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Spa & Wellness",
      description: "Relax and rejuvenate with our premium spa treatments and wellness programs.",
      img: "https://images.unsplash.com/photo-1587502536263-89a6e05c82c8?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Private Beach",
      description: "Enjoy exclusive access to our pristine private beach with breathtaking views.",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <>
      <section className="w-full py-20 px-6 md:px-20 bg-white flex justify-center mt-30">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center relative">

        
        <div className="bg-[#f3f5f9] shadow-lg  p-10 md:w-1/2 z-10 md:mr-[-80px]">
          <p className="text-red-600 text-sm font-bold tracking-widest mb-2">
            ABOUT US
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-[#0d1b3e] leading-tight mb-6">
            We Invite guests to <br /> celebrate life
          </h1>

          <p className="text-gray-600 leading-relaxed mb-4">
            Imagine a utopia where all of your wishes are granted and all of your
            desires are satisfied. From our magnificent private beach to our
            sophisticated palatial house, Bluebell offers unrivalled luxury.
          </p>

          <p className="text-gray-600 leading-relaxed mb-4">
            Our 8,000 square foot luxury estate can accommodate up to 20 guests.
            From the grandness of the Great Room to the customised tranquillity of
            each suite, there's something for everyone.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            Receive special privileges and perks every time you stay with us.
          </p>

          

          <div className="inline-block">
                <button
                  className="
                    px-6 py-3 border border- 
                    uppercase text-sm tracking-widest
                    transition-all duration-300
                    hover:bg-red-600 hover:text-white
                    hover:tracking-[3px] hover:-translate-y-1
                  "
                >
                  Discover More →
                </button>
              </div>

        </div>

        <div className="md:w-1/2 relative mt-10 md:mt-0">
          <div className="absolute top-15 left-8 bg-red-600 text-white px-6 py-4 text-sm font-bold  shadow-md z-20">
            AWARDED <br /> RESORT
          </div>

          <img
            src="https://media.istockphoto.com/id/641448082/photo/beautiful-tropical-beach-front-hotel-resort-with-swimming-pool-sunshine.jpg?s=612x612&w=0&k=20&c=9PyitcP743oS7oGAoSW8iGDjf1goapy40Ol7PcCNv24="
            className="w-full  shadow-xl object-cover h-[720px]"
            alt="Resort Image"
          />
        </div>

      </div>
    </section>

      <section className="py-24 bg-gray-50 mt-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 font-serif">
            About Us
          </h2>

          <div className="grid md:grid-cols-4 gap-10">
            {aboutCards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{card.title}</h3>
                  <p className="text-gray-600">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
