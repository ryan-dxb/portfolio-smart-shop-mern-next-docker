import { FC, ReactNode } from "react";
import Sidebar from "@/components/common/sidebar/Sidebar";
import Header from "@/components/common/header/Header";
import Footer from "@/components/common/footer/Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex w-full h-screen overflow-hidden">
      <div className="flex border-r">
        {/* Sidebar */}
        <Sidebar />
      </div>

      <Header />
      {/* Main Content */}
      <main className="flex flex-col flex-1 py-16 pl-64">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
