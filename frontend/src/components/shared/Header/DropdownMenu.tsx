"use client";
import { NextPage } from "next";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Menu } from "lucide-react";
import { categoriesData } from "@/components/sections/ShopByCategory/ShopByCategory";

interface DropDownMenuProps {
  // categoriesData: typeof categoriesData;
}

const DropDownMenu: NextPage<DropDownMenuProps> = () => {
  return (
    <Select>
      <SelectTrigger className="focus:ring-0 focus:ring-ring focus:ring-offset-0 relative w-64 h-[90%] bg-white self-end rounded-t-md flex items-center justify-between px-6 rounded-b-none">
        <div className="flex items-center space-x-2">
          <Menu size={15} className="text-primary/50" />
          <SelectValue placeholder="All Categories" />
        </div>
      </SelectTrigger>
      <SelectContent>
        {categoriesData.map((category) => (
          <SelectItem value={category.name}>{category.name}</SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default DropDownMenu;
