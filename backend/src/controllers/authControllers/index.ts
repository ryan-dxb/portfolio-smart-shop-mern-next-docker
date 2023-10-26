import registerController from "./registerUser";
import loginController from "./loginUser";
import verifyEmailController from "./verifyEmail";
import refreshTokenController from "./refreshToken";
import resendVerifyEmailController from "./resendVerifyEmail";
import changePasswordController from "./changePassword";
import forgotPasswordController from "./forgotPassword";
import resetPasswordController from "./resetPassword";
import logoutController from "./logout";

export {
  registerController as register,
  loginController as login,
  verifyEmailController as verifyEmail,
  refreshTokenController as refreshToken,
  resendVerifyEmailController as resendVerifyEmail,
  changePasswordController as changePassword,
  forgotPasswordController as forgotPassword,
  resetPasswordController as resetPassword,
  logoutController as logout,
};
