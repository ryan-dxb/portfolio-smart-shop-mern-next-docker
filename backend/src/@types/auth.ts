import { Request } from "express";

export interface RegisterUser extends Request {
  body: {
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
  };
}

export interface LoginUser extends Request {
  body: {
    email: string;
    password: string;
  };
}

export interface ResendVerifyEmail extends Request {
  body: {
    email: string;
  };
}

export interface ForgotPassword extends Request {
  body: {
    email: string;
  };
}

export interface ResetPassword extends Request {
  body: {
    userId: string;
    token: string;
    newPassword: string;
  };
}

export interface changePassword extends Request {
  body: {
    oldPassword: string;
    newPassword: string;
  };
}
