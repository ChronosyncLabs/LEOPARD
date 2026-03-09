'use client';

export default function FeaturedBanner() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Cinematic Image Container */}
        <div
          className="relative rounded-lg overflow-hidden mb-8"
          style={{ height: '85vh', minHeight: '600px' }}
        >
          {/* Placeholder for Cheetah Forest Image */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-orange-800 to-yellow-700 flex items-center justify-center">
            <span className="text-white/30 nike-body text-lg">
              Cheetah Forest Cinematic Image
            </span>
          </div>

          {/* Optional Overlay Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h2
              className="nike-heading text-white text-center px-6"
              style={{
                fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                textShadow: '0 4px 20px rgba(0,0,0,0.3)',
              }}
            >
              STEP INTO WHAT FEELS GOOD
            </h2>
          </div>
        </div>

        {/* Optional Bottom Text */}
        <div className="text-center">
          <p className="nike-body text-base md:text-lg text-nike-black max-w-2xl mx-auto">
            Cause everyone should know the feeling of running in that perfect pair.
          </p>
        </div>
      </div>
    </section>
  );
}
