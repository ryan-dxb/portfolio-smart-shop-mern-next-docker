import FeatureBox from "@/components/sections/FeatureBox";
import ShopByCategory from "@/components/sections/ShopByCategory";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navItems = [
  {
    title: "Home",
    href: "#",
    active: true,
  },
  {
    title: "Best Seller",
    href: "#",
  },

  {
    title: "Deals",
    href: "#",
  },
  {
    title: "All Products",
    href: "#",
  },
  {
    title: "Blog",
    href: "#",
  },
  {
    title: "About Us",
    href: "#",
  },

  {
    title: "FAQ",
    href: "#",
  },
];

export default function Home() {
  return (
    <main className="my-2 content-container">
      <FeatureBox />
      <section className="grid grid-cols-12 mt-6">
        <div className="col-span-3">
          {/* Menu */}
          <ShopByCategory />
        </div>
        <div className="flex flex-col col-span-9 ">
          <div className="flex w-full h-12 border-r border-y bg-gray-50">
            <ul className="flex flex-row items-center justify-between w-full px-8 ">
              {navItems.map((item) => (
                <li key={item.title} className="inline-block">
                  <a
                    href="#"
                    className={cn(
                      "text-sm font-bold tracking-wider ",
                      item.active && "text-primary"
                    )}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Carousel */}
          <div className="flex flex-1 pt-8 pl-8">
            <div className="relative bottom-0 flex-1 w-full ">
              <Image
                src="/slide-1.png"
                alt="hero"
                priority
                fill
                className="object-cover object-right-top"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
