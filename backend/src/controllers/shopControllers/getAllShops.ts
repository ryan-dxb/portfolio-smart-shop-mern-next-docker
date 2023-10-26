import asyncHandler from "express-async-handler";
import { RequestHandler, Request, Response, NextFunction } from "express";
import ShopModel from "@/models/shopModel";

const getAllShopsController: RequestHandler = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const shops = await ShopModel.find(); // Get all shops

      res.status(200).json({
        message: "Get all shops",
        data: {
          shops: shops,
        },
      });
    } catch (error) {
      next(error);
    }
  }
);

export default getAllShopsController;
