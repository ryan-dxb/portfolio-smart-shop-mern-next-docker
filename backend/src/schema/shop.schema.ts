import { isValidObjectId } from "mongoose";
import * as zod from "zod";

export const createShopSchema = zod.object({
  body: zod.object({
    name: zod.string().min(1, "Shop name cannot be empty"),
    email: zod.string().email("Please provide a valid email address"),
  }),
});
