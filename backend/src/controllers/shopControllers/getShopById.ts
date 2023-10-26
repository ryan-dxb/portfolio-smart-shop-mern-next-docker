import asyncHandler from "express-async-handler";
import { GetShopById } from "@/@types/shop";
import { Response, NextFunction } from "express";
import ShopModel from "@/models/shopModel";
import sendError from "@/utils/sendError";
import createHttpError from "http-errors";

const getShopByIdController = asyncHandler(
  async (req: GetShopById, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;

      const shop = await ShopModel.findById(id);

      if (!shop) {
        return sendError(createHttpError(400, "Shop not found"));
      }

      res.status(200).json({
        message: "Shop found",
        data: { shop },
      });
    } catch (error) {
      next(error);
    }
  }
);

export default getShopByIdController;
