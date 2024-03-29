import React, { FC } from "react";
import { BsPlug, BsBook, BsPlusLg } from "react-icons/bs";
import { MdComputer, MdOutlineKitchen, MdOutlineToys } from "react-icons/md";
import { GiLipstick, GiClothes } from "react-icons/gi";
import { MdSportsSoccer } from "react-icons/md";
import { IoCarSportOutline, IoGameControllerOutline } from "react-icons/io5";
import { ChevronRight } from "lucide-react";

interface ShopByCategoryProps {}

export const categoriesData = [
  {
    id: "electronics",
    name: "Electronics",
    icon: <BsPlug />,
    link: "/search/category/electronics",
  },
  {
    id: "computers",
    name: "Computers",
    icon: <MdComputer />,
    link: "/search/category/computers",
  },
  {
    id: "home",
    name: "Home & Kitchen",
    icon: <MdOutlineKitchen />,
    link: "/search/category/home",
  },
  {
    id: "toys",
    name: "Toys & Games",
    icon: <MdOutlineToys />,
    link: "/search/category/toys",
  },
  {
    id: "books",
    name: "Books",
    icon: <BsBook />,
    link: "/search/category/books",
  },
  {
    id: "beauty",
    name: "Beauty & Health",
    icon: <GiLipstick />,
    link: "/search/category/beauty",
  },
  {
    id: "clothing",
    name: "Clothing",
    icon: <GiClothes />,
    link: "/search/category/clothing",
  },
  {
    id: "sports",
    name: "Sports & Outdoors",
    icon: <MdSportsSoccer />,
    link: "/search/category/sports",
  },
  {
    id: "automotive",
    name: "Automotive",
    icon: <IoCarSportOutline />,
    link: "/search/category/automotive",
  },
  {
    id: "gaming",
    name: "Gaming & Consoles",
    icon: <IoGameControllerOutline />,
    link: "/search/category/gaming",
  },
  {
    id: "more",
    name: "More Categories",
    icon: <BsPlusLg />,
    link: "/search/category/all",
  },
];

const ShopByCategory: FC<ShopByCategoryProps> = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col ">
        <div className="flex items-center w-full h-12 px-6 border-t border-x bg-gray-50">
          <h2 className="text-sm font-bold tracking-wide uppercase">
            Shop By Department
          </h2>
        </div>
        <ul className="flex flex-col ">
          {categoriesData.map((category) => (
            <li key={category.name}>
              <a href={category.link}>
                <div className="flex flex-row items-center justify-between w-full h-12 px-6 border">
                  <div className="flex flex-row items-center space-x-4">
                    <div className="flex items-center justify-center text-xl">
                      {category.icon}
                    </div>
                    <span className="text-sm tracking-wide">
                      {category.name}
                    </span>
                  </div>
                  <div className="flex items-center justify-center">
                    <ChevronRight size={20} />
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ShopByCategory;
