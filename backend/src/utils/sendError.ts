import { NextFunction, Request, Response } from "express";
import createHttpError, { CreateHttpError } from "http-errors";

type errorResponse = {
  message: string;
  status: number;
  stack?: string;
};

const sendError = (err: any) => {
  let messageToSend: errorResponse;

  if (err instanceof createHttpError.HttpError) {
    // handle http err
    messageToSend = {
      message: err.message,
      status: err.statusCode,
    };

    if (process.env.NODE_ENV === "development") messageToSend.stack = err.stack;

    throw messageToSend;
  }
};

export default sendError;
