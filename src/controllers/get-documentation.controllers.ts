import { Request, Response, NextFunction } from "express";

export const getDocumentation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const documentation = require("../../endpoints.json");
  res.status(200).json(documentation);
};
