"use client";

import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface EmailVerifiedPageProps {}

const EmailVerifiedPage: NextPage<EmailVerifiedPageProps> = () => {
  const [seconds, setSeconds] = useState(5);
  const router = useRouter();

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (seconds > 0) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      router.push("/auth/login");
    }
    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <>
      <div className="flex flex-col items-center justify-center p-4 mx-4 border rounded-md border-muted-foreground md:mx-0">
        <h1 className="text-base font-semibold text-center text-primary">
          Your email has been verified!
        </h1>

        <div className="flex flex-col items-center justify-center gap-2 px-2 mt-6 text-sm text-muted-foreground md:flex-row">
          <p className="text-center ">
            You can now login with your credentials
          </p>

          <Link
            href="/auth/login"
            className="underline transition-colors duration-200 cursor-pointer hover:text-white underline-offset-2"
          >
            Login
          </Link>
        </div>
      </div>

      <p className="text-xs text-muted-foreground">
        You will be redirected to the login page in <span>{seconds}</span>{" "}
        seconds
      </p>
    </>
  );
};

export default EmailVerifiedPage;
