import UserModel from "@/models/userModel";
import { findUserById } from "@/services/auth.service";
import sendError from "@/utils/sendError";
import { verifyAccessToken } from "@/utils/token.utils";
import { Request, RequestHandler, Response, NextFunction } from "express";
import asyncHandler from "express-async-handler";
import createHttpError from "http-errors";

const isAuthenticated: RequestHandler = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    let token: string = "";

    const authHeader = req.headers.authorization;

    if (authHeader && authHeader.startsWith("Bearer")) {
      token = authHeader.split(" ")[1];

      if (!token || token === "") {
        return sendError(createHttpError.Unauthorized("Invalid token"));
      }
    }

    try {
      const decoded = await verifyAccessToken(token);

      if (!decoded) {
        return sendError(createHttpError.Unauthorized("Invalid token"));
      }

      const user = await findUserById(decoded.id);

      if (!user) {
        return sendError(createHttpError.Unauthorized("Invalid token"));
      }

      req.user = user;

      next();
    } catch (error) {
      next(error);
    }
  }
);

export default isAuthenticated;
