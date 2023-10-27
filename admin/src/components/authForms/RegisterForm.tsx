"use client";

import { NextPage } from "next";
import FormLayout from "./common/FormLayout";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
// import { useRegisterUserMutation } from "@/store/features/auth/authApi";

import { Form } from "@/components/ui/form";
import FormInputField from "./common/FormInputField";
import Formfooter from "./common/FormFooter";
import { ToastAction, ToastClose } from "../ui/toast";
import { Label } from "../ui/label";
import Image from "next/image";
import { useState } from "react";
import { Input } from "../ui/input";

interface RegisterFormProps {}

const registerFormSchema = z
  .object({
    firstName: z
      .string()
      .min(2, "First name must be at least 2 characters long"),
    lastName: z.string().min(2, "Last name must be at least 2 characters long"),
    username: z.string().min(2, "Username must be at least 2 characters long"),
    email: z.string().email("Invalid email address"),
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

const RegisterForm: NextPage<RegisterFormProps> = () => {
  const { toast } = useToast();
  const router = useRouter();
  // const [registerUser, { isLoading, isError, isSuccess, isUninitialized }] =
  //   useRegisterUserMutation();

  // const [avatar, setAvatar] = useState<any>(null); // [1]
  // const [avatarInput, setAvatarInput] = useState<any>(""); // [1]
  // const [avatarChanged, setAvatarChanged] = useState(false);

  // const handleAvatarChange = (e: any) => {
  //   if (e.target.files && e.target.files[0]) {
  //     setAvatarInput(e.target.files[0]);
  //     setAvatar(URL.createObjectURL(e.target.files[0]));
  //     setAvatarChanged(true);
  //   }
  // };

  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    mode: "onBlur",
    reValidateMode: "onBlur",
    defaultValues: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof registerFormSchema>) {
    // const {
    //   firstName,
    //   lastName,
    //   username,
    //   email,
    //   password,
    //   passwordConfirmation,
    // } = values;
    // try {
    //   const response = await registerUser({
    //     firstName,
    //     lastName,
    //     username,
    //     email,
    //     password,
    //     passwordConfirm: passwordConfirmation,
    //   }).unwrap();
    //   if (response) {
    //     toast({
    //       title: "Success",
    //       description: response?.message,
    //       className: "bg-green-500",
    //     });
    //   }
    //   if (isSuccess) {
    //     setTimeout(() => {
    //       router.push("/auth/login");
    //     }, 2000);
    //   }
    // } catch (error: any) {
    //   console.log("error", error);
    //   toast({
    //     title: "Error",
    //     description: error?.message,
    //     variant: "destructive",
    //   });
    // }
  }

  return (
    <FormLayout social>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <div className="flex flex-row space-x-4">
              <FormInputField
                control={form.control}
                name="firstName"
                placeholder="First Name"
              />
              <FormInputField
                control={form.control}
                name="lastName"
                placeholder="Last Name"
              />
            </div>

            <FormInputField
              control={form.control}
              name="email"
              placeholder="Email"
            />
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
            {/* <div className="flex flex-row items-center space-x-4">
              <Image
                src={avatarChanged ? avatar : "/avatar_placeholder.png"}
                width={50}
                height={50}
                className="object-cover w-16 h-16 col-span-1 rounded-full"
                alt="Avatar"
              />
              <Label htmlFor="picture" className="col-span-1">
                <div className="flex items-center h-10 px-6 py-2 transition-all duration-200 border rounded-md cursor-pointer text-muted-foreground/50 hover:border-primary hover:text-muted-foreground/80">
                  Upload
                </div>
              </Label>
              <Input
                id="picture"
                type="file"
                className="hidden col-span-3"
                // onChange={handleAvatarChange}
              />
            </div> */}

            <Button type="submit" className="w-full">
              Submit
            </Button>
          </div>
        </form>
      </Form>

      <Formfooter
        footerText="Already have an account?"
        footerLinkText="Sign in"
        footerLink="/auth/login"
      />
    </FormLayout>
  );
};

export default RegisterForm;
