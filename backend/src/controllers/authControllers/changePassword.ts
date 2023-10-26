import asyncHandler from "express-async-handler";
import { RequestHandler, Response, NextFunction } from "express";
import { changePassword } from "@/@types/auth";
import { findUserById } from "@/services/auth.service";
import sendError from "@/utils/sendError";
import createHttpError from "http-errors";

const changePasswordController: RequestHandler = asyncHandler(
  async (req: changePassword, res: Response, next: NextFunction) => {
    try {
      const { oldPassword, newPassword } = req.body;
      const user = req.user;

      if (oldPassword === newPassword) {
        return sendError(
          createHttpError.BadRequest(
            "New password should be different from old password"
          )
        );
      }

      // Find user by id
      const userFound = await findUserById(user._id);

      if (!userFound) {
        return sendError(createHttpError.BadRequest("User not found"));
      }

      // Check if old password is same as new password
      const isPasswordSame = await userFound.comparePassword(newPassword);

      if (isPasswordSame) {
        return sendError(
          createHttpError.BadRequest(
            "New password should be different from old password"
          )
        );
      }

      // Check if old password is correct
      const isPasswordCorrect = await userFound.comparePassword(oldPassword);

      if (!isPasswordCorrect) {
        return sendError(createHttpError.BadRequest("Invalid credentials"));
      }

      // Update password
      userFound.password = newPassword;
      await userFound.save();

      // Send response
      res.status(200).json({
        message: "Password updated",
      });
    } catch (error) {
      next(error);
    }
  }
);

export default changePasswordController;
