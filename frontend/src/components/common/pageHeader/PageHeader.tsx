import { Button } from "@/components/ui/button";
import React, { FC } from "react";

interface PageHeaderProps {
  title?: string;
  subtitle?: string;
  actions?: React.ReactNode;
}

const PageHeader: FC<PageHeaderProps> = ({ title, subtitle, actions }) => {
  return (
    <div className="flex items-center min-h-[80px] h-20 border-b shadow-sm">
      <div className="w-full mx-auto max-w-7xl">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col justify-center px-4 2xl:px-0">
            <h2 className="text-2xl font-medium">{title}</h2>
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          </div>

          <div className="flex flex-row items-center px-4 2xl:px-0">
            <Button>Add New</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
