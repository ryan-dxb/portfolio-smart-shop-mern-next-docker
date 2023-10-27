import { getCookie } from "cookies-next";

const baseUrl = `http://localhost/api/v1`;

export const refreshToken = async (req: Request) => {
  const accessToken = getCookie("accessToken", { req });
  //   const refreshToken = getCookie("refreshToken", { req });

  const headers = new Headers();

  headers.append("Content-Type", "application/json");
  headers.append("Access-Control-Allow-Credentials", "true");
  headers.append("Authorization", `Bearer ${accessToken}`);

  const response = await fetch(`${baseUrl}/auth/refresh-token`, {
    credentials: "include",
    method: "POST",
    headers,
  });

  const data = await response.json();

  return data;
};
