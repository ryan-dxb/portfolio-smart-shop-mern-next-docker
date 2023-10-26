import asyncHandler from "express-async-handler";
import { RequestHandler, Request, Response, NextFunction } from "express";
import sendError from "@/utils/sendError";
import createHttpError from "http-errors";
import ShopModel from "@/models/shopModel";
import ProductModel from "@/models/productModel";
import CategoryModel from "@/models/categoryModel";

const addProductController: RequestHandler = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const seller = req.user;

      const { shop_id, name, category_id, base_price, sku, ...rest } = req.body;

      if (!shop_id)
        return sendError(createHttpError(400, "Shop ID is required"));

      const shop = await ShopModel.findById(shop_id);

      if (!shop)
        return sendError(createHttpError(404, "Shop with this ID not found"));

      if (shop.owner.toString() !== seller._id.toString())
        return sendError(
          createHttpError(
            403,
            "You are not authorized to add products to this shop"
          )
        );

      // Check if category exists
      const categoryExists = await CategoryModel.findById(category_id);

      if (!categoryExists)
        return sendError(
          createHttpError(404, "Category with this name not found")
        );

      const product = await ProductModel.create({
        name,
        category: category_id,
        base_price,
        sku,
        shop_id,
        ...rest,
      });

      res.status(201).json({
        message: "Product added successfully",
        data: {
          product,
        },
      });
    } catch (error) {
      next(error);
    }
  }
);

export default addProductController;
