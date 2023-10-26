import {
  register,
  login,
  verifyEmail,
  refreshToken,
  resendVerifyEmail,
  changePassword,
  forgotPassword,
  resetPassword,
  logout,
} from "@/controllers/authControllers";
import isAuthenticated from "@/middlewares/isAuthenticated";
import schemaValidator from "@/middlewares/schemaValidator";
import {
  changePasswordSchema,
  forgotPasswordSchema,
  loginUserSchema,
  registerUserSchema,
  resendVerifyEmailSchema,
  resetPasswordSchema,
  verifyEmailSchema,
} from "@/schema/auth.schema";
// import isAuthenticated from "@/middlewares/isAuthenticated";
import express from "express";

const router = express.Router();

router.route("/register").post(schemaValidator(registerUserSchema), register);
router.route("/login").post(schemaValidator(loginUserSchema), login);
router
  .route("/verify-email/:id/:token")
  .get(schemaValidator(verifyEmailSchema), verifyEmail);

router
  .route("/resend-verify-email")
  .post(schemaValidator(resendVerifyEmailSchema), resendVerifyEmail);

router.route("/refresh-token").post(refreshToken);

router
  .route("/change-password")
  .post(schemaValidator(changePasswordSchema), isAuthenticated, changePassword);

router
  .route("/forgot-password")
  .post(schemaValidator(forgotPasswordSchema), forgotPassword);
router
  .route("/reset-password")
  .post(schemaValidator(resetPasswordSchema), resetPassword);

router.route("/logout").post(isAuthenticated, logout);

export default router;
