import { FC, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-6 bg-primary/10">
      {children}
    </div>
  );
};

export default Layout;
