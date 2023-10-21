import React, { FC } from "react";
import DropDownMenu from "./DropdownMenu";
import Link from "next/link";
import { Heart, ShoppingCart } from "lucide-react";

interface NavbarWithDropDownProps {}

const NavbarWithDropDown: FC<NavbarWithDropDownProps> = () => {
  return (
    <div className="h-16 bg-red-500 border-b shadow-sm border-gray-50">
      <div className="flex items-center justify-between w-11/12 h-full mx-auto max-w-7xl">
        <div className="flex flex-row items-center h-full ">
          <DropDownMenu />

          <ul className="flex flex-row items-center pt-2 ml-12 space-x-12 text-primary/80">
            <li className="text-primary-foreground">
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
        </div>

        <div className="flex items-center text-primary/80">
          <ul className="flex items-center space-x-6">
            <li>
              <Heart className="" size={22} />
            </li>
            <li>
              <ShoppingCart className="" size={22} />
            </li>
            <li>
              <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
            </li>
            <li>
              <Link href="/">Login</Link>
            </li>
            <li>
              <Link href="/">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarWithDropDown;
