import InputWithLabel from "@/components/common/InputWithLabel";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Editor } from "@tiptap/react";
import React, { FC } from "react";
import ImageBox from "./ImageBox";
import { BiImageAdd } from "react-icons/bi";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ImageUploadProps {
  children: React.ReactNode;
  editor: Editor;
}

const ImageUpload: FC<ImageUploadProps> = ({ children, editor }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="flex flex-col w-[90%] h-[80%] lg:max-w-3xl  mx-auto">
        <DialogHeader>
          <DialogTitle>Upload/Select Image</DialogTitle>
          <DialogDescription>
            Please upload/select an image to insert into the editor.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-1 flex-col w-full overflow-hidden">
          <div className="grid grid-cols-3 gap-x-2 overflow-y-auto px-2 scrollbar-thin scrollbar-thumb-accent scrollbar-">
            <ScrollArea className="col-span-2 w-full  border overflow-y-auto p-2">
              <div className="grid grid-cols-3 gap-2">
                <ImageBox selected={true} />
                <ImageBox selected={false} />
                <ImageBox selected={false} />
                <ImageBox selected={false} />
                <ImageBox selected={false} />
                <ImageBox selected={false} />
                <ImageBox selected={false} />
                <ImageBox selected={false} />
                <ImageBox selected={false} />
                <ImageBox selected={false} />
                <ImageBox selected={false} />
                <ImageBox selected={false} />
                <ImageBox selected={false} />
              </div>
            </ScrollArea>
            <div className="col-span-1 w-full">
              {/* Upload Image Button */}
              <div className="flex flex-col">
                <Input
                  type="file"
                  hidden
                  id="image-upload"
                  className="hidden"
                />
                <Label
                  htmlFor="image-upload"
                  className={buttonVariants({
                    variant: "outline",
                    className:
                      "w-full h-10 flex items-center justify-center rounded bg-transparent cursor-pointer hover:bg-primary hover:text-white transition-colors duration-200 ease-in-out text-sm font-light",
                  })}
                >
                  <BiImageAdd className="h-6 w-6" />
                  <span className="ml-2">Upload Image</span>
                </Label>

                {/* Selected Image */}
                <div className="w-full aspect-square border mt-2"></div>

                {/* Image URL */}
                <div className="w-full border p-2 mt-2">
                  <InputWithLabel
                    name="image-alt-text"
                    label="Alt Text"
                    disabled
                    type="textarea"
                  />
                  <div className="flex flex-row space-x-2 mt-2">
                    <InputWithLabel name="width" label="Width" />
                    <InputWithLabel name="height" label="Height" />
                  </div>
                </div>

                <DialogClose asChild className="mt-4">
                  <Button
                    type="submit"
                    onClick={() => {}}
                    className="rounded text-white"
                  >
                    Insert Image
                  </Button>
                </DialogClose>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageUpload;
