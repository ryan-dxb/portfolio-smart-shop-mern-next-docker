import { Button } from "@/components/ui/button";
import React, { FC } from "react";
import { TbGridDots, TbList } from "react-icons/tb";
import SortSelect from "./SortSelect";

interface GridListHeaderProps {}

const GridListHeader: FC<GridListHeaderProps> = () => {
  return (
    <div className="grid items-center grid-cols-3 px-4 border-b h-14">
      <p className="col-span-1 text-xs">Showing 1-10 of 1000 results</p>
      <div className="flex flex-row items-center justify-center space-x-4">
        <Button
          variant="ghost"
          className="p-0 text-xl bg-transparent hover:text-primary hover:bg-transparent"
        >
          <TbList />
        </Button>
        <Button
          variant="ghost"
          className="p-0 text-xl bg-transparent hover:text-primary hover:bg-transparent"
        >
          <TbGridDots />
        </Button>
      </div>
      <p className="flex items-center justify-end col-span-1 ">
        <SortSelect />
      </p>
    </div>
  );
};

export default GridListHeader;
