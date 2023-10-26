import asyncHandler from "express-async-handler";
import { RequestHandler, Response, NextFunction } from "express";
import { ForgotPassword } from "@/@types/auth";
import { findUserByEmail } from "@/services/auth.service";
import { UserDocument } from "@/models/userModel";
import sendError from "@/utils/sendError";
import createHttpError from "http-errors";
import PasswordVerificationTokenModel from "@/models/passwordVerificationModel";
import generateVerificationToken from "@/helpers/generateVerificationToken";
import { sendResetPasswordEmail } from "@/utils/sendEmail";

const fogotPasswordController: RequestHandler = asyncHandler(
  async (req: ForgotPassword, res: Response, next: NextFunction) => {
    try {
      const { email } = req.body;

      // Check if user exists
      const user: UserDocument = await findUserByEmail(email);

      if (!user) {
        return sendError(createHttpError.NotFound("User not found"));
      }

      // Check if user is has already requested for password reset and if token found then delete it
      const tokenFound = await PasswordVerificationTokenModel.findOneAndDelete({
        owner: user.id,
      });

      // Create new token
      const token = await generateVerificationToken();

      // Save token to database
      await PasswordVerificationTokenModel.create({
        token,
        owner: user.id,
      });

      // Send verification email
      await sendResetPasswordEmail(user, token);

      res.status(200).json({
        message: "Reset password email sent",
      });
    } catch (error) {
      next(error);
    }
  }
);

export default fogotPasswordController;
