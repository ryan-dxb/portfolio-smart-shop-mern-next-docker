"use client";

import React, { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import RichTextEditor from "@/components/rteditor";
import InputWithLabel from "../../common/InputWithLabel";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import VariantOptionDropDown from "./VariantOptionDropDown";
import { AiOutlineDelete } from "react-icons/ai";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import CategoryDropDown from "./CategoryDropDown";
import TagDropDown from "./TagsDropDown";

interface AddNewProductFormProps {}

const AddNewProductSchema = z.object({});

const AddNewProductForm: FC<AddNewProductFormProps> = () => {
  // const [variants, setVariants] = useState<JSX.Element[]>([]);

  // const addVariant = () => {
  //   if (variants.length >= 4) return;
  //   setVariants(
  //     variants.concat(<ProductVariantCard index={variants.length + 1} />)
  //   );
  // };

  const { register, handleSubmit, formState } = useForm<
    z.infer<typeof AddNewProductSchema>
  >({
    resolver: zodResolver(AddNewProductSchema),
    reValidateMode: "onSubmit",
    defaultValues: {},
  });

  const onSubmit = (values: z.infer<typeof AddNewProductSchema>) => {};

  return (
    <div className="grid grid-cols-3 gap-x-8">
      {/* Left Side */}
      <div className="w-full col-span-2 ">
        {/* Product Information */}
        <div className="w-full p-4 border">
          <h3 className="text-lg font-semibold">Product information</h3>

          <div className="mt-6">
            <div className="flex flex-col space-y-4">
              <InputWithLabel label="Product Name" name="name" />
              <div className="flex flex-row space-x-8">
                <InputWithLabel label="SKU" name="sku" />
                <InputWithLabel label="Product Id" name="productid" />
              </div>
              <InputWithLabel
                label="Short Description"
                name="shortdescription"
                placeholder="Describe your product in a few words (max 255 characters)"
                type="textarea"
              />

              <RichTextEditor />

              <div>
                <Label className="text-xs font-medium text-gray-600 uppercase">
                  Product Images
                </Label>
                <div className="grid grid-cols-4 gap-4 p-4 border">
                  <div className="flex flex-col border aspect-square">
                    <div className="flex flex-1 ">
                      <div className="relative w-full h-full bg-gray-50">
                        <Image
                          src="/product-camera.jpg"
                          fill
                          alt="product image"
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <Button
                        variant="outline"
                        className="w-full text-red-500 hover:text-red-600"
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                  <div className="border aspect-square"></div>
                  <div className="border aspect-square"></div>
                  <div className="border aspect-square"></div>
                </div>
              </div>

              {/* <div>
                <Label className="text-xs font-medium text-gray-600 uppercase">
                  Product Variants
                </Label>
                <div className="flex flex-col p-4 border">
                  {variants.length > 0 && variants}
                  <Button onClick={addVariant} variant="default" className="">
                    Add Variant
                  </Button>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* Product Images */}
      </div>

      {/* Right Side */}
      <div className="w-full col-span-1 ">
        <div className="w-full p-4 border">
          <h3 className="text-lg font-semibold">Pricing</h3>

          <div className="mt-6">
            <div className="flex flex-col space-y-4">
              <InputWithLabel label="Base Price" name="base-price" />
              <InputWithLabel
                label="Discounted Price"
                name="discounted-price"
              />

              <Separator />

              <div className="flex flex-row justify-between">
                <Label
                  htmlFor="taxable"
                  className="text-xs font-medium text-gray-600 uppercase"
                >
                  Is product taxable?
                </Label>
                <Checkbox id="taxable" className="rounded" />
              </div>
              <div className="flex flex-row justify-between">
                <Label
                  htmlFor="in-stock"
                  className="text-xs font-medium text-gray-600 uppercase"
                >
                  In Stock
                </Label>
                <Switch className="w-8 h-4" id="in-stock" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full p-4 mt-4 border">
          <h3 className="text-lg font-semibold">Product Organization</h3>

          <div className="mt-6">
            <div className="flex flex-col space-y-4">
              <CategoryDropDown />
              {/* <TagDropDown /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// type ProductVariantProps = {
//   index?: number;
// };
// const ProductVariantCard: FC<ProductVariantProps> = ({ index }) => {
//   return (
//     <div className="flex flex-row items-center mb-4 space-x-8">
//       <Label className="text-xs font-medium text-gray-500">
//         Variant {index}
//       </Label>
//       <div className="flex flex-row items-center space-x-4">
//         <VariantOptionDropDown />
//         <VariantOptionDropDown />

//         <Input placeholder="Price" className="flex flex-1" />

//         <Button variant="ghost" className="w-10 h-10 p-0 m-0 rounded">
//           <AiOutlineDelete className="w-4 h-4 m-2 fill-red-500" />
//         </Button>
//       </div>
//     </div>
//   );
// };

export default AddNewProductForm;
