import { cookies } from "next/headers";
import * as jose from "jose";

export type SessionObject = {
  isLoggedIn: boolean;
  user: {
    id: string;
    email: string;
    name: string;
  } | null;
};

export const getServerSession = async () => {
  const cookieStore = cookies();

  const sessionToken = cookieStore.get("session-token");
  const accessToken = cookieStore.get("access-token");

  if (!sessionToken) {
    return {
      isLoggedIn: false,
      user: null,
    } as SessionObject;
  }

  const decodedToken = jose.decodeJwt(sessionToken.value);

  console.log("decodedToken from getServerSession", decodedToken);

  // Fetch user data from api
  const user = await fetch("http://api:1997/api/v1/auth/me", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken?.value}`,
    },
    credentials: "same-origin",
  });

  const userData = await user.json();

  console.log("userData from getServerSession", userData);

  return {
    isLoggedIn: true,
    user: {
      id: userData.data.user.id,
      email: userData.data.user.email,
      name: userData.data.user.name,
    },
  } as SessionObject;
};
