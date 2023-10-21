import React, { FC } from "react";
import { Separator } from "../../ui/separator";
import { LiaShippingFastSolid } from "react-icons/lia";
import { AiOutlineDollar } from "react-icons/ai";
import { MdSupportAgent } from "react-icons/md";

interface FeatureBoxProps {}

const FeatureBox: FC<FeatureBoxProps> = () => {
  return (
    <section className="h-24 mt-16 border">
      <div className="flex items-center h-full justify-evenly">
        <div className="flex flex-row items-center justify-center space-x-4">
          <LiaShippingFastSolid className="w-10 h-10" />
          <div className="flex flex-col space-y-1 ">
            <h3 className="text-sm font-semibold uppercase ">Free Shipping</h3>
            <p className="text-xs">On all orders over $75.00</p>
          </div>
        </div>
        <Separator orientation="vertical" className="h-1/2" />
        <div className="flex flex-row items-center justify-center space-x-4">
          <AiOutlineDollar className="w-10 h-10" />
          <div className="flex flex-col space-y-1 ">
            <h3 className="text-sm font-semibold uppercase ">
              Money Back Guarantee
            </h3>
            <p className="text-xs">30 Days Money Back Guarantee</p>
          </div>
        </div>
        <Separator orientation="vertical" className="h-1/2" />
        <div className="flex flex-row items-center justify-center space-x-4">
          <MdSupportAgent className="w-10 h-10" />
          <div className="flex flex-col space-y-1 ">
            <h3 className="text-sm font-semibold uppercase ">
              Online Support 24/7
            </h3>
            <p className="text-xs">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureBox;
