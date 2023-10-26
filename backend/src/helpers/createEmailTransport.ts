import * as nodemailer from "nodemailer";

import {
  NODE_ENV,
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASS,
} from "@/utils/variables";

let transporter: nodemailer.Transporter;

const createEmailTransport = () => {
  if (NODE_ENV === "development") {
    transporter = nodemailer.createTransport({
      host: "mailhog",
      port: 1025,
    });
  } else if (NODE_ENV === "production") {
    transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });
  }

  return transporter;
};

export default createEmailTransport;
