import jwt from "jsonwebtoken";
import { ACCESS_JWT_SECRET, REFRESH_JWT_SECRET } from "./variables";
import { NextFunction, Request, Response } from "express";
import { findUserByRefreshToken } from "@/services/auth.service";
import { removeRefreshTokensFromUser } from "@/services/token.service";
import sendError from "./sendError";
import createHttpError from "http-errors";

export type DecodedToken = {
  id: string;
  email: string;
  iat: number;
  exp: number;
};

export const verifyRefreshToken = async (refreshToken: string) => {
  try {
    const decoded = await jwt.verify(refreshToken, REFRESH_JWT_SECRET!);

    if (!decoded) {
      return null;
    }

    return decoded as DecodedToken;
  } catch (error) {
    return null;
  }
};

export const decodeUserWithoutVerifying = async (refreshToken: string) => {
  try {
    const decoded = await jwt.decode(refreshToken);

    if (!decoded) {
      return null;
    }

    return decoded as DecodedToken;
  } catch (error) {
    return null;
  }
};

export const verifyAccessToken = async (accessToken: string) => {
  try {
    const decoded = await jwt.verify(accessToken, ACCESS_JWT_SECRET!);

    return decoded as DecodedToken;
  } catch (error) {
    return null;
  }
};

export const refreshTokenReuseDetection = async (
  decodedUser: DecodedToken,
  refreshTokenFromCookies: string,
  response: Response
) => {
  const userFoundWithRefreshToken = await findUserByRefreshToken(
    decodedUser.id,
    refreshTokenFromCookies
  );

  // If user is not found with the refresh token then remoove the refresh token from the cookies and clear refresh tokens from the database
  if (!userFoundWithRefreshToken) {
    await removeRefreshTokensFromUser(decodedUser.id);

    response.clearCookie("refreshToken", {
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.HTTPONLY_SECURE === "true" ? true : false,
    });

    return true;
  }

  return false;
};

// Remove Old Refresh Token and Add New Refresh Token to User
export const updateUserRefreshTokens = async (
  id: string,
  refreshTokenFromCookies: string,
  newRefreshToken: string
) => {
  const user = await findUserByRefreshToken(id, refreshTokenFromCookies);

  if (!user) {
    return null;
  }

  let newRefreshTokenArray: string[] = [];

  newRefreshTokenArray = user.refreshTokens.filter(
    (token: string) => token !== refreshTokenFromCookies
  );

  user.refreshTokens = [...newRefreshTokenArray, newRefreshToken];

  await user.save();

  return user;
};

export const refreshTokenErrorHandler = async (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const refreshTokenFromCookies = req.cookies.refreshToken;

    console.log("Triggered", error);

    // Remove Refresh Token from Database and Cookies
    const decodedUser = await decodeUserWithoutVerifying(
      refreshTokenFromCookies
    );

    if (decodedUser && decodedUser.id) {
      await removeRefreshTokensFromUser(decodedUser.id);
    }

    res.clearCookie("refreshToken", {
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.HTTPONLY_SECURE === "true" ? true : false,
    });

    if (error === "TokenExpiredError") {
      return sendError(
        createHttpError.BadRequest("Token expired, please login again")
      );
    }

    if (error.name === "JsonWebTokenError") {
      return sendError(
        createHttpError.BadRequest("Invalid token, please login again")
      );
    }

    if (error.name === "NotBeforeError") {
      return sendError(
        createHttpError.BadRequest("Token not active, please login again")
      );
    }

    next(error);
  } catch (error) {
    next(error);
  }
};
