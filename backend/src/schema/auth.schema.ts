import { isValidObjectId } from "mongoose";
import * as zod from "zod";

export const registerUserSchema = zod.object({
  body: zod
    .object({
      email: zod.string().email("Please provide a valid email address"),

      password: zod
        .string()
        .trim()
        .min(6, "Please provide a password with at least 6 characters")
        .max(20, "Please provide a password with at most 20 characters"),

      passwordConfirm: zod.string().min(1, "Please confirm your password"),

      firstName: zod.string().min(3).max(255).optional(),

      lastName: zod.string().min(3).max(255).optional(),
    })
    .refine((data) => data.password === data.passwordConfirm, {
      message: "Passwords do not match",
      path: ["passwordConfirm"],
    }),
});

export const loginUserSchema = zod.object({
  body: zod.object({
    email: zod.string().email("Please provide a valid email address"),

    password: zod.string().trim().min(1, "Password cannot be empty"),
  }),
});

export const verifyEmailSchema = zod.object({
  params: zod.object({
    id: zod
      .string()
      .min(1, "User Id cannot be empty")
      .refine(
        (data) => {
          if (isValidObjectId(data)) {
            return true;
          }
          return false;
        },
        {
          message: "Invalid User Id",
          path: ["id"],
        }
      ),

    token: zod.string().min(1, "Token cannot be empty"),
  }),
});

export const resendVerifyEmailSchema = zod.object({
  body: zod.object({
    email: zod.string().email("Please provide a valid email address"),
  }),
});

export const forgotPasswordSchema = zod.object({
  body: zod.object({
    email: zod.string().email("Please provide a valid email address"),
  }),
});

export const resetPasswordSchema = zod.object({
  body: zod.object({
    userId: zod
      .string()
      .min(1, "User Id cannot be empty")
      .refine(
        (data) => {
          if (isValidObjectId(data)) {
            return true;
          }
          return false;
        },
        {
          message: "Invalid User Id",
          path: ["userId"],
        }
      ),
    token: zod.string().min(1, "Token cannot be empty"),
    newPassword: zod
      .string()
      .trim()
      .min(6, "Please provide a password with at least 6 characters")
      .max(20, "Please provide a password with at most 20 characters"),
  }),
});

export const changePasswordSchema = zod.object({
  headers: zod.object({
    authorization: zod
      .string()
      .min(1, "Token cannot be empty")
      .refine(
        (data) => {
          const [type, token] = data.split(" ");
          if (type === "Bearer" && token) {
            return true;
          }
          return false;
        },
        {
          message: "Invalid token",
          path: ["authorization"],
        }
      ),
  }),
  body: zod.object({
    oldPassword: zod.string().trim().min(1, "Password cannot be empty"),
    newPassword: zod
      .string()
      .trim()
      .min(6, "Please provide a password with at least 6 characters")
      .max(20, "Please provide a password with at most 20 characters"),
  }),
});
