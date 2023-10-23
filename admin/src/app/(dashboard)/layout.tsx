import { FC, ReactNode } from "react";
import Sidebar from "@/components/common/sidebar/Sidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-row w-full h-screen overflow-hidden ">
      <div className="flex border">
        {/* Sidebar */}
        <Sidebar />
      </div>
      <div className="flex flex-1 ">
        {/* Main Content */}
        {children}
      </div>
    </div>
  );
};

export default Layout;
