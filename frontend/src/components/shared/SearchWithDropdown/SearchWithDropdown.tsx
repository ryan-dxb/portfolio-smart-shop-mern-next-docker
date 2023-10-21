import { Input } from "@/components/ui/input";
import React, { FC } from "react";

interface SearchWithDropDownProps {}

const SearchWithDropDown: FC<SearchWithDropDownProps> = () => {
  return (
    <div className="flex flex-row w-full h-10 border rounded-full">
      <div className="flex items-center min-w-[180px] max-w-[180px] w-full bg-gray-200 "></div>
      <Input className="flex px-4 bg-transparent border-none rounded-l-full rounded-r-full focus-visible:border-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0" />
      <div className="min-w-[40px] w-10 flex bg-gray-400"></div>
    </div>
  );
};

export default SearchWithDropDown;
