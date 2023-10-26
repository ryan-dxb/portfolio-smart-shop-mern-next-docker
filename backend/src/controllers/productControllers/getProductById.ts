import asyncHandler from "express-async-handler";
import { Request, Response, NextFunction } from "express";
import { GetProductById } from "@/@types/product";
import ProductModel from "@/models/productModel";
import sendError from "@/utils/sendError";
import createHttpError from "http-errors";

const getProductByIdController = asyncHandler(
  async (req: GetProductById, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;

      const product = await ProductModel.findById(id);

      if (!product) {
        return sendError(createHttpError(400, "Product not found"));
      }

      res.status(200).json({
        message: "Product found",
        data: { product },
      });
    } catch (error) {
      next(error);
    }
  }
);

export default getProductByIdController;
