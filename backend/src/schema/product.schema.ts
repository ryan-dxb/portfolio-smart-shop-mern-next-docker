import { isValidObjectId } from "mongoose";
import * as zod from "zod";

export const addProductSchema = zod.object({
  body: zod.object({
    shop_id: zod.string().refine(
      (data) => {
        if (isValidObjectId(data)) {
          return true;
        }
        return false;
      },
      {
        message: "Invalid Shop Id",
        path: ["shop_id"],
      }
    ),
    name: zod.string().min(1, "Product name cannot be empty"),
    category_id: zod.string().refine(
      (data) => {
        if (isValidObjectId(data)) {
          return true;
        }
        return false;
      },
      {
        message: "Invalid Category Id",
        path: ["category"],
      }
    ),
    base_price: zod.number().min(1, "Base price cannot be empty"),
    sku: zod.string().min(1, "SKU cannot be empty"),
  }),
});
