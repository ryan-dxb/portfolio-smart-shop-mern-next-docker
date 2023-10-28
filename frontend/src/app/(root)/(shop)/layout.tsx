import { NavbarWithDropDown } from "@/components/shared/Header";
import { FC, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <NavbarWithDropDown />

      {children}
    </>
  );
};

export default Layout;
