import { NextRequest, NextResponse } from "next/server";
import { getCookie } from "cookies-next";
import { RefreshTokenAPI } from "./lib/refreshToken";
import { decodeJwt } from "jose";
import { Session, createSession } from "./lib/session";

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const accessToken = getCookie("access-token", { req: request });
  const refreshToken = getCookie("refresh-token", { req: request });
  const sessionToken = getCookie("session-token", { req: request });

  // Create a login url with the current url as redirect url
  const baseUrl = request.nextUrl.origin;
  const loginUrl = `${baseUrl}/auth/login?next=${pathname}`;

  if (pathname.startsWith("/dashboard")) {
    if (!accessToken && !refreshToken) {
      const response = NextResponse.redirect(loginUrl);
      response.cookies.delete("session-token");

      return response;
    }

    if (!accessToken && refreshToken) {
      const refreshTokenData = await RefreshTokenAPI(request);

      console.log("middleware", refreshTokenData);
      if (refreshTokenData.status !== 200) {
        const response = NextResponse.redirect(loginUrl);
        response.cookies.delete("session-token");
        response.cookies.delete("refresh-token");

        return response;
      } else {
        const user = await fetch("http://api:1997/api/v1/auth/me", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${refreshTokenData.newAccessToken}`,
          },
          credentials: "same-origin",
        });

        const userData = await user.json();

        console.log("middleware", userData);

        const newSessionObject: Session = {
          user: {
            id: userData.data.user.id,
            email: userData.data.user.email,
            roles: userData.data.user.roles,
          },
        };

        await createSession(newSessionObject);

        const response = NextResponse.next();
        response.cookies.set(
          "access-token",
          refreshTokenData.newAccessToken as string,
          {
            maxAge: 60 * 60,
            httpOnly: true,
            path: "/",
            sameSite: "none",
            secure: true,
          }
        );
        response.cookies.set(
          "refresh-token",
          refreshTokenData.newRefreshToken as string,
          {
            maxAge: 60 * 60 * 24 * 7,
            httpOnly: true,
            path: "/",
            sameSite: "none",
            secure: true,
          }
        );

        return response;
      }
    }
  }
}
