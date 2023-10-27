export interface IUser {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  avatar?: string;
  roles: string[];
}

export interface UserModel {
  id: string;
  email: string;
  status: string;
  firstName?: string;
  lastName?: string;
  avatar?: string;
}

export interface GetUserResponse {
  message: string;
  data: {
    user: UserModel;
  };
}
