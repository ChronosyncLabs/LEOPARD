'use client';

export default function ProductIntro() {
  return (
    <section className="bg-white py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Eyebrow */}
        <p className="nike-body text-sm font-semibold uppercase tracking-wider mb-4">
          First Look
        </p>

        {/* Title */}
        <h2
          className="nike-heading text-nike-black mb-6"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)' }}
        >
          NIKE AIR MAX PULSE
        </h2>

        {/* Description */}
        <p className="nike-body text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse,
          designed to push you past your limits and help you go to the max.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="nike-body font-semibold px-6 py-3 bg-nike-black text-white rounded-full hover:bg-nike-carbon transition-colors duration-200">
            Notify Me
          </button>
          <button className="nike-body font-semibold px-6 py-3 bg-nike-black text-white rounded-full hover:bg-nike-carbon transition-colors duration-200">
            Shop Air Max
          </button>
        </div>
      </div>
    </section>
  );
}
