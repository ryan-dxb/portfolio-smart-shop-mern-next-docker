import FeatureBox from "@/components/sections/FeatureBox";
import ShopByCategory from "@/components/sections/ShopByCategory";
import Image from "next/image";

export default function Home() {
  return (
    <main className="my-2 content-container">
      <FeatureBox />
      <section className="grid grid-cols-12 mt-6">
        <div className="col-span-3">
          {/* Menu */}
          <ShopByCategory />
        </div>
        <div className="col-span-9">{/* Carousel */}</div>
      </section>
    </main>
  );
}
