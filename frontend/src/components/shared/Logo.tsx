import { NextPage } from "next";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

interface LogoProps {}

const Logo: NextPage<LogoProps> = () => {
  return (
    <div>
      <Link href="/">
        <div className="flex items-center space-x-2 ">
          <ShoppingCart className="text-primary" size={32} />
          <p className="text-2xl font-bold">
            SMART<span className="text-primary">SHOP</span>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
