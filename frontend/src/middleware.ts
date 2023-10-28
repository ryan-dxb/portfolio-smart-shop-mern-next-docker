import { NextRequest } from "next/server";
import { getCookie } from "cookies-next";

export async function middleware(req: NextRequest) {
  const accessToken = getCookie("access_token", { req });
  const refreshToken = getCookie("refresh_token", { req });
  const getSessionToken = getCookie("session_token", { req });

  console.log("middleware", accessToken, refreshToken, getSessionToken);

  if (req.nextUrl.pathname.startsWith("/dashboard")) {
  }
}
