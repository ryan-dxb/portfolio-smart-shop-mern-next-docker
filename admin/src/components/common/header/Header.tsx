import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ChevronDown } from "lucide-react";
import React, { FC } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineSetting } from "react-icons/ai";
import {
  IoSearchOutline,
  IoMoonOutline,
  IoMailOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IconType } from "react-icons";
import { Input } from "@/components/ui/input";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <header className="flex flex-row items-center justify-end h-16 px-6 border-b">
      <div className="flex flex-row items-center justify-center h-14 ">
        {/* Search */}

        <div className="flex flex-row items-center h-10 p-1 border w-72">
          <Input
            className="flex flex-1 h-10 bg-transparent border-none outline-none focus:ring-0 focus:ring-transparent focus:border-none focus-visible:ring-0 focus-visible:border-transparent"
            placeholder="Search"
          />
          <div className="flex items-center justify-center w-10 h-10">
            <IoSearchOutline className="w-5 h-5 text-gray-600 " />
          </div>
        </div>
        <Separator className="h-8 mx-6" orientation="vertical" />

        {/* Icons */}
        <div className="flex flex-row space-x-1">
          <HeaderButton icon={IoMoonOutline} />
          <HeaderButton icon={IoMailOutline} />
          <HeaderButton icon={IoMdNotificationsOutline} />
          <HeaderButton icon={IoSettingsOutline} />
        </div>

        <Separator className="h-8 mx-6" orientation="vertical" />

        {/* Profile */}

        <div className="flex flex-row items-center justify-center py-2 space-x-2 ">
          <Avatar className="w-10 h-10 text-white bg-primary">
            <AvatarFallback className="bg-primary">JD</AvatarFallback>
          </Avatar>

          <p className="text-sm ">
            Hi,{" "}
            <span>
              <span className="font-bold">John Doe</span>
            </span>
          </p>

          <ChevronDown className="w-5 h-5 text-gray-600" />
        </div>
      </div>
    </header>
  );
};

interface HeaderButtonProps {
  icon: IconType;
  onClick?: () => void;
}

const HeaderButton: FC<HeaderButtonProps> = ({ icon: Icon, onClick }) => {
  return (
    <Button
      variant="ghost"
      className="w-10 h-10 p-0 text-gray-600 rounded-full"
    >
      <Icon className="w-5 h-5 text-gray-600" />
    </Button>
  );
};

export default Header;
