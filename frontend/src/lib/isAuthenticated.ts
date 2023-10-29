import { cookies } from "next/headers";
import * as jose from "jose";
import axios from "axios";

export const isAuthenticated = async () => {
  const cookieStore = cookies();

  const refresh_token = cookieStore.get("refresh-token");
  const access_token = cookieStore.get("access-token");

  if (!refresh_token && !access_token) {
    return false;
  }

  if (!access_token) {
    if (refresh_token) {
      const refreshTokenResponse = await axios.post(
        "http://localhost:8080/api/v1/auth/refresh-token"
      );
      console.log(refreshTokenResponse.data);
    }

    return true;
  }

  return false;
};
