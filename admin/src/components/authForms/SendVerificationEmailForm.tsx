"use client";
import { NextPage } from "next";
import FormLayout from "./common/FormLayout";
import { Form } from "../ui/form";
import FormInputField from "./common/FormInputField";
import { Button } from "../ui/button";
import Formfooter from "./common/FormFooter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

interface SendVerificationEmailFormProps {}

const SendVerificationEmailFormSchema = z.object({
  email: z.string().email("Invalid email address"),
});

const SendVerificationEmailForm: NextPage<
  SendVerificationEmailFormProps
> = () => {
  const form = useForm<z.infer<typeof SendVerificationEmailFormSchema>>({
    resolver: zodResolver(SendVerificationEmailFormSchema),
    mode: "onBlur",
    reValidateMode: "onBlur",
    defaultValues: {
      email: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof SendVerificationEmailFormSchema>) {}

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
        footerText="Account already verified?"
        footerLinkText="Login"
        footerLink="/auth/login"
      />
    </FormLayout>
  );
};

export default SendVerificationEmailForm;
