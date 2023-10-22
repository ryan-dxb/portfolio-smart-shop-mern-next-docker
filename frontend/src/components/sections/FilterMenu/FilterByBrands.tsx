import React, { FC } from "react";
import FilterMenuHeader from "./FilterMenuHeader";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface FilterByBrandsProps {}

const brands = [
  "Apple",
  "Samsung",
  "Huawei",
  "Xiaomi",
  "Oppo",
  "Vivo",
  "Lenovo",
  "LG",
  "Sony",
  "Nokia",
  "HTC",
  "Motorola",
  "Blackberry",
  "Asus",
  "Alcatel",
  "ZTE",
  "Toshiba",
  "Vodafone",
  "Gigabyte",
  "Pantech",
  "XOLO",
  "Lava",
  "Micromax",
  "BLU",
  "Spice",
  "ACER",
  "Amazon",
  "HP",
  "Dell",
  "Asus",
  "Microsoft",
  "Google",
  "Acer",
  "Lenovo",
  "Toshiba",
  "Sony",
  "Fujitsu",
  "Samsung",
  "Panasonic",
  "LG",
  "MSI",
  "Razer",
  "Alienware",
  "Mediacom",
  "Chuwi",
  "Teclast",
  "Cube",
  "Onda",
  "Voyo",
  "Jumper",
  "Haier",
  "Digma",
  "Prestigio",
  "Irulu",
  "iBall",
  "Allview",
  "Yuntab",
  "Micromax",
  "Digiland",
  "Acer",
];

const FilterByBrands: FC<FilterByBrandsProps> = () => {
  return (
    <div className="p-4 border">
      <FilterMenuHeader title="Filter By Brands" />

      <ScrollArea className="h-32 mt-4">
        <div className="grid grid-cols-2 gap-2">
          {brands.map((brand) => (
            <div key={brand} className="flex items-center space-x-2 ">
              <Checkbox id={brand} />
              <Label htmlFor={brand}>
                <span className="text-sm text-gray-600">{brand}</span>
              </Label>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default FilterByBrands;
