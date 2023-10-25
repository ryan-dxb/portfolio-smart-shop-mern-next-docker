import React, { ChangeEventHandler, FC, SetStateAction } from "react";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { LinkData } from "../rteditor/Toolbar/Link/InsertLinkModal";

interface InputWithLabelProps {
  name: string;
  label: string;
  placeholder?: string;
  type?: "text" | "textarea" | "url";
  value?: string;
  setValue?: ChangeEventHandler<HTMLInputElement> | undefined;
  disabled?: boolean;
}

const InputWithLabel: FC<InputWithLabelProps> = ({
  name,
  label,
  placeholder,
  type = "text",
  value,
  setValue,
  disabled,
}) => {
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
          value={value}
          onChange={setValue}
          disabled={disabled}
          type={type ?? "text"}
        />
      )}
    </div>
  );
};

export default InputWithLabel;
