import asyncHandler from "express-async-handler";
import { RequestHandler, Response, NextFunction, Request } from "express";

const logoutController: RequestHandler = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = req.user;
      const refreshTokenFromCookies = req.cookies.refreshToken;

      let newRefreshTokenArray: string[] = [];

      // Remove refresh token from database
      if (refreshTokenFromCookies) {
        newRefreshTokenArray = user.refreshTokens.filter(
          (token: string) => token !== refreshTokenFromCookies
        );

        // Update user refresh tokens
        user.refreshTokens = newRefreshTokenArray;
        await user.save();
      }

      // Remove refresh token from cookies
      res.clearCookie("refreshToken");

      // Send response
      res.status(200).json({
        message: "Logged out successfully",
      });
    } catch (error) {
      next(error);
    }
  }
);

export default logoutController;
