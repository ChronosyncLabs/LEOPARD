'use client';

const categories = [
  {
    id: 1,
    title: "Men's",
    image: '/essentials/mens.jpg',
  },
  {
    id: 2,
    title: "Women's",
    image: '/essentials/womens.jpg',
  },
  {
    id: 3,
    title: "Kids'",
    image: '/essentials/kids.jpg',
  },
];

export default function Essentials() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h3 className="nike-heading text-2xl md:text-3xl text-nike-black mb-8">
          The Essentials
        </h3>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div key={category.id} className="relative group cursor-pointer">
              {/* Image Container */}
              <div
                className="relative rounded-lg overflow-hidden"
                style={{ aspectRatio: '3/4' }}
              >
                {/* Placeholder Image */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center">
                  <span className="text-gray-400 nike-body text-sm">
                    {category.title} Lifestyle
                  </span>
                </div>

                {/* Button Overlay */}
                <div className="absolute bottom-8 left-8">
                  <button className="nike-body font-semibold px-6 py-3 bg-white text-nike-black rounded-full hover:bg-gray-100 transition-colors duration-200 shadow-lg">
                    Shop
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
