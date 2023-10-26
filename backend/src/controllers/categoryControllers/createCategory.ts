import asyncHandler from "express-async-handler";
import { RequestHandler, Request, Response, NextFunction } from "express";
import CategoryModel from "@/models/categoryModel";
import sendError from "@/utils/sendError";
import createHttpError from "http-errors";

const createCategoryController: RequestHandler = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name } = req.body;

      if (!name) {
        return sendError(
          createHttpError(400, "Please provide a valid category name")
        );
      }

      const categoryExists = await CategoryModel.findOne({ name });

      if (categoryExists) {
        return sendError(
          createHttpError(400, "Category with this name already exists")
        );
      }

      const category = await CategoryModel.create({
        name,
      });

      res.status(201).json({
        message: "Category created successfully",
        data: {
          category,
        },
      });
    } catch (error) {
      next(error);
    }
  }
);

export default createCategoryController;
