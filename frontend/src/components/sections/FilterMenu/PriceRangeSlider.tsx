"use client";

import { RangeSlider } from "@/components/ui/rangeSlider";
import React, { FC, useState } from "react";

interface PriceRangeSliderProps {}

const PriceRangeSlider: FC<PriceRangeSliderProps> = () => {
  const [range, setRange] = useState([0, 24]);

  const handleRangeChange = (value: number[]) => {
    setRange(value);
    console.log(value);
  };
  return (
    <div className="mt-4 ">
      <RangeSlider
        max={100}
        min={0}
        step={1}
        value={range}
        onValueChange={handleRangeChange}
        formatLabel={(value) => `${value} years`}
        minStepsBetweenThumbs={1}
      />

      <div className="flex flex-row items-center space-x-2">
        <span className="text-sm font-medium text-gray-700">Price:</span>
        <div className="flex flex-row items-center space-x-1">
          <span className="text-sm font-medium text-gray-900">${range[0]}</span>
          <span>-</span>
          <span className="text-sm font-medium text-gray-900">${range[1]}</span>
        </div>
      </div>
    </div>
  );
};

export default PriceRangeSlider;
