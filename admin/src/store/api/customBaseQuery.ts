import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import { Mutex } from "async-mutex";
// import { logout } from "../auth/authSlice";
import { RootState, store } from "../store";
import { getCookie } from "cookies-next";
import { getSession } from "@/lib/session";
import { getServerSession } from "@/lib/getServerSession";

const baseUrl = `http://localhost:8080/api/v1`;

// Create a new mutex
const mutex = new Mutex();

const baseQuery = fetchBaseQuery({
  baseUrl,
  credentials: "include",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": "true",
  },
  prepareHeaders: (headers, { getState }) => {
    const accessToken = getCookie("accessToken");
    if (accessToken) {
      headers.set("Authorization", `Bearer ${accessToken}`);
    }
    return headers;
  },
});

type RefreshTokenResponse =
  | {
      message: string;
      data: {
        id: string;
        accessToken: string;
      };
    }
  | undefined;

const customFetchBase: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args: FetchArgs | string, api, extraOptions) => {
  // wait until the mutex is available without locking it
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);

  console.log("result", result);

  const cookies = result.meta?.response?.headers.getSetCookie();

  console.log("cookies", cookies);

  if (result.error?.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();

      try {
        const refreshResult = await baseQuery(
          {
            credentials: "include",
            url: "auth/refresh-token",
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Credentials": "true",
            },
          },
          api,
          extraOptions
        );

        if (refreshResult.data) {
          const refreshResultData = refreshResult.data as RefreshTokenResponse;

          // Store the new tokens
          const accessToken = refreshResultData?.data.accessToken;

          // Store new access token in redux
          // api.dispatch(
          //   setToken({
          //     accessToken,
          //   })
          // );

          // Create a new Session object with the new access token

          // Modify the headers to add the access token
          let { headers } = args as FetchArgs;
          headers = {
            ...headers,
            Authorization: `Bearer ${accessToken}`,
          };

          // Retry the initial query
          result = await baseQuery(args, api, extraOptions);
        } else {
          // api.dispatch(logout());
          // window.location.href = "/auth/login";
        }
      } finally {
        // release must be called once the mutex should be released again.
        release();
      }
    } else {
      // wait until the mutex is available without locking it
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }

  return result;
};

export default customFetchBase;
