import UserModel, { Roles, UserDocument } from "@/models/userModel";
import sendError from "@/utils/sendError";
import createHttpError from "http-errors";

type UserData = {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  avatar?: { url: string; publicId: string };
};

//////////////// Create New User //////////////
export const createNewUser = async (userData: UserData) => {
  const { email, password, firstName, lastName } = userData;

  const user: UserDocument = await UserModel.create({
    email: email.toLowerCase(),

    password,
    firstName,
    lastName,
    isAccountActive: true,
  });

  return user as UserDocument;
};

type Credentials = {
  email: string;
  password: string;
};

//////////////// Find user by email //////////////
export const findUserByEmail = async (email: string) => {
  const user = await UserModel.findOne({ email: email.toLowerCase() });

  return user as UserDocument;
};

//////////////// Find user by Refresh Token //////////////
export const findUserByRefreshToken = async (
  id: string,
  refreshToken: string
) => {
  const user = await UserModel.findOne({
    _id: id,
    refreshTokens: { $in: [refreshToken] },
  });

  return user as UserDocument;
};

//////////////// Find User by Id //////////////
export const findUserById = async (id: string) => {
  const user = await UserModel.findById(id);

  if (!user) {
    sendError(createHttpError.Unauthorized("User not found"));
  }

  return user as UserDocument;
};

//////////////// Check User Credentials //////////////
export const checkUserCredentials = async ({
  email,
  password,
}: Credentials) => {
  const user = await findUserByEmail(email);

  if (!user) {
    sendError(createHttpError.NotFound("User not found"));
  }

  // Check if password matches
  const comparePassword = await user.comparePassword(password);

  if (!comparePassword) {
    sendError(createHttpError.BadRequest("Invalid credentials"));
  }

  return user;
};
