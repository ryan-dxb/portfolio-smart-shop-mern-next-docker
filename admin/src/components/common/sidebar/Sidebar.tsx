import React, { FC } from "react";
import Logo from "../Logo";
import SidebarNav from "./SidebarNav";
import { ScrollArea } from "@/components/ui/scroll-area";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
  return (
    <aside className="fixed top-0 bottom-0 left-0 flex flex-col w-64 border-r">
      <div className="flex flex-row items-center h-16 min-h-[64px] px-4 space-x-3 border-b ">
        <Logo />
      </div>

      <ScrollArea className="flex flex-col flex-1 ">
        <SidebarNav />
      </ScrollArea>

      <div className="w-full max-h-[64px]  h-full border-t"></div>
    </aside>
  );
};

export default Sidebar;
