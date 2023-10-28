import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { FC } from "react";
import { Level } from "@tiptap/extension-heading";

interface HeadingDropdownProps {
  options: {
    label: string;
    value: number;
  }[];
  getLabel: () => string;
  setHeading: (headingLevel?: Level) => void;
}

const HeadingDropdown: FC<HeadingDropdownProps> = ({
  options,
  getLabel,
  setHeading,
}) => {
  const label = getLabel();

  return (
    <div className="w-32 h-8">
      <Select
        onValueChange={(value) => {
          if (value === "0") {
            setHeading();
          } else {
            setHeading(parseInt(value) as Level);
          }
        }}
      >
        <SelectTrigger className="h-8 focus-visible:ring-0 focus:ring-0">
          <SelectValue placeholder={label} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value.toString()}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default HeadingDropdown;
