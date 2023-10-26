import asyncHandler from "express-async-handler";
import { RequestHandler, Request, Response, NextFunction } from "express";
import { GetAllShopProducts } from "@/@types/shop";
import ShopModel from "@/models/shopModel";
import sendError from "@/utils/sendError";
import createHttpError from "http-errors";
import ProductModel from "@/models/productModel";

const getAllShopProductsController = asyncHandler(
  async (req: GetAllShopProducts, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;

      // Get shop with this id
      const shop = await ShopModel.findById(id);

      if (!shop) {
        return sendError(createHttpError(404, "Shop with this ID not found"));
      }

      // Get all products of this shop
      const products = await ProductModel.find({ shop_id: id });

      res.status(200).json({
        message: "Get all shop products",
        data: {
          products: products,
        },
      });
    } catch (error) {
      next(error);
    }
  }
);

export default getAllShopProductsController;
