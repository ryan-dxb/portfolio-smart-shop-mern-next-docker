"use client";

import React, { FC } from "react";
import FilterMenuHeader from "./FilterMenuHeader";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { categoriesData } from "../ShopByCategory/ShopByCategory";
import { ScrollArea } from "@/components/ui/scroll-area";

interface CategorySelectorProps {}

const CategorySelector: FC<CategorySelectorProps> = () => {
  const [selectedCategories, setSelectedCategories] = React.useState<string[]>(
    []
  );

  const handleCategoryChange = (id: string) => {
    if (selectedCategories.includes(id)) {
      setSelectedCategories((prev) => prev.filter((item) => item !== id));
    } else {
      setSelectedCategories((prev) => [...prev, id]);
    }
  };

  return (
    <div className="p-4 border">
      <FilterMenuHeader title="Category" />

      <ScrollArea className="mt-4 h-60">
        <ul className="flex flex-col space-y-2">
          {categoriesData.map((category) => (
            <CategoryItem
              key={category.id}
              id={category.id}
              name={category.name}
              selected={selectedCategories.includes(category.id)}
              onChange={() => handleCategoryChange(category.id)}
            />
          ))}
        </ul>
      </ScrollArea>
    </div>
  );
};

interface CategoryItemProps {
  name: string;
  id: string;
  selected: boolean;
  onChange: () => void;
}

const CategoryItem: FC<CategoryItemProps> = ({
  name,
  id,
  selected,
  onChange,
}) => {
  return (
    <li className="flex items-center space-x-4">
      <Checkbox id={id} checked={selected} onCheckedChange={onChange} />
      <Label htmlFor={id}>
        <span className="text-sm text-gray-600">{name}</span>
      </Label>
    </li>
  );
};

export default CategorySelector;
