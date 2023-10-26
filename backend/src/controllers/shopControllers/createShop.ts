import asyncHandler from "express-async-handler";
import { RequestHandler, Request, Response, NextFunction } from "express";
import ShopModel from "@/models/shopModel";
import sendError from "@/utils/sendError";
import createHttpError from "http-errors";

const createShopController: RequestHandler = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const seller = req.user;

      const { name, email, ...rest } = req.body;

      // Check if seller already has a shop
      const doesSellerHaveShop = await ShopModel.exists({ owner: seller._id });

      if (doesSellerHaveShop) {
        return sendError(
          createHttpError(
            400,
            "You already have a shop. You can't create another one."
          )
        );
      }

      // Is name and email unique?
      const isNameUnique = await ShopModel.exists({ name });

      if (isNameUnique) {
        return sendError(createHttpError(400, "Shop name already exists"));
      }

      const isEmailUnique = await ShopModel.exists({
        email: email.toLowerCase(),
      });

      if (isEmailUnique) {
        return sendError(createHttpError(400, "Shop email already exists"));
      }

      const shop = await ShopModel.create({
        name,
        email: email.toLowerCase(),
        owner: seller._id,
        ...rest,
      });

      res.status(201).json({
        message: "Shop created successfully",
        data: {
          shop,
        },
      });
    } catch (error) {
      next(error);
    }
  }
);

export default createShopController;
