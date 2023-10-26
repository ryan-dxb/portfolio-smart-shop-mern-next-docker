import { UserDocument } from "@/models/userModel";

export type UserObj = {
  id: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  avatar: string;
  status: string;
};

export const createUserObjWithoutPassword = (user: UserDocument) => {
  const userObj = user.toObject();

  const newObj = {
    id: userObj._id,
    email: userObj.email,
    username: userObj.username,
    firstName: userObj.firstName,
    lastName: userObj.lastName,
    avatar: userObj.avatar,
    status: userObj.status,
  };

  return newObj as UserObj;
};
