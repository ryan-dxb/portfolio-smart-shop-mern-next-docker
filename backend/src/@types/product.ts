import { Request } from "express";

export interface GetProductById extends Request {
  params: {
    id: string;
  };
}
