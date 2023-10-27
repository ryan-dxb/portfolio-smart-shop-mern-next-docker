import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { NextPage } from "next";
import { Control, FieldValues } from "react-hook-form";

interface FormInputFieldProps {
  control?: any;
  name: string;
  placeholder?: string | undefined;
  className?: string;
}

const FormInputField: NextPage<FormInputFieldProps> = ({
  control,
  name,
  placeholder,
  className,
}) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field, formState }) => (
        <FormItem className="">
          <FormControl>
            <Input placeholder={placeholder} {...field} className={className} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormInputField;
