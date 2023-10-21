import { PartyPopper, Send } from "lucide-react";
import React, { FC } from "react";

interface SubscribeFormProps {}

const SubscribeForm: FC<SubscribeFormProps> = () => {
  return (
    <div className="h-16 mt-12 bg-primary">
      <div className="flex items-center justify-between h-full content-container">
        <div className="flex items-center space-x-4 text-white/80">
          <PartyPopper className=" w-7 h-7" />
          <p className="items-end font-semibold text-white">
            Subscribe to Join Us!
          </p>
          <p>.... & receive $20 coupne for first Shopping & free delivery.</p>
        </div>

        <form action="" className="h-full w-[480px] relative">
          <input
            type="text"
            placeholder="Enter your email"
            className="relative w-full h-full px-4 py-2 pr-20 text-white bg-transparent/50 focus:outline-none placeholder-white/70"
          />
          <button className="absolute p-2 transition-all duration-300 transform -translate-y-1/2 right-2 top-1/2 text-white/70 hover:text-white ">
            <Send className="w-8 h-8" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubscribeForm;
