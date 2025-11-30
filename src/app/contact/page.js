import React from "react";

export default function ContactSection() {
  return (
    <section
      className="w-full h-[500px] py-24 bg-cover bg-center relative mt-20 mt-40"
      style={{
        backgroundImage:
          "url('https://www.viceroyhotelsandresorts.com/sites/default/files/2025-04/Riviera-Maya-Pool.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-white">
        <h1 className="text-5xl font-bold text-center mb-2 font-serif">
          Contact Us
        </h1>
        <p className="text-center text-gray-200 max-w-3xl mx-auto mb-12">
          Have questions or want to make a reservation? Reach out to us and our team will assist you promptly.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <form className="bg-white bg-opacity-50 text-gray-900 rounded-3xl shadow-lg p-8 flex flex-col gap-6 ">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            />
            <input
              type="text"
              placeholder="Subject"
              className="border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            />
            <textarea
              placeholder="Your Message"
              className="border border-gray-300 rounded-xl p-4 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            ></textarea>
            <button
              type="submit"
              className="bg-[#FFD700] text-[#1B2A49] font-semibold py-3 rounded-full hover:bg-yellow-500 transition transform hover:-translate-y-1"
            >
              Send Message
            </button>
          </form>

          <div className="flex flex-col justify-center mb-60 ml-10 font-bold text-gray-200">
            <div className="flex items-center gap-4">
              <span className="text-2xl">📍</span>
              <p>123 Ocean Drive, Paradise City, Country</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-2xl">📞</span>
              <p>+123 456 7890</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-2xl">✉️</span>
              <p>contact@luxuryresort.com</p>
            </div>
            <p className="mt-6 text-gray-200">
              We are available 24/7 for any inquiries or special requests. Feel free to reach out!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
