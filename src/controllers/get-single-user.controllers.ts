import { Request, Response, NextFunction } from "express";
import { User } from "../types/types";
import { selectSingleUser } from "../models/select-single-user.models";
import {
  createError,
  notFoundError,
} from "../middlewares/error-helper.middleware";
import bcrypt from "bcrypt";

export const getSingleUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { user_id } = req.params;
    const { password } = req.query;

    if (!/^\d+$/.test(user_id)) {
      return next(createError("Bad request", 400));
    }
    const user: User | null = await selectSingleUser(user_id);

    if (!user) {
      return next(notFoundError("User"));
    }

    if (!password) {
      return next(createError("Password query parameter is required", 400));
    }

    const isMatch = await bcrypt.compare(
      password as string,
      user.password_hash
    );
    if (!isMatch) {
      return next(createError("Invalid password", 403));
    }

    res.status(200).json({ user });
  } catch (error) {
    next(error);
  }
};
