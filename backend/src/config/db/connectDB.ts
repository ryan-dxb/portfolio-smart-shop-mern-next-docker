import mongoose from "mongoose";
import dotenv from "dotenv";
import { MONGO_URI, DB_NAME as DB } from "@/utils/variables";
import logger from "../logger.config";

dotenv.config();

const URI: string = MONGO_URI as string;
const DB_NAME: string = DB as string;

const connectDB = async () => {
  try {
    const connectionParams = {
      dbName: DB_NAME,
    };

    const dbConnection = await mongoose.connect(URI, connectionParams);

    logger.info("Db is Connected Successfully");
  } catch (error) {
    logger.error(`Error ${error}`);
  }
};

export default connectDB;
