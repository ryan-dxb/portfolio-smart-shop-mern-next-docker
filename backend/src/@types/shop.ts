import { Request } from "express";

export interface GetAllShopProducts extends Request {
  params: {
    id: string;
  };
}
