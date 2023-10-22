import { Button } from "@/components/ui/button";
import React, { FC } from "react";
import { BsFillGrid3X3GapFill, BsListUl } from "react-icons/bs";
import { TbGridDots, TbList } from "react-icons/tb";
import SortSelect from "./SortSelect";
import GridListHeader from "./GridListHeader";
import { StoreItemCardOne } from "@/components/shared/ItemCards";
import { products } from "../PopularProducts/PopularProducts";

interface AllProductsProps {}

const AllProducts: FC<AllProductsProps> = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl">Products</h1>
      <div className="w-full mt-4 border">
        <GridListHeader />
      </div>
      <div className="grid grid-cols-4 gap-2 px-2 pt-2 border-b border-x">
        {products.map((product) => (
          <StoreItemCardOne key={product.id} item={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
