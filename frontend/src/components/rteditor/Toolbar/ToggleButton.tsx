import React, { FC } from "react";
import { Toggle } from "../../ui/toggle";
import { Button } from "../../ui/button";
import { Editor } from "@tiptap/react";
import { IconType } from "react-icons";
import { cn } from "@/lib/utils";

interface ToggleButtonProps {
  icon: IconType;
  active?: boolean;
  onClick?: () => void;
}

const ToggleButton: FC<ToggleButtonProps> = ({
  icon: Icon,
  active,
  onClick,
}) => {
  return (
    // <Toggle
    //   className="flex items-center justify-center w-8 h-8 rounded hover:text-accent-foreground hover:bg-primary data-[state=on]:bg-primary data-[state=on]:text-accent-foreground bg-transparent px-2
    //     "
    //   pressed={active}
    //   onPressedChange={onClick}

    //   // active={editor?.isActive("bold")}
    //   // onClick={() => editor?.chain().focus().toggleBold().run()}
    // >
    //   <Icon className="w-5 h-5" />
    // </Toggle>

    <Button
      variant="ghost"
      className={cn(
        "w-8 h-8 rounded hover:text-accent-foreground hover:bg-primary  bg-transparent px-2",
        active && "bg-primary text-accent-foreground"
      )}
      onClick={onClick}
    >
      <Icon className="w-5 h-5" />
    </Button>
  );
};

export default ToggleButton;
