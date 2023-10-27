"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { NextPage } from "next";
import { useForm } from "react-hook-form";
import FormLayout from "./common/FormLayout";
import { Form } from "../ui/form";
import FormInputField from "./common/FormInputField";
import { Button } from "../ui/button";
import Formfooter from "./common/FormFooter";
import * as z from "zod";

interface ForgotPasswordFormProps {}

const ForgotPasswordFormSchema = z.object({
  email: z.string().email("Invalid email address"),
});

const ForgotPasswordForm: NextPage<ForgotPasswordFormProps> = () => {
  const form = useForm<z.infer<typeof ForgotPasswordFormSchema>>({
    resolver: zodResolver(ForgotPasswordFormSchema),
    mode: "onBlur",
    reValidateMode: "onBlur",
    defaultValues: {
      email: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof ForgotPasswordFormSchema>) {}
  return (
    <FormLayout>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <FormInputField
              control={form.control}
              name="email"
              placeholder="Email"
            />

            <Button type="submit" className="w-full">
              Submit
            </Button>
          </div>
        </form>
      </Form>

      <Formfooter
        footerText="Remember your password?"
        footerLinkText="Login"
        footerLink="/auth/login"
      />
    </FormLayout>
  );
};

export default ForgotPasswordForm;
