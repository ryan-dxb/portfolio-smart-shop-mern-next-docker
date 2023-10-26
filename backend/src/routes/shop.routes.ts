import {
  createShop,
  getAllShopProducts,
  getAllShops,
  getShopById,
} from "@/controllers/shopControllers";
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

router.route("/get-all-products/:id").get(getAllShopProducts);

router.route("/").get(getAllShops);

router.route("/:id").get(getShopById);

export default router;
