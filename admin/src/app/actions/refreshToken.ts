export const refreshTokenApi = async (req: Request) => {
  console.log("refreshTokenApi", req);

  const headers = new Headers();

  headers.append("Content-Type", "application/json");
  headers.append("Access-Control-Allow-Origin", "http://localhost:8080");
  headers.append("Access-Control-Allow-Credentials", "true");

  const response = await fetch(
    "http://localhost:8080/api/v1/auth/refresh-token",
    {
      method: "POST",
      headers: headers,
      credentials: "include",
    }
  );

  console.log("refreshTokenApi response", response);
};
