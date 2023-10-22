import { Separator } from "@/components/ui/separator";
import React, { FC } from "react";

interface FilterMenuHeaderProps {
  title: string;
}

const FilterMenuHeader: FC<FilterMenuHeaderProps> = ({ title }) => {
  return (
    <>
      <div className="flex items-center justify-between ">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <button className="text-sm font-medium transition-all duration-200 text-primary opacity-80 hover:opacity-100">
          Clear
        </button>
      </div>
      <Separator className="my-2" />
    </>
  );
};

export default FilterMenuHeader;
