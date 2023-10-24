"use client";

import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import RichTextEditor from "@/components/rteditor";

interface AddNewProductFormProps {}

const AddNewProductSchema = z.object({});

const AddNewProductForm: FC<AddNewProductFormProps> = () => {
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
            </div>
          </div>
        </div>

        {/* Product Images */}
      </div>

      {/* Right Side */}
      <div className="w-full h-20 col-span-1 border"></div>
    </div>
  );
};

const InputWithLabel: FC<{
  label: string;
  name: string;
  placeholder?: string;
  type?: "text" | "textarea";
}> = ({ label, name, placeholder, type }) => {
  return (
    <div className="flex flex-col w-full space-y-1">
      <Label
        htmlFor={name}
        className="text-xs font-medium text-gray-600 uppercase"
      >
        {label}
      </Label>

      {type === "textarea" ? (
        <Textarea
          className="w-full text-sm placeholder:text-gray-400 focus:ring-0 focus:border-primary focus-visible:ring-0"
          placeholder={placeholder}
          rows={3}
          maxLength={255}
        />
      ) : (
        <Input
          id={name}
          className="w-full text-sm focus:ring-0 focus:border-primary focus-visible:ring-0"
        />
      )}
    </div>
  );
};

export default AddNewProductForm;
