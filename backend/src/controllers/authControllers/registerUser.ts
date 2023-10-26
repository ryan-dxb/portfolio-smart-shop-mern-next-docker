import { Response, RequestHandler } from "express";
import asyncHandler from "express-async-handler";
import { RegisterUser } from "@/@types/auth";
import { createNewUser, findUserByEmail } from "@/services/auth.service";
import sendError from "@/utils/sendError";
import createHttpError from "http-errors";
import generateVerificationToken from "@/helpers/generateVerificationToken";
import EmailVerificationTokenModel from "@/models/emailVerificationTokenModel";
import { sendVerificationEmail } from "@/utils/sendEmail";

const registerController: RequestHandler = asyncHandler(
  async (req: RegisterUser, res: Response, next) => {
    try {
      const { firstName, lastName, email, password } = req.body;

      // Check if all required fields are provided
      if (!email || !password) {
        sendError(
          createHttpError.BadRequest("Please provide all required fields")
        );
      }

      // Check if user with same email exists
      const userExists = await findUserByEmail(email.toLowerCase());

      if (userExists) {
        sendError(
          createHttpError.BadRequest(
            "User with this email already exists. Please login or use another email"
          )
        );
      }

      const newUser = await createNewUser(req.body);

      // Verification Email
      const token = await generateVerificationToken();

      // Save token to database
      await EmailVerificationTokenModel.create({
        owner: newUser._id,
        token,
      });

      // Send verification email
      await sendVerificationEmail(newUser, token);

      // Send Response
      res.status(201).json({
        message:
          "Registration successful. Please check your email to verify your account",
      });
    } catch (error) {
      next(error);
    }
  }
);

export default registerController;
