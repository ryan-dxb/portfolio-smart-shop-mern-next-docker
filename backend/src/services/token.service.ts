import jwt from "jsonwebtoken";
import {
  ACCESS_JWT_SECRET,
  ACCESS_TOKEN_EXPIRY,
  REFRESH_JWT_SECRET,
  REFRESH_TOKEN_EXPIRY,
} from "@/utils/variables";

import logger from "@/config/logger.config";
import UserModel, { UserDocument } from "@/models/userModel";

//////////////// Generate Access And Refresh Tokens //////////////
type TokenPayload = {
  id: string;
  email: string;
};

export const generateAccessToken = async ({ id, email }: TokenPayload) => {
  const accessToken = await jwt.sign(
    { id, email },
    ACCESS_JWT_SECRET as string,
    {
      expiresIn: ACCESS_TOKEN_EXPIRY,
    }
  );
  return accessToken;
};

export const generateRefreshToken = async ({ id, email }: TokenPayload) => {
  const refreshToken = await jwt.sign(
    { id, email },
    REFRESH_JWT_SECRET as string,
    {
      expiresIn: REFRESH_TOKEN_EXPIRY,
    }
  );
  return refreshToken;
};

export const generateTokens = async ({ id, email }: TokenPayload) => {
  const newAccessToken = await generateAccessToken({ id, email });
  const newRefreshToken = await generateRefreshToken({ id, email });

  return { newAccessToken, newRefreshToken };
};

//// NEW ////
export const removeRefreshTokensFromUser = async (id: string) => {
  const user = await UserModel.findByIdAndUpdate(
    id,
    {
      refreshTokens: [],
    },
    {
      new: true,
    }
  );

  return user as UserDocument;
};
