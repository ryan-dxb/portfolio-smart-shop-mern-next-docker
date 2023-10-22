import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import React, { FC } from "react";

interface CartTotalProps {}

const CartTotal: FC<CartTotalProps> = () => {
  return (
    <div className="">
      <h2 className="mb-4 text-2xl font-medium">Cart Totals</h2>

      <div className="w-full p-4 border">
        <div className="flex justify-between mt-4">
          <span className="font-medium text-gray-900">Subtotal</span>
          <span className="text-red-500">$500.00</span>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col space-y-4">
          <span className="font-medium text-gray-900">Shipping</span>
          <RadioGroup
            defaultValue="comfortable"
            className="flex flex-col space-y-1"
          >
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="default" id="r1" />
              <Label htmlFor="r1" className="w-full">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-normal text-gray-900">
                    Free Shipping
                  </span>
                  <span className="text-sm font-normal text-gray-500 ">
                    $0.00
                  </span>
                </div>
              </Label>
            </div>
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="default" id="r1" />
              <Label htmlFor="r1" className="w-full">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-normal text-gray-900">
                    Standard Shipping
                  </span>
                  <span className="text-sm font-normal text-gray-500 ">
                    $5.00
                  </span>
                </div>
              </Label>
            </div>
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="default" id="r1" />
              <Label htmlFor="r1" className="w-full">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-normal text-gray-900">
                    Courier Shipping
                  </span>
                  <span className="text-sm font-normal text-gray-500 ">
                    $10.00
                  </span>
                </div>
              </Label>
            </div>
          </RadioGroup>
        </div>

        <Separator className="my-8" />

        <div className="flex justify-between mt-4">
          <span className="font-medium text-gray-900">Total</span>
          <span className="text-red-500">$500.00</span>
        </div>

        <Separator className="my-8" />

        <Button
          variant="default"
          className="w-full h-12 text-white rounded-none opacity-80 hover:opacity-100 hover:bg-primary"
        >
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
};

export default CartTotal;
