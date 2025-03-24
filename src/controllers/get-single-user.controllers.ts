import { Request, Response, NextFunction } from "express";
import { User } from "../types/types";
import { selectSingleUser } from "../models/select-single-user.models";
import {
  createError,
  notFoundError,
} from "../middlewares/error-helper.middleware";

export const getSingleUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { user_id } = req.params;

    if (!/^\d+$/.test(user_id)) {
      return next(createError("Bad request", 400));
    }
    const user: User | null = await selectSingleUser(user_id);

    if (!user) {
      return next(notFoundError("User"));
    }

    res.status(200).json({ user });
  } catch (error) {
    next(error);
  }
};
