import { IUser } from "./user";

export interface RegisterCredentials {
  email: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  passwordConfirm: string;
}

export interface RegisterResponse {
  message: string;
  data: {
    user: IUser;
  };
}

export interface SignInCredentials {
  email: string;
  password: string;
}

export interface SignInResponse {
  message: string;
  data: {
    user: IUser;
    accessToken: string;
  };
}
