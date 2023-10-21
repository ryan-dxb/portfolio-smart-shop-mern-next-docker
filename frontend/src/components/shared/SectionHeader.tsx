import React, { FC } from "react";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";

interface SectionHeaderProps {
  title1: string;
  title2?: string;
  viewAllLink?: string;
}

const SectionHeader: FC<SectionHeaderProps> = ({
  title1,
  title2,
  viewAllLink,
}) => {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex items-center space-x-2 text-2xl font-bold">
        <h2 className="">{title1}</h2>
        {title2 && <h2 className="text-primary">{title2}</h2>}
      </div>
      {viewAllLink && (
        <Button variant="ghost" size="sm">
          View All
          <ChevronRight className="w-4 h-4 ml-2" />
        </Button>
      )}
    </div>
  );
};

export default SectionHeader;
