import { StoreItemCardOne } from "@/components/shared/ItemCards";
import SectionHeader from "@/components/shared/SectionHeader";
import React, { FC } from "react";

interface PopularProductsProps {}

export const products = [
  {
    id: 1,
    title: "Samsung Ultra Wireless 550 Headphone With A35 Bluetooth",
    brand: "Samsung",
    rating: 4,
    price: 199.99,
    discountPrice: 299.99,
    sold: 200,
    reviewCount: 166,
    image: "/slide-1.png",
  },
  {
    id: 2,
    title: "Samsung Camera with 4K Video Recording & 16 MP",
    brand: "Samsung",
    rating: 4,
    price: 399.99,
    discountPrice: 499.99,
    reviewCount: 64,
    sold: 100,
    image: "/product-camera.jpg",
  },
  {
    id: 3,
    title: "Huwaie power bank 20000 mAh",
    brand: "Huwaie",
    rating: 3,
    price: 99.99,
    discountPrice: 199.99,
    reviewCount: 25,
    sold: 75,
    image: "/product-powerbank.jpg",
  },
  {
    id: 4,
    title: 'Ladies Hand Bag "Gucci"',
    brand: "Gucci",
    rating: 4,
    price: 649.99,
    discountPrice: 800.0,
    reviewCount: 100,
    sold: 500,
    image: "/product-handbag.jpg",
  },
  {
    id: 5,
    title: "Carry Bag for Laptop",
    brand: "Other",
    rating: 4,
    price: 59.99,
    discountPrice: 99.99,
    reviewCount: 36,
    sold: 152,
    image: "/product-carrybag.jpg",
  },
  {
    id: 6,
    title: "Samsung Ultra Wireless 550 Headphone With A35 Bluetooth",
    brand: "Samsung",
    rating: 4,
    price: 199.99,
    discountPrice: 299.99,
    reviewCount: 166,
    sold: 200,
    image: "/product-headphones.jpg",
  },
];

const PopularProducts: FC<PopularProductsProps> = () => {
  return (
    <>
      {/* Section Title */}
      <SectionHeader title1="Featured" title2="Products" viewAllLink="#" />
      <div className="grid grid-cols-2 mt-4 gap-x-4 gap-y-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {products.map((product) => (
          <StoreItemCardOne key={product.id} item={product} />
        ))}
      </div>
    </>
  );
};

export default PopularProducts;
