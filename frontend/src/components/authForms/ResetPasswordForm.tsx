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

interface ResetPasswordFormProps {}

const SendVerificationEmailFormSchema = z
  .object({
    password: z.string().min(6, "Password must be at least 6 characters long"),
    passwordConfirmation: z.string().min(6, "Please confirm your password"),
  })
  .superRefine(({ password, passwordConfirmation }, ctx) => {
    if (password !== passwordConfirmation) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Passwords do not match",
        path: ["passwordConfirmation"],
      });
    }
  });

const ResetPasswordForm: NextPage<ResetPasswordFormProps> = () => {
  const form = useForm<z.infer<typeof SendVerificationEmailFormSchema>>({
    resolver: zodResolver(SendVerificationEmailFormSchema),
    mode: "onBlur",
    reValidateMode: "onBlur",
    defaultValues: {
      password: "",
      passwordConfirmation: "",
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
              name="password"
              placeholder="Password"
            />
            <FormInputField
              control={form.control}
              name="passwordConfirmation"
              placeholder="Confirm Password"
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

export default ResetPasswordForm;
