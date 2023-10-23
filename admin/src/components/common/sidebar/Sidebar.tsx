import React, { FC } from "react";
import Logo from "../Logo";
import SidebarNav from "./SidebarNav";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
  return (
    <aside className="w-64 ">
      <div className="flex flex-row items-center h-16 px-6 space-x-3 border-b ">
        <Logo />
      </div>

      <SidebarNav />
    </aside>
  );
};

export default Sidebar;
