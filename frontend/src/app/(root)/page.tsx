import BlogSection from "@/components/sections/BlogSection";
import FeatureBox from "@/components/sections/FeatureBox";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import HeroSection from "@/components/sections/HeroSection";
import PopularProducts from "@/components/sections/PopularProducts";
import ShopByBudget from "@/components/sections/ShopByBudget";
import ShopByCategory from "@/components/sections/ShopByCategory";

export default function Home() {
  return (
    <main className="content-container">
      <section className="grid grid-cols-12 mt-8">
        <div className="col-span-3">
          {/* Menu */}
          <ShopByCategory />
        </div>
        <div className="flex flex-col col-span-9 ">
          <HeroSection />
        </div>
      </section>

      <FeatureBox />

      <section className="mt-16">
        <FeaturedProducts />
      </section>

      <section className="mt-12">
        <ShopByBudget />
      </section>

      <section className="mt-12">
        <PopularProducts />
      </section>

      <section className="mt-12">
        <BlogSection />
      </section>
    </main>
  );
}
