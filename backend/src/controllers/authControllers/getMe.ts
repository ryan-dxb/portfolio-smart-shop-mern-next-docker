import asyncHandler from "express-async-handler";
import { NextFunction, Request, Response } from "express";
import { createUserObjWithoutPassword } from "@/services/user.service";

const getMeController = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = req.user;

    const userObj = createUserObjWithoutPassword(user);

    res.status(200).json({
      success: true,
      data: { user: userObj },
    });
  }
);

export default getMeController;
