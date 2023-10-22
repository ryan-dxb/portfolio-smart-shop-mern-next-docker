import React, { FC } from "react";
import FilterMenuHeader from "./FilterMenuHeader";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Star } from "lucide-react";

interface FilterByReviewsProps {}

const FilterByReviews: FC<FilterByReviewsProps> = () => {
  return (
    <div className="p-4 border">
      <FilterMenuHeader title="Filter By Reviews" />

      <div className="mt-4">
        <RadioGroup defaultValue="comfortable">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="default" id="r1" />
            <Label htmlFor="r1">
              <span className="text-sm text-gray-600">All</span>
            </Label>
          </div>

          <ReviewItem value={4} id="r2" />
          <ReviewItem value={3} id="r3" />
          <ReviewItem value={2} id="r4" />
          <ReviewItem value={1} id="r5" />
        </RadioGroup>
      </div>
    </div>
  );
};

const ReviewItem: FC<{ value: number; id: string }> = ({ value, id }) => {
  return (
    <div className="flex items-center space-x-2 ">
      <RadioGroupItem value={value.toString()} id={id} />
      <Label htmlFor={id}>
        <div className="flex flex-row space-x-2">
          <div className="flex flex-row items-center space-x-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={14}
                className={`${
                  i < value ? "text-yellow-400 fill-yellow-400" : ""
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">(or higher)</span>
        </div>
      </Label>
    </div>
  );
};

export default FilterByReviews;
