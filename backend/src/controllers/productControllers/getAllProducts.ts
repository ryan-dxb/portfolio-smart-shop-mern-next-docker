import asyncHandler from "express-async-handler";
import { RequestHandler, Request, Response, NextFunction } from "express";
import ProductModel from "@/models/productModel";

const getAllProductsController: RequestHandler = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const products = await ProductModel.find(); // Get all products

      res.status(200).json({
        message: "Get all products",
        data: {
          products: products,
        },
      });
    } catch (error) {
      next(error);
    }
  }
);

export default getAllProductsController;
