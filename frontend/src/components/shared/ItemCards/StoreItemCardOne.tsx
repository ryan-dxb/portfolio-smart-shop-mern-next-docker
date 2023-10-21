import { Star } from "lucide-react";
import Image from "next/image";
import React, { FC } from "react";

interface StoreItemCardOneProps {}

const StoreItemCardOne: FC<StoreItemCardOneProps> = () => {
  return (
    <div className="flex flex-col w-[225px]">
      {/* Image */}
      <div className="relative w-[225px] h-60 bg-gray-50">
        {/* <Image/> */}
        <Image
          src="/product-headphones.jpg"
          fill
          alt="Product Image"
          className="object-cover w-full h-full"
        />
      </div>
      {/* Product Title & Brand */}
      <div className="flex flex-col py-2 mt-2 space-y-2">
        <p className="text-xs font-semibold text-gray-400 uppercase">Samsung</p>
        <p className="text-sm font-semibold">
          Ultra Wireless 550 Headphone With A35 Bluetooth
        </p>
      </div>
      {/* Price & Rating */}
      <div className="flex flex-row items-center pb-3 space-x-4 border-b">
        <div className="flex flex-row items-center space-x-1">
          <Star size={12} className="text-yellow-400 fill-yellow-400" />
          <Star size={12} className="text-yellow-400 fill-yellow-400" />
          <Star size={12} className="text-yellow-400 fill-yellow-400" />
          <Star size={12} />
          <Star size={12} />
        </div>
        <p className="text-xs font-semibold text-muted-foreground/70">
          266
          <span className="text-xs font-semibold text-muted-foreground/70">
            {" "}
            Reviews
          </span>
        </p>
      </div>
      <div className="flex flex-row items-center justify-between py-3">
        <div className="flex flex-row">
          <p className="text-sm font-semibold">$ 199.99</p>
          <p className="ml-2 text-xs font-semibold line-through text-muted-foreground/70">
            $ 299.99
          </p>
        </div>
        <p className="text-xs font-semibold text-red-500/70">
          200{" "}
          <span className="text-xs font-semibold text-muted-foreground/70">
            Sold
          </span>
        </p>
      </div>
      <div></div>
    </div>
  );
};

export default StoreItemCardOne;
