import Image from "next/image";
import React, { FC } from "react";
import HeroNavbar from "./HeroNavbar";

interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = () => {
  return (
    <>
      <div className="flex w-full h-12 border-r border-y bg-gray-50">
        <HeroNavbar />
      </div>
      {/* Carousel */}
      <div className="flex flex-1 pt-8 pl-8">
        <div className="relative bottom-0 flex-1 w-full">
          <Image
            src="/slide-1.png"
            alt="hero"
            priority
            fill
            className="object-cover object-right-top"
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
