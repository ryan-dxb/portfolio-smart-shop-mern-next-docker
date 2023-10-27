import { cookies } from "next/headers";

import { NextResponse, type NextRequest } from "next/server";
import { getCookie } from "cookies-next";
import { decodeJwt } from "jose";
import { refreshTokenApi } from "./app/actions/refreshToken";

export async function middleware(req: NextRequest) {
  console.log("middleware", req);
  // Check for access token
  const accessToken = getCookie("access-token", { req });
  const sessionToken = getCookie("session-token", { req });

  // Check if access token is valid
  if (!accessToken) {
    // No access token
    return NextResponse.next();
  }
  const decodedAccessToken = await decodeJwt(accessToken as string);

  // Check if access token is expired
  if (decodedAccessToken.exp! > Date.now() / 1000) {
    // Access token not expired
    return NextResponse.next();
  }

  // Access token expired
  const refreshTokenResponse = refreshTokenApi(req);

  console.log("refreshTokenResponse", refreshTokenResponse);

  // if expired check run refresh token

  // if refresh token succeeds set new access token and session token

  // if refresh token fails redirect to login
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|auth).*)",
  ],
};
