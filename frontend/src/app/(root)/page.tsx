import FeatureBox from "@/components/sections/FeatureBox";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import HeroSection from "@/components/sections/HeroSection";
import ShopByCategory from "@/components/sections/ShopByCategory";

export default function Home() {
  return (
    <main className="my-8 content-container">
      <FeatureBox />
      <section className="grid grid-cols-12 mt-8">
        <div className="col-span-3">
          {/* Menu */}
          <ShopByCategory />
        </div>
        <div className="flex flex-col col-span-9 ">
          <HeroSection />
        </div>
      </section>

      <section className="mt-16">
        <FeaturedProducts />
      </section>
    </main>
  );
}
