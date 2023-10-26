import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import createHttpError from "http-errors";
import corsOptions from "./config/cors/corsOptions";

import errorHandler from "./middlewares/errorHandler";
import routes from "./routes";

dotenv.config();

const app = express();

// Middlewares
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(mongoSanitize());
app.use(cookieParser());
app.use(compression());

// Routes
app.use("/api/v1", routes);

// Not Found Handler
app.use(async (req, res, next) => {
  next(createHttpError.NotFound("This route does not exist."));
});

// Error handler
app.use(errorHandler);

export default app;
