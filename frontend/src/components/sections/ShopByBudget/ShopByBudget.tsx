import React, { FC } from "react";
import { GiLipstick, GiClothes } from "react-icons/gi";
import { BsPlug, BsUsbDrive } from "react-icons/bs";
import { BiBed } from "react-icons/bi";
import { MdOutlineToys } from "react-icons/md";
import SectionHeader from "@/components/shared/SectionHeader";

interface ShopByBudgetProps {}

const budget = [
  {
    id: 1,
    title: "Beauty under $99",
    icon: <GiLipstick />,
  },
  {
    id: 2,
    title: "Fashion under $79",
    icon: <GiClothes />,
  },
  {
    id: 3,
    title: "Electronics under $129",
    icon: <BsPlug />,
  },
  {
    id: 4,
    title: "Furnishing under $49",
    icon: <BiBed />,
  },
  {
    id: 5,
    title: "Accessories under $29",
    icon: <BsUsbDrive />,
  },
  {
    id: 6,
    title: "Toys under $19",
    icon: <MdOutlineToys />,
  },
];

const ShopByBudget: FC<ShopByBudgetProps> = () => {
  return (
    <>
      <SectionHeader title1="Shop" title2="By Budget" />

      <div className="flex flex-row justify-between mt-4 space-x-4">
        {budget.map((item) => (
          <div className="flex flex-col items-center justify-center w-40 h-40 border bg-gray-50">
            <div className="text-5xl text-primary">{item.icon}</div>
            <div className="flex flex-col items-center mt-3">
              <p className="text-base font-bold ">{item.title.split(" ")[0]}</p>
              <p className="text-sm font-semibold">
                {item.title.split(" ")[1] + " " + item.title.split(" ")[2]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ShopByBudget;
