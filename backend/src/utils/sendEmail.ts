import createEmailTransport from "@/helpers/createEmailTransport";
import { EMAIL_FROM, CLIENT_URL } from "./variables";

type User = {
  id?: string;
  email: string;
};

type MailOptions = {
  from: string;
  to: string;
  subject: string;
  html: string;
};

const sendEmail = async (mailOptions: MailOptions) => {
  const transporter = await createEmailTransport();

  console.log("Sending email...", transporter);

  await transporter.sendMail(mailOptions);

  transporter.close();
};

export const sendVerificationEmail = async (user: User, token: string) => {
  const { id, email } = user;

  const mailOptions = {
    from: EMAIL_FROM,
    to: email,
    subject: "Verify your account",
    html: `<h1>Click the link below to verify your email</h1>
    <a href="${CLIENT_URL}/api/v1/auth/verify-email/${id}/${token}">Verify Email</a>`,
  };

  await sendEmail(mailOptions);
};

export const sendResetPasswordEmail = async (user: User, token: string) => {
  const { id, email } = user;

  const mailOptions = {
    from: EMAIL_FROM,
    to: email,
    subject: "Reset your password",
    html: `<h1>Click the link below to reset your password</h1>
    <a href="${CLIENT_URL}/reset-password/${id}/${token}">Reset Password</a>`,
  };

  await sendEmail(mailOptions);
};
