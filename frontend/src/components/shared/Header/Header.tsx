import React, { FC } from "react";
import Logo from "../Logo";
import Link from "next/link";
import { Heart, ShoppingCart } from "lucide-react";
import SearchWithDropDown from "../SearchWithDropdown";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <header>
      <div className="h-24 content-container">
        <div className="flex items-center h-full space-x-8">
          <Logo />
          {/* Search */}
          <div className="flex flex-1">
            <SearchWithDropDown />
          </div>
          {/* Icons */}
          <ul className="flex items-center space-x-6">
            <li>
              <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
            </li>
            <li>
              <Heart className="" size={22} />
            </li>
            <li>
              <ShoppingCart className="" size={22} />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
