import dotenv from "dotenv";
dotenv.config();

const { env } = process as { env: { [key: string]: string } };

export const {
  PORT,
  MAILTRAP_HOST,
  MAILTRAP_USER,
  MAILTRAP_PASSWORD,
  EMAIL_FROM,
  CLIENT_URL,
  MONGO_URI,
  REFRESH_JWT_SECRET,
  REFRESH_TOKEN_EXPIRY,
  ACCESS_JWT_SECRET,
  ACCESS_TOKEN_EXPIRY,
  HTTPONLY_SECURE,
  CLOUD_KEY,
  CLOUD_NAME,
  CLOUD_SECRET,
  HTTPONLY_SAMESITE,
  DEFAULT_AVATAR,
  MAX_AGE,
  DB_NAME,
  NODE_ENV,
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASS,
} = env;
