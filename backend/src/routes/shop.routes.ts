import { createShop } from "@/controllers/shopControllers";
import checkRoleMiddleware from "@/middlewares/checkRoleMiddleware";
import isAuthenticated from "@/middlewares/isAuthenticated";
import express from "express";
import { Roles } from "@/models/userModel";
import schemaValidator from "@/middlewares/schemaValidator";
import { createShopSchema } from "@/schema/shop.schema";

const router = express.Router();

router
  .route("/create-shop")
  .post(
    schemaValidator(createShopSchema),
    isAuthenticated,
    checkRoleMiddleware(Roles.SELLER),
    createShop
  );

export default router;
