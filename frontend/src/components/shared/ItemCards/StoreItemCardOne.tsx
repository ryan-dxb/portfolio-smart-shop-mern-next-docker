import { Button } from "@/components/ui/button";
import { Heart, Star } from "lucide-react";
import Image from "next/image";
import React, { FC } from "react";

interface StoreItemCardOneProps {
  item: {
    id: number;
    title: string;
    brand: string;
    rating: number;
    price: number;
    discountPrice: number;
    reviewCount: number;
    sold: number;
    image: string;
  };
}

const StoreItemCardOne: FC<StoreItemCardOneProps> = ({ item }) => {
  return (
    <div className="group relative flex flex-col max-w-[200px]  w-full mx-auto border p-2 shadow-sm">
      <Heart className="absolute z-10 text-red-400 transition-all duration-200 translate-x-2 opacity-0 cursor-pointer group-hover:opacity-100 group-hover:translate-x-0 top-4 right-4 fill-red-400" />

      {/* Image */}
      <div className="relative max-w-[200px] h-40 ">
        {/* <Image/> */}
        <Image
          src={item.image}
          fill
          alt="Product Image"
          sizes="100%"
          className="object-cover w-full h-full bg-blend-soft-light"
        />
      </div>
      {/* Product Title & Brand */}
      <div className="flex flex-col py-2 mt-2 space-y-2">
        <p className="text-xs font-semibold text-gray-400 uppercase">
          {item.brand}
        </p>
        <p className="text-sm font-semibold line-clamp-2 ">{item.title}</p>
      </div>
      {/* Price & Rating */}
      <div className="flex flex-row items-center pb-3 space-x-4 border-b">
        <div className="flex flex-row items-center space-x-1">
          {/* Rating */}
          {/* Create 5 stars and fill it with ratings */}

          {new Array(5).fill(0).map((_, i) => (
            <Star
              key={i}
              size={12}
              className={`${
                i < item.rating ? "text-yellow-400 fill-yellow-400" : ""
              }`}
            />
          ))}
        </div>
        <p className="text-xs font-semibold text-muted-foreground/70">
          {item.reviewCount}{" "}
          <span className="text-xs font-semibold text-muted-foreground/70">
            {" "}
            Reviews
          </span>
        </p>
      </div>
      <div className="flex flex-row items-center justify-between pt-3 ">
        <div className="flex flex-row">
          <p className="text-sm font-semibold">$ {item.price}</p>
          <p className="ml-2 text-xs font-semibold line-through text-muted-foreground/70">
            $ {item.discountPrice}
          </p>
        </div>
        <p className="text-xs font-semibold text-red-500/70">
          {item.sold}{" "}
          <span className="text-xs font-semibold text-muted-foreground/70">
            Sold
          </span>
        </p>
      </div>
      <div className="flex flex-col pt-3 mt-auto space-y-2">
        <Button
          variant="default"
          className="w-full rounded-none text-[10px] tracking-wider font-semibold uppercase opacity-80 hover:bg-primary hover:opacity-100 hover:text-white duration-300 transition-all"
        >
          Add to Cart
        </Button>
        <Button
          variant="outline"
          className="w-full text-[10px] tracking-wider font-semibold uppercase"
        >
          Quick View
        </Button>
      </div>
    </div>
  );
};

export default StoreItemCardOne;
