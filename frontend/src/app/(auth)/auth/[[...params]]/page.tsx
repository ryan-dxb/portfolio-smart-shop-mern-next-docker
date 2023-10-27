"use client";

import FormTitle from "@/components/authForms/common/FormTitle";
import { NextPage } from "next";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useLayoutEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

interface VerifyEmailProps {
  params: {
    userId: string;
    token: string;
  };
}

const VerifyEmail: NextPage<VerifyEmailProps> = ({
  params: { userId, token },
}) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { params } = useParams();
  const router = useRouter();

  console.log(params[0]);

  const data = {
    userId: params[0],
    token: params[1],
  };

  useLayoutEffect(() => {
    const verifyEmail = async () => {
      try {
        const res = await fetch(
          `http://localhost:8000/api/auth/verify-email/`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );

        const response = await res.json();

        if (response.success !== true) {
          console.log(response);

          setIsError(true);
          setErrorMessage(response.error);
          setIsLoading(false);
          return;
        }

        setIsSuccess(true);
        setIsLoading(false);
        console.log(response);

        setTimeout(() => {
          router.push("/login");
        }, 3000);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        setIsError(true);
      }
    };
    verifyEmail();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center p-4 mx-4 border rounded-md border-muted-foreground md:mx-0">
        {isLoading && (
          <div className="flex items-center justify-center animate-spin">
            <Loader2 size={48} />
          </div>
        )}

        <h1 className="text-base font-semibold text-center text-primary">
          {isSuccess && !isLoading && "Your email has been verified!"}
          {isError && !isLoading && <p>{errorMessage}</p>}
        </h1>

        <div className="flex flex-col items-center justify-center gap-2 px-2 mt-6 text-sm text-muted-foreground md:flex-row">
          <p className="text-center ">
            {isSuccess &&
              !isLoading &&
              "You can now login with your credentials"}
            {isError &&
              !isLoading &&
              "Something went wrong, please try again later or use the link below to resend the verification email"}
          </p>
          {!isLoading && (
            <Link
              href={isSuccess ? "/login" : "/send-verification-email"}
              className="underline transition-colors duration-200 cursor-pointer hover:text-white underline-offset-2"
            >
              {isSuccess ? "Login" : "Click here"}
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default VerifyEmail;
