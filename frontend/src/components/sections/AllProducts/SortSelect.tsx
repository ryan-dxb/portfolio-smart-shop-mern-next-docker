"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { FC } from "react";

interface SortSelectProps {}

const sortby = [
  { name: "Newest", value: "newest" },
  { name: "Featured", value: "featured" },
  { name: "Best Selling", value: "best-selling" },
  { name: "Alphabetically, A-Z", value: "alphabetically-ascending" },
  { name: "Alphabetically, Z-A", value: "alphabetically-descending" },
  { name: "Price: Low to High", value: "price-ascending" },
  { name: "Price: High to Low", value: "price-descending" },
  { name: "Date: New to Old", value: "date-descending" },
  { name: "Date: Old to New", value: "date-ascending" },
];

const SortSelect: FC<SortSelectProps> = () => {
  return (
    <Select>
      <SelectTrigger className="focus:ring-0 focus:ring-ring focus:ring-offset-0 relative w-[80%] h-[90%] bg-white self-end rounded-t-sm flex items-center justify-between px-2 rounded-b-none">
        <div className="flex items-center space-x-2 text-sm">
          <p className="text-xs text-gray-400">Sort by: </p>
          <SelectValue />
        </div>
      </SelectTrigger>
      <SelectContent>
        {sortby.map((item) => (
          <SelectItem value={item.value}>{item.name}</SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SortSelect;
