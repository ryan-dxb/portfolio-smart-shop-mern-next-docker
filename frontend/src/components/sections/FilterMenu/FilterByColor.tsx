import React, { FC } from "react";
import FilterMenuHeader from "./FilterMenuHeader";

interface FilterByColorProps {}

const colors = [
  "Red",
  "Green",
  "Blue",
  "Black",
  "White",
  "Yellow",
  "Pink",
  "Gold",
  "Silver",
  "Gray",
  "Brown",
  "Purple",
  "Orange",
];

const FilterByColor: FC<FilterByColorProps> = () => {
  return (
    <div className="p-4 border">
      <FilterMenuHeader title="Filter By Color" />

      <div className="grid grid-cols-6 gap-2 mt-4">
        {colors.map((color) => (
          <div
            key={color}
            className="w-8 h-8 border rounded-full cursor-pointer"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </div>
  );
};

export default FilterByColor;
