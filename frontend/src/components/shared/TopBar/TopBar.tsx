import Link from "next/link";
import React, { FC } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

interface TopBarProps {}

const navItems = [
  {
    label: "My Account",
    path: "/",
  },
  {
    label: "Contact Us",
    path: "/",
  },
  {
    label: "My Wishlist",
    path: "/",
  },
  {
    label: "Cart",
    path: "/",
  },
  {
    label: "Log in",
    path: "/",
  },
];

const socialItems = [
  {
    label: "Facebook",
    path: "/",
    icon: <FaFacebookF />,
  },
  {
    label: "Twitter",
    path: "/",
    icon: <FaTwitter />,
  },
  {
    label: "Instagram",
    path: "/",
    icon: <FaInstagram />,
  },
];

const TopBar: FC<TopBarProps> = () => {
  return (
    <section>
      <div className="w-full h-10 bg-primary">
        <div className="content-container h-full">
          <nav className="h-full items-center flex justify-end">
            <div className="flex items-center divide-x space-x-6">
              <ul className="flex items-center space-x-8">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.path}
                      className="text-white hover:text-secondary"
                    >
                      <p className="text-xs font-bold uppercase tracking-wide">
                        {item.label}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="flex items-center space-x-4 pl-6">
                {socialItems.map((item, index) => (
                  <li key={index}>
                    <a href="/" className="text-white hover:text-secondary">
                      {item.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default TopBar;
