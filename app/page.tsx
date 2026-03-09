import TigerExperience from '@/components/TigerExperience';
import ProductIntro from '@/components/ProductIntro';
import BestOfAirMax from '@/components/BestOfAirMax';
import FeaturedBanner from '@/components/FeaturedBanner';
import Essentials from '@/components/Essentials';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';

export default function Home() {
  return (
    <SmoothScroll>
      <main className="relative">
        {/* Hero: Tiger Scrollytelling Experience */}
        <TigerExperience />

        {/* Post-Hero Content */}
        <div className="relative z-10 bg-white">
          <ProductIntro />
          <BestOfAirMax />
          <FeaturedBanner />
          <Essentials />
          <Footer />
        </div>
      </main>
    </SmoothScroll>
  );
}
