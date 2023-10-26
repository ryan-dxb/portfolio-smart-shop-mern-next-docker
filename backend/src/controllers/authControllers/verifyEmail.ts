import asyncHandler from "express-async-handler";
import { RequestHandler, Response, NextFunction, Request } from "express";
import { findUserById } from "@/services/auth.service";
import sendError from "@/utils/sendError";
import createHttpError from "http-errors";
import EmailVerificationTokenModel from "@/models/emailVerificationTokenModel";

const verifyEmailController: RequestHandler = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id, token } = req.params;

      // Check if user with provided id exists
      const user = await findUserById(id);

      if (!user) {
        return sendError(createHttpError.NotFound("User not found"));
      }

      // Check if user is already verified
      if (user.isEmailVerified) {
        return sendError(createHttpError.BadRequest("Email already verified"));
      }

      // Check if token is valid
      const tokenExists = await EmailVerificationTokenModel.findOne({
        owner: id,
      });

      if (!tokenExists) {
        return sendError(createHttpError.BadRequest("Invalid token"));
      }

      // Compare token with token in database
      const isTokenValid = await tokenExists.compareToken(token);

      if (!isTokenValid) {
        return sendError(createHttpError.BadRequest("Invalid token"));
      }

      // Check if token is expired
      if (tokenExists.expiresAt < new Date()) {
        return sendError(createHttpError.BadRequest("Token expired"));
      }

      // Update user
      user.isEmailVerified = true;
      await user.save();

      // Delete EmailVerificationToken
      await EmailVerificationTokenModel.deleteOne({ owner: id });

      res.redirect(`/auth/email-verified?success=true`);
    } catch (error) {
      next(error);
    }
  }
);

export default verifyEmailController;
