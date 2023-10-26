import express from "express";
import authRoutes from "./auth.routes";
import shopRoutes from "./shop.routes";
import productRoutes from "./product.routes";
import categoryRoutes from "./category.routes";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/categories", categoryRoutes);
router.use("/shops", shopRoutes);
router.use("/products", productRoutes);

export default router;
