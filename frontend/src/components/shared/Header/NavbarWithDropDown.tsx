import React, { FC } from "react";
import DropDownMenu from "./DropdownMenu";
import Link from "next/link";
import { ChevronRight, Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavbarWithDropDownProps {}

const NavbarWithDropDown: FC<NavbarWithDropDownProps> = () => {
  return (
    <div className="border-b shadow-sm bg-primary h-14 border-gray-50">
      <div className="grid flex-row h-full grid-cols-12 gap-x-6 content-container ">
        <div className="flex items-center w-full h-full col-span-3">
          <DropDownMenu />
        </div>

        <ul className="flex flex-row items-center justify-start col-span-7 space-x-12 text-gray-300">
          <li className="text-white">
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Best Selling</Link>
          </li>
          <li>
            <Link href="/">All Products</Link>
          </li>
          <li>
            <Link href="/">Events</Link>
          </li>
          <li>
            <Link href="/">FAQ</Link>
          </li>
        </ul>

        <div className="flex items-center justify-end col-span-2 text-primary/80">
          <Button variant="outline">
            Become a Seller
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NavbarWithDropDown;
