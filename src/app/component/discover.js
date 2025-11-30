
import React from "react";
import Link from "next/link";

export default function Discover() {
  return (
    <section className="w-full py-20 px-6 md:px-20 bg-white flex justify-center">
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
 <Link href="/about">
  <button
    className="
      px-6 py-3 border border-white 
      uppercase text-sm tracking-widest
      transition-all duration-300
      hover:bg-red-600 hover:text-white
      hover:tracking-[3px] hover:-translate-y-1
    "
  >
    Discover More →
  </button>
</Link>
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
  );
}
