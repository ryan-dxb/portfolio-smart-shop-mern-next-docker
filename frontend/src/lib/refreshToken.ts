import { getCookie } from "cookies-next";

const API_URL = "http://api:1997/api/v1";

export const RefreshTokenAPI = async (request: Request) => {
  const refreshToken = getCookie("refresh-token", { req: request });

  const headers = new Headers();

  headers.append("Content-Type", "application/json");
  headers.append("Access-Control-Allow-Origin", "*");
  headers.append("Access-Control-Allow-Credentials", "true");
  refreshToken && headers.append("cookie", "refresh-token=" + refreshToken);

  const response = await fetch(`${API_URL}/auth/refresh-token`, {
    method: "POST",
    headers,
    credentials: "same-origin",
  });

  if (response.status !== 200) {
    return {
      newRefreshToken: "",
      newAccessToken: "",
      data: null,
      status: response.status,
    };
  }

  const newRefreshToken = response.headers
    ?.get("set-cookie")
    ?.split("=")[1]
    .split(";")[0]
    .trim();

  const data = await response.json();

  console.log("RefreshTokenAPI", data);

  const newAccessToken = data.data.accessToken;

  return {
    newRefreshToken,
    newAccessToken,
    status: response.status,
  };
};
