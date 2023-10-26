import { Response, NextFunction, Request } from "express";
import asyncHandler from "express-async-handler";
import sendError from "@/utils/sendError";
import createHttpError from "http-errors";
import {
  DecodedToken,
  refreshTokenErrorHandler,
  refreshTokenReuseDetection,
  updateUserRefreshTokens,
  verifyRefreshToken,
} from "@/utils/token.utils";
import { generateTokens } from "@/services/token.service";

const refreshTokenController = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const refreshTokenFromCookies = req.cookies.refreshToken;

      if (!refreshTokenFromCookies) {
        return sendError(
          createHttpError.BadRequest("No refresh token found, please login")
        );
      }

      // Verify Refresh Token and get user
      const decodedUser = await verifyRefreshToken(refreshTokenFromCookies);

      if (!decodedUser) {
        return sendError(
          createHttpError.Forbidden("Something went wrong. Please login again")
        );
      }

      // Reuse Detection
      const refreshTokenIsReused = await refreshTokenReuseDetection(
        decodedUser,
        refreshTokenFromCookies,
        res
      );

      if (refreshTokenIsReused) {
        return sendError(
          createHttpError.Conflict("Something went wrong. Please login again")
        );
      }

      // Generate new access token and refresh token
      const { newAccessToken, newRefreshToken } = await generateTokens({
        id: decodedUser!.id,
        email: decodedUser!.email,
      });

      // Update refresh tokens in database
      const updatedRefreshToken = await updateUserRefreshTokens(
        decodedUser!.id,
        refreshTokenFromCookies,
        newRefreshToken
      );

      if (!updatedRefreshToken) {
        return sendError(
          createHttpError.Conflict("Something went wrong. Please login again")
        );
      }

      // Send new refresh token to client
      res.cookie("refreshToken", newRefreshToken, {
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.HTTPONLY_SECURE === "true" ? true : false,
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
      });

      // Send new access token to client
      res.status(200).json({
        message: "Refresh token generated successfully",
        data: {
          id: decodedUser.id,
          accessToken: newAccessToken,
        },
      });
    } catch (error) {
      console.log(error);
      await refreshTokenErrorHandler(error, req, res, next);
    }
  }
);

export default refreshTokenController;
