import React, { FC } from "react";
import CategorySelector from "./CategorySelector";
import FilterByBrands from "./FilterByBrands";
import FilterByColor from "./FilterByColor";
import FilterByPrice from "./FilterByPrice";
import FilterByReviews from "./FilterByReviews";

interface FilterMenuProps {}

const FilterMenu: FC<FilterMenuProps> = () => {
  return (
    <div className="w-full ">
      <div className="flex flex-col space-y-4">
        <CategorySelector />
        <FilterByBrands />
        <FilterByColor />
        <FilterByReviews />
        <FilterByPrice />
      </div>
    </div>
  );
};

export default FilterMenu;
