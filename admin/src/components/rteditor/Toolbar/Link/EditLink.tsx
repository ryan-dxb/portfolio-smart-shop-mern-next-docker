import { BubbleMenu, Editor } from "@tiptap/react";
import React, { FC } from "react";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { BiUnlink } from "react-icons/bi";
import { LiaEdit } from "react-icons/lia";
import { IconType } from "react-icons";
import { Button } from "@/components/ui/button";
import InsertLinkModal from "./InsertLinkModal";

interface EditLinkProps {
  editor: Editor;
}

const EditLink: FC<EditLinkProps> = ({ editor }) => {
  return (
    <BubbleMenu
      className="absolute flex items-center justify-center h-8 px-2 translate-x-1/2 border shadow-sm -top-7 right-1/2 bg-primary/5"
      editor={editor}
    >
      <div className="flex items-center justify-center space-x-2">
        <BubbleButton icon={BsBoxArrowInUpRight} />
        <BubbleButton icon={LiaEdit} />
        <BubbleButton icon={BiUnlink} />
      </div>
    </BubbleMenu>
  );
};

type BubbleButtonProps = {
  icon: IconType;
};

const BubbleButton: FC<BubbleButtonProps> = ({ icon: Icon }) => {
  return (
    <Button
      variant="ghost"
      className="w-6 h-6 p-0 rounded hover:bg-primary hover:text-accent-foreground"
    >
      {<Icon className="w-4 h-4" />}
    </Button>
  );
};

export default EditLink;
