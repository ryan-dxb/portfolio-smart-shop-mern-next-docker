import { cookies } from "next/headers";

const login = async (email: string, password: string) => {
  const data = {
    email,
    password,
  };

  const headers = new Headers();

  headers.append("Content-Type", "application/json");
  headers.append("Access-Control-Allow-Origin", "http://localhost:8080");
  headers.append("Access-Control-Allow-Credentials", "true");

  const response = await fetch("http://localhost:8080/api/v1/auth/login", {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data),
    credentials: "include",
  });

  console.log("response", response.headers.get("set-cookie"));

  const result = await response.json();

  console.log(result);

  if (result.error) {
    return {
      error: result.error,
    };
  }
  return response;
};

export default login;
