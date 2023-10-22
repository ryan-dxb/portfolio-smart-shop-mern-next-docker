import React, { FC } from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface CartTableProps {}

const cartProducts = [
  {
    id: 1,
    image: "/product-single-1.jpg",
    product: "Men Black Sports Shoes",
    variant: [{ color: "Black" }, { size: "M" }],
    price: "$500.00",
  },
  {
    id: 2,
    image: "/product-camera.jpg",
    product: "Samsung Camera 4k",
    variant: [],
    price: "$1200.00",
  },
];

const CartTable: FC<CartTableProps> = () => {
  return (
    <div className="flex flex-col ">
      <h2 className="mb-4 text-2xl font-medium">Your Cart</h2>

      <Table className="border ">
        <TableHeader className="bg-gray-100">
          <TableRow>
            <TableHead className="w-28"></TableHead>
            <TableHead className="w-48">Product</TableHead>
            <TableHead className="w-32">Variant</TableHead>
            <TableHead className="">Price</TableHead>
            <TableHead className="w-32">Quantity</TableHead>
            <TableHead className="">Subtotal</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cartProducts.map((product) => (
            <TableRow key={product.id} className="py-1">
              <TableCell>
                <div className="relative w-24 aspect-square">
                  <div>
                    <Button
                      variant="outline"
                      className="absolute top-0 right-0 z-10 w-6 h-6 p-2 text-white translate-x-1/2 -translate-y-1/2 bg-red-400 rounded-full hover:bg-red-500 hover:text-white"
                    >
                      <span className="sr-only">Remove</span>
                      <span className="font-bold">x</span>
                    </Button>
                  </div>
                  <Image
                    src={product.image}
                    alt={product.product}
                    fill
                    className="object-cover"
                  />
                </div>
              </TableCell>
              <TableCell className="text-sm text-gray-900 truncate">
                <Link href="/product" className="hover:text-primary">
                  {product.product}
                </Link>
              </TableCell>
              <TableCell className="text-sm text-gray-500">
                {product.variant.map((variant, index) => (
                  <div className="flex flex-row items-center space-x-1">
                    <span className="font-semibold">
                      {Object.keys(variant)}
                    </span>
                    <span className="text-xs text-gray-900">:</span>
                    <span className="text-xs text-gray-900">
                      {Object.values(variant)}
                    </span>
                  </div>
                ))}
              </TableCell>

              <TableCell className="text-sm text-gray-900">
                {product.price}
              </TableCell>

              <TableCell>
                <div className="flex flex-row">
                  <Button
                    variant={"outline"}
                    className="w-10 h-10 rounded-none"
                  >
                    <span className="text-sm font-semibold">-</span>
                  </Button>
                  <div className="w-10 h-10 border-y">
                    <Input
                      className="w-10 text-center bg-transparent border-none rounded-none focus-visible:border-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                      value={1}
                    />
                  </div>
                  <Button
                    variant={"outline"}
                    className="w-10 h-10 rounded-none "
                  >
                    <span className="text-sm font-semibold ">+</span>
                  </Button>
                </div>
              </TableCell>

              <TableCell className="text-sm font-semibold text-gray-900">
                {product.price}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CartTable;
