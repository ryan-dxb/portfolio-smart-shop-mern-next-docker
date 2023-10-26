import checkRoleMiddleware from "@/middlewares/checkRoleMiddleware";
import isAuthenticated from "@/middlewares/isAuthenticated";
import express from "express";
import { Roles } from "@/models/userModel";
import { addProduct, getAllProducts } from "@/controllers/productControllers";
import schemaValidator from "@/middlewares/schemaValidator";
import { addProductSchema } from "@/schema/product.schema";

const router = express.Router();

router
  .route("/add-product")
  .post(
    schemaValidator(addProductSchema),
    isAuthenticated,
    checkRoleMiddleware(Roles.SELLER),
    addProduct
  );

router.route("/").get(getAllProducts);

export default router;
