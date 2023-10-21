import SectionHeader from "@/components/shared/SectionHeader";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import React, { FC } from "react";

interface BlogSectionProps {}

const blogs = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "/post-1.jpg",
    category: "Fashion",
    createdAt: "2021-08-01",
    author: "John Doe",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "/post-2.jpg",
    category: "Electronics",
    createdAt: "2021-12-01",
    author: "Helen Doe",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "/post-3.jpg",
    category: "Beauty",
    createdAt: "2021-09-01",
    author: "Jane Doe",
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "/post-1.jpg",
    category: "Fashion",
    createdAt: "2021-08-01",
    author: "John Doe",
  },
];

const BlogSection: FC<BlogSectionProps> = () => {
  return (
    <>
      <SectionHeader title1="Latest" title2="Blog" />

      <div className="grid grid-cols-2 mt-4 gap-x-4 gap-y-4 lg:grid-cols-4 ">
        {blogs.map((item) => (
          <div className="flex flex-col w-full p-2 mx-auto border shadow-sm">
            {/* Image */}
            <div className="relative w-full h-40">
              <Image
                src={item.image}
                fill
                sizes="100%"
                alt="Product Image"
                className="object-cover w-full h-full bg-blend-soft-light"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col pt-2 ">
              <p className="inline-block py-2 text-xs font-semibold text-gray-400 uppercase">
                {item.category}
              </p>
              <p className="text-sm font-semibold line-clamp-2 ">
                {item.title}
              </p>
            </div>

            <div>{}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogSection;
