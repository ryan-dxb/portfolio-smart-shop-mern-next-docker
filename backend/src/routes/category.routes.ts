import { createCategory } from "@/controllers/categoryControllers";
import checkRoleMiddleware from "@/middlewares/checkRoleMiddleware";
import isAuthenticated from "@/middlewares/isAuthenticated";
import { Roles } from "@/models/userModel";
import express from "express";

const router = express.Router();

router
  .route("/create-category")
  .post(isAuthenticated, checkRoleMiddleware(Roles.ADMIN), createCategory);

export default router;
