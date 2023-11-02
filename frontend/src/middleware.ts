import { NextRequest, NextResponse } from "next/server";
import { getCookie } from "cookies-next";
import { RefreshTokenAPI } from "./lib/refreshToken";
import { decodeJwt } from "jose";
import { Session, createSession } from "./lib/session";

export default async function middleware(request: NextRequest) {
  // console.log("middleware", request.nextUrl);

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
      console.log("middleware", "refresh token exists");

      const refreshTokenData = await RefreshTokenAPI(request);

      console.log("middleware", refreshTokenData);
      if (refreshTokenData.status !== 200) {
        const response = NextResponse.redirect(loginUrl);
        response.cookies.delete("session-token");
        response.cookies.delete("refresh-token");

        return response;
      } else {
        console.log(
          "middleware",
          "refresh token exists but access token does not exist"
        );

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

    if (accessToken) {
      // Check if the access token is valid
      const decodedAccessToken = decodeJwt(accessToken);

      console.log("middleware", decodedAccessToken);

      if (!decodedAccessToken) {
        console.log("middleware", "access token is invalid");

        const response = NextResponse.redirect(loginUrl);
        response.cookies.delete("session-token");
        response.cookies.delete("access-token");
        response.cookies.delete("refresh-token");

        return response;
      }

      // Check if accesstoken is expired
      const accessTokenExp = decodedAccessToken.exp;
      const now = Math.floor(Date.now() / 1000);

      const isAccessTokenExpired = accessTokenExp! < now;

      // If access token is expired, send refresh token to get new access token

      if (!isAccessTokenExpired) {
        console.log("middleware", "access token is valid");

        const response = NextResponse.next();

        return response;
      }

      if (isAccessTokenExpired && !refreshToken) {
        console.log(
          "middleware",
          "access token is expired but no refresh token"
        );

        const response = NextResponse.redirect(loginUrl);
        response.cookies.delete("session-token");
        response.cookies.delete("access-token");
        response.cookies.delete("refresh-token");

        return response;
      }

      if (isAccessTokenExpired && refreshToken) {
        console.log("middleware", "access token is expired");

        const refreshTokenData = await RefreshTokenAPI(request);

        console.log("middleware", refreshTokenData);
        if (refreshTokenData.status !== 200) {
          const response = NextResponse.redirect(loginUrl);
          response.cookies.delete("session-token");
          response.cookies.delete("refresh-token");

          return response;
        } else {
          console.log(
            "middleware",
            "refresh token exists but access token does not exist"
          );

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
}
