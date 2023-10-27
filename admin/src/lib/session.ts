import * as jose from "jose";
import { setCookie } from "cookies-next";

export const secret = new TextEncoder().encode("mysecret");

export interface Session extends jose.JWTPayload {
  user: {
    id: string;
    email: string;
    roles: string[];
  };
}

export async function createSession(session: Session) {
  console.log("createSession", session);

  const token = await new jose.SignJWT(session)
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("1h")
    .sign(secret);

  setCookie("session-token", token, {
    expires: new Date(Date.now() + 1 * 60 * 60 * 1000), // 1 hour
  });
}

export async function createAccessToken(accessToken: string) {
  console.log("createAccessToken", accessToken);

  setCookie("access-token", accessToken, {
    expires: new Date(Date.now() + 1 * 60 * 60 * 1000), // 1 hour
  });
}

export async function getSession(token: string) {
  console.log("getSession", token);

  const { payload } = await jose.jwtVerify(token, secret);

  return payload as Session;
}
