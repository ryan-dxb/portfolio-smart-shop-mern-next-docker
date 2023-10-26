import asyncHandler from "express-async-handler";
import { RequestHandler, Response, NextFunction } from "express";
import { ResetPassword } from "@/@types/auth";
import { UserDocument } from "@/models/userModel";
import { findUserById } from "@/services/auth.service";
import sendError from "@/utils/sendError";
import createHttpError from "http-errors";
import PasswordVerificationTokenModel from "@/models/passwordVerificationModel";

const resetPasswordController: RequestHandler = asyncHandler(
  async (req: ResetPassword, res: Response, next: NextFunction) => {
    try {
      const { userId, token, newPassword } = req.body;

      // Check if user with provided id exists
      const user: UserDocument = await findUserById(userId);

      if (!user) {
        return sendError(createHttpError.BadRequest("User not found"));
      }

      // Check if token is valid
      const tokenExists = await PasswordVerificationTokenModel.findOne({
        owner: userId,
      });

      if (!tokenExists) {
        return sendError(createHttpError.BadRequest("Invalid token"));
      }

      // Check if token is expired
      if (tokenExists.expiresAt < new Date()) {
        return sendError(createHttpError.BadRequest("Token expired"));
      }

      // Compare token with token in database
      const isTokenValid = await tokenExists.compareToken(token);

      if (!isTokenValid) {
        return sendError(createHttpError.BadRequest("Invalid token"));
      }

      // Check if old password is same as new password
      const isPasswordSame = await user.comparePassword(newPassword);

      if (!isPasswordSame) {
        return sendError(
          createHttpError.BadRequest(
            "New password should be different from old password"
          )
        );
      }

      // Update password
      user.password = newPassword;
      await user.save();

      // Delete PasswordVerificationToken
      await PasswordVerificationTokenModel.deleteOne({ owner: userId });

      res.status(200).json({
        message: "Password reset successful",
      });
    } catch (error) {
      next(error);
    }
  }
);

export default resetPasswordController;
