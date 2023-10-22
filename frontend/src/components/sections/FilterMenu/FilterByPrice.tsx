import React, { FC } from "react";
import FilterMenuHeader from "./FilterMenuHeader";

import PriceRangeSlider from "./PriceRangeSlider";

interface FilterByPriceProps {}

const FilterByPrice: FC<FilterByPriceProps> = () => {
  return (
    <div className="p-4 border">
      <FilterMenuHeader title="Filter By Price" />

      <div className="pt-2">
        <PriceRangeSlider />
      </div>
    </div>
  );
};

export default FilterByPrice;
