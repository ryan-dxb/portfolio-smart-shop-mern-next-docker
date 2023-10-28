import React, { FC } from "react";
import { AiOutlineCheck } from "react-icons/ai";

interface ImageBoxProps {
  selected: boolean;
}

const ImageBox: FC<ImageBoxProps> = ({ selected }) => {
  return (
    <div className="relative">
      {selected && (
        <div className="absolute h-5 w-5 px-1 top-2 right-2 flex items-center justify-center rounded-full bg-primary">
          <AiOutlineCheck className="absolute  text-white   h-3 w-3" />
        </div>
      )}
      <div className="aspect-square border"></div>
    </div>
  );
};

export default ImageBox;
