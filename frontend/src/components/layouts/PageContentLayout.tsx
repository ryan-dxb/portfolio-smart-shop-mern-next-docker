import React, { FC } from "react";
import { ScrollArea } from "../ui/scroll-area";

interface PageContentLayoutProps {
  children: React.ReactNode;
}

const PageContentLayout: FC<PageContentLayoutProps> = ({ children }) => {
  return (
    <ScrollArea className="w-full pl-4 pr-4 mx-auto my-4 max-w-7xl 2xl:pl-0">
      {children}
    </ScrollArea>
  );
};

export default PageContentLayout;
