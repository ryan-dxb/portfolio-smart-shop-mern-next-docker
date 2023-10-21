import { cn } from "@/lib/utils";
import React, { FC } from "react";

interface HeroNavbarProps {}

const navItems = [
  {
    title: "Home",
    href: "#",
    active: true,
  },
  {
    title: "All Products",
    href: "#",
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

const HeroNavbar: FC<HeroNavbarProps> = () => {
  return (
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
  );
};

export default HeroNavbar;
