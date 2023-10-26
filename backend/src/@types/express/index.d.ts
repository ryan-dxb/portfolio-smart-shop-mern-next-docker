import { UserDocument } from "@/models/userModel";
import { Request } from "express";

declare global {
  namespace Express {
    export interface Request {
      user: UserDocument;
    }
  }
}
