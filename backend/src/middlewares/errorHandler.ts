import { Request, Response, NextFunction } from "express";

const errorHandler = async (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let status = err.status ? err.status : 500; // serv

  console.log("err", err);

  if (status === 200) {
    status = 500;
  }

  res.status(status);

  res.json({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
};

export default errorHandler;
