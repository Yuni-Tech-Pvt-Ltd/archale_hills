import React from "react";
import Link from "next/link";


export default function BlogSection() {
  const blogs = [
    {
      title: "Top 5 Beaches to Visit Near Our Resort",
      date: "Nov 15, 2025",
      excerpt: "Discover the most beautiful and serene beaches around our resort for your perfect getaway.",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Exciting Adventure Activities at Our Resort",
      date: "Nov 12, 2025",
      excerpt: "From water sports to mountain treks, discover thrilling activities to make your stay unforgettable.",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    },

    {
      title: "Luxury Dining Experiences at the Resort",
      date: "Nov 5, 2025",
      excerpt: "Explore our gourmet restaurants and enjoy a culinary journey with breathtaking views.",
      img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <section className="w-full py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-4 font-serif">
          From Our Blog
        </h1>
        <p className="text-center font-bold text-gray-600 max-w-2xl mx-auto mb-16">
          Explore the latest tips, news, and insights from our resort and surrounding area to make your stay unforgettable.
        </p>

        <div className="relative grid md:grid-cols-12 gap-8">
          <div className="md:col-span-7 relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
            <img
              src={blogs[0].img}
              alt={blogs[0].title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-10 flex flex-col justify-end">
              <p className="text-sm text-gray-300 mb-2">{blogs[0].date}</p>
              <h2 className="text-3xl font-bold text-white mb-4">{blogs[0].title}</h2>
              <p className="text-white max-w-2xl mb-4">{blogs[0].excerpt}</p>
              <Link href="/blog">
                <button className="px-6 py-2 bg-[#FFD700] text-[#1B2A49] font-semibold rounded-full hover:bg-yellow-500 transition">
                  Read More
                </button>
              </Link>
            </div>
          </div>

          <div className="md:col-span-5 flex flex-col gap-8 mt-12 md:mt-0">
            {blogs.slice(1).map((blog, index) => (
              <div
                key={index}
                className={`relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer transform transition-transform duration-500 hover:-translate-y-2`}
              >
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="p-6 bg-white">
                  <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
                  <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
                  <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                  <Link href="/blog">
                    <button className="px-6 py-2 bg-[#FFD700] text-[#1B2A49] font-semibold rounded-full hover:bg-yellow-500 transition">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
