import { Request } from "express";

export interface GetAllShopProducts extends Request {
  params: {
    id: string;
  };
}

export interface GetShopById extends Request {
  params: {
    id: string;
  };
}
