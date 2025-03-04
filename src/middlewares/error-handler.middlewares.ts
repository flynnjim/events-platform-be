import { Request, Response, NextFunction } from "express";

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  res.status(err.status || 500).json({
    msg: err.msg || "Internal Server Error",
  });
};
