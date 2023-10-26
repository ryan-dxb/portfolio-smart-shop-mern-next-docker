import asyncHandler from "express-async-handler";
import { Roles } from "@/models/userModel";
import sendError from "@/utils/sendError";
import createHttpError from "http-errors";

type RolesArray = Array<Roles>;

const checkRoleMiddleware = (...roles: RolesArray) =>
  asyncHandler(async (req, res, next) => {
    console.log("checkRoleMiddleware", roles);

    try {
      const user = req.user;

      const requiredRolesArray = [...roles];

      const userRoles = user.roles as RolesArray;

      // Check if user has the required role
      const hasRequiredRole = userRoles
        .map((role) => requiredRolesArray.includes(role))
        .find((role) => role === true);

      if (!hasRequiredRole) {
        return sendError(
          createHttpError.Unauthorized(
            "You are not authorized to access this route"
          )
        );
      }

      next();
    } catch (error) {
      next(error);
    }
  });

export default checkRoleMiddleware;
