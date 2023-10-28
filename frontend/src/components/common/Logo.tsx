import clsx from "clsx";
import { NextPage } from "next";

interface LogoProps {}

const Logo: NextPage<LogoProps> = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-center w-10 h-10 bg-primary">
        <p className="text-lg font-medium text-white">SA</p>
      </div>
      <div>
        <h3 className="text-2xl font-semibold tracking-tighter text-primary">
          smartadmin
        </h3>
      </div>
    </>
  );
};

export default Logo;
