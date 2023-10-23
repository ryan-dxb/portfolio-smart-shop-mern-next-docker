import app from "./app";
import connectDB from "./config/db/connectDB";
import logger from "./config/logger.config";
import { createServer } from "http";
// import registerSocketServer from "./socketServer/socketServer";

const PORT = process.env.PORT || 1997;

// Connect to MongoDB and then start the express server
connectDB();

let server = createServer(app);
// registerSocketServer(server);

server.listen(PORT, () => {
  logger.info(`Server listening on port ${PORT}`);
});

// Exit process on unhandled promise rejection
const exitHandler = () => {
  if (server) {
    server.close(() => {
      logger.info("Server closed");
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error: Error) => {
  logger.error(error);
  exitHandler();
};

process.on("unhandledRejection", unexpectedErrorHandler);
process.on("uncaughtException", unexpectedErrorHandler);

// Graceful shutdown
process.on("SIGTERM", () => {
  logger.info("SIGTERM received");
  if (server) {
    server.close();
    logger.info("Server closed");
    process.exit(1);
  }
});
